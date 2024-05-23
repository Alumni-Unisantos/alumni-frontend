const ResetPasswordForm = () => {
  return (
    <div className="section zubuz-extra-section">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Recuperação de Senha</h2>
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
            <button id="zubuz-account-btn" type="submit">
              <span>Alterar senha</span>
            </button>
            <div className="zubuz-account-bottom m-0">
              <p>
                Se você não solicitou um link de recuperação de senha, ignore-o.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
