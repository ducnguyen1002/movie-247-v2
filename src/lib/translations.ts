import type { Translations, Language } from "./i18n";

// Vietnamese translations (default)
const vi: Translations = {
	nav: {
		home: "Trang Chủ",
		movies: "Phim Lẻ",
		tvShows: "Phim Bộ",
		search: "Tìm Kiếm",
		forum: "Diễn Đàn",
		about: "Về Chúng Tôi",
		animation: "Hoạt Hình",
		history: "Lịch Sử Xem",
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
		playNow: "Xem Ngay",
		watchTrailer: "Xem Trailer",
		addWatchlist: "Thêm danh sách",
		removeWatchlist: "Xóa khỏi danh sách",
		share: "Chia sẻ",
		download: "Tải xuống",
		clear: "Xóa tất cả",
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
		relatedMovies: "Phim Liên Quan",
		comments: "Bình luận",
		synopsis: "Tóm tắt nội dung",
	},

	search: {
		placeholder: "Tìm kiếm phim...",
		title: "Tìm Kiếm Phim",
		resultsFor: 'Tìm thấy {count} kết quả cho "{keyword}"',
		noResults: "Không tìm thấy phim nào",
		toggleFilters: "Bật/Tắt Bộ Lọc",
		filterByGenre: "Lọc theo thể loại",
		filterByYear: "Lọc theo năm",
		filterByCountry: "Lọc theo quốc gia",
		sortBy: "Sắp xếp theo",
		newest: "Mới nhất",
		oldest: "Cũ nhất",
		mostViewed: "Xem nhiều nhất",
		topRated: "Đánh giá cao nhất",
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
		logout: "Đăng xuất",
		profile: "Hồ sơ",
		settings: "Cài đặt",
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
		followUs: "Theo dõi chúng tôi",
	},

	categories: {
		newUpdates: "Phim Mới Cập Nhật",
		trending: "Phim Thịnh Hành",
		popular: "Phim Phổ Biến",
		recommended: "Phim Đề Xuất",
		continueWatching: "Tiếp Tục Xem",
		yourWatchlist: "Danh Sách Xem",
		yourLikes: "Có Thể Bạn Thích",
		topRated: "Đánh Giá Cao",
		popularThisWeek: "Phổ Biến Trong Tuần",
		featuredMovies: "Phim Nổi Bật",
		latestEpisodes: "Tập Mới Nhất",
	},

	hero: {
		exploreByGenre: "Khám phá theo thể loại",
		season: "Mùa",
		episode: "Tập",
		newEpisode: "Tập mới",
	},

	genres: {
		title: "Khám Phá Theo Thể Loại",
		action: "Hành Động",
		romance: "Tình Cảm",
		comedy: "Hài Hước",
		horror: "Kinh Dị",
		sciFi: "Viễn Tưởng",
		drama: "Chính Kịch",
		adventure: "Phiêu Lưu",
		animation: "Hoạt Hình",
		thriller: "Giật Gân",
		fantasy: "Giả Tưởng",
		documentary: "Tài Liệu",
		war: "Chiến Tranh",
		music: "Âm Nhạc",
		family: "Gia Đình",
		mystery: "Bí Ẩn",
		history: "Lịch Sử",
	},

	player: {
		play: "Phát",
		pause: "Tạm dừng",
		mute: "Tắt tiếng",
		unmute: "Bật tiếng",
		fullscreen: "Toàn màn hình",
		exitFullscreen: "Thoát toàn màn hình",
		settings: "Cài đặt",
		quality: "Chất lượng",
		speed: "Tốc độ",
		subtitles: "Phụ đề",
		nextEpisode: "Tập tiếp theo",
		previousEpisode: "Tập trước",
		selectServer: "Chọn máy chủ",
		server: "Máy chủ",
	},

	time: {
		justNow: "Vừa xong",
		minutesAgo: "phút trước",
		hoursAgo: "giờ trước",
		daysAgo: "ngày trước",
		weeksAgo: "tuần trước",
		monthsAgo: "tháng trước",
		yearsAgo: "năm trước",
	},

	messages: {
		addedToWatchlist: "Đã thêm vào danh sách xem",
		removedFromWatchlist: "Đã xóa khỏi danh sách xem",
		shareSuccess: "Đã sao chép liên kết",
		errorOccurred: "Đã xảy ra lỗi",
		tryAgain: "Vui lòng thử lại",
		noMoviesFound: "Không tìm thấy phim",
		endOfList: "Đã hết danh sách",
	},
};

