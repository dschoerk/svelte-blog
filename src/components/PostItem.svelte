<script>
    export let post;
  </script>
  
  <article class="post-item">
    <h3 class="post-item__title">
      <a href="#" class="post-item__link">{post.title}</a>
    </h3>
    <p class="post-item__meta">Published in {post.category} on {post.date}</p>
    <p class="post-item__excerpt">{post.excerpt}</p>
  </article>
  
  <style>
    .post-item {
      border-bottom: 1px solid var(--color-border);
      padding-bottom: var(--spacing-md);
      margin-bottom: var(--spacing-md);
    }
  
    .post-item:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  
    .post-item__title {
      font-size: var(--text-lg);
      font-weight: 500;
      margin-bottom: var(--spacing-sm);
    }
  
    .post-item__link {
      color: var(--color-primary);
      text-decoration: none;
      transition: var(--transition);
    }
  
    .post-item__link:hover {
      color: var(--color-accent);
    }
  
    .post-item__meta {
      font-size: var(--text-sm);
      color: var(--color-text-light);
      margin-bottom: var(--spacing-sm);
    }
  
    .post-item__excerpt {
      line-height: 1.6;
    }
  </style>