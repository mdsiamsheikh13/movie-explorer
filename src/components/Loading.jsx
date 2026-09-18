function Loading() {
    return (
        <div
            className="flex min-h-100 flex-col items-center justify-center text-center"
            role="status"
            aria-live="polite"
        >
            <div className="size-11 animate-[spin_.8s_linear_infinite] rounded-full border-[3px] border-white/10 border-t-accent" />

            <h2 className="mt-5 font-display text-xl font-semibold">
                Discovering shows...
            </h2>

            <p className="mt-2 text-sm text-text-secondary">
                Please wait while we load the collection.
            </p>
        </div>
    );
}

export default Loading;