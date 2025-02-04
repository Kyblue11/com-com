import React from "react";

export default function NewsletterForm() {
  return (
    <form className="flex flex-col mt-20 w-full max-md:mt-10 rounded-tl-[40px]">
      <div className="flex gap-5 justify-between w-full">
        <label htmlFor="email" className="sr-only">
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="my-auto text-base text-black font-[250] bg-transparent border-none"
          placeholder="Your email"
          aria-label="Your email address"
        />
        <button
          type="submit"
          className="gap-5 self-stretch py-2.5 pr-7 pl-8 text-sm font-medium text-center text-white whitespace-nowrap bg-black rounded-[40px] max-md:px-5"
        >
          Subscribe
        </button>
      </div>
      <div className="shrink-0 mt-2 h-0.5 border-2 border-black border-solid" />
    </form>
  );
}
