import {
    FiArrowUpRight,
    FiGithub,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-[#070707]">
            <div className="mx-auto max-w-310 px-3.5 sm:px-5 lg:px-5">
                <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:gap-12 lg:py-17.5">
                    <div className="max-w-100 sm:col-span-2 lg:col-span-1">
                        <Link
                            to="/"
                            className="flex w-fit items-center gap-2.5 font-display text-lg font-bold sm:text-xl"
                        >
                            <span className="grid size-8.5 place-items-center rounded-lg bg-accent text-base font-bold text-[#111]">
                                M
                            </span>

                            <span>MovieExplorer</span>
                        </Link>

                        <p className="mt-4 max-w-100 text-sm leading-7 text-text-secondary">
                            Discover movies and TV shows, explore new stories, and find
                            something worth watching.
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-3">
                        <h3 className="mb-1 text-[13px] font-semibold">
                            Navigation
                        </h3>

                        <Link
                            to="/"
                            className="text-[13px] text-text-secondary transition hover:text-accent"
                        >
                            Home
                        </Link>

                        <Link
                            to="/movies"
                            className="text-[13px] text-text-secondary transition hover:text-accent"
                        >
                            Movies
                        </Link>
                    </div>

                    <div className="flex flex-col items-start gap-3">
                        <h3 className="mb-1 text-[13px] font-semibold">
                            Explore
                        </h3>

                        <Link
                            to="/movies"
                            className="inline-flex items-center gap-1.5 text-[13px] text-text-secondary transition hover:text-accent"
                        >
                            Movie Collection
                            <FiArrowUpRight />
                        </Link>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-[13px] text-text-secondary transition hover:text-accent"
                        >
                            GitHub
                            <FiGithub />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-2.5 border-t border-white/10 py-5 text-[11px] text-text-muted sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {currentYear} MovieExplorer. All rights reserved.
                    </p>

                    <p>Data powered by TVMaze</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;