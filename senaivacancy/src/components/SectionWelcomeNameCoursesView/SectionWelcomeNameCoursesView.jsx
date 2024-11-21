import '../../CSS/SectionWelcomeNameCoursesView.css'
import featuredCourse1 from '../../assets/images/featuredCourse1.png'
import featuredCourse2 from '../../assets/images/DesignFeature.png'
import featuredCourse3 from '../../assets/images/Industria.png'
export default function SectionWelcomeNameCoursesView() {
    return (
        <div className="container-view-courses">
            <div className='featured-course'>
                <p>Cursos em Destaque</p>
                <p>100% presenciais</p>
            </div>
            <div className='cards-featured-course'>
                <div className='card-course1'>
                    <div className='image-course'>
                    </div>
                    <img src={featuredCourse1} alt="" />
                    <div className='p-div-course1'>
                        <p>Os cursos técnicos em tecnologia são voltados para quem deseja se especializar em áreas como informática, redes, programação, e desenvolvimento de software.</p>
                    </div>
                </div>
                <div className='card-course2'>
                    <div className='image-course'>
                    </div>
                    <img src={featuredCourse2 } alt="" />
                    {/* <div className='p-div-course1'>
                        <p>Design</p>
                        <p>Os cursos técnicos em Design são voltados para quem deseja desenvolver habilidades criativas e técnicas.</p>
                    </div> */}
                </div>
                <div className='card-course1'>
                    <div className='image-course'>
                    </div>
                    <img src={featuredCourse3} alt="" />
                    <div className='p-div-course1'>
                    <p>Industria</p>
                        <p>Robótica são projetados para aqueles que desejam explorar o fascinante mundo da automação e da tecnologia.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}