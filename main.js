import { initSmoothScroll, initNavbarScroll } from './js/navigation.js';
import { initArticleAnimations } from './js/animations.js';

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initNavbarScroll();
    initArticleAnimations();
});