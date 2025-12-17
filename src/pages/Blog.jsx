import useBlogPosts from "../hooks/useBlogPosts";
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate(); 
  const { blogs, loading, error } = useBlogPosts();

  if (loading) return <div>Loading blogs...</div>;
  if (error) return <div>Error: {error}</div>;
  if (blogs.length === 0) return <div>No blogs found</div>;

  return (
    <div className="bg-beige min-h-screen">
      <div className="margin">
        <h1 className="font-bold font-xl text-[#FF00AE] pt-10 px-10" > THE BLOG </h1>
        <div className='grid gap-4 grid-cols-1 p-10
                        2xl:grid-cols-4
                        lg:grid-cols-3
                        md:grid-cols-2'>
          {blogs.map((blog, index) => (
            <article 
              key={index} 
              role="button"
              onClick={() => navigate(`/IndvBlog/${blog.slug}`)}
              className="flex flex-col border-2 border-[#FF00AE] p-5 rounded-xl bg-[#FBF4DD] shadow-md hover:shadow-lg transition-shadow cursor-pointer justify-between">
                <div className="border-2 border-[#FF00AE] rounded-lg justify-items-center">
                {blog.frontmatter.thumbnail && (
                  <img 
                    src={blog.frontmatter.thumbnail} 
                    alt={blog.frontmatter.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      console.error('Failed to load image:', blog.frontmatter.thumbnail);
                    }}
                    className="h-[20vh] max-h-[150px] min-h-[100px] w-full object-cover
                               2xl: min-h-[150px]
                               xl:max-h-[200px] 
                               lg:max-h-[100px]"
                  />
                )}
                </div>

              <div className="flex flex-col text-end items-end font-xs pt-5">
                <h2 className="font-bold">{(blog.frontmatter.title).toUpperCase()}</h2>
                <p className="text-[#FF00AE]">{new Date(blog.frontmatter.date).toLocaleDateString()} </p>
                <p className="text-[#FF00AE]">{new Date(blog.timestamp).toLocaleTimeString()}</p>
                <svg width="32px" viewBox="0 0 24 24" className="sm:"> <polyline data-name="Right" fill="none" id="Right-2" points="16.4 7 21.5 12 16.4 17" stroke="#FF00AE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#FF00AE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="2.5" x2="19.2" y1="12" y2="12"></line></svg>
              </div>

            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;