// // function IndvBlog () {
// //     return (
// //         <div>
            
// //         </div>
// //     )
// // }

// // export default IndvBlog;

// src/pages/BlogPost.jsx
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import { useEffect, useState } from 'react';

const IndvBlog = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await import(`../posts/${slug}.md`);
        const { data: frontmatter, content } = matter(response.default);
        setPost({ frontmatter, content });
      } catch (err) {
        console.error('Error loading post:', err);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <article className="blog-post">
      <header>
        <h1>{post.frontmatter.title}</h1>
        {post.frontmatter.date && (
          <time dateTime={post.frontmatter.date}>
            {new Date(post.frontmatter.date).toLocaleDateString()}
          </time>
        )}
      </header>
      
      {post.frontmatter.thumbnail && (
        <img 
          src={post.frontmatter.thumbnail} 
          alt={post.frontmatter.title} 
          className="post-image"
        />
      )}
      
      <div className="post-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default IndvBlog;