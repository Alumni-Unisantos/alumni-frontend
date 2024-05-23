import Link from "next/link";

const SignInForm = () => {
  return (
    <div className="section zubuz-extra-section">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Bem vindo</h2>
        </div>
        <div className="zubuz-account-wrap">
          <form>
            <div className="zubuz-account-field">
              <label>E-mail</label>
              <input type="email" placeholder="informe seu e-mail" />
            </div>
            <div className="zubuz-account-field">
              <label>Senha</label>
              <input type="password" placeholder="Informe sua senha" />
            </div>
            <div className="zubuz-account-checkbox-wrap">
              <Link className="forgot-password" href="reset-password">
                Recuperar Senha?
              </Link>
            </div>
            <button id="zubuz-account-btn" type="submit">
              <span>Login</span>
            </button>
            <div className="zubuz-or">
              <p>OU</p>
            </div>
            <div className="zubuz-account-bottom">
              <p>
                Ainda não possui cadastro? <Link href="sign-up">Cadastre-se aqui</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
