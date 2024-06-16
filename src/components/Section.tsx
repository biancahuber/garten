import { StoryblokComponent } from "@storyblok/react/rsc";

export const Section = (props: any) => {
  return (
    <section>
      <h2>{props.blok.headline} </h2>
      {props.blok.content.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </section>
  );
};
