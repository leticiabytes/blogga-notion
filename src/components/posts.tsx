import { notionDatabase } from "@/services/get-notion-database";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";

export async function Posts() {
  const { posts } = await notionDatabase();

  return (
    <>
      <div className="mb-40 mx-auto w-[970px]">
        <div className="flex flex-col mt-24">
          <p className="text-cloud-burst-950 text-4xl font-bold">
            Design Tools
          </p>
        </div>

        {posts.map((post) => (
          <div key={post.id}>
            <hr className="w-full border-1 my-10" />

            <Link href="/" className="flex justify-between">
              <div className="max-w-[610px]">
                <Badge category={"Design Tools"} date="May 22, 2022" />

                <p className="font-bold text-2xl mb-3 text-sky-950">
                  {post.properties.Title.title[0].plain_text}
                </p>

                <span className="font-normal text-lg text-sky-950">
                  Redefined the user acquisition and redesigned the onboarding
                  experience, all within 3 working weeks.
                </span>
              </div>
              <Image
                className="rounded-lg"
                src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpdyvf22w1h18ikwbb53i.jpeg"
                alt="programmer image"
                width={300}
                height={210}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
