import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef(null);

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" }); // type: "success" | "error"

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.current) return;

    // Validación simple (evita enviar campos con puros espacios)
    const data = new FormData(form.current);
    const nombre = (data.get("nombre") || "").toString().trim();
    const correo = (data.get("correo") || "").toString().trim();
    const rol = (data.get("rol") || "").toString().trim();
    const asunto = (data.get("asunto") || "").toString().trim();
    const mensaje = (data.get("mensaje") || "").toString().trim();

    if (!nombre || !correo || !rol || !asunto || !mensaje) {
      setStatus({ type: "error", message: "Completa todos los campos (sin dejar espacios vacíos)." });
      return;
    }

    try {
      setSending(true);
      setStatus({ type: "", message: "" });

      await emailjs.sendForm(
        "service_hh4jmie",      // Service ID
        "template_ahperpw",     // Template ID
        form.current,
        "9K36SMc1PKLEaR_Yk"     // Public Key
      );

      setStatus({ type: "success", message: "Mensaje enviado correctamente 🚗✅" });
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({ type: "error", message: "Error al enviar ❌. Revisa consola o tu configuración de EmailJS." });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        {/* Lado izquierdo */}
        <div className="contact-info">
          <h2>🚗 Hoy No Circula</h2>
          <p>
            ¿Tienes dudas sobre verificación, restricciones o tu registro?
            Escríbenos y te respondemos lo antes posible.
          </p>
        </div>

        {/* Form */}
        <div className="contact-form">
          <h3>Formulario de Soporte</h3>

          {status.message && (
            <div
              style={{
                marginBottom: 15,
                padding: "10px 12px",
                borderRadius: 6,
                fontSize: 14,
                border: status.type === "success" ? "1px solid #b7eb8f" : "1px solid #ffa39e",
                background: status.type === "success" ? "#f6ffed" : "#fff1f0",
                color: status.type === "success" ? "#135200" : "#a8071a",
              }}
            >
              {status.message}
            </div>
          )}

          <form ref={form} onSubmit={sendEmail}>
            <input name="nombre" type="text" placeholder="Nombre completo" required />
            <input name="correo" type="email" placeholder="Correo electrónico" required />
            <input name="rol" type="text" placeholder="Rol (Ciudadano, Empresa...)" required />
            <input name="asunto" type="text" placeholder="Asunto" required />
            <textarea name="mensaje" placeholder="Escribe tu mensaje..." required />

            <button type="submit" disabled={sending}>
              {sending ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;