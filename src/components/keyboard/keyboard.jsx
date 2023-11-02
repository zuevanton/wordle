import styles from "./keyboard.module.scss";
import { useEffect } from "react";

const keys = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

const colors = {
  "wrong": "gray",
  "wrong place": "yellow",
  "right":  "#008000",
}

const Keyboard = ({
  onLetterPress,
  onEnterPress,
  onBackspacePress,
  statuses,
}) => {
  console.log(statuses);
  const keyupListener = (e) => {
    const letter = e.key.toLowerCase();
    if (letter === "enter") {
      onEnterPress();
    }
    if (letter === "backspace") {
      onBackspacePress();
    }
    if (letter.match(/^[a-z]$/)) {
      onLetterPress(letter);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyupListener);

    return () => window.removeEventListener("keydown", keyupListener);
  }, []);

  return (
    <div className={styles.keyboard}>
      {keys.map((x, i) => {
        return (
          <div key={i} className={styles.row}>
            {x.map((key) => {
              const color = colors[statuses[key]] ?? "transparent";

              return (
                <button
                  name={key}
                  key={key}
                  className={styles.key}
                  onClick={() => onLetterPress(key)}
                  style={{ backgroundColor: color }}
                >
                  {key}
                </button>
              );
            })}
          </div>
        );
      })}
      <button name="backspace" onClick={onBackspacePress}>
        backspace
      </button>
      <button name="enter" onClick={onEnterPress}>
        enter
      </button>
    </div>
  );
};

export default Keyboard;
