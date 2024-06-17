import styles from "./Hero.module.scss";
import { Container } from "./ui/Container";
import { ImageUI } from "./ui/Image";

export const Hero = (props: any) => {
  return (
    <section className={styles.component}>
      <div className={styles.imageContainer}>
        <ImageUI className={styles.image} src={props.blok.image.filename} />
      </div>

      <Container>
        <h1 className={styles.headline}>{props.blok.headline} </h1>
      </Container>
    </section>
  );
};
