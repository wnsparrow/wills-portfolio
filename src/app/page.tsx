import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 px-6 py-12 sm:px-10">
      <main className="mx-auto flex w-full max-w-3xl flex-col items-center">
        {/* Headshot */}
        <div className="mb-6 mt-2 flex w-full justify-center">
          <div className="relative h-44 w-40 overflow-hidden rounded-[999px] ring-2 ring-white/15 sm:h-56 sm:w-52">
            <Image
              src="/headshot.png"
              alt="Will Sparrow headshot"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Name + subtitle */}
        <h1 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Will Sparrow
        </h1>
        <p className="mt-2 text-center text-sm text-white/70 sm:text-base">
          Producer • Creative + Technical
        </p>

        {/* Message */}
        <div className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-sm backdrop-blur sm:p-6">
          <p className="text-base leading-relaxed text-white/80 sm:text-lg">
            Hello! So glad you stopped by — while I build this site out, please
            enjoy this presentation sharing a little bit more about myself.
          </p>
        </div>

        {/* Video */}
        <div className="mt-8 w-full">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-sm">
            <video
              className="h-auto w-full"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/portfolio.mp4" type="video/mp4" />
              Sorry, your browser doesn’t support embedded videos.
            </video>
          </div>

        </div>
      </main>
    </div>
  );
}
