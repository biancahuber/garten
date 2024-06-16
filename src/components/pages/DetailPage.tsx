import { StoryblokComponent } from "@storyblok/react/rsc";

export const DetailPage = (props: any) => {
  return (
    <main>
      <p>DetailPage</p>
      {props.blok.stage.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
      {props.blok.main.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
};
