export const Image = (props: any) => {
  return (
    <div>
      <img src={props.blok.image.filename} alt="" />
      <p>{props.blok.description}</p>
    </div>
  );

  // return <p>{props.blok} </p>;
};
