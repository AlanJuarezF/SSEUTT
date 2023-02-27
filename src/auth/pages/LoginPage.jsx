import './LoginPage.css';
export const LoginPage = () => {
  return (
    <>
      <nav>
        <div className="Contenedor">
          <div className="title">
            <h1>SSEUTT</h1>
          </div>
        </div>
      </nav>
      <form className="form">
        <h1 className="title" >SSEUTT <i className="fa-solid fa-briefcase"></i> </h1>
        <input className="frm-inp" type="text" name="usuario" placeholder="Usuario" />
        <input className="frm-inp" type="password" name="contraseña" placeholder="Contraseña" />
        <input className="frm-sub btn btn-success" type="submit" value="INICIAR SESIÓN" />
      </form>
    </>
  )
}
