import { axiosInstance } from "./axiosInstance";
import { DEFAULT_MOVIE_LIMIT, MOVIE_CATEGORIES } from "./constants";

// Types
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

// Get newly updated movies
export const getNewUpdatedMovies = async (page = 1) => {
  try {
    const response = await axiosInstance.get(`danh-sach/phim-moi-cap-nhat?page=${page}&limit=${DEFAULT_MOVIE_LIMIT}`);
    return response;
  } catch (error) {
    console.error('Error fetching new movies:', error);
    return null;
  }
};

// Get movies by category (phim-le, phim-bo, hoat-hinh, tv-shows)
export const getMoviesByCategory = async (category = MOVIE_CATEGORIES[0].slug, page = 1, limit = DEFAULT_MOVIE_LIMIT) => {
  try {
    const response = await axiosInstance.get(`v1/api/danh-sach/${category}?page=${page}&limit=${limit}`);
    return response;
  } catch (error) {
    console.error('Error fetching movies by category:', error);
    return null;
  }
};

// Get movie details by slug
export const getMovieDetailBySlug = async (slug: string) => {
  try {
    const response = await axiosInstance.get(`phim/${slug}`);
    return response;
  } catch (error) {
    console.error('Error fetching movie detail:', error);
    return null;
  }
};

// Search movies by keyword
export const searchMoviesByKeyword = async (keyword = "", page = 1) => {
  try {
    const response = await axiosInstance.get(`v1/api/tim-kiem?keyword=${encodeURIComponent(keyword)}&page=${page}`);
    return response;
  } catch (error) {
    console.error('Error searching movies:', error);
    return null;
  }
};

// Get movies by nation/country
export const getMoviesByNation = async (nation = "", page = 1) => {
  try {
    const response = await axiosInstance.get(`v1/api/quoc-gia/${nation}?limit=${DEFAULT_MOVIE_LIMIT}&page=${page}`);
    return response;
  } catch (error) {
    console.error('Error fetching movies by nation:', error);
    return null;
  }
};

// Get movies by genre
export const getMoviesByGenre = async (genre = "", page = 1) => {
  try {
    const response = await axiosInstance.get(`v1/api/the-loai/${genre}?limit=${DEFAULT_MOVIE_LIMIT}&page=${page}`);
    return response;
  } catch (error) {
    console.error('Error fetching movies by genre:', error);
    return null;
  }
};

// Helper to get full image URL
export const getImageUrl = (path: string | undefined) => {
  if (!path) return '/images/placeholder.svg';
  if (path.startsWith('http')) return path;
  return `https://phimimg.com/${path}`;
};
