import {Link} from "@inertiajs/react";
import {FiArrowLeft} from "react-icons/fi";
import clsx from "clsx";

interface HeaderCityAdd {
    currentForm: 1 | 2;
}

export function HeaderCityAdd(props: HeaderCityAdd) {
    return (
        <header className="h-24 bg-white w-full border-b border-shapes">
            <div className="w-[83%] h-full max-w-7xl mx-auto flex items-center justify-between">
                <Link
                    href={route('dashboard')}
                    className="h-10 w-10 rounded-[10px] border border-shapes flex items-center justify-center"
                    as="button"
                    title="Voltar"
                >
                    <FiArrowLeft size={20} className="text-textComplement"/>
                </Link>

               <span className="font-barlow font-medium text-xl leading-normal text-textComplement">Adicionar um perfil</span>

                <span className="font-roboto text-textComplement text-xs flex space-x-2">
                    <strong className={clsx( props.currentForm === 1 && "font-bold text-textColor")}>01</strong>
                    <span>-</span>
                    <strong className={clsx( props.currentForm === 2 && "font-bold text-textColor")}>02</strong>
                </span>
            </div>
        </header>
    );
}
