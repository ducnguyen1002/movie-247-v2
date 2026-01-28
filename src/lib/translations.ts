import type { Translations, Language } from "./i18n";

// Vietnamese translations (default)
const vi: Translations = {
	nav: {
		home: "Trang Chủ",
		movies: "Phim Lẻ",
		tvShows: "Phim Bộ",
		search: "Tìm Kiếm",
		about: "Về Chúng Tôi",
	},

	common: {
		loading: "Đang tải...",
		error: "Đã xảy ra lỗi",
		noResults: "Không tìm thấy kết quả",
		viewAll: "Xem tất cả",
		previous: "Trước",
		next: "Tiếp",
		page: "Trang",
		of: "của",
	},

	movie: {
		rating: "Đánh giá",
		duration: "Thời lượng",
		year: "Năm",
		genre: "Thể loại",
		country: "Quốc gia",
		director: "Đạo diễn",
		cast: "Diễn viên",
		description: "Nội dung",
		episodes: "Tập phim",
		watchNow: "Xem Ngay",
		quality: "Chất lượng",
		language: "Ngôn ngữ",
		status: "Trạng thái",
	},

	search: {
		placeholder: "Tìm kiếm phim...",
		title: "Tìm Kiếm Phim",
		resultsFor: "Kết quả tìm kiếm cho",
		noResults: "Không tìm thấy phim nào",
	},

	auth: {
		login: "Đăng Nhập",
		register: "Đăng Ký",
		email: "Email",
		password: "Mật khẩu",
		confirmPassword: "Xác nhận mật khẩu",
		forgotPassword: "Quên mật khẩu?",
		noAccount: "Chưa có tài khoản?",
		hasAccount: "Đã có tài khoản?",
		loginButton: "Đăng nhập",
		registerButton: "Đăng ký",
	},

	about: {
		title: "Về Movie247",
		subtitle: "Nền tảng xem phim trực tuyến hàng đầu Việt Nam",
		mission: "Sứ Mệnh Của Chúng Tôi",
		missionText:
			"Movie247 được thành lập với mục tiêu mang đến cho người dùng Việt Nam trải nghiệm xem phim trực tuyến tốt nhất. Chúng tôi tin rằng mọi người đều xứng đáng được tiếp cận với nội dung giải trí chất lượng cao.",
		features: "Tính Năng Nổi Bật",
		contact: "Liên Hệ",
	},

	footer: {
		description:
			"Xem phim trực tuyến miễn phí với chất lượng cao. Phim mới, phim hay nhất 2024.",
		quickLinks: "Liên Kết Nhanh",
		legal: "Pháp Lý",
		terms: "Điều khoản sử dụng",
		privacy: "Chính sách bảo mật",
		copyright: "© 2024 Movie247. Tất cả quyền được bảo lưu.",
	},

	categories: {
		newUpdates: "Phim Mới Cập Nhật",
		trending: "Phim Thịnh Hành",
		popular: "Phim Phổ Biến",
		recommended: "Phim Đề Xuất",
	},
};

// English translations
const en: Translations = {
	nav: {
		home: "Home",
		movies: "Movies",
		tvShows: "TV Shows",
		search: "Search",
		about: "About",
	},

	common: {
		loading: "Loading...",
		error: "An error occurred",
		noResults: "No results found",
		viewAll: "View All",
		previous: "Previous",
		next: "Next",
		page: "Page",
		of: "of",
	},

	movie: {
		rating: "Rating",
		duration: "Duration",
		year: "Year",
		genre: "Genre",
		country: "Country",
		director: "Director",
		cast: "Cast",
		description: "Description",
		episodes: "Episodes",
		watchNow: "Watch Now",
		quality: "Quality",
		language: "Language",
		status: "Status",
	},

	search: {
		placeholder: "Search movies...",
		title: "Search Movies",
		resultsFor: "Search results for",
		noResults: "No movies found",
	},

	auth: {
		login: "Login",
		register: "Register",
		email: "Email",
		password: "Password",
		confirmPassword: "Confirm Password",
		forgotPassword: "Forgot password?",
		noAccount: "Don't have an account?",
		hasAccount: "Already have an account?",
		loginButton: "Login",
		registerButton: "Register",
	},

	about: {
		title: "About Movie247",
		subtitle: "Leading Online Movie Streaming Platform in Vietnam",
		mission: "Our Mission",
		missionText:
			"Movie247 was founded with the goal of bringing Vietnamese users the best online movie streaming experience. We believe everyone deserves access to high-quality entertainment content.",
		features: "Key Features",
		contact: "Contact",
	},

	footer: {
		description:
			"Watch movies online for free in high quality. New movies, best movies of 2024.",
		quickLinks: "Quick Links",
		legal: "Legal",
		terms: "Terms of Service",
		privacy: "Privacy Policy",
		copyright: "© 2024 Movie247. All rights reserved.",
	},

	categories: {
		newUpdates: "New Updates",
		trending: "Trending",
		popular: "Popular",
		recommended: "Recommended",
	},
};

// Translation map
const translations: Record<Language, Translations> = {
	vi,
	en,
};

// Get translations for a specific language
export function getTranslations(lang: Language): Translations {
	return translations[lang];
}

// Get a specific translation key
export function t(key: string, lang: Language): string {
	const keys = key.split(".");
	let value: any = translations[lang];

	for (const k of keys) {
		value = value?.[k];
		if (value === undefined) return key;
	}

	return typeof value === "string" ? value : key;
}
