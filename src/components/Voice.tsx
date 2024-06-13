import Image from "next/image";
import React from "react";
import ContainerSection from "./partials/ContainerSection";

const Voice = () => {
  return (
    <ContainerSection
      className="flex flex-col items-start justify-start gap-10"
    >
      <h2 className="text-primary-font text-6xl font-bold">
        We believe in your voice
      </h2>
      <div className="flex flex-row justify-between text-neutral-500 font-semibold text-lg w-full">
        <p className="max-w-md">
          We're in here with a simple and clear mission is building a powerful
          platform for the change, helping people around the world to raise
          their voices, collection signatures and contribute to the world.
        </p>
        <p className="max-w-md">
          At Conikal, We believe that the power to change the world is in all
          human beings, we also believe that when everyone speaks out the
          problem of society and action together, the world will become a better
          place.
        </p>
      </div>
      <div className="w-full overflow-hidden rounded-xl">
        <Image
          className="object-cover w-full h-[23rem]"
          src={"/assets/voice.jpg"}
          width={1000}
          height={500}
          alt="Voice raising reference image"
        />
      </div>
    </ContainerSection>
  );
};

export default Voice;
