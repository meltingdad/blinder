"use client";

import { useState } from "react";

interface ContactFormProps {
  service?: string;
  location?: string;
}

export default function ContactForm({ service, location }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      location: formData.get("location") as string,
      message: formData.get("message") as string,
    };

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      setIsSubmitted(true);
    } catch {
      setError("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-6 bg-primary/10 rounded-2xl">
        <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-dark mb-4">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei
          Ihnen melden.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-dark mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="input-field"
            placeholder="Ihr vollständiger Name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-dark mb-2"
          >
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="input-field"
            placeholder="ihre.email@beispiel.ch"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-dark mb-2"
          >
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="input-field"
            placeholder="+41 XX XXX XX XX"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-dark mb-2"
          >
            Gewünschte Dienstleistung
          </label>
          <select
            id="service"
            name="service"
            defaultValue={service || ""}
            className="input-field"
          >
            <option value="">Bitte auswählen...</option>
            <option value="Lamellenstoren">Lamellenstoren</option>
            <option value="Rollladen">Rollladen</option>
            <option value="Markisen">Markisen</option>
            <option value="Sonnenschirme">Sonnenschirme</option>
            <option value="Insektenschutzgitter">Insektenschutzgitter</option>
            <option value="Beratung">Allgemeine Beratung</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium text-dark mb-2"
        >
          Standort / PLZ
        </label>
        <input
          type="text"
          id="location"
          name="location"
          defaultValue={location || ""}
          className="input-field"
          placeholder="z.B. 8180 Bülach"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-dark mb-2"
        >
          Ihre Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="input-field resize-none"
          placeholder="Beschreiben Sie Ihr Anliegen..."
        />
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <p className="text-sm text-gray-500">
          Mit * markierte Felder sind Pflichtfelder
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Wird gesendet...
            </>
          ) : (
            <>
              Anfrage senden
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
