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

// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import { Link } from 'react-router-dom';

// export async function getStaticProps() {
//   const blogDir = path.join(process.cwd(), 'src/pages/blog');
//   const files = fs.readdirSync(blogDir);
  
//   const posts = files.map(filename => {
//     const filePath = path.join(blogDir, filename);
//     const fileContent = fs.readFileSync(filePath, 'utf-8');
//     const { data: frontmatter, excerpt } = matter(fileContent, {
//       excerpt: true
//     });
    
//     return {
//       slug: filename.replace('.md', ''),
//       frontmatter,
//       excerpt
//     };
//   });

//   // Sort posts by date (newest first)
//   posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

//   return {
//     props: { posts }
//   };
// }

// export default function Blog({ posts }) {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {posts.map(post => (
//           <Link 
//             key={post.slug} 
//             href={`/blog/${post.slug}`}
//             className="block border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
//           >
//             <div className="relative h-48">
//               <Image
//                 src={`/${post.frontmatter.thumbnail}`}
//                 alt={post.frontmatter.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{post.frontmatter.title}</h2>
//               <p className="text-gray-500 text-sm mb-2">
//                 {new Date(post.frontmatter.date).toLocaleDateString()}
//               </p>
//               <p className="text-gray-700">{post.excerpt}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }