<script>
    export let icon;
    export let text;
    export let href = null;
    export let isLink = false;
  </script>
  
  <div class="contact-item">
    <i class="{icon}"></i>
    
    {#if isLink && href}
      <a {href} class="contact-item__link">{text}</a>
    {:else}
      <span class="contact-item__text">{text}</span>
    {/if}
  </div>
  
  <style>
    .contact-item {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      margin-bottom: var(--spacing-sm);
    }
  
    .contact-item__icon {
      width: var(--spacing-md);
      height: var(--spacing-md);
      color: var(--color-text-light);
      flex-shrink: 0;
    }
  
    .contact-item__link {
      color: var(--color-accent);
      text-decoration: none;
      font-size: var(--text-sm);
      transition: var(--transition);
    }
  
    .contact-item__link:hover {
      text-decoration: underline;
    }
  
    .contact-item__text {
      font-size: var(--text-sm);
      color: var(--color-text-light);
    }
  </style>