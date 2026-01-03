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

const normalizeImages = (arr) => {
  if (!Array.isArray(arr)) return [];
  return arr
    .map(item => {
      if (typeof item === 'string') return getImagePath(item);
      if (typeof item === 'object' && item?.image) return getImagePath(item.image);
      return null;
    })
    .filter(Boolean);
};


export default function useGamePosts () {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const importAll = async () => {
      try {
        setLoading(true);

        const markdownFiles = import.meta.glob(
          '/src/pages/games/*.mdx',
          {
            query: '?raw',
            import: 'default'
          }
        );

        const loadedGames = await Promise.all(
          Object.entries(markdownFiles).map(async ([path, resolver]) => {
            try {
              const rawContent = await resolver();
              const { data: frontmatter, content } = matter(rawContent);

              return {
                slug: path
                  .replace('/src/pages/games/', '')
                  .replace('.mdx', ''),

                content,

                frontmatter: {
                  ...frontmatter,

                  thumbnail: getImagePath(frontmatter.thumbnail),

                  images: normalizeImages(frontmatter.images),

                  // ✅ Correctly read imageCarousel
                  imageCarousel: normalizeImages(
                    frontmatter.imageCarousel?.length
                      ? frontmatter.imageCarousel
                      : frontmatter.images
                  ),
                }
              };
            } catch (fileErr) {
              console.error(`Error processing ${path}`, fileErr);
              return null;
            }
          })
        );

        setGames(loadedGames.filter(Boolean));
      } catch (err) {
        console.error('Error loading games:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    importAll();
  }, []);

  return { games, loading, error };
}