import Image from "next/image";
import Link from "next/link";

export function Posts() {
  return (
    <div className="mb-40 mx-auto w-[970px]">
      <div className="flex flex-col mt-24">
        <p className="text-cloud-burst-950 text-4xl font-bold">Design Tools</p>
      </div>

      <div>
        <hr className="w-full border-1 my-10" />

        <Link href="/" className="flex justify-between">
          <div className="max-w-[610px]">
            <div className="flex gap-4 items-center mb-6">
              <div className="bg-sky-100 rounded-md flex text-xs justify-center items-center px-3 py-2 font-semibold text-sky-950 uppercase">
                Design Tools
              </div>
              <span className="uppercase font-semibold text-xs text-sky-950">
                August 13, 2021
              </span>
            </div>

            <p className="font-bold text-2xl mb-3 text-sky-950">
              10 Hilarious Cartoons That Depict Real-Life Problems of
              Programmers
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
    </div>
  );
}
