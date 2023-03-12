import cn from "classnames";
import styles from "./Search.module.sass";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { useClickOutside, useDebounce } from "hooks";
import { useRef, useEffect, useState, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { loadSearchResults, resetSearch } from "features/search/search-slice";
import { selectSearchResults } from "features/search/search-selectors";
import { useLocation, Link } from "react-router-dom";
import { Highlighter } from "modules/Header/components";
interface SearchProps {
  className?: string;
}

export const Search = ({ className }: SearchProps) => {
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);
  const [inputIsActive, setInputIsActive] = useState(false);

  const { pathname } = useLocation();

  const dispatch = useAppDispatch();
  const results = useAppSelector(selectSearchResults(pathname));

  const inputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const resetResults = () => {
    dispatch(resetSearch());
  };

  useClickOutside(formRef, () => {
    resetResults();
  });

  useEffect(() => {
    if (debouncedValue) {
      dispatch(loadSearchResults(debouncedValue));
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (results) {
      resetResults();
    }

    if (value) {
      setValue("");
    }
  }, [pathname]);

  return (
    <form
      className={cn(styles.form, className, {
        [styles.activeForm]: inputIsActive,
      })}
      ref={formRef}
    >
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder="Найти товар"
          ref={inputRef}
          value={value}
          onChange={handleChange}
          onFocus={() => {
            setInputIsActive(true);
          }}
          onBlur={() => {
            setInputIsActive(false);
          }}
        />
        <SearchIcon />
      </div>
      {!!results.length && (
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
                  query={debouncedValue}
                  className={styles.highlighted}
                ></Highlighter>
                <Link
                  to={`/categories/${r.slug}`}
                  className={styles.link}
                ></Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};
