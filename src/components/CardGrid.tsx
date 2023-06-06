import { Cat } from "../types";
import { Card } from "./Card";
import { Container } from "./Container";

interface CardGridProps {
  cats: Cat[];
}

export function CardGrid({ cats }: CardGridProps) {
  return (
    <Container>
      <div className="grid grid-cols-4 items-center content-center justify-items-center gap-6 my-10">
        {cats.map((cat) => (
          <Card cat={cat} key={cat.id} />
        ))}
      </div>
    </Container>
  );
}
