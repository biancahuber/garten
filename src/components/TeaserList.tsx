import { Teaser } from "./Teaser";
import { Container } from "./ui/Container";
import { TeaserListUI } from "./ui/TeaserList";

export const TeaserList = (props: any) => {
  return (
    <TeaserListUI>
      {props.blok.details.map((teaser: any) => (
        <Teaser story={teaser} key={teaser.content._uid} />
      ))}
    </TeaserListUI>
  );
};
