import { Teaser } from "@/components/Teaser";
import { TeaserListUI } from "@/components/ui/TeaserList";
import { StoryblokStory, getStoryblokApi } from "@storyblok/react/rsc";

const fetchDetailsPage = async () => {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.getStory(`details`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.story;
};

const fetchAllDetails = async () => {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.getStories({
    content_type: "detail",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.stories;
};

const DetailsPage = async () => {
  const story = await fetchDetailsPage();
  const details = await fetchAllDetails();

  return (
    <div>
      <StoryblokStory story={story} />
      <TeaserListUI>
        {details.map((detail) => (
          <Teaser story={detail} key={detail.content._uid} />
        ))}
      </TeaserListUI>
    </div>
  );
};

export default DetailsPage;
