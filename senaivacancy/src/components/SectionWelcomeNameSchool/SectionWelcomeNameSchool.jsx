import '../../CSS/SectionWelcomeNameSchool.css'
import Mapping from "../../assets/images/Rectangle.png"

export default function SectionWelcomeNameSchool(){
    return(
    <div className='container-nameSchool'>
        <div className='column-save'>
        <div className='name-school-senai'>
            <div>
                <p className='p-name-school-senai'>Senai de Santo Amaro - Senai suiço brasileira</p>
                <p className='p-name-school-senai2'>Escola SENAI Suiço brasileira</p>
                <p className='p-name-school-senai3'>"Paulo Ernesto Tolle"</p>
            </div>
            <div className='buttons-view-courses'>
                <button className='button-view-courses1'>Ver Cursos</button>
                <button className='button-view-courses2'>Ver Fale Conosco</button>
            </div>
        </div>
        <div className='container-nameSchoolMap'>
            <img src={Mapping} alt="" />
            <div>
                
            </div>
        </div>
        </div>
        <div className='container-boost'>
            <p>Cursos de Qualidade para Impulsionar<br/>sua Carreira Profissional no Senai</p>
          
        </div>
       
    </div>
    )
}