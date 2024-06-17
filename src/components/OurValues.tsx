import React from "react";
import ContainerSection from "./partials/ContainerSection";
import crypto from 'crypto'


export interface valuesInterface{
  title: string,
  description: string,
  index?: number,
}

export const values : valuesInterface[]= [
  {title: "Make more value, not money.", description: "We focus on creative and deliverying value to people across the world."},
  {title: "Make it simple, not stressful", description: "We make everything simple, clearly and accessible to everyone."},
  {title: "Be human not devil.", description: "We do the right things with love and sincerity to create sustainability."},
]

const ValuesCard = ({ title, description, index }: valuesInterface) => {
  return (
    <div className="flex flex-col gap-12 max-w-sm">
      <data value="1" className="font-circularstdbold text-6xl font-extrabold">
        {index && index < 10?`0${index}`: index}
      </data>
      <div className="flex flex-col">
        <h3 className="font-circularstdbold font-extrabold text-2xl">{title}</h3>
        <p className="text-xl">
         {description}
        </p>
      </div>
    </div>
  );
};

const OurValues = () => {
  return (
    <ContainerSection className="bg-values-wave bg-cover bg-center flex flex-col items-start justify-center gap-20 text-blue-primary">
      <h2 className="font-circularstdbold text-5xl font-bold">Our Values</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 place-items-stretch">
        {values.map((value, index)=>{
          return (
            <ValuesCard key={crypto.randomUUID()} title={value.title} description={value.description} index={index+1}/>
          )
        })}
      </div>
    </ContainerSection>
  );
};

export default OurValues;
