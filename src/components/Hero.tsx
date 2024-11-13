import Image from 'next/image'
import React from 'react'
import ContainerSection from './partials/ContainerSection'

export const heroContent = {
    title: "World's Petition Platform",
    description: "We started in 2015 with the radical idea that anyone, anywhere, should be able to easily and securely to start their own petition. Today, we offer a trusted and easy-to-use platform for social movement across the world."
}

function Hero() {
  return (
    <ContainerSection className='w-full flex flex-col items-center justify-center bg-hero gap-10 md:pt-32'>
        <div id="hero-texts" className='max-w-5xl flex flex-col items-center justify-center gap-4 text-center'>
        <h1 className='text-primary-font text-6xl font-circularstdbold'>{heroContent.title}</h1>
        <h2 className='text-neutral-500 text-xl text-center text-wrap'>{heroContent.description}</h2>
        </div>
        <Image src={"/assets/hero.jpg"} width={800} height={800} alt='Hero Image' />
    </ContainerSection>
  )
}

export default Hero
