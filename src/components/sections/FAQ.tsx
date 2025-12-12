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
  showBadge?: boolean;
}

export default function FAQ({
  items,
  title = "Häufig gestellte Fragen",
  subtitle,
  showBadge = true,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {title && (
            <div className="text-center mb-10">
              {showBadge && (
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  FAQ
                </span>
              )}
              <h2 className="heading-md text-dark mb-4">{title}</h2>
              {subtitle && (
                <p className="text-gray-600 max-w-xl mx-auto">{subtitle}</p>
              )}
            </div>
          )}

          <div className="space-y-3">
            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={cn(
                    "bg-white rounded-xl overflow-hidden transition-all duration-300",
                    "border-l-4",
                    isOpen
                      ? "border-l-primary shadow-lg"
                      : "border-l-transparent border border-gray-100 hover:border-gray-200 hover:shadow-md"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={cn(
                      "w-full flex items-center justify-between p-5 text-left transition-colors duration-200",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-t-xl",
                      isOpen ? "bg-primary/5" : "hover:bg-gray-50"
                    )}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span
                      className={cn(
                        "font-semibold pr-4 transition-colors duration-200",
                        isOpen ? "text-dark" : "text-dark-lighter"
                      )}
                    >
                      {item.question}
                    </span>
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
                        isOpen
                          ? "bg-primary"
                          : "bg-gray-100 group-hover:bg-gray-200"
                      )}
                    >
                      <svg
                        className={cn(
                          "w-5 h-5 transition-all duration-300",
                          isOpen
                            ? "text-white rotate-180"
                            : "text-gray-500"
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

                  {/* Smooth height animation using CSS grid trick */}
                  <div
                    id={`faq-answer-${index}`}
                    className="grid transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={cn(
                          "px-5 pb-5 text-gray-600 leading-relaxed transition-opacity duration-300",
                          isOpen ? "opacity-100" : "opacity-0"
                        )}
                      >
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Schema.org FAQ structured data hint */}
          <p className="text-center text-xs text-gray-400 mt-8">
            Haben Sie weitere Fragen? Kontaktieren Sie uns gerne!
          </p>
        </div>
      </div>
    </section>
  );
}
