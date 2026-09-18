import { useEffect, useState } from "react";

import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import MovieGrid from "../components/MovieGrid";
import MovieModal from "../components/MovieModal";
import SearchBar from "../components/SearchBar";

const ALL_SHOWS_API = "https://api.tvmaze.com/shows";

function Movies() {
    const [shows, setShows] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedShow, setSelectedShow] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        const loadShows = async () => {
            setLoading(true);
            setError(false);

            try {
                let url = ALL_SHOWS_API;

                if (searchQuery.trim()) {
                    url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
                        searchQuery.trim(),
                    )}`;
                }

                const response = await fetch(url, {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch shows");
                }

                const data = await response.json();

                const formattedShows = searchQuery.trim()
                    ? data.map((item) => item.show)
                    : data;

                setShows(formattedShows);
            } catch (fetchError) {
                if (fetchError.name !== "AbortError") {
                    setError(true);
                    setShows([]);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        const timer = setTimeout(
            loadShows,
            searchQuery.trim() ? 400 : 0,
        );

        return () => {
            clearTimeout(timer);
            controller.abort();
        };
    }, [searchQuery]);

    const handleSearch = (value) => {
        setSearchQuery(value);
    };

    const handleRetry = () => {
        setSearchQuery((currentQuery) => `${currentQuery}`);
        setLoading(true);
        setError(false);
    };

    const handleOpenModal = (show) => {
        setSelectedShow(show);
    };

    const handleCloseModal = () => {
        setSelectedShow(null);
    };

    return (
        <section className="min-h-[calc(100vh-68px)] py-14 sm:py-18 lg:py-20">
            <div className="mx-auto max-w-310 px-3.5 sm:px-5 lg:px-5">
                <div className="max-w-195">
                    <span className="text-[10px] font-bold tracking-[2px] text-accent sm:text-[11px]">
                        MOVIE LIBRARY
                    </span>

                    <h1 className="mt-3.5 font-display text-4xl font-bold leading-tight tracking-[-2px] sm:text-5xl lg:text-[60px]">
                        Explore Movies & Shows
                    </h1>

                    <p className="mt-4 max-w-170 text-sm leading-7 text-text-secondary sm:text-base">
                        Discover movies and TV shows from around the world. Search for a
                        title or browse the collection below.
                    </p>
                </div>

                <SearchBar
                    value={searchQuery}
                    onSearch={handleSearch}
                />

                {loading && <Loading />}

                {!loading && error && (
                    <ErrorMessage onRetry={handleRetry} />
                )}

                {!loading && !error && (
                    <>
                        {shows.length > 0 ? (
                            <MovieGrid
                                shows={shows}
                                onDetails={handleOpenModal}
                            />
                        ) : (
                            <div className="flex min-h-100 flex-col items-center justify-center text-center">
                                <div className="grid size-15 place-items-center rounded-full border border-white/10 bg-surface text-3xl text-accent">
                                    ⌕
                                </div>

                                <h2 className="mt-5 font-display text-2xl font-semibold">
                                    No movies or shows found.
                                </h2>

                                <p className="mt-2 max-w-112 text-sm leading-6 text-text-secondary">
                                    Try searching with a different title or keyword.
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>

            {selectedShow && (
                <MovieModal
                    show={selectedShow}
                    onClose={handleCloseModal}
                />
            )}
        </section>
    );
}

export default Movies;