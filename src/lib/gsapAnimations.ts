/**
 * GSAP Animations Library
 * Global animations for the movie website
 */

import { gsap } from "gsap";

// Register plugins if needed (ScrollTrigger, etc.)
// We'll import them dynamically to avoid SSR issues

/**
 * Initialize all GSAP animations
 */
export function initGSAPAnimations() {
	// Wait for DOM to be ready
	if (typeof window === "undefined") return;

	// Button click animations
	initButtonAnimations();

	// Movie card animations
	initMovieCardAnimations();

	// Hover effects
	initHoverEffects();

	// Scroll reveal animations
	initScrollReveal();

	// Page transition effects
	initPageTransitions();
}

/**
 * Button click pulse animation
 */
function initButtonAnimations() {
	const buttons = document.querySelectorAll(
		"button, .btn, .btn-primary, .btn-genre, a.header-btn",
	);

	buttons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			// Create ripple effect
			const target = e.currentTarget as HTMLElement;

			gsap
				.timeline()
				.to(target, {
					scale: 0.95,
					duration: 0.1,
					ease: "power2.out",
				})
				.to(target, {
					scale: 1,
					duration: 0.2,
					ease: "elastic.out(1, 0.5)",
				});
		});
	});
}

/**
 * Movie card click and hover animations
 */
function initMovieCardAnimations() {
	const movieCards = document.querySelectorAll(
		".movie-card, .ranking-card, .continue-card, .small-movie-card, .genre-card",
	);

	movieCards.forEach((card) => {
		const cardEl = card as HTMLElement;

		// Hover animation
		cardEl.addEventListener("mouseenter", () => {
			gsap.to(cardEl, {
				scale: 1.03,
				y: -5,
				duration: 0.3,
				ease: "power2.out",
				boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
			});

			// Animate image inside card
			const img = cardEl.querySelector("img");
			if (img) {
				gsap.to(img, {
					scale: 1.1,
					duration: 0.4,
					ease: "power2.out",
				});
			}
		});

		cardEl.addEventListener("mouseleave", () => {
			gsap.to(cardEl, {
				scale: 1,
				y: 0,
				duration: 0.3,
				ease: "power2.out",
				boxShadow: "none",
			});

			const img = cardEl.querySelector("img");
			if (img) {
				gsap.to(img, {
					scale: 1,
					duration: 0.4,
					ease: "power2.out",
				});
			}
		});

		// Click animation
		cardEl.addEventListener("click", (e) => {
			// Don't animate if clicking a link inside
			if ((e.target as HTMLElement).tagName === "A") return;

			gsap
				.timeline()
				.to(cardEl, {
					scale: 0.97,
					duration: 0.1,
					ease: "power2.in",
				})
				.to(cardEl, {
					scale: 1.03,
					duration: 0.15,
					ease: "power2.out",
				})
				.to(cardEl, {
					scale: 1,
					duration: 0.2,
					ease: "power2.out",
				});
		});
	});
}

/**
 * Generic hover effects for interactive elements
 */
function initHoverEffects() {
	// Navigation links
	const navLinks = document.querySelectorAll(".nav-link, .footer__nav a");

	navLinks.forEach((link) => {
		link.addEventListener("mouseenter", () => {
			gsap.to(link, {
				color: "var(--color-primary)",
				x: 3,
				duration: 0.2,
				ease: "power2.out",
			});
		});

		link.addEventListener("mouseleave", () => {
			gsap.to(link, {
				color: "",
				x: 0,
				duration: 0.2,
				ease: "power2.out",
			});
		});
	});

	// Social links
	const socialLinks = document.querySelectorAll(".social-link");

	socialLinks.forEach((link) => {
		link.addEventListener("mouseenter", () => {
			gsap.to(link, {
				scale: 1.2,
				rotation: 5,
				duration: 0.3,
				ease: "back.out(1.5)",
			});
		});

		link.addEventListener("mouseleave", () => {
			gsap.to(link, {
				scale: 1,
				rotation: 0,
				duration: 0.3,
				ease: "power2.out",
			});
		});
	});
}

/**
 * Scroll reveal animations for sections
 */
