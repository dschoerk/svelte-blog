<script>
    import Card from './Card.svelte';
    import PostList from './PostList.svelte';

    import { marked } from 'marked';

    //import text from '../posts/hello-world.md'
    
    export let posts;
  </script>
  
  <main class="main-content">
    <Card>
      <h1 class="heading heading--xl">
        Academic Pages is a ready-to-fork GitHub Pages template for academic personal websites
      </h1>

      {@html marked("")}
      
      <p class="text">
        This is the front page of a website that is powered by the 
        <a href="#" class="link">Academic Pages template</a> and hosted on GitHub pages. 
        <a href="#" class="link">GitHub pages</a> is a free service in which websites are built 
        and hosted from code and data stored in a GitHub repository, automatically updating when a 
        new commit is made to the repository. This template was forked from the 
        <a href="#" class="link">Minimal Mistakes Jekyll Theme</a> created by Michael Rose, and then 
        extended to support the kinds of content that academics have: publications, talks, teaching, 
        a portfolio, blog posts, and a dynamically-generated CV. You can fork 
        <a href="#" class="link">this template</a> right now, modify the configuration and Markdown files, 
        add your own PDFs and other content, and have your own site for free, with no ads!
      </p>
  
      <h2 class="heading heading--lg">A data-driven personal website</h2>
      <p class="text">
        Like many other Jekyll-based GitHub Pages templates, Academic Pages makes you separate the 
        website's content from its form. The content & metadata of your website are in structured 
        Markdown files, while various other files constitute the theme, specifying how to transform 
        that content & metadata into HTML pages. You keep these various Markdown (.md), YAML (.yml), 
        HTML, and CSS files in a public GitHub repository. Each time you commit and push an update 
        to the repository, the <a href="#" class="link">GitHub pages</a> service creates static HTML 
        pages based on these files, which are hosted on GitHub's servers free of charge.
      </p>
  
      <p class="text">
        Many of the features of dynamic content management systems (like Wordpress) can be achieved 
        in this fashion, using a fraction of the computational resources and with far less vulnerability 
        to hacking and DDoSing. You can also modify the theme to your heart's content without touching 
        the content of your site. If you get to a point where you've broken something in Jekyll/HTML/CSS 
        beyond repair, your Markdown files describing your talks, publications, etc. are safe. You can 
        rollback the changes or even delete the repository and start over - just be sure to save the 
        Markdown files! You can also write scripts that process the structured data on the site, such as 
        <a href="#" class="link">this one</a> that analyzes metadata in pages about talks to display 
        <a href="#" class="link">a map of every location you've given a talk</a>.
      </p>
  
      <h2 class="heading heading--lg">Getting started</h2>
      <ol class="list">
        <li>Register a GitHub account if you don't have one and confirm your e-mail (required!)</li>
        <li>Fork <a href="#" class="link">this template</a> by clicking the "Use this template" button in the top right.</li>
        <li>Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.</li>
        <li>Set site-wide configuration and create content & metadata</li>
        <li>Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.</li>
        <li>Check status by going to the repository settings, in the "GitHub pages" section</li>
      </ol>
  
      <h2 class="heading heading--lg">Site-wide configuration</h2>
      <p class="text">
        The main configuration file for the site is in the base directory in 
        <code class="code">_config.yml</code>, which defines the content in the sidebars and other 
        site-wide features. You will need to replace the default variables with ones about yourself 
        and your site's github repository. The configuration file for the top menu is in 
        <code class="code">_data/navigation.yml</code>. For example, if you don't have a portfolio 
        or blog posts, you can remove those items from that navigation.yml file to remove them from the header.
      </p>
  
      <h2 class="heading heading--lg">Create content & metadata</h2>
      <p class="text">
        For site content, there is one Markdown file for each type of content, which are stored in 
        directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk 
        is a Markdown file in the <a href="#" class="link">_talks directory</a>. At the top of each 
        Markdown file is structured data in YAML about the talk, which the theme will parse to do lots 
        of cool stuff. The same structured data about a talk is used to generate the list of talks on 
        the <a href="#" class="link">Talks page</a>, each <a href="#" class="link">individual page</a> 
        for specific talks, the talks section for the <a href="#" class="link">CV page</a>, and the 
        <a href="#" class="link">map of places you've given a talk</a>.
      </p>
    </Card>
  
    <Card>
      <PostList {posts} />
    </Card>
  </main>
  
  <style>
    .main-content {
      flex: 1;
    }
  
    .heading {
      font-weight: 700;
      color: var(--color-primary);
      line-height: 1.3;
    }
  
    .heading--xl {
      font-size: var(--text-3xl);
      margin-bottom: var(--spacing-lg);
    }
  
    .heading--lg {
      font-size: var(--text-2xl);
      margin: var(--spacing-xl) 0 var(--spacing-md) 0;
    }
  
    .text {
      line-height: 1.7;
      margin-bottom: var(--spacing-lg);
    }
  
    .link {
      color: var(--color-accent);
      text-decoration: none;
      transition: var(--transition);
    }
  
    .link:hover {
      text-decoration: underline;
    }
  
    .list {
      padding-left: var(--spacing-lg);
      margin-bottom: var(--spacing-lg);
    }
  
    .list li {
      margin-bottom: var(--spacing-sm);
    }
  
    .code {
      background-color: var(--color-border);
      padding: 0.125rem 0.25rem;
      border-radius: var(--radius-sm);
      font-size: var(--text-sm);
      font-family: 'Courier New', monospace;
    }
  
    @media (max-width: 768px) {
      .heading--xl {
        font-size: var(--text-2xl);
      }
    }
  </style>
  
  <!-- components/Card.svelte -->
  