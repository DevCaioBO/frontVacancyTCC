import "../../CSS/Header.css"
import LogoSenai from '../../assets/images/senaiLogo.png'
import searchIcon from '../../assets/images/searchIcon.png'
import PerfilIcon from '../../assets/images/perfilPageIcon.png'
import { Outlet, Link } from "react-router-dom";



export default function Header() {

    return (
        <div className="senai-initial-page-container">
            <div className="box-align-cotent-white">
                <div className="menu-container-icon">menu</div>
                <div className="box-senai-logo-alignment">
                    <img src={LogoSenai} alt="" />
                </div>
                <div className="search-icon-button-course" id="search-icon-button-course-responsive" >
                    <img src={searchIcon} alt="" />
                </div>
                <div className="box-navigation-support-acess" id="desktop-none-navigation" >
                    <nav>
                        <ul className="box-support-acess-children">
                            <li><Link className="link-to-support-acess" to={"/Cursos"}>Cursos</Link></li>
                            <li><Link className="link-to-support-acess" to={"/ProcessoSeletivo"}> Processo seletivo</Link></li>
                            <li><Link className="link-to-support-acess" to={"/FaleConosco"}>Fale Conosco</Link></li>
                            <div className="box-students-acess-perfil-page" id="box-students-acess-perfil-page-responsive">
                                <div className="perfil-icon-student">
                                    <img src={PerfilIcon} alt="" />
                                    <button><Link className="link-to-login-page" to={"/Alunos"}>Alunos</Link></button>
                                </div>

                            </div>

                        </ul>
                    </nav>
                </div>

                <div className="search-icon-button-course" id="desktopModeIconSearchCourse" >
                    <img src={searchIcon} alt="" />
                </div>

                <div className="box-students-acess-perfil-page" id="destopModeIconStudent" >
                    <div className="perfil-icon-student">
                        <img src={PerfilIcon} alt="" />
                        <button><Link className="link-to-login-page" to={"/Alunos"}>Alunos</Link></button>
                    </div>

                </div>
            </div>

        </div>
    )
}