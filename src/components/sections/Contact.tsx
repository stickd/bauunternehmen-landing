"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionBackground } from "@/components/ui/SectionBackground";

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

type ContactCardProps = {
  title: string;
  children: React.ReactNode;
};

type TextFieldProps = {
  id: keyof FormData;
  label: string;
  type?: string;
  value: string;
  error?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
};

function ContactCard({ title, children }: ContactCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]">
      <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
      {children}
    </div>
  );
}

function TextField({
  id,
  label,
  type = "text",
  value,
  error,
  placeholder,
  onChange,
  textarea = false,
}: TextFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-slate-200"
      >
        {label}
      </label>

      {textarea ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          rows={6}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="w-full resize-none rounded-2xl border border-white/10 bg-[#0F172A]/70 px-4 py-3 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-500 focus:border-orange-400/60 focus:bg-[#0F172A] focus:ring-2 focus:ring-orange-400/10"
          placeholder={placeholder}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="w-full rounded-2xl border border-white/10 bg-[#0F172A]/70 px-4 py-3 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-500 focus:border-orange-400/60 focus:bg-[#0F172A] focus:ring-2 focus:ring-orange-400/10"
          placeholder={placeholder}
        />
      )}

      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

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

    if (Object.keys(validationErrors).length > 0) return;

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
    <Section id="kontakt" className="scroll-mt-32 md:scroll-mt-36">
      <SectionBackground />

      <Container className="relative">
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
            <ContactCard title="Kontaktinformationen">
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
            </ContactCard>

            <ContactCard title="Persönliche Beratung">
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Ob Neubau, Sanierung oder Innenausbau – wir beraten Sie
                individuell und finden gemeinsam die passende Lösung für Ihr
                Projekt.
              </p>
            </ContactCard>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] md:p-8"
          >
            <div className="space-y-5">
              <TextField
                id="name"
                label="Name"
                value={formData.name}
                error={errors.name}
                placeholder="Ihr Name"
                onChange={handleChange}
              />

              <TextField
                id="email"
                label="E-Mail"
                type="email"
                value={formData.email}
                error={errors.email}
                placeholder="ihre@email.de"
                onChange={handleChange}
              />

              <TextField
                id="message"
                label="Nachricht"
                value={formData.message}
                error={errors.message}
                placeholder="Ihre Nachricht"
                onChange={handleChange}
                textarea
              />

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
      </Container>
    </Section>
  );
}
