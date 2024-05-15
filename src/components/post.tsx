import Image from "next/image";
import { Header } from "./header";

interface PostProps {
  title: string;
  bannerImage: string;
  content: string;
}

export function Post(props: PostProps) {
  const { title, content, bannerImage } = props;

  return (
    <article className="flex min-h-screen flex-col w-full">
      <Header />
      <div className="flex justify-center flex-col items-center">
        <Image
          alt={title}
          src={bannerImage}
          width={600}
          height={300}
          className="rounded-md mt-4 w-full h-[440px] object-center object-cover"
        />
        <div
          className="text-xl mt-4 max-w-3xl leading-10 text-black prose prose-p:text-black prose-headings:text-black"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </article>
  );
}
