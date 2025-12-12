import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Email recipient
const NOTIFICATION_EMAIL = "meltingdadmelts@gmail.com";

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

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  location?: string;
  message: string;
  honeypot?: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "")
    .slice(0, 5000);
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Honeypot check (spam prevention)
    if (body.honeypot) {
      return NextResponse.json(
        { success: true, message: "Nachricht erfolgreich gesendet" },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle Pflichtfelder aus" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      phone: body.phone ? sanitizeInput(body.phone) : null,
      service: body.service ? sanitizeInput(body.service) : null,
      location: body.location ? sanitizeInput(body.location) : null,
      message: sanitizeInput(body.message),
      created_at: new Date().toISOString(),
    };

    // Store in Supabase
    const supabase = getSupabaseClient();
    const { data: submission, error: dbError } = await supabase
      .from("contact_submissions")
      .insert([sanitizedData])
      .select()
      .single();

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json(
        { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." },
        { status: 500 }
      );
    }

    // Send email notification
    try {
      const resend = getResendClient();
      await resend.emails.send({
        from: "Swiss Quality Storen <noreply@swissquality-storen.ch>",
        to: NOTIFICATION_EMAIL,
        replyTo: sanitizedData.email,
        subject: `Neue Kontaktanfrage: ${sanitizedData.service || "Allgemeine Anfrage"}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #8CB91D 0%, #6B9216 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #ffffff; padding: 30px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: 600; color: #6B9216; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
              .value { margin-top: 5px; padding: 12px; background: #f5f3ef; border-radius: 6px; }
              .message-box { background: #f5f3ef; padding: 20px; border-radius: 8px; border-left: 4px solid #8CB91D; }
              .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">Neue Kontaktanfrage</h1>
                <p style="margin: 10px 0 0; opacity: 0.9;">Swiss Quality Storen GmbH</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${sanitizedData.name}</div>
                </div>
                <div class="field">
                  <div class="label">E-Mail</div>
                  <div class="value"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></div>
                </div>
                ${sanitizedData.phone ? `
                <div class="field">
                  <div class="label">Telefon</div>
                  <div class="value"><a href="tel:${sanitizedData.phone}">${sanitizedData.phone}</a></div>
                </div>
                ` : ""}
                ${sanitizedData.service ? `
                <div class="field">
                  <div class="label">Gewünschte Dienstleistung</div>
                  <div class="value">${sanitizedData.service}</div>
                </div>
                ` : ""}
                ${sanitizedData.location ? `
                <div class="field">
                  <div class="label">Standort / PLZ</div>
                  <div class="value">${sanitizedData.location}</div>
                </div>
                ` : ""}
                <div class="field">
                  <div class="label">Nachricht</div>
                  <div class="message-box">${sanitizedData.message.replace(/\n/g, "<br>")}</div>
                </div>
              </div>
              <div class="footer">
                <p>Diese E-Mail wurde automatisch generiert von der Swiss Quality Storen Website.</p>
                <p>Anfrage-ID: ${submission.id}</p>
              </div>
            </div>
          </body>
          </html>
        `,
      });
    } catch (emailError) {
      console.error("Email error:", emailError);
      // Don't fail the request if email fails - data is already saved
    }

    return NextResponse.json({
      success: true,
      message: "Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.",
      id: submission.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Ein unerwarteter Fehler ist aufgetreten" },
      { status: 500 }
    );
  }
}
