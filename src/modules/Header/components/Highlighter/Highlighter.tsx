import { Text } from "ui";

interface HighlighterProps {
  text: string;
  query: string;
  className?: string;
}

export const Highlighter = ({ text, query, className }: HighlighterProps) => {
  let lowerText = text.toLowerCase();
  let lowerQuery = query.toLowerCase();

  const regExp = new RegExp(lowerQuery, "g");
  const replaced = lowerText.replace(regExp, "@").split("");

  return (
    <Text size="s" className={className}>
      {replaced.map((w) => {
        if (w === "@") {
          return <b>{lowerQuery}</b>;
        } else {
          return w;
        }
      })}
    </Text>
  );
};