// English translations
const en: Translations = {
	nav: {
		home: "Home",
		movies: "Movies",
		tvShows: "TV Shows",
		search: "Search",
		forum: "Forum",
		about: "About",
		animation: "Animation",
		history: "History",
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
		playNow: "Play Now",
		watchTrailer: "Watch Trailer",
		addWatchlist: "Add Watchlist",
		removeWatchlist: "Remove from Watchlist",
		share: "Share",
		download: "Download",
		clear: "Clear All",
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
		relatedMovies: "Related Movies",
		comments: "Comments",
		synopsis: "Synopsis",
	},

	search: {
		placeholder: "Search movies...",
		title: "Search Movies",
		resultsFor: 'Found {count} results for "{keyword}"',
		noResults: "No movies found",
		toggleFilters: "Toggle Filters",
		filterByGenre: "Filter by genre",
		filterByYear: "Filter by year",
		filterByCountry: "Filter by country",
		sortBy: "Sort by",
		newest: "Newest",
		oldest: "Oldest",
		mostViewed: "Most Viewed",
		topRated: "Top Rated",
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
		logout: "Logout",
		profile: "Profile",
		settings: "Settings",
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
		followUs: "Follow Us",
	},

	categories: {
		newUpdates: "New Updates",
		trending: "Trending",
		popular: "Popular",
		recommended: "Recommended",
		continueWatching: "Continue Watching",
		yourWatchlist: "Your Watchlist",
		yourLikes: "You May Like",
		topRated: "Top Rated",
		popularThisWeek: "Popular This Week",
		featuredMovies: "Featured Movies",
		latestEpisodes: "Latest Episodes",
	},

	hero: {
		exploreByGenre: "Explore by the genre",
		season: "Season",
		episode: "Episode",
		newEpisode: "New Episode",
	},

	genres: {
		title: "Explore by Genre",
		action: "Action",
		romance: "Romance",
		comedy: "Comedy",
		horror: "Horror",
		sciFi: "Sci-Fi",
		drama: "Drama",
		adventure: "Adventure",
		animation: "Animation",
		thriller: "Thriller",
		fantasy: "Fantasy",
		documentary: "Documentary",
		war: "War",
		music: "Music",
		family: "Family",
		mystery: "Mystery",
		history: "History",
	},

	player: {
		play: "Play",
		pause: "Pause",
		mute: "Mute",
		unmute: "Unmute",
		fullscreen: "Fullscreen",
		exitFullscreen: "Exit Fullscreen",
		settings: "Settings",
		quality: "Quality",
		speed: "Speed",
		subtitles: "Subtitles",
		nextEpisode: "Next Episode",
		previousEpisode: "Previous Episode",
		selectServer: "Select Server",
		server: "Server",
	},

	time: {
		justNow: "Just now",
		minutesAgo: "minutes ago",
		hoursAgo: "hours ago",
		daysAgo: "days ago",
		weeksAgo: "weeks ago",
		monthsAgo: "months ago",
		yearsAgo: "years ago",
	},

	messages: {
		addedToWatchlist: "Added to watchlist",
		removedFromWatchlist: "Removed from watchlist",
		shareSuccess: "Link copied to clipboard",
		errorOccurred: "An error occurred",
		tryAgain: "Please try again",
		noMoviesFound: "No movies found",
		endOfList: "End of list",
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

// Export translations for direct access
export { vi, en, translations };
