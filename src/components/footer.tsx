export function Footer() {
  return (
    <footer className="w-[970px] mx-auto">
      <div className="flex justify-center items-center flex-col text-white bg-sky-950  h-[325px] rounded-xl relative">
        <div className="left-0 top-0 absolute">
          <svg
            width="105"
            height="103"
            viewBox="0 0 105 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // fill-rule="evenodd"
              // clip-rule="evenodd"
              d="M80.9117 0C81.2181 2.66993 81.3755 5.38514 81.3755 8.13712C81.3755 47.1353 49.7612 78.7496 10.763 78.7496C7.10374 78.7496 3.50948 78.4713 0.000244141 77.9346V101.767C3.53227 102.168 7.12355 102.375 10.763 102.375C62.8089 102.375 105.001 60.183 105.001 8.13712C105.001 5.39583 104.883 2.68188 104.654 0H80.9117Z"
              fill="#F7DF61"
            />
          </svg>
        </div>

        <p className="text-2xl font-bold">Subscribe to my blog.</p>
        <span className="mt-3 text-sky-100 font-light">
          I post fresh content every week.
        </span>

        <div>
          <input
            type="text"
            className="rounded-l-lg h-12 w-64 mt-10 px-5 py-4 "
            placeholder="Email address"
          />
          <button className="text-sky-950 font-semibold w-36 h-12 bg-emerald-500 rounded-r-lg hover:bg-emerald-400 transition delay-100">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <hr className="border-1 bg-gray-100 mb-10 mt-24" />
      <span className="w-full flex justify-center text-sky-950 font-medium mb-10">
        Copyright 2023 - Lorem Ipsum
      </span>
    </footer>
  );
}
