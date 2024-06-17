import { StoryblokComponent } from "@storyblok/react/rsc";
import { Container } from "./ui/Container";

export const Section = (props: any) => {
  return (
    <section>
      <Container>
        <h2>{props.blok.headline} </h2>
        {props.blok.content.map((blok: any) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
      </Container>
    </section>
  );
};
