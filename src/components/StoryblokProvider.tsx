"use client";
import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import { DetailPage } from "@/components/pages/DetailPage";
import { HomePage } from "@/components/pages/HomePage";
import { Section } from "./Section";
import { Hero } from "./Hero";
import { Text } from "./Text";
import { Image } from "./Image";
import { TeaserList } from "./TeaserList";

storyblokInit({
  // key must equal the block of the Block Library in Storyblok CMS
  components: {
    detail: DetailPage,
    page: HomePage,
    section: Section,
    hero: Hero,
    text: Text,
    image: Image,
    details_list: TeaserList,
  },
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
