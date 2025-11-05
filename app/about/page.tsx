export default function AboutPage() {
  return (
    <main className="container section">
      <h1 className="section-title">About</h1>
      <p className="section-subtitle">Graphic designer specializing in brand identity, editorial design, and motion-led visuals.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 24 }}>
        <div>
          <p>With a decade of experience, I create systems that feel both timeless and fresh. My process balances concept-driven storytelling with meticulous typography. I love blending 2D design with playful 3D forms for memorable outcomes.</p>
          <p style={{ marginTop: 16 }}>Tools include Adobe CC, Figma, Cinema4D, and interactive frameworks like Three.js and WebGL.</p>
        </div>
        <div className="card">
          <div className="badge" style={{ marginBottom: 10 }}>Capabilities</div>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
            <li>Brand Identity & Guidelines</li>
            <li>Posters & Editorial Layouts</li>
            <li>Packaging & Art Direction</li>
            <li>Interactive & Motion Design</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
