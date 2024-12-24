// articles.js
const articles = {
  "ai-2024": {
    title: "Искусственный интеллект в 2024 году",
    date: "15 марта 2024",
    category: "Технологии",
    image: "https://placehold.co/800x400",
    content: `
        <p>В 2024 году искусственный интеллект продолжает интегрироваться в повседневную жизнь. Основные изменения касаются области автоматизации бизнеса, здравоохранения и даже творческих профессий.</p>
        <p>Компании активно внедряют GPT-модели в свои процессы, упрощая взаимодействие с клиентами и ускоряя принятие решений.</p>
        <p>Ключевые тренды:</p>
        <ul>
          <li>Развитие автономного транспорта</li>
          <li>Этичное использование данных</li>
          <li>Улучшение качества жизни с помощью ИИ</li>
        </ul>
      `,
  },
  "space-future": {
    title: "Космические технологии будущего",
    date: "10 марта 2024",
    category: "Космос",
    image: "https://placehold.co/800x400",
    content: `
        <p>Освоение космоса переживает новую волну интереса. Ключевые события 2024 года связаны с запуском миссий к Марсу и созданием постоянных баз на Луне.</p>
        <p>Основные достижения:</p>
        <ul>
          <li>Первая коммерческая база на Луне</li>
          <li>Подготовка к высадке на Марс</li>
          <li>Разработка ядерных двигателей для межпланетных перелетов</li>
        </ul>
      `,
  },
};

// Динамическая загрузка статьи
function loadArticle(articleId) {
  const article = articles[articleId];
  if (!article) {
    document.getElementById("article-content").innerHTML =
      "<p>Статья не найдена.</p>";
    return;
  }

  document.getElementById("article-title").textContent = article.title;
  document.getElementById("article-image").src = article.image;
  document.getElementById("article-date").textContent = article.date;
  document.getElementById("article-category").textContent = article.category;
  document.getElementById("article-body").innerHTML = article.content;
}

// Пример вызова для конкретной страницы
const articleId = new URLSearchParams(window.location.search).get("id");
if (articleId) {
  loadArticle(articleId);
}
