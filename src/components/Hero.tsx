import Image from 'next/image'
import React from 'react'

export const heroContent = {
    title: "World's Petition Platform",
    description: "We started in 2016 with the radical idea that anyone, anywhere, should be able to easily and securely to start their own petition. Today, we offer a trusted and easy-to-use platform for social movement across the world."
}

function Hero() {
  return (
    <section className='w-full flex flex-col items-center justify-center bg-hero gap-10'>
        <div id="hero-texts" className='max-w-4xl flex flex-col items-center justify-center mt-28 gap-4 text-center'>
        <h1 className='text-primary-font text-6xl font-bold'>{heroContent.title}</h1>
        <h2 className='text-neutral-500 text-lg font-medium text-center text-wrap'>{heroContent.description}</h2>
        </div>
        <Image src={"/assets/hero.jpg"} width={800} height={800} alt='Hero Image' />
    </section>
  )
}

export default Hero