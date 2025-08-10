import useBlogPosts from '../hooks/useBlogPosts';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const IndvBlog = () => {
  const { slug } = useParams();
  const { blogs, loading, error } = useBlogPosts(slug);

  if (loading) return <div>Loading blog...</div>;
  if (error) return <div>Error: {error}</div>;
  const blog = blogs.find(b => b.slug === slug);
  if (!blog) return <div>Blog not found</div>;


  return (
    <div className='bg-beige min-h-screen'>
      <div className='flex flex-col margin p-15 pb-30 '>
        <h1 className='font-xl font-bold'> {blog.frontmatter.title}</h1>
        <p className='font-md text-[#FF00AE] pb-10'>{new Date(blog.frontmatter.date).toLocaleDateString()} {" "} {new Date(blog.timestamp).toLocaleTimeString()}</p>
        <div className='flex place-content-center rounded-xl bg-white mb-10'>
          {blog.frontmatter.featuredImage && (
            <img 
              src={blog.frontmatter.featuredImage} 
              alt={blog.frontmatter.title}
              onError={(e) => {
                e.target.style.display = 'none';
                console.error('Failed to load image:', blog.frontmatter.featuredImage);
              }}
              className='object-cover w-full h-full rounded-xl max-h-[70vh] min-h-[300px]
                        2xl:max-h-[70vh]
                        md:max-h-[50vh]'
            />
          )}          
        </div>
        <div className='mb-10'>
          {blog.content ? (
            <div className='react-markdown'>
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {blog.content}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="text-red-500">No content available</p>
          )}          
        </div>

          <Link className="text-[#FF00AE] font-bold font-md self-end" to="/Blog"> More Posts --&#x203A; </Link>
      </div>
    </div>
  );
};

export default IndvBlog;
