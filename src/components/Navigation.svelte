<script>
    export let user;
    
    let mobileMenuOpen = false;
    
    const navLinks = [
      { label: 'About', href: 'about' },
      { label: 'Research', href: 'research'}
    ];
  
    function toggleMobileMenu() {
      mobileMenuOpen = !mobileMenuOpen;
    }
  </script>
  
  <nav class="nav">
    <div class="nav__content">
      <h1 class="nav__brand">{user.name}</h1>
      
      <div class="nav__links">
        {#each navLinks as link}
          <a href={link.href} class="nav__link">{link.label}</a>
        {/each}
      </div>
      
      <button class="nav__mobile-btn" on:click={toggleMobileMenu}>
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    
    {#if mobileMenuOpen}
      <div class="nav__mobile-menu">
        {#each navLinks as link}
          <a href={link.href} class="nav__mobile-link">{link.label}</a>
        {/each}
      </div>
    {/if}
  </nav>
  
  <style>
    .nav {
      background: var(--color-white);
      border-bottom: 1px solid var(--color-border);
      box-shadow: var(--shadow-sm);
    }
  
    .nav__content {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 var(--spacing-md);
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 4rem;
    }
  
    .nav__brand {
      font-size: var(--text-xl);
      font-weight: 600;
      color: var(--color-primary);
    }
  
    .nav__links {
      display: flex;
      gap: var(--spacing-xl);
    }
  
    .nav__link {
      color: var(--color-text);
      text-decoration: none;
      padding: var(--spacing-sm) var(--spacing-md);
      border-radius: var(--radius-md);
      transition: var(--transition);
    }
  
    .nav__link:hover {
      color: var(--color-accent);
      background-color: var(--color-hover-bg);
    }
  
    .nav__mobile-btn {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--color-text);
      padding: var(--spacing-sm);
    }
  
    .nav__mobile-menu {
      background: var(--color-white);
      border-top: 1px solid var(--color-border);
      padding: var(--spacing-md);
      max-width: 1280px;
      margin: 0 auto;
    }
  
    .nav__mobile-link {
      display: block;
      padding: var(--spacing-sm) var(--spacing-md);
      color: var(--color-text);
      text-decoration: none;
      border-radius: var(--radius-md);
      margin-bottom: var(--spacing-xs);
      transition: var(--transition);
    }
  
    .nav__mobile-link:hover {
      background-color: var(--color-hover-bg);
      color: var(--color-accent);
    }
  
    @media (max-width: 768px) {
      .nav__links {
        display: none;
      }
      
      .nav__mobile-btn {
        display: block;
      }
    }
  </style>