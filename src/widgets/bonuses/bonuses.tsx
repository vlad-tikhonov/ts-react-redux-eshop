import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import { Text } from "ui";
import cn from "classnames";
import styles from "./bonuses.module.sass";

interface BonusesProps extends React.HTMLAttributes<HTMLDivElement> {
  count: number;
}

export const Bonuses = ({ count, className }: BonusesProps) => {
  return (
    <div className={cn(styles.bonuses, className)}>
      <SmileIcon className={styles.smile} />
      <Text size="xs" className={styles.text}>
        Вы получаете <b>{count} бонусов</b>
      </Text>
    </div>
  );
};
