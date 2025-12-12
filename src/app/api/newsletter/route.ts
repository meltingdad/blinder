import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Lazy initialization to avoid build-time errors
function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Missing Supabase environment variables");
  }

  return createClient(supabaseUrl, supabaseServiceKey);
}

function getResendClient() {
  return new Resend(process.env.RESEND_API_KEY);
}

interface NewsletterFormData {
  email: string;
  honeypot?: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase().slice(0, 255);
}

export async function POST(request: NextRequest) {
  try {
    const body: NewsletterFormData = await request.json();

    // Honeypot check (spam prevention)
    if (body.honeypot) {
      return NextResponse.json(
        { success: true, message: "Erfolgreich angemeldet" },
        { status: 200 }
      );
    }

    // Validate email
    if (!body.email) {
      return NextResponse.json(
        { error: "Bitte geben Sie Ihre E-Mail-Adresse ein" },
        { status: 400 }
      );
    }

    const email = sanitizeEmail(body.email);

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein" },
        { status: 400 }
      );
    }

    // Store in Supabase form_submissions table
    const supabase = getSupabaseClient();
    const { error: dbError } = await supabase
      .from("form_submissions")
      .insert([
        {
          email,
          name: "Newsletter Subscriber",
          message: "Newsletter-Anmeldung",
          service: "newsletter",
          created_at: new Date().toISOString(),
        },
      ]);

    if (dbError) {
      // Check for unique constraint violation (already subscribed)
      if (dbError.code === "23505") {
        return NextResponse.json(
          { error: "Diese E-Mail-Adresse ist bereits angemeldet" },
          { status: 409 }
        );
      }

      console.error("Supabase error:", dbError);
      return NextResponse.json(
        { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." },
        { status: 500 }
      );
    }

    // Send welcome email
    try {
      const resend = getResendClient();
      await resend.emails.send({
        from: "Swiss Quality Storen <noreply@swissquality-storen.ch>",
        to: email,
        subject: "Willkommen beim Swiss Quality Storen Newsletter!",
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; }
              .header { background: linear-gradient(135deg, #8CB91D 0%, #6B9216 100%); color: white; padding: 40px 30px; text-align: center; }
              .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
              .header p { margin: 15px 0 0; opacity: 0.9; font-size: 16px; }
              .content { background: #ffffff; padding: 40px 30px; }
              .welcome-icon { width: 80px; height: 80px; margin: 0 auto 20px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
              .benefit { display: flex; align-items: flex-start; margin-bottom: 15px; }
              .benefit-icon { width: 24px; height: 24px; background: #8CB91D; border-radius: 50%; margin-right: 15px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
              .benefit-icon svg { width: 14px; height: 14px; color: white; }
              .cta-button { display: inline-block; background: #8CB91D; color: white; text-decoration: none; padding: 15px 30px; border-radius: 8px; font-weight: 600; margin: 20px 0; }
              .footer { background: #f5f3ef; padding: 30px; text-align: center; color: #666; font-size: 12px; }
              .footer a { color: #8CB91D; text-decoration: none; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="welcome-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/>
                    <path d="M3 9h18"/>
                    <path d="M3 13h18"/>
                  </svg>
                </div>
                <h1>Willkommen!</h1>
                <p>Vielen Dank für Ihre Anmeldung zum Newsletter</p>
              </div>
              <div class="content">
                <p style="font-size: 16px; margin-bottom: 25px;">
                  Liebe/r Interessent/in,
                </p>
                <p style="margin-bottom: 25px;">
                  Herzlich willkommen bei Swiss Quality Storen! Ab sofort erhalten Sie regelmässig:
                </p>

                <div style="margin-bottom: 25px;">
                  <div class="benefit">
                    <div class="benefit-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                      <strong>Exklusive Angebote</strong> - Spezialrabatte nur für Newsletter-Abonnenten
                    </div>
                  </div>
                  <div class="benefit">
                    <div class="benefit-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                      <strong>Tipps & Tricks</strong> - Pflegeanleitungen und saisonale Empfehlungen
                    </div>
                  </div>
                  <div class="benefit">
                    <div class="benefit-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                      <strong>Neuheiten</strong> - Erfahren Sie als Erste/r von neuen Produkten
                    </div>
                  </div>
                </div>

                <p style="text-align: center;">
                  <a href="https://swissquality-storen.ch/angebote" class="cta-button" style="color: white;">
                    Unsere Angebote entdecken
                  </a>
                </p>

                <p style="margin-top: 30px; color: #666; font-size: 14px;">
                  Mit freundlichen Grüssen,<br>
                  <strong>Ihr Swiss Quality Storen Team</strong>
                </p>
              </div>
              <div class="footer">
                <p>
                  Swiss Quality Storen GmbH<br>
                  Ihre Experten für Storen, Sonnenschutz und Insektenschutz
                </p>
                <p style="margin-top: 15px;">
                  <a href="https://swissquality-storen.ch">Website besuchen</a> |
                  <a href="tel:+41799564813">+41 79 956 48 13</a>
                </p>
                <p style="margin-top: 15px; font-size: 11px;">
                  Sie erhalten diese E-Mail, weil Sie sich für unseren Newsletter angemeldet haben.<br>
                  <a href="https://swissquality-storen.ch/datenschutz">Datenschutz</a>
                </p>
              </div>
            </div>
          </body>
          </html>
        `,
      });
    } catch (emailError) {
      console.error("Newsletter welcome email error:", emailError);
      // Don't fail the request if email fails - subscription is already saved
    }

    return NextResponse.json({
      success: true,
      message: "Vielen Dank! Sie erhalten in Kürze eine Bestätigung per E-Mail.",
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Ein unerwarteter Fehler ist aufgetreten" },
      { status: 500 }
    );
  }
}
