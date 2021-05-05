const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment_content = document.querySelector('#comment-content').value;
    const post_id = event.target.getAttribute('data-id');

    if (comment_content) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ post_id, comment_content }),
            headers: {
              'Content-Type': 'application/json',
            },
        });
      
        if (response.ok) {
        document.location.reload();
        } else {
        alert('Failed to create comment');
        }
          
    }
}

document
.querySelector('.comment-form')
.addEventListener('submit', commentFormHandler);