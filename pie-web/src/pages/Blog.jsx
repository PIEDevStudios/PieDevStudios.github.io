import useBlogPosts from "../hooks/useBlogPosts";
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate(); 
  const { posts, loading, error } = useBlogPosts();

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error}</div>;
  if (posts.length === 0) return <div>No posts found</div>;

  return (
    <div className="bg-beige min-h-screen">
      <div className="margin">
        <h1>Blogs</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {posts.map((post, index) => (
            <article 
              key={index} 
              role="button"
              onClick={() => navigate(`/IndvBlog/${post.slug}`)}
              className="border border-white p-5 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow cursor-pointer">
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
              <h2>{post.frontmatter.title}</h2>
              <p>{new Date(post.frontmatter.date).toLocaleDateString()}</p>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;