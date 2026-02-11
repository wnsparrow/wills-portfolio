export default function AboutPage() {
  return (
    <div className="px-6 py-12 sm:px-10">
      <main className="mx-auto w-full max-w-6xl">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          About
        </h1>

        {/* Paragraph 1 */}
        <p className="mt-4 text-white/70 text-justify leading-relaxed">
        After graduating from the University of Virginia with a double major in Economics and Psychology, I spent five years at Accenture in the Washington, DC area in data analytics. In 2021, I moved to San Diego for a change of pace and joined an insurance startup, focusing on software engineering and product management.
        </p>

        {/* Paragraph 2 */}
        <p className="mt-6 text-white/70 text-justify leading-relaxed">
        I worked part-time at Raindrop as a Production Assistant on several commercial shoots while also joining a local hip-hop dance team in San Diego, where I performed in and filmed music videos, helped run dance events and competitions, and built connections within the dance community.
        </p>

        {/* Paragraph 3 */}
        <p className="mt-6 text-white/70 text-justify leading-relaxed">
        Following a loss in my extended family, I stepped away from the startup in late 2024 and spent several months traveling internationally (England, France, Portugal, Switzerland, Italy, Mexico, Japan, Korea, and Thailand). After returning to the U.S., I began focusing my efforts on opportunities in production and creative media.
        </p>

        {/* Video */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-sm">
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
      </main>
    </div>
  );
}
