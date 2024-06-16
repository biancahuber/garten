import { StoryblokStory, getStoryblokApi } from "@storyblok/react/rsc";

const fetchHomePage = async () => {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.getStory(`home`, {
    version: "draft",
    resolve_relations: "details_list.details",
  });
  return response.data.story;
};

const HomePage = async (props: any) => {
  const story = await fetchHomePage();

  return <StoryblokStory story={story} />;
};

export default HomePage;
