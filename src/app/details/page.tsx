import { Teaser } from "@/components/Teaser";
import { StoryblokStory, getStoryblokApi } from "@storyblok/react/rsc";

const fetchDetailsPage = async () => {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.getStory(`details`, {
    version: "draft",
  });
  return response.data.story;
};

const fetchAllDetails = async () => {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.getStories({
    content_type: "detail",
    version: "draft",
  });
  return response.data.stories;
};

const DetailsPage = async () => {
  const story = await fetchDetailsPage();
  const details = await fetchAllDetails();

  return (
    <div>
      <h1>{story.content.Headline}</h1>
      <StoryblokStory story={story} />
      {details.map((detail) => (
        <Teaser story={detail} key={detail.content._uid} />
      ))}
    </div>
  );
};

export default DetailsPage;
