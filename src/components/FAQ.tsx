export default function FAQ() {
  const faqs = [
    {
      q: "Do you accept insurance?",
      a: "No, but a superbill is provided for self-submission."
    },
    {
      q: "Are online sessions available?",
      a: "Yes—all virtual sessions via Zoom."
    },
    {
      q: "What is your cancellation policy?",
      a: "24-hour notice required."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <ul className="space-y-6">
        {faqs.map((item, index) => (
          <li key={index}>
            <h3 className="font-semibold text-lg mb-1">{item.q}</h3>
            <p className="text-gray-700">{item.a}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}