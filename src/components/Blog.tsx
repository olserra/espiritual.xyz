import React, { useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  published: boolean;
}

const Blog = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get("/api/posts");
        setPosts(response.data);
        return response;
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);

  // Blog.tsx
  // ...

  const Posts = (): JSX.Element => {
    return (
      <>
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 flex flex-col justify-between items-start max-w-sm max-h-sm"
          >
            <div>
              <h2 className="font-bold pb-2 text-2xl">{post.title}</h2>
              <p className="text-sm text-gray-400 pb-2">
                Published at: {post.date}
              </p>
            </div>
            <div>
              <Image
                src={post.image}
                alt=""
                width={700}
                height={700}
                className="max-w-full max-h-full py-2"
              />
              <Link href={`/blog/${post.id}`}>
                <p className="pb-8 cursor-pointer text-gray-300 text-sm underline font-bold">
                  Read more ↓
                </p>
              </Link>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center pb-40">
      <div className="px-4 md:px-12 mx-auto text-center lg:px-6">
        <div className="mt-12">
          <p className="mb-8 text-gray-400 lg:mb-16 text-2xl md:text-4xl font-bold dark:text-gray-300">
            Blog
          </p>
          <p className="pb-32 lg:pb-24 lg:max-w-lg">
            <strong>Our blog</strong> aims to provide you with the latest
            information about our products and services. We also share the
            latest news about the company and our team. We hope you enjoy it!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Posts />
      </div>
    </div>
  );
};

export default Blog;
