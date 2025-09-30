import { ReactNode } from "react";
import ClientComponent from "./client-component";

export default function Layout(
    {children} : {children: ReactNode}
) {
    return (
        <div>
            <div>임시 서치바</div>
            {children}
            <ClientComponent /> 
        </div>
    );
}