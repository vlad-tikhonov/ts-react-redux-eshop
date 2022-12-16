import styles from "./Test.module.sass";
import { Button, Htag, Text } from "components";
import { ReactComponent as LeftIcon } from "assets/icons/chevron-left.svg";
import { ReactComponent as RightIcon } from "assets/icons/chevron-right.svg";

const renderLeftIcon = (className: string) => (
  <LeftIcon className={className} />
);

const renderRightIcon = (className: string) => (
  <RightIcon className={className} />
);

export const Test = () => {
  return (
    <div className={styles.test}>
      <div className={styles.col}>
        <div className={styles.row}>
          <div className={styles.row}>
            <Button
              decoration="outline"
              size="s"
              accent="primary"
              renderRightIcon={renderRightIcon}
            >
              Label
            </Button>
          </div>
          <div className={styles.row}>
            <Button
              decoration="no"
              size="m"
              accent="primary"
              renderRightIcon={renderRightIcon}
            >
              Label
            </Button>
          </div>
          <div className={styles.row}>
            <Button
              decoration="default"
              size="l"
              accent="primary"
              renderRightIcon={renderRightIcon}
            >
              Label
            </Button>
          </div>
          <div className={styles.row}>
            <Button
              decoration="outline"
              size="s"
              accent="grayscale"
              renderRightIcon={renderRightIcon}
            ></Button>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <div className={styles.row}>
            <Button
              decoration="outline"
              size="s"
              accent="secondary"
              renderRightIcon={renderRightIcon}
            >
              Label
            </Button>
          </div>
          <div className={styles.row}>
            <Button
              decoration="no"
              size="m"
              accent="secondary"
              renderRightIcon={renderRightIcon}
            >
              Label
            </Button>
          </div>
          <div className={styles.row}>
            <Button
              decoration="default"
              size="l"
              accent="secondary"
              renderRightIcon={renderRightIcon}
            >
              Label
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <div className={styles.row}>
            <Button
              decoration="outline"
              size="s"
              accent="grayscale"
              renderRightIcon={renderRightIcon}
            >
              Label
            </Button>
          </div>
          <div className={styles.row}>
            <Button
              decoration="no"
              size="m"
              accent="grayscale"
              renderRightIcon={renderRightIcon}
            >
              Label
            </Button>
          </div>
          <div className={styles.row}>
            <Button
              decoration="default"
              size="l"
              accent="grayscale"
              renderRightIcon={renderRightIcon}
            >
              Label
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <div className={styles.row}>
            <Button
              decoration="outline"
              size="s"
              accent="error"
              renderRightIcon={renderRightIcon}
            >
              Label
            </Button>
          </div>
          <div className={styles.row}>
            <Button
              decoration="no"
              size="m"
              accent="error"
              renderRightIcon={renderRightIcon}
            >
              Label
            </Button>
          </div>
          <div className={styles.row}>
            <Button
              decoration="default"
              size="l"
              accent="error"
              renderRightIcon={renderRightIcon}
            >
              Label
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <div className={styles.row}>
            <Button
              decoration="outline"
              size="s"
              accent="primary"
              renderRightIcon={renderRightIcon}
              disabled
            >
              Label
            </Button>
          </div>
          <div className={styles.row}>
            <Button
              decoration="no"
              size="m"
              accent="primary"
              renderRightIcon={renderRightIcon}
              disabled
            >
              Label
            </Button>
          </div>
          <div className={styles.row}>
            <Button
              decoration="outline"
              size="m"
              accent="secondary"
              renderRightIcon={renderRightIcon}
              disabled
            >
              Label
            </Button>
          </div>
          <div className={styles.row}>
            <Button
              decoration="no"
              size="m"
              accent="secondary"
              renderRightIcon={renderRightIcon}
              disabled
            >
              Label
            </Button>
          </div>
          <div className={styles.row}>
            <Button
              decoration="outline"
              size="m"
              accent="grayscale"
              renderRightIcon={renderRightIcon}
              disabled
            >
              Label
            </Button>
          </div>
          <div className={styles.row}>
            <Button
              decoration="no"
              size="m"
              accent="grayscale"
              renderRightIcon={renderRightIcon}
              disabled
            >
              Label
            </Button>
          </div>
          <div className={styles.row}>
            <Button
              decoration="outline"
              size="m"
              accent="error"
              renderRightIcon={renderRightIcon}
              disabled
            >
              Label
            </Button>
          </div>
          <div className={styles.row}>
            <Button
              decoration="no"
              size="m"
              accent="error"
              renderRightIcon={renderRightIcon}
              disabled
            >
              Label
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
