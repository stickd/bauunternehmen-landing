"use client";

import { ChangeEvent, FormEvent, useState } from "react";

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
  const [errorMessage, setErrorMessage] = useState("");
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    setErrorMessage("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    setSuccessMessage("");
    setErrorMessage("");

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Form submit failed");
      }

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

      setErrorMessage(
        "Leider konnte Ihre Nachricht nicht gesendet werden. Bitte versuchen Sie es später erneut.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="kontakt"
      className="relative scroll-mt-32 overflow-hidden bg-[#0B1220] py-20 md:scroll-mt-36 md:py-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0B1220_0%,#0F172A_55%,#111827_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.05]" />
      <div className="absolute -left-16 top-16 h-[240px] w-[240px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-12 right-0 h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            <span className="h-px w-8 bg-orange-400/70" />
            Kontakt
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-slate-300">Lassen Sie uns über Ihr</span>{" "}
            <span className="text-orange-400">Bauprojekt sprechen</span>
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-300">
            Haben Sie ein Bauprojekt geplant oder Fragen zu unseren Leistungen?
            Schreiben Sie uns einfach – wir melden uns schnellstmöglich bei
            Ihnen.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]">
              <h3 className="text-xl font-semibold text-slate-100">
                Kontaktinformationen
              </h3>

              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                <p>
                  <span className="font-semibold text-slate-100">Telefon:</span>{" "}
                  +49 123 456789
                </p>
                <p>
                  <span className="font-semibold text-slate-100">E-Mail:</span>{" "}
                  info@bauunternehmen.de
                </p>
                <p>
                  <span className="font-semibold text-slate-100">Adresse:</span>{" "}
                  Musterstraße 12, 12345 Musterstadt
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]">
              <h3 className="text-xl font-semibold text-slate-100">
                Persönliche Beratung
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Ob Neubau, Sanierung oder Innenausbau – wir beraten Sie
                individuell und finden gemeinsam die passende Lösung für Ihr
                Projekt.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] md:p-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full rounded-2xl border border-white/10 bg-[#0F172A]/70 px-4 py-3 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-500 focus:border-orange-400/60 focus:bg-[#0F172A] focus:ring-2 focus:ring-orange-400/10"
                  placeholder="Ihr Name"
                />

                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  E-Mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full rounded-2xl border border-white/10 bg-[#0F172A]/70 px-4 py-3 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-500 focus:border-orange-400/60 focus:bg-[#0F172A] focus:ring-2 focus:ring-orange-400/10"
                  placeholder="ihre@email.de"
                />

                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Nachricht
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#0F172A]/70 px-4 py-3 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-500 focus:border-orange-400/60 focus:bg-[#0F172A] focus:ring-2 focus:ring-orange-400/10"
                  placeholder="Ihre Nachricht"
                />

                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-orange-300/20 bg-gradient-to-b from-[#FB923C] to-[#EA580C] px-6 py-3 text-sm font-semibold text-white transition-[box-shadow,transform] duration-300 ease-out hover:shadow-[0_16px_36px_rgba(249,115,22,0.28)] active:scale-[0.985] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.16)_45%,transparent_70%)] transition-transform duration-700 ease-out group-hover:translate-x-[120%]" />
                  <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />

                  <span className="relative z-10">
                    {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                  </span>
                </button>

                {successMessage && (
                  <p className="text-sm font-medium text-emerald-400">
                    {successMessage}
                  </p>
                )}

                {errorMessage && (
                  <p className="text-sm font-medium text-red-400">
                    {errorMessage}
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
