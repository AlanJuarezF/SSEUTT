import './InicioPage.css'

export default function InicioPage() {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand">Sistema de Seguimiento de Egresados UTT</a>
          <a className="navbar-brand" href="">Iniciar Sesión</a>
        </div>
      </nav>
      <section id="hero">
        <div className="container">
          <div className="row main-hero-content">
            <div className="col-md-6">
              <h1>Sistema de Seguimiento de Egresados UTT</h1>
              <p>
                El SSEUTT es el sistema que permite el análisis del desempeño e impacto de los egresados en el
                sector productivo.
              </p>
              <div className="hero-buttons d-flex justify-content-center mb-4 mb-lg-0 mb-sm-4">
                <a href="#about" className="btn btn-outline-primary btn-white">Conocer más!</a>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-center flex-wrap text-center">
              <a href="https://www.freepik.com/vectorjuice" className="text-light">
                <img src="https://sse.delicias.tecnm.mx/image/school/students.png" className="img-fluid" alt="img generica" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <div className="row section-title justify-content-center">
            <h2>¿Por qué es importante?</h2>
          </div>
          <div className="row justify-content-center text-center mt-5">
            <div className="col-md-4">
              <i className="fa-solid fa-chart-column mb-2"></i>
              <h3>Recabar información</h3>
              <p className="text-justify">
                Producir indicadores que permitan a la universidad conocer la situación del
                egresado de la institución.
              </p>
            </div>
            <div className="col-md-4">
              <i className="fa-duotone fa-file-certificate mb-2"></i>
              <h3>Titulación</h3>
              <p className="text-justify">
                Tener las encuestas registradas es un requisito para que los alumnos puedan continuar su proceso de titulación.
              </p>
            </div>
            <div className="col-md-4">
              <i className="fa-light fa-headset mb-2"></i>
              <h3>Ofrecer soprte</h3>
              <p className="text-justify">
                Recabar y actualizar la información ayuda para proveer de elementos para la mejora continua y el desarrollo profesional de nuestros egresados en el sector productivo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="features">
        <div class="container">
          <div class="row section-title justify-content-center">
            <h2 class="section-title-heading">Información Importante</h2>
          </div>
          <div class="row mt-5">
            <div class="col-md-4">
              <div class="feature-block">
                <i class="lni lni-graduation w-100 text-center"></i>
                <h3 class="text-center">Perfil de Egreso</h3>
                <p class="text-justify">El perfil del egresado incluye un componente estable, es decir, la
                  información demográfica básica de cada individuo como
                  es, género, lugar de nacimiento, fecha de nacimiento, formación, antecedentes académicos,
                  estado civil, lugar de
                  residencia, etc. Y un componente dinámico, que es susceptible de cambiar a lo largo del
                  tiempo (lugar de residencia,
                  nivel de ingresos, estado civil, puestos de trabajo, otros estudios, etc.).</p>
              </div>
              <div class="feature-block mt-5">
                <i class="lni lni-apartment w-100 text-center"></i>
                <h3 class="text-center">Datos de empresas</h3>
                <p class="text-justify">Los empleadores y las organizaciones a las que representan, son una
                  parte importante al que sirven las instituciones de
                  educación superior tecnológica y, en consecuencia, la información que se deriva de estos
                  debe ser analizada y utilizada
                  para emprender acciones de mejora de los planes y programas de estudio y de la calidad
                  académica en general.</p>
              </div>
            </div>
            <div class="col-md-4 device d-flex justify-center align-items-center">
              <img class="survey-image" src="https://sse.delicias.tecnm.mx/image/school/survey.png" alt="" />
            </div>
            <div class="col-md-4">
              <div class="feature-block">
                <i class="lni lni-handshake w-100 text-center"></i>
                <h3 class="text-center">Desempeño del egresado</h3>
                <p class="text-justify">Las encuestas de egresados son útiles para recopilar datos sobre la
                  situación laboral de los egresados más recientes,
                  con el fin de obtener indicadores del desempeño profesional. Las encuestas también están
                  diseñadas para contribuir a las
                  explicaciones causales de la pertinencia de las condiciones de estudio y los servicios
                  proporcionados por las
                  instituciones de educación superior, así como del desempeño de los egresados en el mercado
                  laboral.</p>
              </div>
              <div class="feature-block mt-5">
                <div class="w-100 d-flex justify-content-center">
                  <i class="lni lni-thumbs-up"></i> <i class="lni lni-thumbs-down"></i>
                </div>
                <h3 class="text-center">Expectativas del egresado</h3>
                <p class="text-justify">Cumplido un determinado tiempo, esperamos que nuestros egresados vuelvan
                  a completar encuestas específicas para conocer si los conocimientos adquiridos han cumplido
                  sus expectativas en el mundo laboral, que les ayudó y que es lo que podría ayudar a las
                  futuras generaciones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div class="container">
          <div class="row d-flex flex-column align-items-center">
            <div class="social-icons text-light">
              <a class="text-decoration-none" title="Facebook" href="https://www.facebook.com/alan.juarezfragoso" target="_blank">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a class="text-decoration-none" title="Pagina Oficial" href="" target="_blank">
              <i class="fa-brands fa-facebook"></i>
              </a>
              <a class="text-decoration-none" title="Facebook" href="">
              <i class="fa-brands fa-facebook"></i>
              </a>
            </div>
            <div class="copyright text-center">
              <p>© 2023 Alan Jaurez</p>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}
