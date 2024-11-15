export default function RecuperacaoSenha() {
    return (
        <main>
            <h2>Recuperação de Senha</h2>
            <form>
                <label>Digite seu email para redefinir a senha:</label>
                <input type="email" required />
                
                <button type="submit">Enviar Link de Recuperação</button>
            </form>
        </main>
    );
}
