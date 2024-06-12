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
  