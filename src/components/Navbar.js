import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/institucional">Institucional</Link></li>
                <li><Link href="/noticias">Notícias</Link></li>
                <li><Link href="/seja-parceiro">Seja um Parceiro</Link></li>
            </ul>
            <Link href="/login"><button>Login</button></Link>
        </nav>
    );
}
