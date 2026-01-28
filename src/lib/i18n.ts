// Translation types
export type Language = "vi" | "en";

export interface Translations {
	// Header
	nav: {
		home: string;
		movies: string;
		tvShows: string;
		search: string;
		about: string;
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
	};

	// Search
	search: {
		placeholder: string;
		title: string;
		resultsFor: string;
		noResults: string;
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
	};

	// Categories
	categories: {
		newUpdates: string;
		trending: string;
		popular: string;
		recommended: string;
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
	window.dispatchEvent(
		new CustomEvent("languagechange", { detail: { language: lang } }),
	);
}

// Toggle between languages
export function toggleLanguage(): void {
	const current = getCurrentLanguage();
	setLanguage(current === "vi" ? "en" : "vi");
}
