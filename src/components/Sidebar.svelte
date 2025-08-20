<script>
    import Avatar from './Avatar.svelte';
    import ContactList from './ContactList.svelte';
    
    export let user;
  </script>
  
  <aside class="sidebar">
    <div class="card">
      <div class="profile">
        <Avatar src="profile-picture.png" />
        <h2 class="profile__name">{user.name}</h2>
        <p class="profile__title">{user.title}</p>
        <p class="profile__title">{user.university}</p>
      </div>
      
      <ContactList {user} />
    </div>
  </aside>
  
  <style>
    .sidebar {
      flex: 0 0 300px;
    }
  
    .card {
      background: var(--color-white);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
      padding: var(--spacing-xl);
      position: sticky;
      top: var(--spacing-xl);
    }
  
    .profile {
      text-align: center;
    }
  
    .profile__name {
      font-size: var(--text-xl);
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: var(--spacing-sm);
    }
  
    .profile__title {
      color: var(--color-text-light);
      font-size: var(--text-sm);
      margin-bottom: var(--spacing-md);
    }
  
    @media (max-width: 1024px) {
      .sidebar {
        flex: none;
      }
      
      .card {
        position: static;
      }
    }
  
    @media (max-width: 768px) {
      .card {
        padding: var(--spacing-lg);
      }
    }
  </style>
  