import { SearchItem } from "types";
import { Highlighter } from "components";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./search-results.module.sass";
import { useKeyPressEvent } from "hooks/use-key-press-event";
import { useEffect, useState } from "react";
interface SearchResultsProps {
  results: SearchItem[];
  query: string;
  isOpen: boolean;
  close: () => void;
}

export const SearchResults = ({
  results,
  query,
  isOpen,
  close,
}: SearchResultsProps) => {
  const [activeItemIndex, setActiveItemIndex] = useState(-1);
  const resultsIsEmpty = !results.length;

  useKeyPressEvent({
    condition: isOpen && !resultsIsEmpty,
    keyCode: "ArrowDown",
    cb: () => {
      if (activeItemIndex === results.length - 1) {
        setActiveItemIndex(0);
      }
      setActiveItemIndex((n) => n + 1);
    },
    preventDefault: true,
  });

  useKeyPressEvent({
    condition: isOpen && !resultsIsEmpty,
    keyCode: "ArrowUp",
    cb: () => {
      if (activeItemIndex < 1) {
        setActiveItemIndex(results.length);
      }
      setActiveItemIndex((n) => n - 1);
    },
    preventDefault: true,
  });

  useKeyPressEvent({
    condition: isOpen,
    keyCode: "Escape",
    cb: () => {
      close();
    },
  });

  useEffect(() => {
    setActiveItemIndex(-1);
  }, [results]);

  useEffect(() => {
    const items = document.querySelectorAll("." + styles.item);
    const link = items[activeItemIndex]?.querySelector("a");
    link?.focus();
  }, [activeItemIndex]);

  if (!isOpen) {
    return null;
  }

  if (resultsIsEmpty) {
    return (
      <div className={styles.results}>
        <ul>
          <li className={styles.empty}>Нет результатов</li>
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.results}>
      <ul>
        {results.map((r, i) => (
          <li
            key={r.id}
            className={cn(styles.item, {
              [styles.item]: true,
              [styles.item_category]: r.type === "category",
            })}
          >
            <Highlighter
              text={r.title}
              query={query}
              className={styles.highlighter}
            />
            <Link to={`/categories/${r.slug}`} className={styles.link}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
