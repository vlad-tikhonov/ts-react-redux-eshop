/* eslint-disable react-hooks/exhaustive-deps */
import cn from "classnames";
import styles from "./search.module.sass";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { useClickOutside, useDebounce } from "hooks";
import { useEffect, useState, ChangeEvent, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSearchActions, useSearchResults } from "store/search/features";
import { Input } from "ui";
import { SearchResults } from "./search-results/search-results";

interface SearchProps {
  className?: string;
}

export const Search = ({ className }: SearchProps) => {
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);
  const [inputIsActive, setInputIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const { load, reset } = useSearchActions();
  const { pathname } = useLocation();

  const results = useSearchResults(pathname);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const changeToDefault = () => {
    if (results.length) reset();
    if (value) setValue("");
    if (isOpen) setIsOpen(false);
    if (inputIsActive) setInputIsActive(false);
  };

  useClickOutside([formRef], () => {
    changeToDefault();
  });

  useEffect(() => {
    if (debouncedValue) {
      load(debouncedValue).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          setIsOpen((b) => (b ? b : !b));
        }
      });
    }
  }, [debouncedValue]);

  useEffect(() => {
    changeToDefault();
  }, [pathname]);

  return (
    <form
      className={cn(styles.form, className, {
        [styles.activeForm]: inputIsActive,
      })}
      onFocus={() => {
        setInputIsActive(true);
      }}
      onSubmit={(e) => {
        e.preventDefault();
      }}
      ref={formRef}
    >
      <Input
        inputSize="m"
        type="text"
        placeholder="Найти товар"
        onChange={handleChange}
        value={value}
      />
      <SearchIcon />
      <SearchResults
        query={debouncedValue}
        results={results}
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      />
    </form>
  );
};
