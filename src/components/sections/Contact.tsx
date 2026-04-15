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

      // mock submit
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
    <section id="contact" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
        <p className="text-gray-600 mb-10">
          Haben Sie ein Bauprojekt geplant oder Fragen zu unseren Leistungen?
          Schreiben Sie uns einfach.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Kontaktinformationen</h3>
            <p>Telefon: +49 123 456789</p>
            <p>E-Mail: info@bauunternehmen.de</p>
            <p>Adresse: Musterstraße 12, 12345 Musterstadt</p>
          </div>

          {/* RIGHT */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Ihr Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block mb-1">E-Mail</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="ihre@email.de"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block mb-1">Nachricht</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                rows={5}
                placeholder="Ihre Nachricht"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white px-4 py-2 rounded hover:opacity-80"
            >
              {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
            </button>

            {successMessage && (
              <p className="text-green-600">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
