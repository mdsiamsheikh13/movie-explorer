import Hero from "../components/Hero";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Hero />

            <section className="bg-[#0d0d0d] py-20 sm:py-25 lg:py-27.5">
                <div className="mx-auto max-w-310 px-3.5 sm:px-5 lg:px-5">
                    <div className="max-w-180">
                        <span className="text-[10px] font-bold tracking-[2px] text-accent sm:text-[11px]">
                            WHY MOVIEEXPLORER
                        </span>

                        <h2 className="mt-3.5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[52px]">
                            Everything you need to discover your next watch
                        </h2>

                        <p className="mt-4.5 max-w-170 text-sm leading-7 text-text-secondary sm:text-base">
                            Explore thousands of movies and shows, search for your
                            favorites, and discover detailed information about every title.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-14">
                        <article className="min-h-60 rounded-[14px] border border-white/10 bg-surface p-7 transition duration-300 hover:-translate-y-1.5 hover:border-accent/40">
                            <div className="text-xs font-bold tracking-wider text-accent">
                                01
                            </div>

                            <h3 className="mt-9 font-display text-xl font-semibold">
                                Explore Shows
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-text-secondary">
                                Browse a huge collection of movies and TV shows and discover
                                something new to watch.
                            </p>
                        </article>

                        <article className="min-h-60 rounded-[14px] border border-white/10 bg-surface p-7 transition duration-300 hover:-translate-y-1.5 hover:border-accent/40">
                            <div className="text-xs font-bold tracking-wider text-accent">
                                02
                            </div>

                            <h3 className="mt-9 font-display text-xl font-semibold">
                                Search Titles
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-text-secondary">
                                Quickly search for your favorite movie or show and find
                                relevant results instantly.
                            </p>
                        </article>

                        <article className="min-h-60 rounded-[14px] border border-white/10 bg-surface p-7 transition duration-300 hover:-translate-y-1.5 hover:border-accent/40">
                            <div className="text-xs font-bold tracking-wider text-accent">
                                03
                            </div>

                            <h3 className="mt-9 font-display text-xl font-semibold">
                                View Details
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-text-secondary">
                                Check ratings, genres, release dates, runtime, status,
                                language, and full summaries.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 lg:py-25">
                <div className="mx-auto max-w-310 px-3.5 sm:px-5 lg:px-5">
                    <div className="rounded-[20px] border border-white/10 bg-[linear-gradient(90deg,rgba(245,183,0,.08),transparent_65%)] bg-surface px-6 py-16 text-center sm:px-8">
                        <span className="text-[10px] font-bold tracking-[2px] text-accent">
                            START EXPLORING
                        </span>

                        <h2 className="mx-auto mt-3.5 max-w-175 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[54px]">
                            Your next favorite story is waiting.
                        </h2>

                        <p className="mt-4 text-sm text-text-secondary sm:text-base">
                            Browse the collection and find something worth watching tonight.
                        </p>

                        <Link
                            to="/movies"
                            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 text-sm font-bold text-[#111] transition hover:-translate-y-0.5 hover:bg-[#ffc51c]"
                        >
                            Explore Movies
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;