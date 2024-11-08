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
                <label>Nome da Mãe ou Pai</label>
                <input type="text" placeholder="Informe o nome completo (mãe ou pai)" />
              </div>
              <div className="zubuz-account-field col">
                <label>Telefone</label>
                <input type="text" placeholder="Informe um número para contato" />
              </div>
            </div>
            <div className="row">
              <div className="zubuz-account-field col">
                <label>CPF</label>
                <input type="text" placeholder="Informe o número de CPF" />
              </div>
              <div className="zubuz-account-field col">
                <label>Data de Nascimento</label>
                <input type="text" placeholder="Informe a data de Nascimento" />
              </div>
            </div>
            <div className="row">
            <div className="zubuz-account-field col">
              <label>Última Formação</label>
              <input type="text" placeholder="Informe o tipo de graduação" />
            </div>
            <div className="zubuz-account-field col">
              <label>Ano de Curso</label>
              <input type="text" placeholder="Informe o ano da última graduação" />
            </div>
            </div>
            <div className="row">
              <div className="zubuz-account-field col">
              <label>Linkedin</label>
              <input type="text" placeholder="Informe o perfil no linkedin" />
              </div>
            </div>
            <div>
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
