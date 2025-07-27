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

// src/components/BlogList.jsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Dynamically import all markdown files from the posts directory
    const importAll = async () => {
      // In Vite, use import.meta.glob for dynamic imports
      const markdownFiles = import.meta.glob('../posts/*.md');
      const postPromises = [];

      for (const path in markdownFiles) {
        postPromises.push(
          markdownFiles[path]().then((module) => {
            // Parse the front matter and content
            const { data: frontmatter, content } = matter(module.default);
            return {
              frontmatter,
              content,
              slug: path.replace('../posts/', '').replace('.md', '')
            };
          })
        );
      }

      // Wait for all promises to resolve and sort by date
      const loadedPosts = await Promise.all(postPromises);
      loadedPosts.sort((a, b) => 
        new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
      );
      setPosts(loadedPosts);
    };

    importAll();
  }, []);

  return (
    <div className="blog-list">
      <h1>Blog Posts</h1>
      {posts.length === 0 && <p>Loading posts...</p>}
      
      <div className="posts-container">
        {posts.map((post, index) => (
          <article key={index} className="post-card">
            {post.frontmatter.thumbnail && (
              <div className="post-thumbnail">
                <img 
                  src={post.frontmatter.thumbnail} 
                  alt={post.frontmatter.title} 
                />
              </div>
            )}
            
            <div className="post-content">
              <h2>{post.frontmatter.title}</h2>
              
              <div className="post-meta">
                {post.frontmatter.date && (
                  <time dateTime={post.frontmatter.date}>
                    {format(new Date(post.frontmatter.date), 'MMMM d, yyyy')}
                  </time>
                )}
              </div>
              
              <div className="post-excerpt">
                <ReactMarkdown>
                  {post.content.length > 200 
                    ? `${post.content.substring(0, 200)}...` 
                    : post.content}
                </ReactMarkdown>
              </div>
              
              <a href={`/blog/${post.slug}`} className="read-more">
                Read more
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;