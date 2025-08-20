<script>
    export let src = undefined;
    export let alt = "Profile picture";
  </script>
  
  <div class="avatar">
    {#if src}
      <img {src} {alt} class="avatar__image" />
    {:else}
      <svg class="avatar__icon" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
      </svg>
    {/if}
  </div>
  
  <style>
    .avatar {
      width: 12rem;
      height: 12rem;
      background-color: var(--color-border);
      border-radius: var(--radius-full);
      margin: 0 auto var(--spacing-md) auto;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
  
    .avatar__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
    .avatar__icon {
      width: 6rem;
      height: 6rem;
      color: var(--color-text-muted);
    }
  </style>