import Link from 'next/link';

export default function Login() {
    return (
        <main>
            <h2>Login</h2>
            <form>
                <label>Email:</label>
                <input type="email" required />
                
                <label>Senha:</label>
                <input type="password" required />
                
                <button type="submit">Entrar</button>
            </form>
            <p>Não tem uma conta? <Link href="/cadastro">Cadastre-se aqui</Link></p>
            <p><Link href="/recuperacao-senha">Esqueceu sua senha?</Link></p>
        </main>
    );
}
