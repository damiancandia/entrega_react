import { MenuIcon } from "lucide-react"
import CardWidget from "../CardWidget"

function NavBar() {
    return (
        <header className="flex justify-between p-4 shadow-md bg-slate-400">
            <h1 id="titulo" className="encabezado">Pim Pollo</h1>
            <nav className="flex items-center gap-4">
                <div className="items-center hidden md:flex md:gap-4">
                    <a href="#">home</a>
                    <a href="#">productos</a>
                    <a href="#">contacto</a>
                </div>
                <MenuIcon width={20} height={20} className="md:hidden" />
                <CardWidget/>
            </nav>
        </header>
    )
}

export default NavBar