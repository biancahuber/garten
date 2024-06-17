import { Container } from "./Container";
import styles from "./TeaserList.module.scss";

export const TeaserListUI = (props: any) => {
  return (
    <Container>
      <div className={styles.component}>{props.children}</div>
    </Container>
  );
};
