"use client";

import { useEffect, useState } from "react";
import ArtistCard from "@/components/ArtistCard";
import { format } from "date-fns";
import { Calendar, AlertTriangle, Loader2 } from "lucide-react";
import type { Artist } from "../lib/types";

export default function Home() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentDate] = useState(() => new Date());

  useEffect(() => {
    async function fetchArtists() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `/api/artists?month=${
            currentDate.getMonth() + 1
          }&day=${currentDate.getDate()}`
        );
        if (!response.ok) throw new Error("Failed to fetch artists");
        const data = await response.json();
        setArtists(data);
      } catch (error) {
        console.error("Failed to fetch artists:", error);
        setError("Failed to load artists. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchArtists();
  }, [currentDate]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4 py-8 md:py-16 space-y-8">
        <header className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
              Art Through Time
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Discover artists born on this day in history
            </p>
          </div>
          <div className="inline-flex items-center justify-center gap-3 px-4 py-2 rounded-full bg-muted/30 backdrop-blur-sm text-lg text-muted-foreground">
            <Calendar className="h-5 w-5" />
            <span>{format(currentDate, "MMMM d, yyyy")}</span>
          </div>
        </header>

        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">
              Discovering today&apos;s artists...
            </p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4 text-center">
            <AlertTriangle className="h-12 w-12 text-destructive/80" />
            <div className="space-y-2">
              <p className="text-lg font-medium">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Try again
              </button>
            </div>
          </div>
        ) : artists.length === 0 ? (
          <div className="text-center space-y-4 py-12">
            <p className="text-lg text-muted-foreground">
              No artists found for today&apos;s date.
            </p>
            <p className="text-sm text-muted-foreground">
              Check back tomorrow for new discoveries!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {artists.map((artist) => (
              <div key={artist.id}>
                <ArtistCard artist={artist} />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
