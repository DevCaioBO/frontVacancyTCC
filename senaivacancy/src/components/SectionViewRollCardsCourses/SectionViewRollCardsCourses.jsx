
import featuredCourse4 from '../../assets/images/exelCourse.png'
import featuredCourse5 from '../../assets/images/pythonCourse.png'
import featuredCourse6 from '../../assets/images/engenheiro.png'

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import "../../CSS/SectionViewRollCardsCourses.css"


// import required modules
import { EffectCards } from 'swiper/modules';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
export default function SectionViewRollCardsCourses() {
    return (
        <>


            <br />
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}

                className="mySwiper"

            >
                <SwiperSlide  ><div className="my-swiper-card">
                        <div className="img-swiper-roll">
                            <img src={featuredCourse4} alt="" />
                        </div>
                        <div className="entry-course">
                            <p>EXEL</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide  className="testes"><div className="my-swiper-card">
                        <div className="img-swiper-roll">
                            <img src={featuredCourse5} alt="" />
                        </div>
                        <div className="entry-course">
                            <p>PYTHON</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide  className="testes"><div className="my-swiper-card">
                        <div className="img-swiper-roll">
                            <img src={featuredCourse6} alt="" />
                        </div>
                        <div className="entry-course">
                            <p>MÁQUINAS</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide  ><div className="my-swiper-card">
                        <div className="img-swiper-roll">
                            <img src={featuredCourse4} alt="" />
                        </div>
                        <div className="entry-course">
                            <p>EXEL</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide  className="testes"><div className="my-swiper-card">
                        <div className="img-swiper-roll">
                            <img src={featuredCourse5} alt="" />
                        </div>
                        <div className="entry-course">
                            <p>PYTHON</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide  className="testes"><div className="my-swiper-card">
                        <div className="img-swiper-roll">
                            <img src={featuredCourse6} alt="" />
                        </div>
                        <div className="entry-course">
                            <p>MÁQUINAS</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide  ><div className="my-swiper-card">
                        <div className="img-swiper-roll">
                            <img src={featuredCourse4} alt="" />
                        </div>
                        <div className="entry-course">
                            <p>EXEL</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide  className="testes"><div className="my-swiper-card">
                        <div className="img-swiper-roll">
                            <img src={featuredCourse5} alt="" />
                        </div>
                        <div className="entry-course">
                            <p>PYTHON</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide  className="testes"><div className="my-swiper-card">
                        <div className="img-swiper-roll">
                            <img src={featuredCourse6} alt="" />
                        </div>
                        <div className="entry-course">
                            <p>MÁQUINAS</p>
                        </div>
                    </div></SwiperSlide>
                    


            </Swiper>

        </>
        // <div className="container-view-courses">
        //         <div className='featured-course'>
        //             <p className="p-selling-courses"><span>Próximos Cursos </span> que vão <span>abrir</span> em <span> breve...</span></p>

        //         </div>
        //         <div className='cards-featured-course'>
        //             <div className='card-course1'>
        //                 <div className='image-course'>
        //                 </div>
        //                 <img src={featuredCourse4} alt="" />
        //                 <div className='p-div-course1'>
        //                 <p>Exel</p>
        //                     <p>Aprofundamento em recursos do pacote Office assim praticando a criação de planilhas</p>
        //                 </div>
        //             </div>
        //             <div className='card-course2 card-course6'>
        //                 <div className='image-course'>
        //                 </div>
        //                 <img src={featuredCourse5 } alt="" />
        //                 <div className='p-div-course1'>
        //                 <p>Python</p>
        //                     <p>Linguagens de programação LOG e Muitos Projetos!</p>
        //                 </div>

        //             </div>
        //             <div className='card-course1'>
        //                 <div className='image-course'>
        //                 </div>
        //                 <img src={featuredCourse6} alt="" />
        //                 <div className='p-div-course1'>
        //                 <p>Máquinas</p>
        //                     <p>Cursos voltados a integir com maquinas e tecnologias que necessitam de proteção com todo apoio do SENAI</p>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
    )
}
