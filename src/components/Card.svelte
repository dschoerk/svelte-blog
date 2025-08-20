<script>
    export let sticky = false;
  </script>
  
  <div class="card" class:sticky>
    <slot />
  </div>
  
  <style>
    .card {
      background: var(--color-white);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
      padding: var(--spacing-xl);
      margin-bottom: var(--spacing-xl);
      width: 100%;
    }
  
    .sticky {
      position: sticky;
      top: var(--spacing-xl);
    }
  
    @media (max-width: 1024px) {
      .sticky {
        position: static;
      }
    }
  
    @media (max-width: 768px) {
      .card {
        padding: var(--spacing-lg);
      }
    }
  </style>
  