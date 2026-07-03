export default function Newsletter() {
  return (
    <section style={{ padding: '32px 0', background: '#fff', borderRadius: '20px', boxShadow: '0 10px 25px rgba(15,23,42,0.08)' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2>Join our Newsletter</h2>
          <p style={{ color: '#6b7280' }}>Get updates on new products, offers, and exclusive deals straight to your inbox.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <input type="email" placeholder="Enter your email" style={{ flex: '1', minWidth: '220px', padding: '12px 16px', borderRadius: '12px', border: '1px solid #d1d5db' }} />
            <button style={{ padding: '12px 22px', borderRadius: '999px', border: 'none', background: '#2563eb', color: 'white', cursor: 'pointer' }}>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}
