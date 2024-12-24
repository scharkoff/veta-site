// Handle forum interactions
export function initForum() {
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', handleCommentSubmit);
    }
}

function handleCommentSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const comment = {
        author: formData.get('author'),
        content: formData.get('content'),
        date: new Date().toISOString()
    };
    
    // Add comment to the page
    addCommentToList(comment);
    e.target.reset();
}

function addCommentToList(comment) {
    const commentsList = document.querySelector('.comments-list');
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.innerHTML = `
        <div class="comment-header">
            <strong>${comment.author}</strong>
            <span>${formatDate(comment.date)}</span>
        </div>
        <p>${comment.content}</p>
    `;
    commentsList.prepend(commentElement);
}