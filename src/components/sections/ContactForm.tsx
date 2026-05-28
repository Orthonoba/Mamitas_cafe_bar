"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, "Mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(1, "Selecciona un asunto"),
  message: z.string().min(10, "Mínimo 10 caracteres"),
});

type FormData = z.infer<typeof schema>;

const SUBJECTS = [
  "Reserva cumpleaños",
  "Información del menú",
  "Evento privado",
  "Colaboración",
  "Otro",
];

export function ContactForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } finally {
      setSuccess(true);
      reset();
    }
  };

  if (success) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 rounded-3xl bg-white p-12 text-center shadow-sm">
        <CheckCircle className="text-tropical-green-dark" size={56} />
        <h3 className="font-montserrat text-2xl font-bold text-charcoal">
          ¡Mensaje enviado!
        </h3>
        <p className="max-w-sm text-charcoal/70">
          Gracias por contactarnos. Te responderemos en breve.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="font-montserrat mb-6 text-2xl font-bold text-charcoal">
        Envíanos un mensaje
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-1.5">
          <Label htmlFor="name">Nombre</Label>
          <Input id="name" {...register("name")} placeholder="Tu nombre" />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} placeholder="tu@email.com" />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="subject">Asunto</Label>
          <select
            id="subject"
            {...register("subject")}
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-medium"
          >
            <option value="">Seleccionar asunto</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="¿En qué podemos ayudarte?"
            rows={5}
          />
          {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full rounded-full bg-rose-medium text-white hover:bg-rose-dark"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </Button>
      </form>
    </div>
  );
}
