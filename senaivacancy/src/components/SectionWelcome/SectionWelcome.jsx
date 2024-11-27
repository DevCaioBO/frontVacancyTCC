
import '../../CSS/SectionWelcome.css'
import StudentExample from '../../assets/images/StudentExample.png'
import Ellipse1 from '../../assets/images/Ellipse1.png'
export default function SectionWelcome() {
    return (
        <section className="container-first-section-welcome">
            <div className='student-view-example-design'>
                <div className='minicreita'>
                    <img src={StudentExample} alt="" />
                    <img src={Ellipse1} alt="" />
                    </div>
                  
         
            </div>
            <div className="decoration-red-radius-one">
                <span className="box-red-radius-decoration">
                   
                    </span>
            </div>
            <div className="decoration-red-radius-two">
                <div className='box-welcome-message-p-aligment'>
                    <p id='info-senai-desktop-none-welcome'><span id='welcome-warning-senai'>Bem-Vindo ao SENAI!</span>
                    <>Transformando</> <>Vidas e Carreiras</>
                    </p>
                    <p id='info-senai-desktop-none'>
                        No SENAI, nossa missão é capacitar profissionais para o mercado de trabalho,
                        promovendo a educação técnica de qualidade.
                        Valorizamos a inovação, a ética e o compromisso com o desenvolvimento sustentável.</p>
                </div>
                
                <span></span>
        
            </div>
            <div className='line-decoration-gray-one' id='line-decoration-gray-one-desktop-view'>
                <hr />
                <span className='ball-gray'></span>
            </div>
        </section>
    )
}