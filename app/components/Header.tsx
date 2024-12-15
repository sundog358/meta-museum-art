"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until mounted to show theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/images/sunandrainlogo.png"
                alt="Meta Museum Art Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className={styles.logoText}>
                <span className={styles.logoMeta}>Meta</span>
                <span className={styles.logoMuseum}>Museum</span>
                <span className={styles.logoArt}>Art</span>
              </div>
            </Link>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`${styles.header} ${theme === "dark" ? styles.dark : ""}`}
    >
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/sunandrainlogo.png"
              alt="Meta Museum Art Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div
              className={`${styles.logoText} ${
                theme === "dark" ? styles.dark : ""
              }`}
            >
              <span className={styles.logoMeta}>Meta</span>
              <span className={styles.logoMuseum}>Museum</span>
              <span className={styles.logoArt}>Art</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className={styles.navigation}>
            {["projects", "datasets", "about", "contact"].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className={`${styles.navLink} ${
                  theme === "dark" ? styles.dark : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`${styles.themeToggle} ${
              theme === "dark" ? styles.dark : ""
            }`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-600" />
            ) : (
              <Moon className="h-5 w-5 text-blue-600" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
