import { useState, useEffect } from 'react';
import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Polyfill Buffer for browser
if (typeof window !== 'undefined' && !window.Buffer) {
  window.Buffer = Buffer;
}

  const getImagePath = (imagePath) => {
    if (!imagePath) return null;
    return imagePath.replace(/^pie-web\/public/, '');
  };


export default function useGamePosts () {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Clean up image path for public assets
  useEffect(() => {
    const importAll = async () => {
      try {
        setLoading(true);
        // Updated glob import syntax
        const markdownFiles = import.meta.glob('/src/pages/games/*.mdx', {
          query: '?raw',
          import: 'default',
          eager: false
        });

        const fileEntries = Object.entries(markdownFiles);
        
        if (fileEntries.length === 0) {
          throw new Error('No markdown files found');
        }

        const loadedGames = await Promise.all(
          fileEntries.map(async ([path, resolver]) => {
            try {
              const rawContent = await resolver();
              const { data: frontmatter, content } = matter(rawContent);
              return {
                frontmatter: {
                  ...frontmatter,
                  thumbnail: getImagePath(frontmatter.thumbnail),
                  images: Array.isArray(frontmatter.images) ? frontmatter.images.map(imgObj => getImagePath(imgObj.image)) : [],
                  imageCarousel: frontmatter.images ? frontmatter.images.map(imgObj => getImagePath(imgObj.image)) : [],
                },
                content,
                slug: path.replace('/src/pages/games/', '').replace('.mdx', ''),
              };
            } catch (fileErr) {
              console.error(`Error processing ${path}:`, fileErr);
              return null;
            }
          })
        );

        // Filter out failed imports
        const validGames = loadedGames.filter(game => game !== null);
        
        setGames(validGames);
      } catch (err) {
        setError(err.message);
        console.error('Error loading games:', err);
      } finally {
        setLoading(false);
      }
    };

    importAll();
  }, []);
  return { games, loading, error };
}