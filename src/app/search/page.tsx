import BookItem from "@/components/book-item";
import { BookData } from "@/types";

export default async function Page(
    // http://localhost:3000/search?q=가나다라
    // searchParams는 Promise<>고, q의 string 타입을 가진 객체를 반환하고 있다.
    {searchParams} : {searchParams : {q?: string;};}
) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`);
    if (!response.ok) {
      return <div>에러 발생</div>
    }
    const books: BookData[] = await response.json();
  return (
    <div>
      {books.map((book : BookData) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  )
}
