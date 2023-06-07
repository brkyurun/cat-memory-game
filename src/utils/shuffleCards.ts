import { Cat } from "../types";

export function shuffleCards(cardsArray: Cat[]): Cat[] {
  return [...cardsArray].sort(() => Math.random() - 0.5);
}
