import type { GetStaticProps, GetStaticPaths } from "next";
import { prisma } from "../../../prisma/prisma";
import BlogItem from "@/components/BlogItem";
import LandingPageLayout from "@/components/Layout";

interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  published: boolean;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogID = params?.blog as string;
  const post = await prisma.post.findUnique({
    where: { id: Number(blogID) },
  });
  return { props: { post } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await prisma.post.findMany();
  const paths = posts.map((post: Post) => ({
    params: { blog: post.id.toString() },
  }));
  return { paths, fallback: true };
};

const BlogDetailPage = ({ post }: { post: Post }) => {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <LandingPageLayout title="Blog post">
      <BlogItem post={post} />
    </LandingPageLayout>
  );
};

export default BlogDetailPage;
