import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Projects.module.css";

export const metadata = {
  title: "Projects - Meta Museum Art",
  description: "Discover exciting GLAM Linked Open Data projects.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className={styles.cardWrapper}>
        {/* Elevated Card Section */}
        <div className={styles.card}>
          {/* Clickable Image */}
          <Link href="/projects-preview" aria-label="View Projects Preview">
            <Image
              src="/images/metawikiart.png"
              alt="Coming Soon Graphic - Globe with Gears and Books"
              width={400}
              height={300}
              className={styles.image}
            />
          </Link>

          {/* Title */}
          <h1 className={styles.title}>🚀 Projects Page Coming Soon!</h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            We&apos;re crafting exciting new{" "}
            <span className={styles.highlight}>GLAM Linked Open Data</span>{" "}
            projects. Stay tuned for updates!
          </p>

          {/* Call-to-Action Button */}
          <div className={styles.buttonWrapper}>
            <Link href="/about" className={styles.button}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
