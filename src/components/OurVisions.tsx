import React from 'react'
import ContainerSection from './partials/ContainerSection'
import Image from 'next/image'

const ourVisionContent = {
    title: "Our Visions",
    description: "Our vision is to be the best petition platform in the world."
}

const OurVisions = () => {
  return (
    <ContainerSection className="flex flex-col items-center justify-center bg-voice gap-6 py-24">
        <h2 className='font-circularstdbold text-primary-font font-extrabold text-5xl'>{ourVisionContent.title}</h2>
        <p className='text-2xl font-medium text-neutral-500'>{ourVisionContent.description}</p>
        <div>
        <Image src={"/assets/vision.png"} width={1200} height={1000} alt='vision image' />
        </div>
    </ContainerSection>
  )
}

export default OurVisions