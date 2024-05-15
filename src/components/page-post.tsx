import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";

import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

import { notionClient, notionDatabase } from "@/services";

import { Post } from "@/components/post";
import { Posts } from "@/components/posts";
import { Footer } from "@/components/footer";

type Props = {
  otherPostsCategory: string;
  slug: string;
};

export default async function PagePost({ otherPostsCategory, slug }: Props) {
  return (
    <div className="mx-auto p-10 flex justify-center items-center flex-col">
      {/* Other posts */}
      <Posts />

      <Footer />
    </div>
  );
}
