import useBlogPosts from '../hooks/useBlogPosts';
import { useParams } from 'react-router-dom';

const IndvBlog = () => {
  const { slug } = useParams();
  const { posts, loading, error } = useBlogPosts(slug);

  if (loading) return <div>Loading post...</div>;
  if (error) return <div>Error: {error}</div>;
  const post = posts.find(p => p.slug === slug);
  if (!post) return <div>Post not found</div>;


  return (
    <div className='bg-beige min-h-screen'>
      <div className='margin'>
        <h1 className='text-[5vw]'> {post.frontmatter.title}</h1>
        <p>{new Date(post.frontmatter.date).toLocaleDateString()}</p>
          {post.frontmatter.thumbnail && (
            <img 
              src={post.frontmatter.thumbnail} 
              alt={post.frontmatter.title}
              onError={(e) => {
                e.target.style.display = 'none';
                console.error('Failed to load image:', post.frontmatter.thumbnail);
              }}
            />
          )}
          {post.content}
      </div>
    </div>
  );
};

export default IndvBlog;
