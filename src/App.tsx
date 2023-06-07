import { useEffect, useState } from "react";
import { CardGrid } from "./components/CardGrid";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const SAMPLE_DATA = [
  {
    id: "9gp",
    url: "https://cdn2.thecatapi.com/images/9gp.jpg",
  },
  {
    id: "50o",
    url: "https://cdn2.thecatapi.com/images/50o.jpg",
  },
  {
    id: "9fn",
    url: "https://cdn2.thecatapi.com/images/9fn.jpg",
  },
  {
    id: "at3",
    url: "https://cdn2.thecatapi.com/images/at3.jpg",
  },
  {
    id: "av4",
    url: "https://cdn2.thecatapi.com/images/av4.jpg",
  },
  {
    id: "d46",
    url: "https://cdn2.thecatapi.com/images/d46.jpg",
  },
  {
    id: "dcn",
    url: "https://cdn2.thecatapi.com/images/dcn.jpg",
  },
  {
    id: "egr",
    url: "https://cdn2.thecatapi.com/images/egr.png",
  },
  {
    id: "Z6mrcccZv",
    url: "https://cdn2.thecatapi.com/images/Z6mrcccZv.jpg",
  },
  {
    id: "INXwfT_cp",
    url: "https://cdn2.thecatapi.com/images/INXwfT_cp.jpg",
  },
  {
    id: "a96",
    url: "https://cdn2.thecatapi.com/images/a96.jpg",
  },
  {
    id: "aas",
    url: "https://cdn2.thecatapi.com/images/aas.jpg",
  },
];

export default function App() {
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(() => {
    const score = Number(localStorage.getItem("playerBestScore")) ?? 0;
    return score;
  });
  const [clickedCats, setClickedCats] = useState<string[]>([]);

  useEffect(() => {
    const score = currentScore >= bestScore ? currentScore : bestScore;
    localStorage.setItem("playerBestScore", JSON.stringify(score));
    setBestScore(score);
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
      <CardGrid cats={SAMPLE_DATA} onClick={handleClick} />
      <Footer />
    </>
  );
}
