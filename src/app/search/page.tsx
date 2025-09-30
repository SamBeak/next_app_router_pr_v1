import ClientComponent from "./client-component";

export default async function Page(
    // http://localhost:3000/search?q=가나다라
    // searchParams는 Promise<>고, q의 string 타입을 가진 객체를 반환하고 있다.
    {searchParams} : {searchParams : Promise<{q : string}>;}
) {
    const { q } = await searchParams;
    console.log(q); //  가나다라
  return (
    <>
      <div>search page {q}</div>
    </>
  )
}
