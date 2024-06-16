import { Teaser } from "./Teaser";

export const TeaserList = (props: any) => {
  return (
    <div>
      {props.blok.details.map((teaser: any) => (
        <Teaser story={teaser} key={teaser.content._uid} />
      ))}
    </div>
  );

  // return <p>{props.blok} </p>;
};
