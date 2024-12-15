import Image from "next/image";

interface ArtistCardProps {
  artist: {
    id: string;
    name: string;
    image: string;
    description: string;
    link: string;
  };
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  const { name, image, description, link } = artist;

  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md dark:bg-muted">
      <div className="aspect-w-16 aspect-h-9 relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <a
          href={link}
          className="mt-4 inline-block text-primary hover:underline"
        >
          Learn more →
        </a>
      </div>
    </div>
  );
}
