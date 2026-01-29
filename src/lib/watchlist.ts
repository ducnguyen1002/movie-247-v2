export interface WatchlistItem {
	id: string;
	slug: string;
	name: string;
	origin_name?: string;
	poster_url: string;
	thumb_url?: string;
	year?: number;
	addedAt: number;
}

export interface HistoryItem extends WatchlistItem {
	watchedAt: number;
	duration?: string; // String representation like "120 min" or just local string
}

const WATCHLIST_KEY = "movie247_watchlist";
const HISTORY_KEY = "movie247_history";

// --- Watchlist Functions ---

export function getWatchlist(): WatchlistItem[] {
	if (typeof window === "undefined") return [];
	const stored = localStorage.getItem(WATCHLIST_KEY);
	if (!stored) return [];
	try {
		return JSON.parse(stored);
	} catch (e) {
		console.error("Failed to parse watchlist", e);
		return [];
	}
}

export function addToWatchlist(item: Omit<WatchlistItem, "addedAt">): void {
	const watchlist = getWatchlist();
	if (watchlist.some((i) => i.slug === item.slug)) return;

	const newItem: WatchlistItem = {
		...item,
		addedAt: Date.now(),
	};

	localStorage.setItem(WATCHLIST_KEY, JSON.stringify([newItem, ...watchlist]));

	window.dispatchEvent(
		new CustomEvent("watchlist-updated", {
			detail: { action: "add", item: newItem },
		}),
	);
}

export function removeFromWatchlist(slug: string): void {
	const watchlist = getWatchlist();
	const filtered = watchlist.filter((i) => i.slug !== slug);
	localStorage.setItem(WATCHLIST_KEY, JSON.stringify(filtered));

	window.dispatchEvent(
		new CustomEvent("watchlist-updated", {
			detail: { action: "remove", slug },
		}),
	);
}

export function isInWatchlist(slug: string): boolean {
	const watchlist = getWatchlist();
	return watchlist.some((i) => i.slug === slug);
}

export function toggleWatchlist(item: Omit<WatchlistItem, "addedAt">): boolean {
	if (isInWatchlist(item.slug)) {
		removeFromWatchlist(item.slug);
		return false;
	} else {
		addToWatchlist(item);
		return true;
	}
}

// --- History Functions ---

export function getHistory(): HistoryItem[] {
	if (typeof window === "undefined") return [];
	const stored = localStorage.getItem(HISTORY_KEY);
	if (!stored) return [];
	try {
		return JSON.parse(stored);
	} catch (e) {
		console.error("Failed to parse history", e);
		return [];
	}
}

export function addToHistory(
	item: Omit<HistoryItem, "addedAt" | "watchedAt">,
): void {
	const history = getHistory();
	// Remove existing entry for same movie to bubble it to top
	const filtered = history.filter((i) => i.slug !== item.slug);

	const newItem: HistoryItem = {
		...item,
		addedAt: Date.now(), // Keep structure similar to Watchlist
		watchedAt: Date.now(),
	};

	// Limit history to 50 items
	const newHistory = [newItem, ...filtered].slice(0, 50);

	localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));

	window.dispatchEvent(
		new CustomEvent("history-updated", {
			detail: { action: "add", item: newItem },
		}),
	);
}

export function removeFromHistory(slug: string): void {
	const history = getHistory();
	const filtered = history.filter((i) => i.slug !== slug);
	localStorage.setItem(HISTORY_KEY, JSON.stringify(filtered));

	window.dispatchEvent(
		new CustomEvent("history-updated", {
			detail: { action: "remove", slug },
		}),
	);
}

export function clearHistory(): void {
	localStorage.removeItem(HISTORY_KEY);
	window.dispatchEvent(
		new CustomEvent("history-updated", {
			detail: { action: "clear" },
		}),
	);
}
