import Link from "next/link";

export const Teaser = (props: any) => {
  return (
    <div>
      <Link href={props.story.full_slug}>
        <h3>{props.story.content.title}</h3>
      </Link>
    </div>
  );

  // return <p>{props.blok} </p>;
};
