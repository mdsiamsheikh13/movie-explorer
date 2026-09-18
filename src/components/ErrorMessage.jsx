import {
    FiAlertCircle,
    FiRefreshCw,
} from "react-icons/fi";

function ErrorMessage({ onRetry }) {
    return (
        <div className="flex min-h-100 flex-col items-center justify-center text-center">
            <div className="grid size-15 place-items-center rounded-full border border-white/10 bg-surface text-2xl text-accent">
                <FiAlertCircle />
            </div>

            <h2 className="mt-5 font-display text-2xl font-semibold">
                Something went wrong
            </h2>

            <p className="mt-2 max-w-112 text-sm leading-6 text-text-secondary">
                Something went wrong while loading the shows. Please try again.
            </p>

            <button
                type="button"
                onClick={onRetry}
                className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-accent bg-accent px-5 text-sm font-bold text-[#111] transition hover:-translate-y-0.5 hover:bg-[#ffc51c]"
            >
                <FiRefreshCw />
                Retry
            </button>
        </div>
    );
}

export default ErrorMessage;