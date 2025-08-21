<script>
    import ContactItem from './ContactItem.svelte';
    
    export let user;
    
    $: contactItems = [
      {
        icon: "fa-solid fa-envelope",
        text: user.email,
        href: `mailto:${user.email}`,
        isLink: true
      },
      {
        icon: "fa-solid fa-location-dot",
        text: user.location,
        isLink: false
      },
      {
        icon: "fa fa-github",
        text: "GitHub",
        href: user.links.github,
        isLink: true
      },
      {
        icon: "fa-brands fa-google-scholar",
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