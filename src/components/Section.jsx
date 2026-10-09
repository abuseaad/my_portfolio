export default function Section({ id, title, lead, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </section>
  );
}
