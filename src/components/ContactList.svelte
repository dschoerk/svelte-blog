<script>
    import ContactItem from './ContactItem.svelte';
    
    export let user;
    
    $: contactItems = [
      {
        icon: `<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>`,
        text: user.email,
        href: `mailto:${user.email}`,
        isLink: true
      },
      {
        icon: `<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>`,
        text: user.location,
        isLink: false
      },
      {
        icon: `<path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>`,
        text: "GitHub",
        href: user.links.github,
        isLink: true
      },
      {
        icon: `<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>`,
        text: "ORCID",
        href: user.links.orcid,
        isLink: true
      },
      {
        icon: `<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>`,
        text: "Google Scholar",
        href: user.links.scholar,
        isLink: true
      }
    ];
  </script>
  
  <div class="contact-list">
    {#each contactItems as item}
      <ContactItem 
        icon={item.icon} 
        text={item.text} 
        href={item.href} 
        isLink={item.isLink} 
      />
    {/each}
  </div>
  
  <style>
    .contact-list {
      text-align: left;
      margin-top: var(--spacing-xl);
    }
  </style>