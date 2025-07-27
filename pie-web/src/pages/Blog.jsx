// // function Blog () {
// //     return (
// //         <div className="bg-beige min-h-screen">
// //             <div className="margin">
// //                 Blog
// //             </div>
// //         </div>
// //     ) 
// // }
// // export default Blog;

import { useState, useEffect } from 'react';
import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Polyfill Buffer for browser
if (typeof window !== 'undefined' && !window.Buffer) {
  window.Buffer = Buffer;
}

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const importAll = async () => {
      try {
        setLoading(true);
        // Updated glob import syntax
        const markdownFiles = import.meta.glob('/src/pages/content/*.md', {
          query: '?raw',
          import: 'default',
          eager: false
        });

        const fileEntries = Object.entries(markdownFiles);
        
        if (fileEntries.length === 0) {
          throw new Error('No markdown files found in /src/pages/content/');
        }

        const loadedPosts = await Promise.all(
          fileEntries.map(async ([path, resolver]) => {
            try {
              const rawContent = await resolver();
              const { data: frontmatter, content } = matter(rawContent);
              return {
                frontmatter,
                content,
                slug: path.replace('/src/pages/content/', '').replace('.md', '')
              };
            } catch (fileErr) {
              console.error(`Error processing ${path}:`, fileErr);
              return null;
            }
          })
        );

        // Filter out failed imports
        const validPosts = loadedPosts.filter(post => post !== null);
        
        validPosts.sort((a, b) => 
          new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
        
        setPosts(validPosts);
      } catch (err) {
        setError(err.message);
        console.error('Error loading posts:', err);
      } finally {
        setLoading(false);
      }
    };

    importAll();
  }, []);

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error}</div>;
  if (posts.length === 0) return <div>No posts found</div>;

  return (
    <div className="blog-list">
      <h1>Blog Posts</h1>
      <div className="posts-container">
        {posts.map((post, index) => (
          <article key={index} className="post-card">
            <h2>{post.frontmatter.title}</h2>
            <p>{new Date(post.frontmatter.date).toLocaleDateString()}</p>
            {post.frontmatter.thumbnail && (
              <img 
                src={post.frontmatter.thumbnail} 
                alt={post.frontmatter.title}
                style={{ maxWidth: '200px' }}
              />
            )}
            {/* <ReactMarkdown>
              {post.content.length > 100 
                ? `${post.content.substring(0, 100)}...`
                : post.content}
            </ReactMarkdown> */}
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;