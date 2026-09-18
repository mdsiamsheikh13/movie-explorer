import MovieCard from "./MovieCard";

function MovieGrid({ shows, onDetails }) {
    return (
        <div className="mt-11 grid grid-cols-1 gap-4 min-[481px]:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {shows.map((show) => (
                <MovieCard
                    key={show.id}
                    show={show}
                    onDetails={onDetails}
                />
            ))}
        </div>
    );
}

export default MovieGrid;