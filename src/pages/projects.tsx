import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Projects | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div className="projects-logo-container">
            <div className="projects-logo">
              <Logo width={46} />
            </div>
          </div>
          <div className="projects-container">
            <div className="title projects-title">
              Coisas que fiz tentando deixar minha marca no universo.
            </div>

            <div className="subtitle projects-subtitle">
              Trabalhei em uma variedade de projetos ao longo dos anos e estou
              orgulhoso do progresso que fiz. Muitos desses projetos são de
              código aberto e estão disponíveis para outros explorarem e
              contribuírem. Se você estiver interessado em algum dos projetos em
              que trabalhei, sinta-se à vontade para verificar o código e
              sugerir quaisquer melhorias ou aprimoramentos que você possa ter
              em mente. Colaborar com outras pessoas é uma ótima maneira de
              aprender e crescer, e estou sempre aberto a novas ideias e
              feedback.
            </div>

            <div className="projects-list">
              <AllProjects />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
