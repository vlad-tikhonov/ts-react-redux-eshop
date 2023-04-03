/* eslint-disable react-hooks/exhaustive-deps */
import cn from "classnames";
import styles from "./search.module.sass";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { useClickOutside, useDebounce } from "hooks";
import { useRef, useEffect, useState, ChangeEvent } from "react";
import { useLocation, Link } from "react-router-dom";
import { Highlighter } from "components";
import { useSearchActions, useSearchResults } from "store/search/features";
interface SearchProps {
  className?: string;
}

export const Search = ({ className }: SearchProps) => {
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);
  const [inputIsActive, setInputIsActive] = useState(false);

  const { load, reset } = useSearchActions();
  const { pathname } = useLocation();

  const results = useSearchResults(pathname);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const resetResults = () => {
    if (results.length) {
      reset();
    }
  };

  useClickOutside([formRef], () => {
    resetResults();
  });

  useEffect(() => {
    if (debouncedValue) {
      load(debouncedValue);
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (results.length) {
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
