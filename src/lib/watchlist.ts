export interface WatchlistItem {
	id: string;
	slug: string;
	name: string;
	origin_name?: string;
	poster_url: string;
	year?: number;
	addedAt: number;
}

const WATCHLIST_KEY = "movie247_watchlist";

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

	// Dispatch custom event for UI updates
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

	// Dispatch custom event for UI updates
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
