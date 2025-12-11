"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({
  items,
  title = "Häufig gestellte Fragen",
  subtitle,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {title && (
            <div className="text-center mb-10">
              <h2 className="heading-md text-dark mb-4">{title}</h2>
              {subtitle && <p className="text-gray-600">{subtitle}</p>}
            </div>
          )}

          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "border rounded-xl overflow-hidden transition-all duration-300",
                  openIndex === index
                    ? "border-primary shadow-lg"
                    : "border-gray-200 hover:border-primary/50"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span
                    className={cn(
                      "font-semibold pr-4 transition-colors",
                      openIndex === index ? "text-primary" : "text-dark"
                    )}
                  >
                    {item.question}
                  </span>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
                      openIndex === index
                        ? "bg-primary rotate-180"
                        : "bg-gray-100"
                    )}
                  >
                    <svg
                      className={cn(
                        "w-4 h-4 transition-colors",
                        openIndex === index ? "text-dark" : "text-gray-600"
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === index ? "max-h-96" : "max-h-0"
                  )}
                >
                  <div className="p-5 pt-0 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
