export const FEATURED_PROJECTS = [
  {
    title: "British Museum Collection",
    description: "Connecting over 2 million objects through semantic web technologies, enabling researchers and enthusiasts to explore the vast collections of the British Museum through linked data.",
    institution: "British Museum",
    imageUrl: "british-museum.jpg",
    link: "/projects/british-museum"
  },
  {
    title: "Europeana Digital Library",
    description: "Integrating Europe's digital cultural heritage through standardized metadata and linked data principles, making collections accessible across borders.",
    institution: "Europeana",
    imageUrl: "europeana.jpg",
    link: "/projects/europeana"
  },
  {
    title: "National Archives Digital Bridge",
    description: "Revolutionizing access to historical documents through linked data, connecting archives across multiple institutions and time periods.",
    institution: "National Archives",
    imageUrl: "national-archives.jpg",
    link: "/projects/national-archives"
  }
];

export const STATS = [
  { number: "50+", label: "Institutions", color: "cultural-museum" },
  { number: "1M+", label: "Digital Objects", color: "cultural-library" },
  { number: "100+", label: "APIs Connected", color: "cultural-archive" },
  { number: "25+", label: "Countries", color: "cultural-gallery" }
] as const;