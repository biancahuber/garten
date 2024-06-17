import styles from "./Container.module.scss";

export const Container = (props: any) => {
  return <div className={styles.component}>{props.children}</div>;
};
