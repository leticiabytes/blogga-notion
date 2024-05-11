import "server-only";

import { notionClient } from "./notion-client";
import { PostsModel } from "@/models/posts-model";

export async function notionDatabase() {
  const posts = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "Status",
      status: {
        equals: "Published",
      },
    },
  });

  return posts.results as PostsModel[];
}
