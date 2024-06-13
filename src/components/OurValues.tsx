import React from "react";
import ContainerSection from "./partials/ContainerSection";
import { values, valuesInterface } from "@/data/Values";
import crypto from 'crypto'

const ValuesCard = ({ title, description, index }: valuesInterface) => {
  return (
    <div className="flex flex-col gap-12 max-w-xs">
      <data value="1" className="text-5xl font-bold">
        {index && index < 10?`0${index}`: index}
      </data>
      <div className="flex flex-col">
        <h3 className="font-extrabold text-xl">{title}</h3>
        <p className="font-medium">
         {description}
        </p>
      </div>
    </div>
  );
};

const OurValues = () => {
  return (
    <ContainerSection className="bg-values-wave bg-cover bg-center flex flex-col items-start justify-center gap-20 text-blue-primary">
      <h2 className="text-5xl font-bold">Our Values</h2>
      <div className="w-full grid grid-cols-3 place-items-stretch">
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
