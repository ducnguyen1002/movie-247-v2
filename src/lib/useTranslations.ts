import type { Language, Translations } from "./i18n";
import { getTranslations } from "./translations";

/**
 * Get the current language from cookies (for SSR) or localStorage (for client)
 */
export function getLanguageFromCookies(cookieHeader: string | null): Language {
	if (!cookieHeader) return "vi";

	const cookies = Object.fromEntries(
		cookieHeader.split("; ").map((c) => {
			const [key, ...v] = c.split("=");
			return [key, v.join("=")];
		}),
	);

	const lang = cookies["language"];
	return lang === "en" || lang === "vi" ? lang : "vi";
}

/**
 * Create a translation function for a specific language
 */
export function createTranslator(lang: Language) {
	const translations = getTranslations(lang);

	/**
	 * Get a translation by key path (e.g., 'nav.home', 'common.loading')
	 * Falls back to the key if translation is not found
	 */
	return function t(key: string): string {
		const keys = key.split(".");
		let value: any = translations;

		for (const k of keys) {
			value = value?.[k];
			if (value === undefined) return key;
		}

		return typeof value === "string" ? value : key;
	};
}

/**
 * Get translated content with a specific language
 * Usage in Astro components:
 *
 * ---
 * import { useTranslations } from '../lib/useTranslations';
 * const { t, lang, translations } = useTranslations(Astro.cookies.get('language')?.value);
 * ---
 * <h1>{t('nav.home')}</h1>
 * <p>{translations.common.loading}</p>
 */
export function useTranslations(cookieLang?: string | null) {
	const lang: Language =
		cookieLang === "en" || cookieLang === "vi" ? cookieLang : "vi";
	const translations = getTranslations(lang);
	const t = createTranslator(lang);

	return { t, lang, translations };
}

/**
 * Format a translation with variables
 * Example: formatTranslation('Hello {name}!', { name: 'John' }) => 'Hello John!'
 */
export function formatTranslation(
	template: string,
	variables: Record<string, string | number>,
): string {
	return template.replace(/\{(\w+)\}/g, (match, key) => {
		return variables[key]?.toString() ?? match;
	});
}

/**
 * Get genre name in current language
 */
export function getGenreName(slug: string, lang: Language): string {
	const genreMap: Record<string, { vi: string; en: string }> = {
		"hanh-dong": { vi: "Hành Động", en: "Action" },
		"tinh-cam": { vi: "Tình Cảm", en: "Romance" },
		"hai-huoc": { vi: "Hài Hước", en: "Comedy" },
		"kinh-di": { vi: "Kinh Dị", en: "Horror" },
		"vien-tuong": { vi: "Viễn Tưởng", en: "Sci-Fi" },
		"chinh-kich": { vi: "Chính Kịch", en: "Drama" },
		"phieu-luu": { vi: "Phiêu Lưu", en: "Adventure" },
		"hoat-hinh": { vi: "Hoạt Hình", en: "Animation" },
		"tam-ly": { vi: "Tâm Lý", en: "Thriller" },
		"than-thoai": { vi: "Thần Thoại", en: "Fantasy" },
		"tai-lieu": { vi: "Tài Liệu", en: "Documentary" },
		"chien-tranh": { vi: "Chiến Tranh", en: "War" },
		"am-nhac": { vi: "Âm Nhạc", en: "Music" },
		"gia-dinh": { vi: "Gia Đình", en: "Family" },
		"bi-an": { vi: "Bí Ẩn", en: "Mystery" },
		"lich-su": { vi: "Lịch Sử", en: "History" },
		"co-trang": { vi: "Cổ Trang", en: "Historical" },
		"vo-thuat": { vi: "Võ Thuật", en: "Martial Arts" },
		"hinh-su": { vi: "Hình Sự", en: "Crime" },
		"khoa-hoc": { vi: "Khoa Học", en: "Science" },
	};

	return genreMap[slug]?.[lang] || slug;
}

/**
 * Get category name in current language
 */
export function getCategoryName(slug: string, lang: Language): string {
	const categoryMap: Record<string, { vi: string; en: string }> = {
		"phim-le": { vi: "Phim Lẻ", en: "Movies" },
		"phim-bo": { vi: "Phim Bộ", en: "TV Shows" },
		"hoat-hinh": { vi: "Hoạt Hình", en: "Animation" },
		"tv-shows": { vi: "TV Shows", en: "TV Shows" },
	};

	return categoryMap[slug]?.[lang] || slug;
}

/**
 * Get nation name in current language
 */
export function getNationName(slug: string, lang: Language): string {
	const nationMap: Record<string, { vi: string; en: string }> = {
		"trung-quoc": { vi: "Trung Quốc", en: "China" },
		"han-quoc": { vi: "Hàn Quốc", en: "Korea" },
		"nhat-ban": { vi: "Nhật Bản", en: "Japan" },
		my: { vi: "Mỹ", en: "USA" },
		"au-my": { vi: "Âu Mỹ", en: "Euro-US" },
		"hong-kong": { vi: "Hồng Kông", en: "Hong Kong" },
		"dai-loan": { vi: "Đài Loan", en: "Taiwan" },
		"thai-lan": { vi: "Thái Lan", en: "Thailand" },
		"an-do": { vi: "Ấn Độ", en: "India" },
		phap: { vi: "Pháp", en: "France" },
		anh: { vi: "Anh", en: "UK" },
		canada: { vi: "Canada", en: "Canada" },
		duc: { vi: "Đức", en: "Germany" },
		"tay-ban-nha": { vi: "Tây Ban Nha", en: "Spain" },
		"tho-nhi-ky": { vi: "Thổ Nhĩ Kỳ", en: "Turkey" },
		"ha-lan": { vi: "Hà Lan", en: "Netherlands" },
		indonesia: { vi: "Indonesia", en: "Indonesia" },
		nga: { vi: "Nga", en: "Russia" },
		mexico: { vi: "Mexico", en: "Mexico" },
		australia: { vi: "Australia", en: "Australia" },
		"thuy-dien": { vi: "Thụy Điển", en: "Sweden" },
		philippines: { vi: "Philippines", en: "Philippines" },
		"viet-nam": { vi: "Việt Nam", en: "Vietnam" },
	};

	return nationMap[slug]?.[lang] || slug;
}

/**
 * Format relative time in current language
 */
export function formatRelativeTime(date: Date, lang: Language): string {
	const now = new Date();
	const diffMs = now.getTime() - date.getTime();
	const diffSecs = Math.floor(diffMs / 1000);
	const diffMins = Math.floor(diffSecs / 60);
	const diffHours = Math.floor(diffMins / 60);
	const diffDays = Math.floor(diffHours / 24);
	const diffWeeks = Math.floor(diffDays / 7);
	const diffMonths = Math.floor(diffDays / 30);
	const diffYears = Math.floor(diffDays / 365);

	const t = getTranslations(lang).time;

	if (diffSecs < 60) return t.justNow;
	if (diffMins < 60) return `${diffMins} ${t.minutesAgo}`;
	if (diffHours < 24) return `${diffHours} ${t.hoursAgo}`;
	if (diffDays < 7) return `${diffDays} ${t.daysAgo}`;
	if (diffWeeks < 4) return `${diffWeeks} ${t.weeksAgo}`;
	if (diffMonths < 12) return `${diffMonths} ${t.monthsAgo}`;
	return `${diffYears} ${t.yearsAgo}`;
}
