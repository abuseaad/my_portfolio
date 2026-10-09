import { useState } from "react";
import { FaEnvelope, FaPhone, FaTelegram, FaGithub, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import Section from "./Section.jsx";
import { profile } from "../data/profile.js";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const formId = import.meta.env.VITE_FORMSPREE_ID;

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (!formId) {
      const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.name} (${data.email})`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio message from " + data.name)}&body=${body}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setStatus("sent"); e.target.reset();
    } catch { setStatus("error"); }
  }

  const rows = [
    { icon: FaEnvelope, label: profile.email, href: `mailto:${profile.email}` },
    { icon: FaPhone, label: profile.phone, href: `tel:${profile.phone}` },
    { icon: FaTelegram, label: `@${profile.telegram}`, href: `https://t.me/${profile.telegram}` },
    { icon: FaGithub, label: "github.com/abuseaad", href: profile.github },
    { icon: FaLinkedinIn, label: "LinkedIn: Sadik Jemal", href: profile.linkedin },
    { icon: FaLocationDot, label: profile.location },
  ];

  return (
    <Section id="contact" title="Contact" lead="Open to internships, freelance work and team projects. Send a message and I'll reply.">
      <div className="contact-grid">
        <ul className="contact-list">
          {rows.map(({ icon: Icon, label, href }) => (
            <li key={label}><Icon aria-hidden />{href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{label}</a> : <span>{label}</span>}</li>
          ))}
        </ul>
        <form onSubmit={onSubmit} className="form">
          <label>Your name<input name="name" required autoComplete="name" /></label>
          <label>Your email<input name="email" type="email" required autoComplete="email" /></label>
          <label>Message<textarea name="message" rows="5" required /></label>
          <button className="btn btn-primary" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send message"}</button>
          <p className="form-status" role="status">
            {status === "sent" && "Message sent. Thank you!"}
            {status === "error" && "Could not send. Please email me directly."}
          </p>
        </form>
      </div>
    </Section>
  );
}
