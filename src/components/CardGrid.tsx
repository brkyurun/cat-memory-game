import { Cat } from "../types";
import { Card } from "./Card";
import { Container } from "./Container";

interface CardGridProps {
  cats: Cat[];
  onClick: (id: string) => void;
}

export function CardGrid({ cats, onClick }: CardGridProps) {
  return (
    <Container>
      <div className="grid grid-cols-4 items-center content-center justify-items-center gap-6 my-10">
        {cats.map((cat) => (
          <Card cat={cat} key={cat.id} onClick={onClick} />
        ))}
      </div>
    </Container>
  );
}
