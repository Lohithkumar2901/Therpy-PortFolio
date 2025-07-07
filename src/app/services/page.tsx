import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Anxiety & Stress Management",
    description: "Helping you find calm through CBT and mindfulness-based strategies.",
    image: "/service-anxiety.jpg",
  },
  {
    title: "Relationship Counseling",
    description: "Improve communication and build stronger relationships with partners, family, or friends.",
    image: "/service-relationship.jpg",
  },
  {
    title: "Trauma Recovery",
    description: "Healing from past trauma using evidence-based therapy in a safe, compassionate space.",
    image: "/service-trauma.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-beige px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Services</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
