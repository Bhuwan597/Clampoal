import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import crypto from "crypto";

export interface teamMemberInterface {
  name: string;
  position: string;
  image: string;
}

export const teamMembers: teamMemberInterface[] = [
  {
    name: "Greg Rosenke",
    position: "Founder & CEO",
    image: "team-1.png",
  },
  {
    name: "Jenny Uebergerg",
    position: "Chief Marketing Officer",
    image: "team-2.jpg",
  },
  {
    name: "David Bole",
    position: "Chief Technology Officer",
    image: "team-3.jpg",
  },
];

const TeamMemberCard = ({ name, position, image }: teamMemberInterface) => {
  return (
    <div className="relative w-full max-w-sm my-6 md:my-0">
      <Image
        src={`/assets/teams/${image}`}
        alt={name}
        width={250}
        height={600}
        className="h-72 rounded-xl object-cover object-center"
      />
      <div className="absolute -bottom-10 w-full flex items-center justify-center">
        <div className="w-[80%] bg-white p-4 rounded-xl text-center shadow-md">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-neutral-600">{position}</p>
        </div>
      </div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center md:items-start py-32 px-10 md:px-32 gap-10 w-full">
      <div className="flex flex-col h-full gap-6 w-full md:max-w-sm">
        <h2 className="text-primary-font font-extrabold font-circularstdbold text-5xl">Our team</h2>
        <p className="text-xl text-neutral-500">
          We need talented, passionate people to the changing world
        </p>
        <Button
          variant={"outline"}
          className="bg-blue-primary w-fit my-10 text-white text-xl hover:bg-slate-100 px-6 py-6 rounded-xl"
        >
          See all members
        </Button>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-start gap-4">
        {teamMembers.map((member) => {
          return (
            <TeamMemberCard
              key={crypto.randomUUID()}
              name={member.name}
              position={member.position}
              image={member.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurTeam;
