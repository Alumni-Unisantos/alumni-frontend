import Link from "next/link";

const SignUpForm = () => {
  return (
    <div className="section zubuz-extra-section">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Cadastro de Usuário</h2>
        </div>
        <div className="zubuz-account-wrap">
          <form action="#">
            <div className="row">
              <div className="zubuz-account-field col">
                <label>Nome</label>
                <input type="text" placeholder="Informe o nome completo" />
              </div>
              <div className="zubuz-account-field col">
                <label>E-mail</label>
                <input type="email" placeholder="Informe o e-mail" />
              </div>
            </div>
            <div className="row">
              <div className="zubuz-account-field col">
                <label>RM</label>
                <input type="text" placeholder="Informe o nome RM" />
              </div>
              <div className="zubuz-account-field col">
                <label>Telefone</label>
                <input type="text" placeholder="Informe o número para contato" />
              </div>
            </div>
            <div className="row">
              <div className="zubuz-account-field col">
                <label>CPF</label>
                <input type="text" placeholder="Informe o número de CPF" />
              </div>
              <div className="zubuz-account-field col">
                <label>Conclusão do Curso</label>
                <input type="text" placeholder="Informe o ano de conclusão" />
              </div>
            </div>
            <div>
              <div className="zubuz-account-field col">
                <label>Curso</label>
                <input type="text" placeholder="Informe o curso" />
              </div>
            </div>
            <div className="row">
              <div className="zubuz-account-field col">
                <label>Senha</label>
                <input type="text" placeholder="Informe a senha" />
              </div>
              <div className="zubuz-account-field col">
                <label>Repetir Senha</label>
                <input type="text" placeholder="Repita a senha" />
              </div>
            </div>
            <button id="zubuz-account-btn" type="submit">
              <span>Cadastrar</span>
            </button>
            <div className="zubuz-or">
              <p>OU</p>
            </div>
            <div className="zubuz-account-bottom">
              <p>
                Já possui uma conta? <Link href="sign-in">Faça o login aqui</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
