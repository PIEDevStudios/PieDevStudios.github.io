// // function IndvBlog () {
// //     return (
// //         <div>
            
// //         </div>
// //     )
// // }

// // export default IndvBlog;

// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import { MDXRemote } from 'next-mdx-remote';
// import { serialize } from 'next-mdx-remote/serialize';
// import Image from 'next/image';

// export async function getStaticPaths() {
//   const blogDir = path.join(process.cwd(), 'src/pages/blog');
//   const files = fs.readdirSync(blogDir);
  
//   const paths = files.map(filename => ({
//     params: { slug: filename.replace('.md', '') }
//   }));

//   return {
//     paths,
//     fallback: false
//   };
// }

// export async function getStaticProps({ params }) {
//   const filePath = path.join(process.cwd(), 'src/pages/blog', `${params.slug}.md`);
//   const fileContent = fs.readFileSync(filePath, 'utf-8');
//   const { data: frontmatter, content } = matter(fileContent);
  
//   const mdxSource = await serialize(content);

//   return {
//     props: {
//       frontmatter,
//       content: mdxSource
//     }
//   };
// }

// export default function IndvBlog({ frontmatter, content }) {
//   return (
//     <div className="container mx-auto px-4 py-8 max-w-3xl">
//       <article className="prose lg:prose-xl mx-auto">
//         <h1 className="text-3xl font-bold mb-2">{frontmatter.title}</h1>
//         <p className="text-gray-500 mb-8">
//           {new Date(frontmatter.date).toLocaleDateString()}
//         </p>
        
//         <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
//           <Image
//             src={`/${frontmatter.thumbnail}`}
//             alt={frontmatter.title}
//             fill
//             className="object-cover"
//           />
//         </div>
        
//         <MDXRemote {...content} />
//       </article>
//     </div>
//   );
// }