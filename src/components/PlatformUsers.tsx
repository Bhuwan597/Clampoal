import crypto from "crypto";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import ContainerSection from "./partials/ContainerSection";
import { Activity, Building2, Newspaper, User } from "lucide-react";

export interface UserDetailsInterface {
  title: string;
  description: string;
  Icon: React.ElementType;
}

export const plaformUsersDetails: UserDetailsInterface[] = [
  {
    title: "Activists",
    description:
      "Social Activists can start a social movements and connect supporters in their communities.",
    Icon: Activity,
  },
  {
    title: "Legislators",
    description:
      "Decision makers at the highest levels of government are engaging with their constituents",
    Icon: User,
  },
  {
    title: "Organizations",
    description:
      "Leading organizations are advancing their causes and mobilizing new supporters.",
    Icon: Building2,
  },
  {
    title: "Reporters",
    description:
      "Journalists are sourcing powerful stories and covering campaigns hundreds of times a day.",
    Icon: Newspaper,
  },
];

const UserCard: React.FC<UserDetailsInterface> = ({
  title,
  description,
  Icon,
}) => {
  return (
    <Card className="bg-blue-primary text-white rounded-2xl text-center w-64 h-72 py-4">
      <CardHeader>
        <CardTitle className="flex flex-col items-center justify-center gap-4">
          <div className="bg-slate-100 p-4 rounded-full text-blue-primary">
            <Icon size={40} />
          </div>
          <p>{title}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-neutral-200 text-sm">
        {description}
      </CardContent>
    </Card>
  );
};

const PlatformUsers = () => {
  return (
    <ContainerSection className="flex flex-row items-start gap-32 py-32">
      <div className="max-w-md flex flex-col items-start justify-center gap-6">
        <h2 className="text-2xl text-neutral-500 font-medium">
          Who use Platform?
        </h2>
        <h3 className="text-5xl text-primary-font font-circularstdblack font-extrabold leading-tight">
          We believe that when everyone speaks out the problem of society and
          action together, the world will become a better place.
        </h3>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 place-items-end">
        {plaformUsersDetails.map((user) => {
          return (
            <UserCard
              key={crypto.randomUUID()}
              title={user.title}
              description={user.description}
              Icon={user.Icon}
            />
          );
        })}
      </div>
    </ContainerSection>
  );
};

export default PlatformUsers;
