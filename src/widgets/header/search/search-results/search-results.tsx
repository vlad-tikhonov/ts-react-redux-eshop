import { SearchItem } from "types";
import { Highlighter } from "components";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./search-results.module.sass";

interface SearchResultsProps {
  results: SearchItem[];
  query: string;
  isOpen: boolean;
}

export const SearchResults = ({
  results,
  query,
  isOpen,
}: SearchResultsProps) => {
  console.log(results);
  const resultsIsEmpty = !results.length;

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
        {results.map((r) => (
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
            ></Highlighter>
            <Link to={`/categories/${r.slug}`} className={styles.link}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
