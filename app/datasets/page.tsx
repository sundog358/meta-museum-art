export const metadata = {
  title: "Datasets - GLAM LOD Portfolio",
  description:
    "Explore comprehensive datasets from the American Art Collaborative and partner institutions.",
};

export default function DatasetsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            📊 American Art Collaborative Datasets
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Explore comprehensive datasets from the American Art Collaborative
            and partner institutions, advancing Linked Open Data for cultural
            heritage. 🌟
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            🌟 About the American Art Collaborative (AAC)
          </h2>
          <p className="text-lg mb-4 text-foreground">
            The <strong>American Art Collaborative (AAC)</strong> is a
            consortium of 13 prestigious art museums and one art archive in the
            United States, dedicated to advancing the adoption of{" "}
            <strong>Linked Open Data (LOD)</strong> on the semantic web. The AAC
            aims to enhance the understanding of art by:
          </p>
          <ul className="list-disc list-inside text-lg mb-6 text-foreground">
            <li>Expanding access to cultural holdings. 🎨</li>
            <li>
              Deepening research connections for scholars and curators. 📚
            </li>
            <li>
              Creating public interfaces for students, teachers, and museum
              visitors. 👩‍🏫👨‍🎓
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            🗂️ Available Datasets
          </h2>
          <p className="text-lg mb-4 text-foreground">
            Explore and download datasets from participating museums through
            AAC&apos;s{" "}
            <a
              href="https://github.com/american-art"
              className="text-primary hover:text-primary/80 underline"
            >
              GitHub Repository
            </a>
          </p>
        </section>

        <section className="mb-16">
  <h2 className="text-3xl font-bold mb-4 text-foreground">🖼️ Project Highlights</h2>
  <p className="text-lg mb-4 text-foreground">
    The AAC employs a <strong>Consortium Model</strong> for data publishing, empowering each member institution to independently maintain and present their data while adhering to shared best practices. This approach ensures:
  </p>
  <ul className="list-disc list-inside text-lg mb-6 text-foreground space-y-4">
    <li>💾 Sustainable, Cost-Effective Data Management: Each institution manages its own data, reducing centralized costs and allowing for tailored solutions that fit individual needs.</li>
    <li>🤝 Consistency and Interoperability Across Datasets: By adhering to a common framework, the datasets from different museums are standardized, ensuring they can seamlessly integrate and interact with one another. This interoperability enhances the quality of research and public access.</li>
    <li>🌐 Enhanced Access to Interconnected Art Data: The federated model allows for the integration of diverse datasets, creating a rich, interconnected network of art data that is accessible to researchers, educators, and the public. This interconnectedness fosters deeper insights and broader engagement with cultural heritage.</li>
    <li>🔍 Innovative Research and Public Engagement: The availability of comprehensive and linked datasets enables innovative research opportunities, supports advanced scholarly endeavors, and encourages public engagement through interactive interfaces and educational tools.</li>
    <li>✨ Showcase of Member Institutions&apos; Collections: Each member institution can highlight its unique collections while contributing to a collective repository, promoting a wider appreciation of diverse art holdings.</li>
  </ul>
  <p className="text-lg mb-4 text-foreground">
    🚀 Explore AAC Datasets Today! Visit the <a href="https://github.com/american-art" className="text-blue-500">AAC GitHub</a> for access.
  </p>
</section>



        <footer className="text-center mt-16">
          <p className="text-lg text-foreground">
            🚀 Start Exploring AAC Datasets Today! Visit the{" "}
            <a
              href="https://github.com/american-art"
              className="text-primary hover:text-primary/80 underline"
            >
              AAC GitHub
            </a>{" "}
            for access.
          </p>
        </footer>
      </div>
    </main>
  );
}
