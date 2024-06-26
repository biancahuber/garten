import { StoryblokComponent } from "@storyblok/react/rsc";

export const HomePage = (props: any) => {
  return (
    <div>
      {props.blok.stage.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
      {props.blok.body.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};
