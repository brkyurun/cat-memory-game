export function shuffleCards(cardsArray: string[]): string[] {
  return [...cardsArray].sort(() => Math.random() - 0.5);
}
