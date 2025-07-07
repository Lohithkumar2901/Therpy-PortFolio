import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-beige min-h-screen flex items-center justify-center px-4 py-16">
      <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-2xl">
        <h2 className="text-3xl font-serif font-bold mb-6 text-center text-gray-800">
          Get in Touch
        </h2>
        <ContactForm />
      </div>
    </div>
  );
}