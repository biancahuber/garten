import { ImageUI } from "./ui/Image";

export const Image = (props: any) => {
  return (
    <div>
      <ImageUI src={props.blok.image.filename} />
      <p>{props.blok.description}</p>
    </div>
  );
};
