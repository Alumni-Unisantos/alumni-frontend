export default function Cadastro() {
    return (
        <main>
            <h2>Cadastro</h2>
            <form>
                <label>Nome Completo:</label>
                <input type="text" required />
                
                <label>Email:</label>
                <input type="email" required />
                
                <label>Senha:</label>
                <input type="password" required />
                
                <label>Confirme a Senha:</label>
                <input type="password" required />
                
                <button type="submit">Cadastrar</button>
            </form>
        </main>
    );
}
