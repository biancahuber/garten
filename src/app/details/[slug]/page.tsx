import { StoryblokStory, getStoryblokApi } from "@storyblok/react/rsc";

const fetchDetailPage = async (slug: string) => {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.getStory(`details/${slug}`, {
    version: "draft",
  });
  return response.data.story;
};

const DetailPage = async (props: any) => {
  const story = await fetchDetailPage(props.params.slug);

  return <StoryblokStory story={story} />;
};

export default DetailPage;
