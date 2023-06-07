import { useEffect, useState } from "react";
import { CardGrid } from "./components/CardGrid";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Cat } from "./types";
import { SAMPLE_DATA } from "./utils/sampleData";
import { shuffleCards } from "./utils/shuffleCards";

export default function App() {
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(() => {
    const score = Number(localStorage.getItem("playerBestScore")) ?? 0;
    return score;
  });
  const [clickedCats, setClickedCats] = useState<string[]>([]);
  const [cards, setCards] = useState<Cat[]>(() => {
    return SAMPLE_DATA;
  });

  useEffect(() => {
    const shuffledCards = shuffleCards(cards);
    const score = currentScore >= bestScore ? currentScore : bestScore;
    localStorage.setItem("playerBestScore", JSON.stringify(score));
    setBestScore(score);
    setCards(shuffledCards);
  }, [currentScore]);

  function handleClick(id: string): void {
    if (clickedCats.includes(id)) {
      setClickedCats([]);
      setCurrentScore(0);
    } else {
      setClickedCats((currentCats) => [...currentCats, id]);
      setCurrentScore((current) => current + 1);
    }
  }

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <CardGrid cats={cards} onClick={handleClick} />
      <Footer />
    </>
  );
}
