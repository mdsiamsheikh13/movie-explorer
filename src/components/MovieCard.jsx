import {
    FiCalendar,
    FiStar,
    FiTag,
} from "react-icons/fi";

function MovieCard({ show, onDetails }) {
    const title = show.name || "Untitled";

    const image =
        show.image?.medium ||
        show.image?.original ||
        "https://placehold.co/400x560/151515/ffffff?text=No+Image";

    const year = show.premiered
        ? new Date(show.premiered).getFullYear()
        : "N/A";

    const rating = show.rating?.average || "N/A";

    const genre =
        show.genres && show.genres.length > 0
            ? show.genres[0]
            : "Genre unavailable";

    return (
        <article className="group min-w-0 overflow-hidden rounded-[14px] border border-white/10 bg-surface transition duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-2xl hover:shadow-black/35">
            <div className="relative aspect-[2/2.85] overflow-hidden bg-[#151515]">
                <img
                    src={image}
                    alt={`${title} poster`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/90 via-transparent to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100 max-[480px]:opacity-100">
                    <button
                        type="button"
                        onClick={() => onDetails(show)}
                        className="w-full min-h-11 rounded-lg border-0 bg-accent text-xs font-bold text-[#111] transition hover:bg-[#ffc51c]"
                    >
                        See Details
                    </button>
                </div>

                <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/70 px-2.5 py-1.5 text-xs font-bold text-accent backdrop-blur-md">
                    <FiStar />
                    <span>{rating}</span>
                </div>
            </div>

            <div className="p-4">
                <h2
                    title={title}
                    className="overflow-hidden text-ellipsis whitespace-nowrap font-display text-lg font-semibold leading-tight"
                >
                    {title}
                </h2>

                <div className="mt-3 flex flex-wrap gap-2.5 text-[11px] text-text-muted">
                    <span className="inline-flex items-center gap-1">
                        <FiCalendar />
                        {year}
                    </span>

                    <span className="inline-flex items-center gap-1">
                        <FiTag />
                        {genre}
                    </span>
                </div>

                <button
                    type="button"
                    onClick={() => onDetails(show)}
                    className="mt-4 flex w-full items-center justify-between border-0 bg-transparent p-0 text-left text-[13px] font-bold text-white"
                >
                    <span>See Details</span>

                    <span className="text-lg text-accent transition group-hover:translate-x-1">
                        →
                    </span>
                </button>
            </div>
        </article>
    );
}

export default MovieCard;