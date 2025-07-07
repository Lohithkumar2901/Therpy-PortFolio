// File: src/components/Hero.tsx

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/ocean-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay + Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="bg-transparent bg-opacity-40 p-8 rounded-xl text-center max-w-2xl text-white">
          <h1 className="text-5xl font-serif font-bold mb-4">
            Therapy for Insight, Healing & Growth
          </h1>
          <h2 className="text-lg mb-6 font-sans text-white/90">
            Compassionate support for individuals and couples in Los Angeles & beyond
          </h2>
          <a
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-softgray transition"
          >
            Book a Free Consult
          </a>
        </div>
      </div>
    </section>
  );
}
