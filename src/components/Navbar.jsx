import { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const navLinkClass = ({ isActive }) =>
        `relative py-3 text-sm font-semibold transition-colors duration-200 md:py-7 ${isActive
            ? "text-white md:after:absolute md:after:bottom-4 md:after:left-0 md:after:right-0 md:after:h-0.5 md:after:rounded-full md:after:bg-accent"
            : "text-text-secondary hover:text-white"
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/90 backdrop-blur-xl">
            <div className="mx-auto flex min-h-17 max-w-310 items-center justify-between gap-7 px-3.5 sm:px-5 lg:px-5">
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight sm:text-xl"
                >
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-accent text-base font-bold text-[#111] sm:size-8.5">
                        M
                    </span>

                    <span>MovieExplorer</span>
                </Link>

                <nav
                    className={`absolute left-3.5 right-3.5 top-[68px] flex-col gap-0 rounded-xl border border-white/10 bg-[#0f0f0f]/98 p-2 shadow-2xl shadow-black/50 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${menuOpen ? "flex" : "hidden"
                        }`}
                >
                    <NavLink
                        to="/"
                        onClick={closeMenu}
                        className={navLinkClass}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/movies"
                        onClick={closeMenu}
                        className={navLinkClass}
                    >
                        Movies
                    </NavLink>

                    <Link
                        to="/movies"
                        onClick={closeMenu}
                        className="mt-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-4 text-xs font-bold text-[#111] transition hover:-translate-y-px hover:bg-[#ffc51c] md:mt-0"
                    >
                        <FiSearch />
                        Explore Movies
                    </Link>
                </nav>

                <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((current) => !current)}
                    className="grid size-10 place-items-center rounded-lg border border-white/10 bg-surface text-xl text-white transition hover:border-white/20 md:hidden"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
        </header>
    );
}

export default Navbar;