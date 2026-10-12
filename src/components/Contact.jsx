import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaTelegram,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaCircleCheck,
  FaCircleXmark,
} from "react-icons/fa6";
import Section from "./Section.jsx";
import { profile } from "../data/profile.js";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [popup, setPopup] = useState(null); // null | "sent" | "error"
  const formId = import.meta.env.VITE_FORMSPREE_ID;

  useEffect(() => {
    if (!popup) return;
    const t = setTimeout(() => setPopup(null), 5000);
    return () => clearTimeout(t);
  }, [popup]);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    if (!formId) {
      setPopup("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setPopup("sent");
    } catch {
      setPopup("error");
    } finally {
      setStatus("idle");
    }
  }

  const rows = [
    { icon: FaEnvelope, label: profile.email, href: `mailto:${profile.email}` },
    {
      icon: FaTelegram,
      label: `@${profile.telegram}`,
      href: `https://t.me/${profile.telegram}`,
    },
    { icon: FaGithub, label: "github.com/abuseaad", href: profile.github },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn: Sadik Jemal",
      href: profile.linkedin,
    },
    { icon: FaLocationDot, label: profile.location },
  ];

  return (
    <Section
      id="contact"
      title="Contact"
      lead="Open to internships, freelance work and team projects. Send a message and I'll reply."
    >
      <div className="contact-grid">
        <ul className="contact-list">
          {rows.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <Icon aria-hidden />
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  {label}
                </a>
              ) : (
                <span>{label}</span>
              )}
            </li>
          ))}
        </ul>
        <form onSubmit={onSubmit} className="form">
          <label>
            Your name
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            Your email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>

      {popup && (
        <div className="popup-backdrop" onClick={() => setPopup(null)}>
          <div
            className={`popup ${popup}`}
            role="alertdialog"
            aria-live="assertive"
            onClick={(e) => e.stopPropagation()}
          >
            {popup === "sent" ? (
              <FaCircleCheck aria-hidden />
            ) : (
              <FaCircleXmark aria-hidden />
            )}
            <h3>
              {popup === "sent"
                ? "Message sent successfully"
                : "Message not sent"}
            </h3>
            <p>
              {popup === "sent"
                ? "Thank you! I received your message and will reply soon."
                : `Something went wrong. Please email me directly at ${profile.email}.`}
            </p>
            <button className="btn btn-primary" onClick={() => setPopup(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </Section>
  );
}
