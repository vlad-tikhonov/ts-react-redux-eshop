import { Text } from "ui";

interface HighlighterProps {
  text: string;
  query: string;
  className?: string;
}

export const Highlighter = ({ text, query, className }: HighlighterProps) => {
  let lowerText = text.toLowerCase();
  let lowerQuery = query.toLowerCase();

  const preRegExp = lowerQuery.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  const regExp = new RegExp(preRegExp, "g");
  const replaced = lowerText.replace(regExp, "@").split("");

  return (
    <Text size="s" className={className}>
      {replaced.map((w, i) => {
        if (w === "@") {
          return <b key={i}>{lowerQuery}</b>;
        } else {
          return w;
        }
      })}
    </Text>
  );
};
