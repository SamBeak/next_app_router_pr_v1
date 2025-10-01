"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Searchbar() {
    const [search, setSearch] = useState("");
    const router = useRouter();
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/search?q=${search}`);
    };
  return (
    <form onSubmit={onSubmit}>
        <input type="text" value={search} onChange={onChange} />
        <button type="submit">Search</button>
    </form>
  )
}