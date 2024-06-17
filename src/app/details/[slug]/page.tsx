import {
  StoryblokStory,
  apiPlugin,
  getStoryblokApi,
  storyblokInit,
} from "@storyblok/react/rsc";

// Workaround Bug
// https://stackoverflow.com/questions/78180318/storyblok-api-returns-unhandled-runtime-error-50-of-time
storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "detail",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  return response.data.stories.map((story) => ({ slug: story.slug }));
};

const fetchDetailPage = async (slug: string) => {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.getStory(`details/${slug}`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.story;
};

const DetailPage = async (props: any) => {
  const story = await fetchDetailPage(props.params.slug);

  return <StoryblokStory story={story} />;
};

export default DetailPage;