function initScrollReveal() {
	// Carousel sections
	const sections = document.querySelectorAll(
		".carousel-section, .continue-section, .ranking-section, .small-carousel-section",
	);

	sections.forEach((section, index) => {
		gsap.fromTo(
			section,
			{
				opacity: 0,
				y: 50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				delay: index * 0.1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: section,
					start: "top 85%",
					toggleActions: "play none none none",
				},
			},
		);
	});

	// Carousel titles
	const titles = document.querySelectorAll(".carousel-title");

	titles.forEach((title) => {
		gsap.fromTo(
			title,
			{
				opacity: 0,
				x: -30,
			},
			{
				opacity: 1,
				x: 0,
				duration: 0.5,
				ease: "power2.out",
				scrollTrigger: {
					trigger: title,
					start: "top 90%",
				},
			},
		);
	});
}

/**
 * Page transition effects
 */
function initPageTransitions() {
	// Fade in body on load
	gsap.fromTo(
		"body",
		{ opacity: 0 },
		{
			opacity: 1,
			duration: 0.4,
			ease: "power2.out",
		},
	);

	// Hero section entrance
	const heroSection = document.querySelector(".hero-slider, .genre-hero");
	if (heroSection) {
		gsap.fromTo(
			heroSection,
			{
				opacity: 0,
				scale: 1.05,
			},
			{
				opacity: 1,
				scale: 1,
				duration: 0.8,
				ease: "power2.out",
			},
		);
	}

	// Hero content stagger animation
	const heroContent = document.querySelector(
		".hero__content, .genre-hero__content",
	);
	if (heroContent) {
		const children = heroContent.children;
		gsap.fromTo(
			children,
			{
				opacity: 0,
				y: 30,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				stagger: 0.1,
				delay: 0.3,
				ease: "power2.out",
			},
		);
	}
}

/**
 * Carousel navigation animation
 */
export function animateCarouselNav(
	direction: "prev" | "next",
	track: HTMLElement,
) {
	const scrollAmount = direction === "next" ? 300 : -300;

	gsap.to(track, {
		scrollLeft: track.scrollLeft + scrollAmount,
		duration: 0.5,
		ease: "power2.out",
	});
}

/**
 * Modal open animation
 */
export function animateModalOpen(modal: HTMLElement) {
	gsap.timeline().fromTo(
		modal,
		{
			opacity: 0,
			scale: 0.8,
			y: 50,
		},
		{
			opacity: 1,
			scale: 1,
			y: 0,
			duration: 0.4,
			ease: "back.out(1.2)",
		},
	);
}

/**
 * Modal close animation
 */
export function animateModalClose(modal: HTMLElement, onComplete?: () => void) {
	gsap.to(modal, {
		opacity: 0,
		scale: 0.9,
		y: 20,
		duration: 0.25,
		ease: "power2.in",
		onComplete,
	});
}

/**
 * Stagger animation for list items
 */
export function animateListItems(container: HTMLElement, itemSelector: string) {
	const items = container.querySelectorAll(itemSelector);

	gsap.fromTo(
		items,
		{
			opacity: 0,
			y: 20,
			scale: 0.95,
		},
		{
			opacity: 1,
			y: 0,
			scale: 1,
			duration: 0.4,
			stagger: 0.05,
			ease: "power2.out",
		},
	);
}

/**
 * Success/Error feedback animation
 */
export function animateFeedback(
	element: HTMLElement,
	type: "success" | "error",
) {
	const color = type === "success" ? "#1DB954" : "#ff4444";

	gsap
		.timeline()
		.to(element, {
			scale: 1.05,
			boxShadow: `0 0 20px ${color}50`,
			duration: 0.2,
		})
		.to(element, {
			scale: 1,
			boxShadow: "none",
			duration: 0.3,
			ease: "elastic.out(1, 0.5)",
		});
}

/**
 * Loading spinner animation
 */
export function animateLoading(element: HTMLElement, isLoading: boolean) {
	if (isLoading) {
		gsap.to(element, {
			opacity: 0.6,
			scale: 0.98,
			duration: 0.2,
		});
	} else {
		gsap.to(element, {
			opacity: 1,
			scale: 1,
			duration: 0.3,
			ease: "power2.out",
		});
	}
}

// Export default init function
export default initGSAPAnimations;
