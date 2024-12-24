// Load article content dynamically
export async function loadArticle(articleId) {
    try {
        const response = await fetch(`/api/articles/${articleId}.json`);
        const article = await response.json();
        return article;
    } catch (error) {
        console.error('Error loading article:', error);
        return null;
    }
}

// Format date to Russian locale
export function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}