import Image from "next/image";

interface PortfolioCardProps {
  image: string;
}

export default function PortfolioCard({ image }: PortfolioCardProps) {
  return (
    <div className="w-full max-w-[580px] mx-auto">
      <div className="aspect-[4/3] relative group cursor-pointer">
        <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 ease-out">
          <Image
            src={image}
            alt="Portfolio project"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
            priority
          />

          {/* Subtle overlay for better contrast */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Optional: Add a subtle inner shadow for depth */}
          <div className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
