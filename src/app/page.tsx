import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import ServiceCard from "@/components/ServiceCard";

export default function HomePage() {
  return (
    <main>
      {/* Hero with Ocean Background */}
      <section className="relative h-screen overflow-hidden">
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
        <div className="relative z-10">
          <Hero />
        </div>
      </section>

      {/* About Section with Dr. Serena Image */}
      <section className="bg-beige py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Photo */}
          <div className="flex justify-center">
            <img
              src="/dr-serena.png"
              alt="Dr. Serena Blake"
              className="w-80 h-80 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* RIGHT: Bio */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
              Meet Dr. Serena Blake, PsyD
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
             Finding time and opportunities to care for ourselves can be incredibly challenging in today's busy and demanding world. I believe therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice. Therapy can help individuals identify and clarify their goals, values, and the various elements that contribute to their well-being, recognizing that these aspects vary from person to person.

I am dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion, and insights into behavioral patterns and tendencies. I hold a master’s degree in Clinical Psychology from the Michigan School of Psychology (2012) and a Ph.D. in Counseling Psychology from Western Michigan University (2018). My experience spans therapy and psychological assessment in psychiatric inpatient units, academic medical centers, universities, and outpatient practice settings.

My therapeutic approach is primarily psychodynamic and humanistic, enriched by influences from positive psychology, existentialism, family systems theory, acceptance and commitment concepts, and mindfulness practices.


            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-beige py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Anxiety & Stress Management"
              description="Helping you regain balance and peace through evidence-based tools."
              image="/service-anxiety.jpg"
            />
            <ServiceCard
              title="Relationship Counseling"
              description="Guiding couples toward deeper connection and communication."
              image="/service-relationship.jpg"
            />
            <ServiceCard
              title="Trauma Recovery"
              description="Creating a safe space to process and heal from past trauma."
              image="/service-trauma.jpg"
            />
          </div>
        </div>
      </section>

      {/* FAQ and Contact */}
      <FAQSection />
    </main>
  );
}
