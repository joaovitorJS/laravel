import * as Checkbox from "@radix-ui/react-checkbox";
import {IconType} from "react-icons";
import {
    cloneElement,
    createElement,
    InputHTMLAttributes,
    ReactNode
} from "react";
import clsx from "clsx";

type CategoryProps = {
    icon: IconType;
    name: string;
    children: ReactNode;
    onChangeSelectedCategory: (event: string) => void;
    selectedCategory: string;
}

export function Category({name, icon, children, onChangeSelectedCategory, selectedCategory}: CategoryProps) {
    const checked = selectedCategory === name;

    return (
        <div className={clsx("flex flex-col justify-between bg-background border border-shapes rounded-2xl min-w-[214px]", checked && "bg-gradient-blue")}>
            <div className="w-full border-b border-shapes flex justify-between items-center p-6">
                {createElement(icon as any, {className: "text-orange", size: 40})}

                <Checkbox.Root
                    className="bg-white w-6 h-6 border border-shapes rounded-lg transition-all data-[state=checked]:bg-greenLow data-[state=checked]:border-2 data-[state=checked]:border-green flex items-center justify-center"
                    name={name}
                    onCheckedChange={e => onChangeSelectedCategory(name)}
                    checked={checked}
                >
                    <Checkbox.Indicator>
                        <div className="w-[10px] h-[10px] rounded bg-green"></div>
                    </Checkbox.Indicator>
                </Checkbox.Root>
            </div>

            <div className="h-full flex items-center px-6 pt-6 pb-8">
                    <label className="font-barlow font-semibold text-xl text-textTitle leading-normal">
                        {children}
                    </label>
            </div>
        </div>
    );
}
