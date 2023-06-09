import { Cat } from "../types";

interface CardProps {
  cat: Cat;
  onClick: (id: string) => void;
}

export function Card({ cat, onClick }: CardProps) {
  return (
    <div
      onClick={() => onClick(cat.id)}
      className="shadow-md rounded-xl w-full h-64 overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:cursor-pointer"
    >
      <img
        src={cat.url}
        alt="A photo of a cat"
        className="w-full block h-full object-cover"
      />
    </div>
  );
}
