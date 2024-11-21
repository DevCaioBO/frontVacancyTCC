import '../../CSS/SectionWelcomeNameCoursesWarning.css'

export default function SectionWelcomeNameCoursesWarnings() {
    return (
        <div>
            <div className="box-warning-senai-info">
                <div className="box-warning-info1">
                    <p><span>Etapas</span> do Processo de Ensino no <span>SENAI</span></p>
                    <p>Nossos cursos são divididos em módulos que facilitam a assimilação do conteúdo.</p>
                </div>
                <div className="box-warning-info2">
                    <p>Acompanhamento e <span>Suporte</span> ao <span>Aluno</span></p>
                    <p>Oferecemos mentoria e suporte contínuo durante a formação.</p>
                </div>
                <div className="box-warning-info3">
                    <p><span>Integração</span> com o <span>Mercado</span> de <span>Trabalho</span></p>
                    <p>Facilitamos estágios e oportunidades de emprego para nossos alunos.</p>
                </div>
            </div>
            <div className='line-decoration-gray-one' id='line-decoration-gray-one-desktop-view'>
                <hr />
                <span className='ball-gray'></span>
            </div>
            
        </div>
    )
}