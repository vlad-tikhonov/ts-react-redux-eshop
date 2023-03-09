import cn from "classnames";
import styles from "./Search.module.sass";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { useActiveElement } from "hooks";
import { useRef, useEffect, useState, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { loadSearchResults } from "features/search/search-slice";
import { selectSearchResults } from "features/search/search-selectors";
import { useSearch } from "features/search/use-search";

interface SearchProps {
  className?: string;
}

export const Search = ({ className }: SearchProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputIsActive, setInputIsActive] = useState(false);

  const dispatch = useAppDispatch();
  const results = useAppSelector(selectSearchResults);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputValue) {
      dispatch(loadSearchResults(inputValue));
    }
  }, [inputValue]);

  // console.log(results);
  console.log("search render");
  return (
    <form
      className={cn(styles.form, className, {
        [styles.activeForm]: inputIsActive,
      })}
    >
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder="Найти товар"
          ref={inputRef}
          value={inputValue}
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
      <div className={styles.resultsWrapper}></div>
    </form>
  );
};
