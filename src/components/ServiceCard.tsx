interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="bg-white border border-softgray shadow-sm rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}