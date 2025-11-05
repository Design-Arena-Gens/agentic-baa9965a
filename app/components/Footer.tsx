export default function Footer() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>? {new Date().getFullYear()} DG ? Graphic Designer</div>
      <div style={{ display: 'flex', gap: 12 }}>
        <a href="/work">Work</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}
