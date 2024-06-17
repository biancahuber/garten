import Link from "next/link";
import styles from "./Teaser.module.scss";
import { ImageUI } from "./ui/Image";

export const Teaser = (props: any) => {
  return (
    <div className={styles.component}>
      <Link className={styles.link} href={props.story.full_slug}>
        <h3>{props.story.content.title}</h3>
        <ImageUI src={props.story.content.stage[0].image.filename} />
      </Link>
    </div>
  );
};
