import "../../CSS/SectionViewRollCardsCourses.css"
import featuredCourse4 from '../../assets/images/exelCourse.png'
import featuredCourse5 from '../../assets/images/pythonCourse.png'
import featuredCourse6 from '../../assets/images/engenheiro.png'
export default function SectionViewRollCardsCourses() {
  return (
    <div className="container-view-courses">
            <div className='featured-course'>
                <p className="p-selling-courses"><span>Próximos Cursos </span> que vão <span>abrir</span> em <span> breve...</span></p>
              
            </div>
            <div className='cards-featured-course'>
                <div className='card-course1'>
                    <div className='image-course'>
                    </div>
                    <img src={featuredCourse4} alt="" />
                    <div className='p-div-course1'>
                    <p>Exel</p>
                        <p>Aprofundamento em recursos do pacote Office assim praticando a criação de planilhas</p>
                    </div>
                </div>
                <div className='card-course2 card-course6'>
                    <div className='image-course'>
                    </div>
                    <img src={featuredCourse5 } alt="" />
                    <div className='p-div-course1'>
                    <p>Python</p>
                        <p>Linguagens de programação LOG e Muitos Projetos!</p>
                    </div>
                        
                </div>
                <div className='card-course1'>
                    <div className='image-course'>
                    </div>
                    <img src={featuredCourse6} alt="" />
                    <div className='p-div-course1'>
                    <p>Máquinas</p>
                        <p>Cursos voltados a integir com maquinas e tecnologias que necessitam de proteção com todo apoio do SENAI</p>
                    </div>
                </div>

            </div>
        </div>
  )
}
