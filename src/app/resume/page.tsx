import Link from "next/link";

const PDF_PATH = "/resume/Will-Sparrow-Resume.pdf";

export default function ResumePage() {
  // Toggle this:
  const SHOW_EMBED = true; // true = embed PDF, false = visual placeholder only

  return (
    <div className="px-6 py-12 sm:px-10">
      <main className="mx-auto w-full max-w-5xl">
        {/* Top row: title left, actions right */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              Resume
            </h1>
            <p className="mt-1 text-sm text-white/60">
              PDF — updated version available for download.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:justify-end">
            <a
              href={PDF_PATH}
              target="_blank"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              Open in new tab
            </a>
            <a
              href={PDF_PATH}
              download
              className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* Visual “document” frame */}
        <section className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            {/* subtle top “chrome” so it feels like a document/app */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <div className="text-xs text-white/50">Will-Sparrow-Resume.pdf</div>
            </div>

            <div className="p-4 sm:p-6">
              {SHOW_EMBED ? (
                // A) Embedded PDF (cleaner than an image preview, and useful)
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
                  <object
                    data={PDF_PATH}
                    type="application/pdf"
                    className="h-[75vh] w-full"
                    aria-label="Resume PDF preview"
                  >
                    <div className="p-6 text-sm text-black/70">
                      PDF preview isn’t supported in this browser.{" "}
                      <a href={PDF_PATH} target="_blank" className="underline">
                        Open the PDF
                      </a>
                      .
                    </div>
                  </object>
                </div>
              ) : (
                // B) Visual-only “paper” placeholder (still gives a nice visual)
                <a
                  href={PDF_PATH}
                  target="_blank"
                  className="group block overflow-hidden rounded-xl border border-white/10 bg-white p-8 shadow-sm"
                >
                  <div className="mx-auto max-w-[760px]">
                    <div className="h-6 w-2/3 rounded bg-black/10" />
                    <div className="mt-6 space-y-3">
                      <div className="h-3 w-full rounded bg-black/10" />
                      <div className="h-3 w-11/12 rounded bg-black/10" />
                      <div className="h-3 w-10/12 rounded bg-black/10" />
                      <div className="h-3 w-9/12 rounded bg-black/10" />
                    </div>
                    <div className="mt-8 space-y-3">
                      <div className="h-3 w-full rounded bg-black/10" />
                      <div className="h-3 w-11/12 rounded bg-black/10" />
                      <div className="h-3 w-10/12 rounded bg-black/10" />
                    </div>

                    <div className="mt-10 text-sm text-black/60">
                      Click to open PDF
                      <span className="ml-2 inline-block transition group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </div>
                  </div>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* optional back link */}
        <div className="mt-6">
          <Link href="/" className="text-sm text-white/60 hover:text-white/80">
            ← Back home
          </Link>
        </div>
      </main>
    </div>
  );
}
