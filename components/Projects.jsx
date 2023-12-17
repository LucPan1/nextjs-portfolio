import React, { useEffect, useRef } from 'react'
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import blogImg from "../public/assets/projects/blog.png";
import bubbleImg from "../public/assets/projects/bubble_tea_project.png";
import rpgImg from "../public/assets/projects/rpg_base_game.png";
import chatImg from "../public/assets/projects/chat_irc.png";
import luhnImg from "../public/assets/projects/luhn_rush.png";
import sicilylinesImg from "../public/assets/projects/sicilylines.png";
import tshopImg from "../public/assets/projects/tshop.png";
import reservationImg from "../public/assets/projects/reservation-csharp.png";
import bonbonsImg from "../public/assets/projects/Bonbons2.png";
import { motion, useInView } from "framer-motion";
import ProjectsCard from "./ProjectsCard";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Site web Ellis-car",
    description: "Elementor Wordpress",
    image: blogImg,
    gitUrl: "https://www.ellis-car.fr/blog/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Site de Bubble Tea",
    description: "Projet développé en Laravel",
    image: bubbleImg,
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Logiciel de CRUD",
    description: "Logiciel de système de CRUD pour une liaison de traversée en bateau en C#",
    image: sicilylinesImg,
    gitUrl: "https://github.com/MaksY18/Mission2_SicilyLines",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Mini-RPG (The Hyrule Castle)",
    description: "Jeu bash en Typescript",
    image: rpgImg,
    gitUrl: "https://www.ellis-car.fr/blog/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Site web de e-commerce TShop",
    description: "Projet Front-end en HTML/CSS et Bootstrap",
    image: tshopImg,
    gitUrl: "https://github.com/LucPan1/TShop",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Chat local",
    description: "Système de chat en socket.io",
    image: chatImg,
    gitUrl: "https://www.ellis-car.fr/blog/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Code De Luhn",
    description: "Algorithme de Luhn en Typescript",
    image: luhnImg,
    gitUrl: "https://www.ellis-car.fr/blog/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Réservation de voyage",
    description: "Logiciel de réservation de voyage en C#",
    image: reservationImg,
    gitUrl: "https://github.com/LucPan1/Logiciel_Reservation-Voyage",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Site de bonbons",
    description: "Système de CRUD de bonbons en HTML/CSS",
    image: bonbonsImg,
    gitUrl: "https://github.com/LucPan1/Projet-Bonbons",
    previewUrl: "/",
  },
];

const Projects = () => {
  return (
    <div className='min-h-screen'>
    
    <h2 className="text-center text-4xl font-bold text-white pt-72 mb-8 md:mb-12">
      Mes Projets
    </h2>
    <section id="projects">

    <ul className="grid md:grid-cols-3 gap-8 md:gap-5">
      {projectsData.map((project, index) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
      ))}
    </ul>
    </section>
    </div>
  
      )
    }
    


//     <div className="flex flex-wrap justify-center">
//   <Card className="py-4 mx-4 mb-8">
//     <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//       <div className="grid md:grid-cols-2 gap-8">
//         <h3 className="text-2xl tracking-wider text-center">
//           Site web Ellis-car
//         </h3>
//       </div>
//       {/* <p className="text-center pt-2">Création d'articles et amélioration de la mise en page avec
//               Elementor Wordpress dans l'onglet blog</p> */}
//     </CardHeader>
//     <CardBody className="overflow-visible py-2">
//       <div className="relative flex justify-between h-auto w-full rounded-xl p-4">
//         <a href="https://www.ellis-car.fr/blog/" target="_blank">
//           <Image
//             className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500 w-full h-auto"
//             src={blogImg}
//             alt="/"
//           />
//         </a>
//       </div>
//     </CardBody>
//   </Card>

//    <Card className="py-4 mx-4 mb-8">
//      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//       <div className="grid md:grid-cols-2 gap-8">
//         <h3 className="text-2xl tracking-wider text-center">
//            Site de Bubble Tea
//          </h3>
//        </div>
//        {/* <p className="text-center pt-2">Création d'articles et amélioration de la mise en page avec
//                Elementor Wordpress dans l'onglet blog</p> */}
//      </CardHeader>
//      <CardBody className="overflow-visible py-2">
//        <div className="relative flex justify-between h-auto w-full rounded-xl p-4">
//          <a href="" target="_blank">
//            <Image
//           className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500 w-full h-auto"
//             src={bubbleImg}
//             alt="/"
//           />
//         </a>
//       </div>
//     </CardBody>
//   </Card>

