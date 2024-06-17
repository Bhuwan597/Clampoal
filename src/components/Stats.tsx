import React from "react";
import crypto from 'crypto'

export const stats = [
  { title: "Campaigns", count: 20_000 },
  { title: "Signatures", count: 500_000 },
  { title: "Donations", count: 10_000 },
];

const Stats = () => {
  return (
    <div className="bg-blue-primary flex flex-col md:flex-row justify-center items-center gap-32 py-20">
      {stats.map((stat) => {
        return (
          <div key={crypto.randomUUID()} className="flex flex-col items-center justify-center gap-4 text-white">
            <h2 className="text-6xl font-bold">{stat.count.toLocaleString("en-US")}</h2>
            <h3 className="text-2xl text-neutral-300">{stat.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
