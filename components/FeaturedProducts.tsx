import Link from 'next/link';

const featuredProducts = [
  { id: 1, name: 'Smart Headphones', price: 89 },
  { id: 2, name: 'Minimal Backpack', price: 59 },
  { id: 3, name: 'Cozy Hoodie', price: 45 },
];

export default function FeaturedProducts() {
  return (
    <section style={{ padding: '32px 0' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2>Featured Products</h2>
          <Link href="/cart" style={{ color: '#2563eb' }}>View Cart</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {featuredProducts.map((product) => (
            <div key={product.id} style={{ background: '#fff', padding: '20px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(15,23,42,0.08)' }}>
              <h3>{product.name}</h3>
              <p style={{ color: '#6b7280' }}>${product.price}</p>
              <button style={{ marginTop: '12px', padding: '10px 16px', borderRadius: '999px', background: '#f59e0b', color: '#fff', border: 'none', cursor: 'pointer' }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
