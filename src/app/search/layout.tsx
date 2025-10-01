import { ReactNode } from "react";
import ClientComponent from "./client-component";
import Searchbar from "./searchbar";

export default function Layout(
    {children} : {children: ReactNode}
) {
    return (
        <div>
            <div>임시 서치바</div>
            <Searchbar />
            <ClientComponent>
                {children}
            </ClientComponent>
        </div>
    );
}