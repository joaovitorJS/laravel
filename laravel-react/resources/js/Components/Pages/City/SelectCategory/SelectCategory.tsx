import {Category} from "./Category";
import {ArrayCategoryProps} from "../PlaceDataForm";

interface SelectCategoryProps {
    arrayCategory: ArrayCategoryProps[];
    onChangeSelectedCategory: (event: string) => void;
    selectedCategory: string;
}

export function SelectCategory(props: SelectCategoryProps) {
    return (
        <div className="flex flex-col space-y-6 mt-10">
            <label className="font-heebo text-textColor text-sm">Selecione uma categoria</label>

            <div className="flex justify-between">
                {
                    props.arrayCategory.map(category => {
                        return  (
                            <Category
                                key={category.name}
                                icon={category.icon}
                                name={category.name}
                                onChangeSelectedCategory={props.onChangeSelectedCategory}
                                selectedCategory={props.selectedCategory}
                            >
                                {category.label}
                            </Category>
                        );
                    })
                }
            </div>
        </div>
    );
}
