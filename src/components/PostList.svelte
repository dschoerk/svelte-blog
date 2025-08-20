<script>
    import PostItem from './PostItem.svelte';
    
    export let posts;
  </script>
  
  <div class="post-list">
    <h2 class="heading">Recent Posts</h2>
    
    {#each posts as post}
      <PostItem {post} />
    {/each}
  </div>
  
  <style>
    .heading {
      font-size: var(--text-2xl);
      font-weight: 600;
      color: var(--color-primary);
      margin-bottom: var(--spacing-lg);
      margin-top: 0;
    }
  </style>