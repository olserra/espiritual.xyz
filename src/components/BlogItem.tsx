import React from "react";
import Image from "next/image";

interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  published: boolean;
}

const BlogItem = ({ post }: { post: Post }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="p-4 flex flex-col justify-center items-start lg:max-w-2xl"
        key={post.id}
      >
        <h2 className="font-bold pb-2 text-2xl">{post.title}</h2>
        <p className="text-sm text-gray-400 pb-2">Published at: {post.date}</p>
        <Image
          src={post.image}
          alt=""
          width={700}
          height={700}
          className="py-8"
        />
        <p className="pb-40">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogItem;
