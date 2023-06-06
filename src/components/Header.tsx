import { Container } from "./Container";
import { LuCat } from "react-icons/lu";

export function Header() {
  return (
    <header className="bg-gradient-to-t from-sky-500 to-sky-400 py-6 shadow-lg">
      <Container className="flex items-center justify-between">
        <h1 className="text-2xl text-white flex items-center justify-center gap-2">
          <LuCat className="h-12 w-12" /> Cat Memory Game
        </h1>
        <div className="flex items-center justify-center gap-4 text-neutral-50">
          <p>Current Score: 7</p>
          <span className="text-2xl align-middle">-</span>
          <p>Best Score: 99</p>
        </div>
      </Container>
    </header>
  );
}
