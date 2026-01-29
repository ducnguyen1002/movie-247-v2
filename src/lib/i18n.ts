// Translation types
export type Language = "vi" | "en";

export interface Translations {
	// Header
	nav: {
		home: string;
		movies: string;
		tvShows: string;
		search: string;
		forum: string;
		about: string;
		animation: string;
		history: string;
	};

	// Common
	common: {
		loading: string;
		error: string;
		noResults: string;
		viewAll: string;
		previous: string;
		next: string;
		page: string;
		of: string;
		playNow: string;
		watchTrailer: string;
		addWatchlist: string;
		removeWatchlist: string;
		share: string;
		download: string;
		clear: string;
	};

	// Movie details
	movie: {
		rating: string;
		duration: string;
		year: string;
		genre: string;
		country: string;
		director: string;
		cast: string;
		description: string;
		episodes: string;
		watchNow: string;
		quality: string;
		language: string;
		status: string;
		relatedMovies: string;
		comments: string;
		synopsis: string;
	};

	// Search
	search: {
		placeholder: string;
		title: string;
		resultsFor: string;
		noResults: string;
		toggleFilters: string;
		filterByGenre: string;
		filterByYear: string;
		filterByCountry: string;
		sortBy: string;
		newest: string;
		oldest: string;
		mostViewed: string;
		topRated: string;
	};

	// Auth
	auth: {
		login: string;
		register: string;
		email: string;
		password: string;
		confirmPassword: string;
		forgotPassword: string;
		noAccount: string;
		hasAccount: string;
		loginButton: string;
		registerButton: string;
		logout: string;
		profile: string;
		settings: string;
	};

	// About
	about: {
		title: string;
		subtitle: string;
		mission: string;
		missionText: string;
		features: string;
		contact: string;
	};

	// Footer
	footer: {
		description: string;
		quickLinks: string;
		legal: string;
		terms: string;
		privacy: string;
		copyright: string;
		followUs: string;
	};

	// Categories / Sections
	categories: {
		newUpdates: string;
		trending: string;
		popular: string;
		recommended: string;
		continueWatching: string;
		yourWatchlist: string;
		yourLikes: string;
		topRated: string;
		popularThisWeek: string;
		featuredMovies: string;
		latestEpisodes: string;
	};

	// Hero / Banner
	hero: {
		exploreByGenre: string;
		season: string;
		episode: string;
		newEpisode: string;
	};

	// Genres
	genres: {
		title: string;
		action: string;
		romance: string;
		comedy: string;
		horror: string;
		sciFi: string;
		drama: string;
		adventure: string;
		animation: string;
		thriller: string;
		fantasy: string;
		documentary: string;
		war: string;
		music: string;
		family: string;
		mystery: string;
		history: string;
	};

	// Player
	player: {
		play: string;
		pause: string;
		mute: string;
		unmute: string;
		fullscreen: string;
		exitFullscreen: string;
		settings: string;
		quality: string;
		speed: string;
		subtitles: string;
		nextEpisode: string;
		previousEpisode: string;
		selectServer: string;
		server: string;
	};

	// Time / Date
	time: {
		justNow: string;
		minutesAgo: string;
		hoursAgo: string;
		daysAgo: string;
		weeksAgo: string;
		monthsAgo: string;
		yearsAgo: string;
	};

	// Messages
	messages: {
		addedToWatchlist: string;
		removedFromWatchlist: string;
		shareSuccess: string;
		errorOccurred: string;
		tryAgain: string;
		noMoviesFound: string;
		endOfList: string;
	};
}

// Get current language from localStorage or default to Vietnamese
export function getCurrentLanguage(): Language {
	if (typeof window === "undefined") return "vi";
	const stored = localStorage.getItem("language");
	return stored === "en" || stored === "vi" ? stored : "vi";
}

// Set language and persist to localStorage
export function setLanguage(lang: Language): void {
	if (typeof window === "undefined") return;
	localStorage.setItem("language", lang);
	// Update HTML lang attribute
	document.documentElement.setAttribute("lang", lang);
	// Dispatch event for components to react
	window.dispatchEvent(
		new CustomEvent("languagechange", { detail: { language: lang } }),
	);
}

// Toggle between languages
export function toggleLanguage(): void {
	const current = getCurrentLanguage();
	setLanguage(current === "vi" ? "en" : "vi");
}
