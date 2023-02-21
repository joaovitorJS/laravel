import React from "react";
import {TravelerLogo} from "./SVG/TravelerLogo";
import {Link, usePage} from "@inertiajs/react";
import {MdPowerSettingsNew} from "react-icons/md";
import {Chat, MapPin, SquaresFour} from "phosphor-react";
import clsx from "clsx";

interface NavigationLinkProps {
    id: number;
    href: string;
    icon:  JSX.Element;
    activeLink?: Array<string>;
}

const navigationLinks: NavigationLinkProps[] = [
    {
        id: 1,
        href: "dashboard",
        icon: <MapPin size={24} />,
        activeLink: ["Dashboard", "City/CityCreate"]
    },
    {
        id: 2,
        href: "categories",
        icon: <SquaresFour size={24} />,
        activeLink: []
    },
    {
        id: 3,
        href: "comments",
        icon: <Chat size={24} />,
        activeLink: []
    }
]

export function Sidebar() {
    const { url, component} = usePage();

    return (
        <aside className="w-24 h-screen fixed top-0 left-0 bg-orange pt-6 pb-8 flex items-center flex-col justify-between">
            <Link href={route('home')}>
                <TravelerLogo />
            </Link>

            <div className="flex flex-col space-y-10">
                {
                    navigationLinks.map(link => {
                        const activeLink = link.activeLink?.includes(component);
                        return (
                          <Link href={link.href} key={link.id}>
                              {React.cloneElement(link.icon as any, {className: clsx(!activeLink && 'text-orangeLow transition-all hover:text-white', activeLink && 'text-white')})}
                          </Link>
                        );
                    })
                }
            </div>

            <Link method="post" href={route('logout')} as="button" title="Sair">
                <MdPowerSettingsNew size={24} className="text-white"/>
            </Link>
        </aside>
    );
}
