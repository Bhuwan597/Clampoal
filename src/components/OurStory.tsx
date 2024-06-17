import React from "react";
import ContainerSection from "./partials/ContainerSection";
import crypto from "crypto";
import Image from "next/image";

export const ourStoryContent = {
  title: "Our Story",
  description: [
    "April 2016 when I was working part-time at a travel agency. At that time, there was an environmental problem in my country that made many people angry and they created a petition on Change dot org and shared it on Facebook. I am very interested in the idea of this website, it is really helpful and it has a strong life impact. I wonder why there is not such a website in my country? I think every country should have such a website and the world should have more than one in the community. So I decided to quit my part-time job and start developing a platform for social movements",

    "Although I have some experience developing websites on WordPress at my company, I still face many challenges to develop and design. I work almost 12 hours a day, after 10 months the first version is released. I kept improving it over the next 3 years with hundreds of changes and new features added.",

    "Today, hundreds of websites powered by Campoal are running around the world, millions of people are signing to support for the problem they care about, starting social movements and making changes to make their country a better place. People have used websites to change tax laws in France, raise funds to protect animals in Germany, speak out about social problems in Turkey, Calls for an end to war in Middle Eastern countries Fundraising to help children in Africa and more.",

    "By empowering entrepreneurs and organizations to give people the opportunity to talk about their problems, I believe that anyone can make the world a better place.",
    "Long Ha – Founder",
  ],
};

const OurStory = () => {
  return (
    <ContainerSection className="flex flex-col md:flex-row gap-16 py-24 md:py-32">
      <div className="w-full md:w-1/2 flex flex-col gap-10 max-w-lg">
        <h2 className="text-primary-font text-5xl font-bold">
          {ourStoryContent.title}
        </h2>
        <div className="flex flex-col items-start justify-center gap-6">
          {ourStoryContent.description.map((paragraph) => {
            return (
              <p
                className="font-medium text-neutral-600 text-xl"
                key={crypto.randomUUID()}
              >
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-row gap-6">
        <div className="flex flex-col gap-6">
          <Image
          className="rounded-xl"
            src={"/assets/our-story/story-1.webp"}
            width={1400}
            height={1400}
            alt="our story image"
          />
          <Image
          className="rounded-xl"
            src={"/assets/our-story/story-2.jpg"}
            width={1400}
            height={1400}
            alt="our story image"
          />
        </div>
        <div className="flex flex-col justify-end gap-6">
          <Image
          className="rounded-xl"
            src={"/assets/our-story/story-3.png"}
            width={1400}
            height={1400}
            alt="our story image"
          />
          <Image
          className="rounded-xl"
            src={"/assets/our-story/story-4.jpg"}
            width={1400}
            height={1400}
            alt="our story image"
          />
        </div>
      </div>
    </ContainerSection>
  );
};

export default OurStory;
