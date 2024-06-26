'use client';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useStore } from '@/lib/store/store';
import { countryMappings, countryMappings1 } from '@/lib/data/data';
export default function JobSearchBox() {
  const keyWordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  let region = '';
  const { setRegion, setSearchJobCriteria } = useStore();
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const a: { q?: string; l?: string } = {};
    if (keyWordRef.current && keyWordRef.current.value.trim()) {
      a.q = keyWordRef.current.value.trim();
    }
    const qValue = a.q || '';
    router.push(`/jobs?q=${qValue}`);

 
  };
  return (
    <form
      className="flex flex-col gap-1 items-center md:items-end w-full"
      onSubmit={handleFormSubmit}
    >
      <div className="flex flex-col md:gap-2 md:flex-row mx-18 w-full mt-5 md:border rounded-t-lg md:rounded-lg p-2 md:shadow-md">
        <input
          type="text"
          className="flex-grow px-4 py-2 focus:outline-none border rounded-t-lg md:rounded-lg shadow-md md:border-none md:shadow-none text-base bg-white animate-pulse text-center md:text-left"
          placeholder="Enter Keywords"
          ref={keyWordRef}
        />
        <button
          className="px-4 py-2 bg-[#bd2125] text-white md:rounded-md rounded-b-lg hover:bg-orange-600 animate-pulse font-bold shadow-md"
          type="submit"
        >
          Search
        </button>
      </div>
      {/* <button
        className=" text-gray-400 text-base md:pr-6 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-green-400 via-green-400 to-sky-300"
        onClick={async (event: React.FormEvent) => {
          event.preventDefault();
          const a: { q?: string; l?: string } = {};
          if (keyWordRef.current && keyWordRef.current.value.trim()) {
            a.q = keyWordRef.current.value.trim();
          }
          setRegion('Global');
          const params = new URLSearchParams({
            l: '',
            q: encodeURIComponent(a.q || ''),
          });
          router.push(`/jobs?${params.toString()}`);
        }}
      >
        Or Search Globally
      </button> */}
    </form>
  );
}
