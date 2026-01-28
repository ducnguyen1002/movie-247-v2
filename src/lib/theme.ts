// Theme types
export type Theme = "light" | "dark";

// Get current theme from localStorage or default to dark
export function getCurrentTheme(): Theme {
	if (typeof window === "undefined") return "dark";
	const stored = localStorage.getItem("theme");
	return stored === "light" || stored === "dark" ? stored : "dark";
}

// Set theme and persist to localStorage
export function setTheme(theme: Theme): void {
	if (typeof window === "undefined") return;

	// Update localStorage
	localStorage.setItem("theme", theme);

	// Update document class
	document.documentElement.setAttribute("data-theme", theme);

	// Dispatch event for components to react
	window.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
}

// Toggle between themes
export function toggleTheme(): void {
	const current = getCurrentTheme();
	setTheme(current === "dark" ? "light" : "dark");
}

// Initialize theme on page load
export function initTheme(): void {
	if (typeof window === "undefined") return;
	const theme = getCurrentTheme();
	document.documentElement.setAttribute("data-theme", theme);
}
