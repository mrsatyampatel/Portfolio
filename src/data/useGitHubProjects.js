import { useState, useEffect } from 'react';
import defaultProjects from './projectsData';

// Helper to format repository names into readable titles
function formatRepoTitle(name) {
  if (!name) return 'Project';
  const titleMap = {
    'Portfolio': 'Developer Portfolio',
    'alumniconnectsih25-satyam': 'Alumni Connect (SIH 2025)',
    'GAS_ALERT_INTEGRATION': 'Gas Alert Integration System',
    'Mangifera-Shield-Satyam': 'Mangifera Shield',
  };
  if (titleMap[name]) return titleMap[name];

  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Custom hook to dynamically fetch public projects from GitHub API.
 * Automatically discovers new repositories pushed to github.com/mrsatyampatel.
 * Falls back to default curated projects on rate limit or offline.
 */
export function useGitHubProjects() {
  const [projects, setProjects] = useState(defaultProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchRepos() {
      try {
        const res = await fetch('https://api.github.com/users/mrsatyampatel/repos?sort=updated&per_page=100');
        if (!res.ok) throw new Error('GitHub API response not ok');
        const repos = await res.json();

        if (Array.isArray(repos) && repos.length > 0) {
          // 1. Check for repos with 'portfolio' or 'featured' topic
          const tagged = repos.filter(
            (r) =>
              !r.fork &&
              r.topics &&
              (r.topics.includes('portfolio') || r.topics.includes('featured'))
          );

          // 2. If tagged repos exist, prioritize them. Otherwise show all non-fork public repos.
          const targetRepos = tagged.length > 0
            ? tagged
            : repos.filter((r) => !r.fork && r.name !== 'mrsatyampatel');

          const formatted = targetRepos.map((r) => {
            // Check if we have curated details in defaultProjects
            const match = defaultProjects.find(
              (p) =>
                p.github &&
                p.github.toLowerCase().endsWith(r.name.toLowerCase())
            );

            // Clean tech stack tags
            let techTags = [];
            if (r.topics && r.topics.length > 0) {
              techTags = r.topics
                .filter((t) => t !== 'portfolio' && t !== 'featured')
                .map((t) => t.charAt(0).toUpperCase() + t.slice(1));
            }
            if (techTags.length === 0 && match?.tech) {
              techTags = match.tech;
            }
            if (techTags.length === 0 && r.language) {
              techTags = [r.language];
            }
            if (techTags.length === 0) {
              techTags = ['Web Tech'];
            }

            return {
              title: match?.title || formatRepoTitle(r.name),
              description: r.description || match?.description || 'Open source project built by Satyam Patel.',
              tech: techTags,
              github: r.html_url,
              live: r.homepage || match?.live || null,
              stars: r.stargazers_count,
              updatedAt: r.updated_at,
            };
          });

          if (isMounted && formatted.length > 0) {
            setProjects(formatted);
          }
        }
      } catch (err) {
        console.warn('Using default projects data:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchRepos();

    return () => {
      isMounted = false;
    };
  }, []);

  return { projects, loading };
}

export default useGitHubProjects;
