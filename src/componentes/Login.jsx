import '../styles/Login.css'

export default function Login({ onChangeLog }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Ha pulsado entrar");
  }

  return (
    <div className='login-content-form'>
      <h2>Welcome to Login, please intro to fields</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='login-form-labels'>
          <label>E-mail: <br /><input type="email" /></label>
          <label>Password: <br /><input type="password" /></label>
        </div><br />
        <div className='login-form-buttons'>
          <button type='submit'>Entrar</button>
          <button type='button' onClick={onChangeLog} >Registrar</button>
        </div>
      </form>
    </div>
  )
}