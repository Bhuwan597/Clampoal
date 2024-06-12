import {
  UserDetailsInterface,
  plaformUsersDetails,
} from "@/data/PlatformUsers";
import crypto from "crypto";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const UserCard: React.FC<UserDetailsInterface> = ({
  title,
  description,
  Icon,
}) => {
  return (
    <Card className="bg-blue-primary text-white rounded-2xl text-center w-64 py-4">
      <CardHeader>
        <CardTitle className="flex flex-col items-center justify-center gap-4">
          <div className="bg-slate-100 p-4 rounded-full text-blue-primary">
            <Icon size={40} />
          </div>
          <p>{title}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-neutral-200 text-sm">{description}</CardContent>
    </Card>
  );
};

const PlatformUsers = () => {
  return (
    <section className="min-h-screen flex flex-row items-start justify-center gap-10 py-32">
      <div className="max-w-lg flex flex-col items-start justify-center gap-6 px-20">
        <h2 className="text-xl text-neutral-500 font-medium">
          Who use Platform?
        </h2>
        <h3 className="text-5xl text-primary-font font-bold">
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
    </section>
  );
};

export default PlatformUsers;
