import styles from "./Image.module.scss";

export const ImageUI = ({ src, alt = "Alt Text" }: any) => {
  return <img className={styles.component} src={src} alt={alt} />;
};
