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
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            🖼️ Project Highlights
          </h2>
          <p className="text-lg mb-4 text-foreground">
            The AAC uses a <strong>federated model</strong> for data publishing,
            allowing each member to maintain and present its data independently
            while leveraging shared best practices. This ensures:
          </p>
          <ul className="list-disc list-inside text-lg mb-6 text-foreground">
            <li>Sustainable, cost-effective data management. 💾</li>
            <li>Consistency and interoperability across datasets. 🤝</li>
            <li>
              Broad access to interconnected art data for research and public
              engagement.
            </li>
          </ul>
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
