import Image from 'next/image';

export default function HydroponicsAwareness() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', backgroundColor: '#f9f9f9' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px', backgroundColor: '#2d7d46', color: '#fff', padding: '20px', borderRadius: '8px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>What is Hydroponics?</h1>
      </header>

      <main>
        <section style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginBottom: '40px', gap: '20px' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <p style={{ fontSize: '1.2rem', color: '#333' }}>
              Hydroponics is a revolutionary method of growing plants without soil. This innovative technique uses a
              nutrient-rich solution to provide plants with the necessary nutrients, water, and oxygen. By controlling the
              nutrient levels and environmental conditions, hydroponics allows for faster growth rates, increased yields,
              and improved crop quality.
            </p>
          </div>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <Image src="/hyd.jpg" alt="Hydroponics System" width={800} height={450} style={{ borderRadius: '8px' }} />
          </div>
        </section>

        <section style={{ marginBottom: '40px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '2rem', color: '#2d7d46', marginBottom: '20px' }}>Benefits of Hydroponics</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '1.2rem', color: '#333', lineHeight: '1.8' }}>
            <li><strong>Water Efficiency:</strong> Hydroponics uses significantly less water than traditional farming methods.</li>
            <li><strong>Increased Yields:</strong> Hydroponics can increase crop yields by up to 30%.</li>
            <li><strong>Improved Crop Quality:</strong> Precise control over nutrient levels results in healthier and more flavorful crops.</li>
            <li><strong>Reduced Land Use:</strong> Hydroponics can be used in small or irregularly shaped spaces, ideal for urban areas.</li>
          </ul>
        </section>

        <section style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px' }}>
          <div style={{ flex: '1', textAlign: 'center' }}>
            <Image src="/hyd2.jpg" alt="Hydroponics Plant Roots" width={800} height={450} style={{ borderRadius: '8px' }} />
          </div>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '2rem', color: '#2d7d46', marginBottom: '20px' }}>How Hydroponics Works</h2>
            <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', fontSize: '1.2rem', color: '#333', lineHeight: '1.8' }}>
              <li><strong>Nutrient Solution:</strong> A nutrient-rich solution is prepared and pumped into the hydroponic system.</li>
              <li><strong>Plant Roots:</strong> Plant roots absorb the nutrient solution, providing the necessary nutrients for growth.</li>
              <li><strong>Oxygenation:</strong> Oxygen is provided to the roots through aeration or other oxygenation methods.</li>
              <li><strong>pH Control:</strong> The pH levels of the nutrient solution are monitored and adjusted to ensure optimal plant growth.</li>
            </ol>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #ccc', color: '#666', backgroundColor: '#f1f1f1', padding: '20px', borderRadius: '8px' }}>
        <p>&copy; {new Date().getFullYear()} Hydroponics Awareness. All rights reserved.</p>
      </footer>
    </div>
  );
}