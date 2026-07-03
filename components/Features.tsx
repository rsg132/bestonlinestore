export default function Features() {
  return (
    <section style={{ padding: '32px 0' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '24px' }}>Store Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {[
            { title: 'Fast Checkout', description: 'Speedy payments and easy order processing.' },
            { title: 'Quality Products', description: 'High-quality goods from trusted brands.' },
            { title: 'Support Team', description: 'Helpful customer service available anytime.' },
            { title: 'Easy Returns', description: 'Simple returns for a worry-free purchase.' },
          ].map((feature) => (
            <div key={feature.title} style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(15,23,42,0.08)' }}>
              <h3>{feature.title}</h3>
              <p style={{ color: '#6b7280' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
