import { useEffect } from "react";
import {
    FiCalendar,
    FiClock,
    FiGlobe,
    FiStar,
    FiTag,
    FiX,
} from "react-icons/fi";

function MovieModal({ show, onClose }) {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        document.body.classList.add("modal-open");

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.classList.remove("modal-open");
        };
    }, [onClose]);

    const title = show.name || "Untitled";

    const image =
        show.image?.original ||
        show.image?.medium ||
        "https://placehold.co/600x850/151515/ffffff?text=No+Image";

    const rating = show.rating?.average || "N/A";

    const releaseDate = show.premiered
        ? new Date(show.premiered).toLocaleDateString(
            "en-US",
            {
                year: "numeric",
                month: "long",
                day: "numeric",
            },
        )
        : "N/A";

    const year = show.premiered
        ? new Date(show.premiered).getFullYear()
        : "N/A";

    const genres =
        show.genres && show.genres.length > 0
            ? show.genres.join(", ")
            : "N/A";

    const language = show.language || "N/A";
    const status = show.status || "N/A";
    const runtime = show.runtime
        ? `${show.runtime} min`
        : "N/A";

    const officialSite = show.officialSite;

    const summary =
        show.summary || "<p>No summary available.</p>";

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            role="presentation"
            onMouseDown={handleBackdropClick}
            className="fixed inset-0 z-1000 flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="movie-modal-title"
                className="relative w-full max-w-245 overflow-hidden rounded-[18px] border border-white/10 bg-[#101010] shadow-2xl shadow-black/70 animate-[modalIn_.25s_ease]"
            >
                <button
                    type="button"
                    aria-label="Close movie details"
                    onClick={onClose}
                    className="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full border border-white/10 bg-black/65 text-xl text-white transition hover:bg-white/10"
                >
                    <FiX />
                </button>

                <div className="max-h-[calc(100vh-24px)] overflow-y-auto sm:max-h-[calc(100vh-50px)]">
                    <div className="grid md:grid-cols-[300px_1fr]">
                        <div className="h-60 min-h-60 bg-[#151515] sm:h-70 sm:min-h-70 md:h-auto md:min-h-120">
                            <img
                                src={image}
                                alt={`${title} poster`}
                                className="h-full w-full object-cover object-center md:min-h-120"
                            />
                        </div>

                        <div className="relative p-6 sm:p-8 md:p-10">
                            <span className="text-[10px] font-bold tracking-[2px] text-accent">
                                SHOW DETAILS
                            </span>

                            <h2
                                id="movie-modal-title"
                                className="mt-3 pr-10 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
                            >
                                {title}
                            </h2>

                            <div className="mt-4 inline-flex items-center gap-1.5 text-accent">
                                <FiStar />

                                <strong className="text-sm">
                                    {rating}
                                </strong>

                                <span className="text-xs text-text-muted">
                                    / 10
                                </span>
                            </div>

                            <div className="mt-7 grid grid-cols-1 gap-4 border-y border-white/10 py-6 sm:grid-cols-2">
                                <div className="flex items-start gap-2.5 text-accent">
                                    <FiCalendar className="mt-0.5 shrink-0" />

                                    <div className="min-w-0">
                                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                                            Release Date
                                        </span>

                                        <strong className="mt-1 block break-words text-[13px] leading-5 text-white">
                                            {releaseDate} ({year})
                                        </strong>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2.5 text-accent">
                                    <FiTag className="mt-0.5 shrink-0" />

                                    <div className="min-w-0">
                                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                                            Genre
                                        </span>

                                        <strong className="mt-1 block break-words text-[13px] leading-5 text-white">
                                            {genres}
                                        </strong>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2.5 text-accent">
                                    <FiGlobe className="mt-0.5 shrink-0" />

                                    <div className="min-w-0">
                                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                                            Language
                                        </span>

                                        <strong className="mt-1 block break-words text-[13px] leading-5 text-white">
                                            {language}
                                        </strong>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2.5 text-accent">
                                    <FiClock className="mt-0.5 shrink-0" />

                                    <div className="min-w-0">
                                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                                            Runtime
                                        </span>

                                        <strong className="mt-1 block break-words text-[13px] leading-5 text-white">
                                            {runtime}
                                        </strong>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2.5 text-accent">
                                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent shadow-[0_0_0_4px_rgba(245,183,0,.1)]" />

                                    <div className="min-w-0">
                                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                                            Status
                                        </span>

                                        <strong className="mt-1 block break-words text-[13px] leading-5 text-white">
                                            {status}
                                        </strong>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="font-display text-base font-semibold">
                                    About the show
                                </h3>

                                <div
                                    className="mt-2 text-sm leading-7 text-text-secondary"
                                    dangerouslySetInnerHTML={{
                                        __html: summary,
                                    }}
                                />
                            </div>

                            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                                {officialSite && (
                                    <a
                                        href={officialSite}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex min-h-12 items-center justify-center rounded-lg border border-accent bg-accent px-5 text-sm font-bold text-[#111] transition hover:-translate-y-0.5 hover:bg-[#ffc51c]"
                                    >
                                        Official Website
                                    </a>
                                )}

                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 text-sm font-bold text-white transition hover:bg-white/10"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieModal;