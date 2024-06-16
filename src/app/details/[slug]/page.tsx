import { getStoryblokApi } from "@storyblok/react/rsc";

const fetchDetailPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`details/${slug}`, {
    version: "draft",
  });
  return response.data.story;
};

const DetailPage = async (props: any) => {
  const story = await fetchDetailPage(props.params.slug);
  return (
    <div>
      <p>test</p>
      <p>{JSON.stringify(props.params)}</p>
      <p>{JSON.stringify(story)}</p>
    </div>
  );
};

export default DetailPage;
