"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Place = {
  key: string;
  title: string;
  photos: { src: string; alt: string }[];
};

const ORDERED_TRIPS: Array<{ key: string; title: string }> = [
  { key: "greece", title: "Greece" },
  { key: "ned", title: "Netherlands" },
  { key: "london", title: "London" },
  { key: "france", title: "France" },
  { key: "swiss", title: "Switzerland" },
  { key: "portugal", title: "Portugal" },
  { key: "italy", title: "Italy" },
  { key: "mexico", title: "Mexico" },
  { key: "sedona", title: "Sedona" },
  { key: "zion", title: "Zion" },
  { key: "hawaii", title: "Hawaii" },
  { key: "japan", title: "Japan" },
  { key: "korea", title: "Korea" },
  { key: "thailand", title: "Thailand" },
];

const PHOTOS_PER_PLACE = 4;

function buildPlaces(): Place[] {
  return ORDERED_TRIPS.map(({ key, title }) => {
    const photos = Array.from({ length: PHOTOS_PER_PLACE }, (_, i) => {
      const n = i + 1;
      return {
        src: `/up-to/${key}/${key}-${n}.jpeg`,
        alt: `${title} photo ${n}`,
      };
    });
    return { key, title, photos };
  });
}

type LightboxState =
  | { isOpen: false }
  | { isOpen: true; placeIndex: number; photoIndex: number };

export default function UpToPage() {
  const places = useMemo(() => buildPlaces(), []);
  const [lightbox, setLightbox] = useState<LightboxState>({ isOpen: false });

  const open = (placeIndex: number, photoIndex: number) => {
    setLightbox({ isOpen: true, placeIndex, photoIndex });
  };

  const close = () => setLightbox({ isOpen: false });

  const next = () => {
    if (!lightbox.isOpen) return;
    const photos = places[lightbox.placeIndex]?.photos ?? [];
    const nextIndex = (lightbox.photoIndex + 1) % photos.length;
    setLightbox({ ...lightbox, photoIndex: nextIndex });
  };

  const prev = () => {
    if (!lightbox.isOpen) return;
    const photos = places[lightbox.placeIndex]?.photos ?? [];
    const prevIndex =
      (lightbox.photoIndex - 1 + photos.length) % photos.length;
    setLightbox({ ...lightbox, photoIndex: prevIndex });
  };

  // Keyboard controls
  useEffect(() => {
    if (!lightbox.isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox.isOpen, lightbox]);

  // Prevent background scroll when open
  useEffect(() => {
    if (!lightbox.isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox.isOpen]);

  const active =
    lightbox.isOpen
      ? {
          place: places[lightbox.placeIndex],
          photo: places[lightbox.placeIndex]?.photos[lightbox.photoIndex],
        }
      : null;

  return (
    <div className="px-6 py-12 sm:px-10">
      <main className="mx-auto w-full max-w-6xl">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          What I’ve Been Up To
        </h1>

        <div className="mt-4 max-w-5xl text-sm leading-relaxed text-white/70 sm:text-base">
          <p>
            After a death in my extended family in late 2024, I stepped away from my startup,
            spent time with family, traveled, and took time to reset.
          </p>

          <p className="mt-2">
            Here are a few snapshots from the past year.
          </p>
        </div>
      </header>

        <div className="space-y-12">
          {places.map((place, placeIndex) => (
            <section key={place.key} className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {place.title}
              </h2>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {place.photos.map((p, photoIndex) => (
                  <button
                    key={p.src}
                    type="button"
                    onClick={() => open(placeIndex, photoIndex)}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>

                    {/* subtle hover overlay */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/85 backdrop-blur">
                        Click to preview
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      {lightbox.isOpen && active?.photo ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          {/* backdrop */}
          <button
            type="button"
            aria-label="Close preview"
            onClick={close}
            className="absolute inset-0 cursor-pointer bg-black/70"
          />

          {/* modal content */}
          <div className="relative z-[61] w-[92vw] max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white/90">
                    {active.place?.title}
                  </p>
                  <p className="truncate text-xs text-white/60">
                    {active.photo.alt}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
                  >
                    →
                  </button>
                  <button
                    type="button"
                    onClick={close}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={active.photo.src}
                  alt={active.photo.alt}
                  fill
                  className="object-contain"
                  sizes="92vw"
                  priority
                />
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-white/55">
              Tip: Esc to close • ←/→ to navigate
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}