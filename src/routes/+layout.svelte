<script>
    import Navigation from '../components/Navigation.svelte';
    import Sidebar from '../components/Sidebar.svelte';
    import Footer from '../components/Footer.svelte';
  
    // Application state
    let user = {
      name: "Dominik Schörkhuber",
      title: "Project Assistant and PhD Student",
      university: "TU Wien",
      email: "dominik@schoerkhuber.at",
      location: "Vienna, Austria",
      links: {
        github: "https://github.com/dschoerk",
        orcid: "#",
        scholar: "#"
      }
    };
  
    let posts = [
      {
        id: 1,
        title: "Future Blog Post",
        date: "August 14, 2049",
        category: "Blog Posts",
        excerpt: "This post will show up by default. To disable scheduling of future posts, edit `config.yml` and set `future: false`."
      },
      {
        id: 2,
        title: "Blog Post number 4",
        date: "August 14, 2015",
        category: "Blog Posts",
        excerpt: "This is a sample blog post. Lorem ipsum I can't remember the rest of lorem ipsum and don't have an internet connection right now."
      },
      {
        id: 3,
        title: "Blog Post number 3",
        date: "August 14, 2014",
        category: "Blog Posts",
        excerpt: "This is a sample blog post. Lorem ipsum I can't remember the rest of lorem ipsum and don't have an internet connection right now."
      }
    ];

    let { children } = $props();
  </script>
  
  <Navigation {user} />
  
  <div class="container">
    <div class="layout">
      <Sidebar {user} />
      {@render children?.()}
    </div>
  </div>
  
  <Footer />
  
  <style>
    /* CSS Design System */
    :global(:root) {
      --color-primary: #2c3e50;
      --color-secondary: #34495e;
      --color-accent: #3498db;
      --color-text: #374151;
      --color-text-light: #6b7280;
      --color-text-muted: #9ca3af;
      --color-bg: #f9fafb;
      --color-white: #ffffff;
      --color-border: #e5e7eb;
      --color-hover-bg: #f9fafb;
      
      --spacing-xs: 0.25rem;
      --spacing-sm: 0.5rem;
      --spacing-md: 1rem;
      --spacing-lg: 1.5rem;
      --spacing-xl: 2rem;
      --spacing-2xl: 3rem;
      
      --text-xs: 0.75rem;
      --text-sm: 0.875rem;
      --text-base: 1rem;
      --text-lg: 1.125rem;
      --text-xl: 1.25rem;
      --text-2xl: 1.5rem;
      --text-3xl: 2rem;
      
      --radius-sm: 0.25rem;
      --radius-md: 0.375rem;
      --radius-lg: 0.5rem;
      --radius-full: 9999px;
      
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --shadow-md: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
      
      --transition: all 0.2s ease;
    }
  
    :global(*) {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    :global(body) {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: var(--color-bg);
      line-height: 1.6;
      color: var(--color-text);
    }
  
    .container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 var(--spacing-md);
    }
  
    .layout {
      display: flex;
      gap: var(--spacing-xl);
      padding: var(--spacing-xl) 0;
    }
  
    @media (max-width: 1024px) {
      .layout {
        flex-direction: column;
      }
    }
    
    @media (max-width: 768px) {
      .layout {
        gap: var(--spacing-md);
        padding: var(--spacing-md) 0;
      }
    }
  </style>