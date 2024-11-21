


import { useEffect } from 'react';
import Header from '../../components/Header/Header'
import SectionWelcome from '../../components/SectionWelcome/SectionWelcome';
import SectionWelcomeNameSchool from '../../components/SectionWelcomeNameSchool/SectionWelcomeNameSchool'
import SectionWelcomeNameCoursesView from '../../components/SectionWelcomeNameCoursesView/SectionWelcomeNameCoursesView.jsx'
import SectionWelcomeNameCoursesWarnings from '../../components/SectionWelcomeNameCoursesWarnings/SectionWelcomeNameCoursesWarnings.jsx'
import SectionUniversity from '../../components/SectionUniversity/SectionUniversity.jsx'
import SectionBlogAnounciment from '../../components/SectionBlogAnounciment/SectionBlogAnounciment.jsx'
import SectionViewRollCardsCourses from '../../components/SectionViewRollCardsCourses/SectionViewRollCardsCourses.jsx'
import FooterInitialPage from '../../components/FooterInitialPage/FooterInitialPage.jsx'
import '../../CSS/PageInitial.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function PageInitial() {

  useEffect(() => {
    // Define a altura da viewport de forma dinâmica
    const setVhProperty = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVhProperty();
    window.addEventListener('resize', setVhProperty);

    // Limpa o evento quando o componente desmonta
    return () => window.removeEventListener('resize', setVhProperty);
}, []);
  return (
    <div>

      <BrowserRouter>
        <div className='container'>
          <header>
            <Header />
          </header>
          <main>
            <SectionWelcome />
            <SectionWelcomeNameSchool/>
            <SectionWelcomeNameCoursesView/>
            <SectionWelcomeNameCoursesWarnings/>
            <SectionUniversity/>
            <SectionBlogAnounciment/>
            <SectionViewRollCardsCourses/>

           
          </main>
          <footer><FooterInitialPage/></footer>
        </div>
        <Routes>
          <Route path="/cursos" element={<div>Chama component de curso</div>} />
          <Route path="/ProcessoSeletivo" element={<div>Chama component de ProcessoSeletivo</div>} />
          <Route path="/FaleConosco" element={<div>Chama component de Fale Conosco</div>} />
          <Route path="/Alunos" element={<div>Chama component de Login</div>} />
        </Routes>
      </BrowserRouter>


    </div>


  )
}

export default PageInitial
