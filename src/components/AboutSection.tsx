export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
      <img src="/dr-serena.jpg" alt="Dr. Serena Blake" className="w-64 h-64 object-cover rounded-full" />
      <div>
        <h2 className="text-3xl font-bold mb-4">Meet Dr. Serena Blake, PsyD</h2>
        <p className="mb-2">
         Finding time and opportunities to care for ourselves can be incredibly challenging in today's busy and demanding world. I believe therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice. Therapy can help individuals identify and clarify their goals, values, and the various elements that contribute to their well-being, recognizing that these aspects vary from person to person.

I am dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion, and insights into behavioral patterns and tendencies. I hold a master’s degree in Clinical Psychology from the Michigan School of Psychology (2012) and a Ph.D. in Counseling Psychology from Western Michigan University (2018). My experience spans therapy and psychological assessment in psychiatric inpatient units, academic medical centers, universities, and outpatient practice settings.

My therapeutic approach is primarily psychodynamic and humanistic, enriched by influences from positive psychology, existentialism, family systems theory, acceptance and commitment concepts, and mindfulness practices.
        </p>
      </div>
    </div>
  );
}
