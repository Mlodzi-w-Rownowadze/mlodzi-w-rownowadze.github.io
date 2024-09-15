document.addEventListener('DOMContentLoaded', function() {
    // Example: Toggle comments section
    const commentToggles = document.querySelectorAll('.comment-toggle');
    commentToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            const commentSection = this.nextElementSibling;
            if (commentSection.style.display === 'none' || !commentSection.style.display) {
                commentSection.style.display = 'block';
            } else {
                commentSection.style.display = 'none';
            }
        });
    });

    // Example: Filter posts by category
    const categoryFilters = document.querySelectorAll('.category-filter');
    categoryFilters.forEach(function(filter) {
        filter.addEventListener('click', function() {
            const category = this.dataset.category;
            const posts = document.querySelectorAll('.post');
            posts.forEach(function(post) {
                if (post.dataset.category === category || category === 'all') {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
});