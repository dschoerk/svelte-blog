<script>
    export let year = new Date().getFullYear();
  </script>
  
  <footer class="footer">
    <div class="footer__content">
      <p>
        &copy;{year} Dominik Schörkhuber
      </p>
    </div>
  </footer>
  
  <style>
    .footer {
      background: var(--color-white);
      border-top: 1px solid var(--color-border);
      margin-top: var(--spacing-2xl);
      padding: var(--spacing-xl) 0;
      text-align: center;
    }
  
    .footer__content {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 var(--spacing-md);
      font-size: var(--text-sm);
      color: var(--color-text-light);
    }
  
    .footer__link {
      color: var(--color-accent);
      text-decoration: none;
      transition: var(--transition);
    }
  
    .footer__link:hover {
      text-decoration: underline;
    }
  </style>
  