import { FiSearch, FiX } from "react-icons/fi";

function SearchBar({ value, onSearch }) {
    const handleChange = (event) => {
        onSearch(event.target.value);
    };

    const handleClear = () => {
        onSearch("");
    };

    return (
        <div className="relative mt-10 w-full">
            <label
                htmlFor="movie-search"
                className="sr-only"
            >
                Search for a movie or show
            </label>

            <FiSearch className="pointer-events-none absolute left-5 top-1/2 z-10 -translate-y-1/2 text-xl text-text-muted" />

            <input
                id="movie-search"
                type="search"
                value={value}
                onChange={handleChange}
                placeholder="Search for a movie or show..."
                autoComplete="off"
                className="h-15 w-full rounded-xl border border-white/10 bg-surface px-14 pr-14 text-sm text-white outline-none transition placeholder:text-text-muted focus:border-accent/55 focus:ring-4 focus:ring-accent/10"
            />

            {value && (
                <button
                    type="button"
                    aria-label="Clear search"
                    onClick={handleClear}
                    className="absolute right-4 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full border-0 bg-white/8 text-text-secondary transition hover:bg-white/15 hover:text-white"
                >
                    <FiX />
                </button>
            )}
        </div>
    );
}

export default SearchBar;