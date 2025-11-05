import dynamic from 'next/dynamic';

const Hero3D = dynamic(() => import('./components/Hero3D'), { ssr: false });

export default function HomePage() {
  return (
    <main>
      <section className="container hero">
        <div>
          <div className="kicker">Graphic Designer</div>
          <h1 className="title">Crafting bold visuals with depth and motion.</h1>
          <p className="subtitle">I design distinctive brand systems, editorial layouts, and digital experiences. This portfolio blends clean typography with playful 3D motion to bring ideas to life.</p>
          <div className="cta">
            <a href="/work" className="button">View Work</a>
            <a href="/contact" className="button secondary">Get in Touch</a>
          </div>
        </div>
        <Hero3D />
      </section>

      <section className="container section">
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-subtitle">A mix of branding, posters, and interactive visuals.</p>
        <div className="grid">
          {[1,2,3,4,5,6].map((i) => (
            <a key={i} className="card" href="/work">
              <div style={{
                height: 180,
                borderRadius: 12,
                background: `radial-gradient(220px 140px at 30% 20%, rgba(122,162,255,0.35), transparent),\n linear-gradient(135deg, rgba(142,246,209,0.25), rgba(122,162,255,0.08))`,
                border: '1px solid rgba(255,255,255,0.06)'
              }} />
              <div className="badge" style={{ marginTop: 12 }}>
                <span>Branding</span>
                <span style={{ opacity: 0.6 }}>?</span>
                <span>Poster #{i}</span>
              </div>
              <div className="card-title">Vibrant Poster Series</div>
              <div className="card-desc">Gradient forms and expressive typography.</div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
