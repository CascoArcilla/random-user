import '../styles/Register.css';

export default function Register({ onChangeReg }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className='register-content-form'>
      <h2>Please intro to fields for register</h2>
      <form className='register-form' onSubmit={handleSubmit}>
        <div className='register-form-labels'>
          <label>E-mail: <br /><input type="email" /></label>
          <label>Password: <br /><input type="password" /></label>
        </div><br />
        <div className='register-form-buttons'>
          <button type='submit'>Registrar</button>
          <button type='button' onClick={onChangeReg} >Login</button>
        </div>
      </form>
    </div>
  )
}