import cn from "classnames";
import styles from "./Search.module.sass";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { useActiveElement } from "hooks";
import { useRef, useEffect, useState } from "react";

interface SearchProps {
  className?: string;
}

export const Search = ({ className }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const activeElement = useActiveElement();

  const [inputIsActive, setInputIsActive] = useState(false);

  useEffect(() => {
    activeElement === inputRef.current
      ? setInputIsActive(true)
      : setInputIsActive(false);
  }, [activeElement]);

  return (
    <form
      className={cn(styles.form, className, {
        [styles.activeForm]: inputIsActive,
      })}
    >
      <fieldset className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder="Найти товар"
          ref={inputRef}
          // value={value}
          // onChange={handleChange}
        />
        <SearchIcon />
      </fieldset>
      <fieldset className={styles.resultsWrapper}></fieldset>
    </form>
  );
};
