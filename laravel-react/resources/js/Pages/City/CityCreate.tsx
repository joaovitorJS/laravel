import {DashboardBaseLayout} from "../../Layouts/DashboardBaseLayout";
import {HeaderCityAdd} from "../../Components/Pages/City/HeaderCityAdd";
import {useState} from "react";
import {CityDataForm} from "../../Components/Pages/City/CityDataForm";

export default function CityCreate() {
    const [currentForm, setCurrentForm] = useState<1|2>(1);

    return (
        <DashboardBaseLayout title="Adicionar Cidade">
            <HeaderCityAdd currentForm={currentForm}/>
            {
                currentForm === 1 && (<CityDataForm />)
            }
        </DashboardBaseLayout>
    );
}
