export default function WorkPage() {
  const projects = [
    { title: 'Aurora Brand System', tag: 'Identity', desc: 'Light-first brand kit with motion.' },
    { title: 'Nocturne Posters', tag: 'Poster', desc: 'Expressive gradient typographic posters.' },
    { title: 'Flux Editorial', tag: 'Editorial', desc: 'Magazine layouts with kinetic spreads.' },
    { title: 'Prism Packaging', tag: 'Packaging', desc: 'Color-led packaging and dielines.' }
  ];
  return (
    <main className="container section">
      <h1 className="section-title">Work</h1>
      <p className="section-subtitle">Select pieces across identity, editorial, and packaging.</p>
      <div className="grid">
        {projects.map((p, idx) => (
          <div key={idx} className="card">
            <div style={{
              height: 220,
              borderRadius: 12,
              background: `radial-gradient(240px 160px at 30% 20%, rgba(142,246,209,0.35), transparent),\n linear-gradient(135deg, rgba(122,162,255,0.25), rgba(255,255,255,0.04))`,
              border: '1px solid rgba(255,255,255,0.06)'
            }} />
            <div className="badge" style={{ marginTop: 12 }}>
              <span>{p.tag}</span>
            </div>
            <div className="card-title">{p.title}</div>
            <div className="card-desc">{p.desc}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
