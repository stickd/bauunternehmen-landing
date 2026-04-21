"use client";

import { FormEvent, useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Bitte geben Sie Ihren Namen ein.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Bitte geben Sie eine Nachricht ein.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Die Nachricht sollte mindestens 10 Zeichen lang sein.";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccessMessage("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);

      console.log("Form submitted:", formData);

      await new Promise((resolve) => setTimeout(resolve, 800));

      setSuccessMessage(
        "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.",
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="kontakt"
      className="scroll-mt-32 bg-neutral-50 py-20 md:scroll-mt-36 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
            Kontakt
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Lassen Sie uns über Ihr Bauprojekt sprechen
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-600">
            Haben Sie ein Bauprojekt geplant oder Fragen zu unseren Leistungen?
            Schreiben Sie uns einfach – wir melden uns schnellstmöglich bei
            Ihnen.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900">
                Kontaktinformationen
              </h3>

              <div className="mt-6 space-y-4 text-sm leading-6 text-neutral-600">
                <p>
                  <span className="font-semibold text-neutral-900">
                    Telefon:
                  </span>{" "}
                  +49 123 456789
                </p>
                <p>
                  <span className="font-semibold text-neutral-900">
                    E-Mail:
                  </span>{" "}
                  info@bauunternehmen.de
                </p>
                <p>
                  <span className="font-semibold text-neutral-900">
                    Adresse:
                  </span>{" "}
                  Musterstraße 12, 12345 Musterstadt
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900">
                Persönliche Beratung
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Ob Neubau, Sanierung oder Innenausbau – wir beraten Sie
                individuell und finden gemeinsam die passende Lösung für Ihr
                Projekt.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-neutral-900"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  placeholder="Ihr Name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-neutral-900"
                >
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  placeholder="ihre@email.de"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-neutral-900"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  placeholder="Ihre Nachricht"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <div className="flex flex-col items-start gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                </button>

                {successMessage && (
                  <p className="text-sm font-medium text-green-600">
                    {successMessage}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