//   <Card className="py-4 mx-4 mb-8">
//         <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//           <div className="grid md:grid-cols-2 gap-8">
//             <h3 className="text-2xl tracking-wider text-center">
//             Logiciel de réservation de bateau
//             </h3>
            
//           </div>
//           <p className="text-center pt-2">Logiciel de système de CRUD pour une
//               liaison de traversée en bateau en C#</p>
//         </CardHeader>
//         <CardBody className="overflow-visible py-2">
//           <div className="relative flex justify-between h-auto w-full rounded-xl p-4">
//           <a href="https://github.com/MaksY18/Mission2_SicilyLines"
//               target="_blank">
//             <Image
//               className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500 w-78 h-68 ml-24"
//               src={sicilylinesImg}
//               alt="/"
//             />
//             </a>
//           </div>
//         </CardBody>
//       </Card>

//   <Card className="py-4 mx-4 mb-8">
//     <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//       <div className="grid md:grid-cols-2 gap-8">
//         <h3 className="text-2xl tracking-wider text-center">
//           Jeu bash en Typescript
//         </h3>
//       </div>
//       {/* <p className="text-center pt-2">Création d'articles et amélioration de la mise en page avec
//               Elementor Wordpress dans l'onglet blog</p> */}
//     </CardHeader>
//     <CardBody className="overflow-visible py-2">
//       <div className="relative flex justify-between h-auto w-full rounded-xl p-4">
//         <a href="" target="_blank">
//           <Image
//             className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500 w-full h-auto"
//             src={rpgImg}
//             alt="/"
//           />
//         </a>
//       </div>
//     </CardBody>
//   </Card>

//   <Card className="py-4 mx-4 mb-8">
//         <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//           <div className="grid md:grid-cols-2 gap-8">
//             <h3 className="text-2xl tracking-wider text-center">
//             Site web de e-commerce TShop
//             </h3>
            
//           </div>
//           {/* <p className="text-center pt-2">Projet fait en groupe pendant mes études et développé en partie
//               front-end avec HTML/CSS et bootstrap</p> */}
//         </CardHeader>
//         <CardBody className="overflow-visible py-2">
//           <div className="relative flex justify-between h-auto w-full rounded-xl p-4 pl-14">
//           <a href="https://github.com/LucPan1/TShop" target="_blank">
//             <Image
//               className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500 w-full h-auto"
//               src={tshopImg}
//               alt="/"
//             />
//             </a>
//           </div>
//         </CardBody>
//       </Card>

//   <Card className="py-4 mx-4 mb-8">
//     <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//       <div className="grid md:grid-cols-2 gap-8">
//         <h3 className="text-2xl tracking-wider text-center">
//           Système de Chat avec socket.io
//         </h3>
//       </div>
//       {/* <p className="text-center pt-2">Création d'articles et amélioration de la mise en page avec
//               Elementor Wordpress dans l'onglet blog</p> */}
//     </CardHeader>
//     <CardBody className="overflow-visible py-2">
//       <div className="relative flex justify-between h-auto w-full rounded-xl p-4">
//         <a href="" target="_blank">
//           <Image
//             className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500 w-full h-auto"
//             src={chatImg}
//             alt="/"
//           />
//         </a>
//       </div>
//     </CardBody>
//   </Card>

//   <Card className="py-4 mx-4 mb-8">
//     <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//       <div className="grid md:grid-cols-2 gap-8">
//         <h3 className="text-2xl tracking-wider text-center">
//         Code De Luhn
//         </h3>
//       </div>
//       {/* <p className="text-center pt-2">Création d'articles et amélioration de la mise en page avec
//               Elementor Wordpress dans l'onglet blog</p> */}
//     </CardHeader>
//     <CardBody className="overflow-visible py-2">
//       <div className="relative flex justify-between h-auto w-full rounded-xl p-4">
//         <a href="" target="_blank">
//           <Image
//             className="rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-500 w-full h-auto"
//             src={luhnImg}
//             alt="/"
//           />
//         </a>
//       </div>
//     </CardBody>
//   </Card>
// </div>
//   )
// }

export default Projects