import PagePost from "@/components/page-post";

export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <PagePost slug={params.slug} otherPostsCategory="Daily Updates" />
    </div>
  );
}
