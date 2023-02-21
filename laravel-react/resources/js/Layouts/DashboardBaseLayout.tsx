import {Head} from "@inertiajs/react";
import {Sidebar} from "../Components/GlobalComponents/Sidebar";
import {ReactNode} from "react";

interface DashboardBaseLayoutProps {
    title?: string;
    children: ReactNode;
}
export function DashboardBaseLayout(props: DashboardBaseLayoutProps) {
    return (
        <>
            { props?.title && ( <Head title={props.title} /> )}
            <div className="relative">
                <Sidebar />
                <div className="absolute left-24 top-0 right-0 min-h-screen flex flex-col">
                    {props.children}
                </div>
            </div>
        </>
    );
}
