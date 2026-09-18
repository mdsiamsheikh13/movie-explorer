import { FiArrowRight, FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="relative flex min-h-150 overflow-hidden border-b border-white/10 sm:min-h-155 lg:min-h-170">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `
            linear-gradient(90deg, rgba(9,9,9,1) 0%, rgba(9,9,9,.9) 34%, rgba(9,9,9,.45) 70%, rgba(9,9,9,.9) 100%),
            linear-gradient(0deg, #090909 0%, rgba(9,9,9,.15) 45%, #090909 100%),
            url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2200&q=85")
          `,
                }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,rgba(245,183,0,.08),transparent_28%)]" />
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-310 items-center justify-between px-3.5 py-20 sm:px-5 sm:py-24 lg:px-5 lg:py-25">
                <div className="max-w-180">
                    <span className="text-[10px] font-bold tracking-[2px] text-accent sm:text-[11px]">
                        YOUR CINEMATIC DISCOVERY STARTS HERE
                    </span>

                    <h1 className="mt-4 font-display text-[48px] font-bold leading-[.98] tracking-[-3px] sm:text-[60px] lg:text-[88px]">
                        Discover Movies
                        <br />
                        <span className="text-accent">& Shows</span>
                    </h1>

                    <p className="mt-6 max-w-150 text-[15px] leading-7 text-[#c0c0c0] sm:text-[17px] sm:leading-7">
                        Explore an extensive collection of movies and television shows.
                        Search, discover, and find your next favorite story.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <Link
                            to="/movies"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-accent bg-accent px-5 text-sm font-bold text-[#111] transition hover:-translate-y-0.5 hover:bg-[#ffc51c]"
                        >
                            Explore Movies
                            <FiArrowRight />
                        </Link>

                        <Link
                            to="/movies"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                        >
                            <FiPlay />
                            Browse Collection
                        </Link>
                    </div>
                </div>

                <div className="hidden flex-col items-end gap-3 font-display text-[10px] font-semibold tracking-[3px] text-white/35 lg:flex">
                    <div className="mb-2 h-22.5 w-px bg-white/20" />
                    <span>DISCOVER</span>
                    <span>SEARCH</span>
                    <span>WATCH</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;