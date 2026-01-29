import { axiosInstance } from "./axiosInstance";
import { DEFAULT_MOVIE_LIMIT, MOVIE_CATEGORIES } from "./constants";

// Types
export interface MovieFilterOptions {
	page?: number;
	limit?: number;
	sort_field?: "modified.time" | "_id" | "year";
	sort_type?: "desc" | "asc";
	sort_lang?: "vietsub" | "thuyet-minh" | "long-tieng" | "";
	category?: string;
	country?: string;
	year?: number;
}

export interface Movie {
	_id: string;
	name: string;
	slug: string;
	origin_name: string;
	poster_url: string;
	thumb_url: string;
	year: number;
	quality?: string;
	lang?: string;
	time?: string;
	episode_current?: string;
	category?: Array<{ id: string; name: string; slug: string }>;
	country?: Array<{ id: string; name: string; slug: string }>;
}

export interface MovieDetail {
	movie: {
		_id: string;
		name: string;
		slug: string;
		origin_name: string;
		content: string;
		type: string;
		status: string;
		poster_url: string;
		thumb_url: string;
		sub_docquyen: boolean;
		chipihanquyen: boolean;
		trailer_url: string;
		time: string;
		episode_current: string;
		episode_total: string;
		quality: string;
		lang: string;
		year: number;
		actor: string[];
		director: string[];
		category: Array<{ id: string; name: string; slug: string }>;
		country: Array<{ id: string; name: string; slug: string }>;
	};
	episodes: Array<{
		server_name: string;
		server_data: Array<{
			name: string;
			slug: string;
			filename: string;
			link_embed: string;
			link_m3u8: string;
		}>;
	}>;
}

export interface ApiResponse<T> {
	status: string;
	msg?: string;
	data: T;
}

export interface PaginatedData<T> {
	items: T[];
	params: {
		pagination: {
			totalItems: number;
			totalItemsPerPage: number;
			currentPage: number;
			totalPages: number;
		};
	};
}

// Helper to build query string from options
const buildQueryString = (options: MovieFilterOptions) => {
	const params = new URLSearchParams();
	if (options.page) params.append("page", options.page.toString());
	if (options.limit) params.append("limit", options.limit.toString());
	if (options.sort_field) params.append("sort_field", options.sort_field);
	if (options.sort_type) params.append("sort_type", options.sort_type);
	if (options.sort_lang) params.append("sort_lang", options.sort_lang);
	if (options.category) params.append("category", options.category);
	if (options.country) params.append("country", options.country);
	if (options.year) params.append("year", options.year.toString());
	return params.toString();
};

// Get newly updated movies
export const getNewUpdatedMovies = async (
	page = 1,
	version: "v1" | "v2" | "v3" = "v1",
) => {
	try {
		const endpoint =
			version === "v1"
				? "danh-sach/phim-moi-cap-nhat"
				: `danh-sach/phim-moi-cap-nhat-${version}`;
		const response = await axiosInstance.get(
			`${endpoint}?page=${page}&limit=${DEFAULT_MOVIE_LIMIT}`,
		);
		return response;
	} catch (error) {
		console.error("Error fetching new movies:", error);
		return null;
	}
};

// Get movies by category (phim-le, phim-bo, hoat-hinh, tv-shows)
export const getMoviesByCategory = async (
	category = MOVIE_CATEGORIES[0].slug,
	pageOrOptions: number | MovieFilterOptions = 1,
	limit = DEFAULT_MOVIE_LIMIT,
) => {
	try {
		let queryString = "";
		if (typeof pageOrOptions === "number") {
			queryString = `page=${pageOrOptions}&limit=${limit}`;
		} else {
			queryString = buildQueryString(pageOrOptions);
		}
		const response = await axiosInstance.get(
			`v1/api/danh-sach/${category}?${queryString}`,
		);
		return response;
	} catch (error) {
		console.error("Error fetching movies by category:", error);
		return null;
	}
};

// Get movie details by slug
export const getMovieDetailBySlug = async (slug: string) => {
	try {
		const response = await axiosInstance.get(`phim/${slug}`);
		return response;
	} catch (error) {
		console.error("Error fetching movie detail:", error);
		return null;
	}
};

// Search movies by keyword
export const searchMoviesByKeyword = async (
	keyword = "",
	pageOrOptions: number | MovieFilterOptions = 1,
) => {
	try {
		let queryString = "";
		if (typeof pageOrOptions === "number") {
			queryString = `page=${pageOrOptions}`;
		} else {
			queryString = buildQueryString(pageOrOptions);
		}
		const response = await axiosInstance.get(
			`v1/api/tim-kiem?keyword=${encodeURIComponent(keyword)}&${queryString}`,
		);
		return response;
	} catch (error) {
		console.error("Error searching movies:", error);
		return null;
	}
};

// Get movies by nation/country
export const getMoviesByNation = async (
	nation = "",
	pageOrOptions: number | MovieFilterOptions = 1,
) => {
	try {
		let queryString = "";
		if (typeof pageOrOptions === "number") {
			queryString = `page=${pageOrOptions}&limit=${DEFAULT_MOVIE_LIMIT}`;
		} else {
			queryString = buildQueryString(pageOrOptions);
		}
		const response = await axiosInstance.get(
			`v1/api/quoc-gia/${nation}?${queryString}`,
		);
		return response;
	} catch (error) {
		console.error("Error fetching movies by nation:", error);
		return null;
	}
};

// Get movies by genre
export const getMoviesByGenre = async (
	genre = "",
	pageOrOptions: number | MovieFilterOptions = 1,
) => {
	try {
		let queryString = "";
		if (typeof pageOrOptions === "number") {
			queryString = `page=${pageOrOptions}&limit=${DEFAULT_MOVIE_LIMIT}`;
		} else {
			queryString = buildQueryString(pageOrOptions);
		}
		const response = await axiosInstance.get(
			`v1/api/the-loai/${genre}?${queryString}`,
		);
		return response;
	} catch (error) {
		console.error("Error fetching movies by genre:", error);
		return null;
	}
};

// Get movies by year
export const getMoviesByYear = async (
	year: number,
	options: MovieFilterOptions = {},
) => {
	try {
		const queryString = buildQueryString(options);
		const response = await axiosInstance.get(
			`v1/api/nam/${year}?${queryString}`,
		);
		return response;
	} catch (error) {
		console.error("Error fetching movies by year:", error);
		return null;
	}
};

// Get TMDB Info
export const getTmdbInfo = async (type: "tv" | "movie", id: string) => {
	try {
		const response = await axiosInstance.get(`tmdb/${type}/${id}`);
		return response;
	} catch (error) {
		console.error("Error fetching TMDB info:", error);
		return null;
	}
};

// Helper to get full image URL
export const getImageUrl = (path: string | undefined) => {
	if (!path) return "/images/placeholder.svg";
	if (path.startsWith("http")) return path;
	return `https://phimimg.com/${path}`;
};
