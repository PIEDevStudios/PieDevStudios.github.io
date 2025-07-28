import useBlogPosts from '../hooks/useBlogPosts';
import { useParams } from 'react-router-dom';

const IndvBlog = () => {
  const { slug } = useParams();
  const { blogs, loading, error } = useBlogPosts(slug);

  if (loading) return <div>Loading blog...</div>;
  if (error) return <div>Error: {error}</div>;
  const blog = blogs.find(b => b.slug === slug);
  if (!blog) return <div>Blog not found</div>;


  return (
    <div className='bg-beige min-h-screen'>
      <div className='margin'>
        <h1 className='text-[5vw]'> {blog.frontmatter.title}</h1>
        <p>{new Date(blog.frontmatter.date).toLocaleDateString()} {" "} {new Date(blog.timestamp).toLocaleTimeString()}</p>
          {blog.frontmatter.featuredImage && (
            <img 
              src={blog.frontmatter.featuredImage} 
              alt={blog.frontmatter.title}
              onError={(e) => {
                e.target.style.display = 'none';
                console.error('Failed to load image:', blog.frontmatter.featuredImage);
              }}
            />
          )}
          {blog.content}
      </div>
    </div>
  );
};

export default IndvBlog;
