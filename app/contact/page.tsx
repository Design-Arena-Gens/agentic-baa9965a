export default function ContactPage() {
  return (
    <main className="container section">
      <h1 className="section-title">Contact</h1>
      <p className="section-subtitle">Available for freelance and collaborations.</p>
      <div style={{ display: 'grid', gap: 14, maxWidth: 520 }}>
        <a className="button" href="mailto:hello@designer.example">Email me</a>
        <a className="button secondary" href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a className="button secondary" href="https://www.behance.net" target="_blank" rel="noreferrer">Behance</a>
      </div>
    </main>
  );
}
