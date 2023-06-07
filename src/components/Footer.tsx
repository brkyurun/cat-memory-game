import { BsFillHeartFill } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="text-center text-neutral-50 bg-gradient-to-t from-sky-500 to-sky-400">
      <p className="flex items-center justify-center gap-2 py-2">
        Made with <BsFillHeartFill className="text-red-500" /> by
        <a href="https://www.github.com/brkyurun" className="hover:underline">
          brkyurun
        </a>
      </p>
    </footer>
  );
}
