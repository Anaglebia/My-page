import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/readArticle.css";

// Definição da interface para o artigo
interface Article {
  title: string;
  description: string;
  keywords: string[];
  date: string;
  body: string;
  style: string;
}

// Tipando o parâmetro slug como string
const ReadArticle: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>(); // Tipando o slug como string

  // Verificando se o artigo existe e acessando o índice correto
  const article: Article | undefined = myArticles[parseInt(slug || "0") - 1]; // Usando parseInt para converter o slug para número

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article]);

  // Estilo dinâmico com o conteúdo do artigo
  const ArticleStyle = styled.div`
    ${article?.style}
  `;

  if (!article) {
    // Caso o artigo não seja encontrado, renderiza uma mensagem de erro
    return <div>Artigo não encontrado</div>;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${article.title} | ${INFO.main.title}`}</title>
        <meta name="description" content={article.description} />
        <meta name="keywords" content={article.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar />

        <div className="content-wrapper">
          <div className="read-article-logo-container">
            <div className="read-article-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="read-article-container">
            <div className="read-article-back">
              <img
                src="../back-button.png"
                alt="back"
                className="read-article-back-button"
                onClick={() => navigate(-1)}
              />
            </div>

            <div className="read-article-wrapper">
              <div className="read-article-date-container">
                <div className="read-article-date">
                  {article.date}
                </div>
              </div>

              <div className="title read-article-title">
                {article.title}
              </div>

              <div className="read-article-body">
                <ArticleStyle>{article.body}</ArticleStyle>
              </div>
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

export default ReadArticle;
