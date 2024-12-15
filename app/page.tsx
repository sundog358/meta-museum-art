import Image from "next/image";
import Link from "next/link"; // Import Link component from next/link

export default function Home() {
  const initiatives = [
    {
      title: "Cultural Heritage",
      description:
        "Preserving and sharing cultural heritage through advanced digital archives.",
      image: "/images/glam1.png",
    },
    {
      title: "Innovative Access",
      description:
        "Utilizing technology to provide global access to cultural resources.",
      image: "/images/glam2.png",
    },
    {
      title: "Community Engagement",
      description:
        "Engaging communities in the preservation and interpretation of their cultural heritage.",
      image: "/images/glam3.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 bg-[url('/images/glam4.jpg')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-black/30 dark:bg-black/40"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-lg">
            Cultural Heritage Through Connected Data
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Empowering GLAM Institutions to Integrate Their Collections into the
            Dynamic Landscape of the Semantic Web.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/projects"
              className="inline-block bg-white/95 dark:bg-white/90 text-black dark:text-black py-3 px-6 rounded-md shadow-md hover:bg-white dark:hover:bg-white transition"
            >
              Explore Projects
            </Link>
            <Link
              href="/datasets"
              className="inline-block bg-white/95 dark:bg-white/90 text-black dark:text-black py-3 px-6 rounded-md shadow-md hover:bg-white dark:hover:bg-white transition"
            >
              Browse Datasets
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <header className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Data From the American Art Collaborative
            </h2>
            <p className="text-sm text-muted-foreground">
              Source:{" "}
              <a
                href="http://browse.americanartcollaborative.org/"
                target="_blank"
                className="text-primary hover:underline"
              >
                American Art Collaborative
              </a>
            </p>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">14</h3>
              <p className="text-muted-foreground">Institutions</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">152,447+</h3>
              <p className="text-muted-foreground">Digital Items</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">25,702</h3>
              <p className="text-muted-foreground">Creators</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">21,700</h3>
              <p className="text-muted-foreground">Related Parties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Initiatives Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Meta Museum Art: Explore GLAM LOD Initiatives
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative) => (
              <div
                key={initiative.title}
                className="group relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    className="object-cover"
                    style={{
                      borderRadius: "0.75rem",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-xl" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-2xl font-bold mb-3 transform transition-transform duration-300 group-hover:translate-x-2 text-white drop-shadow-sm">
                    {initiative.title}
                  </h3>
                  <p className="text-white/95 transform transition-transform duration-300 group-hover:translate-x-2 drop-shadow-sm">
                    {initiative.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
