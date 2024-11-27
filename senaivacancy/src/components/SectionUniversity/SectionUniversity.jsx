import '../../CSS/SectionUniversity.css'
import location from '../../assets/images/location.png'
import certificado from '../../assets/images/certificado.svg'
export default function SectionUniversity() {
    return (
        <div className='container-section-university'>
            <div className="container-university-location">
                <h1>Garante seu Certificado!</h1>
                <p>Descubra oputunidades de apredizado e crescimento </p>
                <p>com nossos Cursos e garanta seu Certificado ao Final</p>
                   <p> do Curso </p>
            </div>
            <div className='certified'>
                <img src={certificado} alt="" />
            </div>
        </div>
    )
}