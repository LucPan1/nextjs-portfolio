import React from 'react'
import Image from "next/image";
import { PageWrapper } from "./page-wrapper";
// import videoBg from "../public/assets/main_video.mp4"
import futur from "../public/assets/main_image/image.jpeg"

const Main = () => {
  return (
    <div className='relative h-screen'>
      <section id="home">
      <PageWrapper>
        <h1 className='italic absolute top-72 left-1/2 transform -translate-x-1/2 text-white text-4xl font-bold'>
    Développeur web
  </h1>
  </PageWrapper>
  <Image className='w-full h-full object-cover'
    src={futur}
    alt="/"
  />
  {/* <video className="w-full h-full object-cover" src={videoBg} autoPlay loop muted playsInline /> */}
  {/* <h6> En savoir plus </h6>
  <Image className='fill-white'
    src={"/assets/fleche/fleche_bas.png"}
    alt="/"
    width="100"
    height="100"
  /> */}
  </section>
</div>
  )
}

export default Main