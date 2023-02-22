import {DashboardBaseLayout} from "../../Layouts/DashboardBaseLayout";
import {HeaderCityAdd} from "../../Components/Pages/City/HeaderCityAdd";
import {useState} from "react";
import {CityDataForm} from "../../Components/Pages/City/CityDataForm";
import {PlaceDataForm} from "../../Components/Pages/City/PlaceDataForm";

export default function CityCreate() {
    const [currentForm, setCurrentForm] = useState<1|2>(1);

    const handleNextCurrentForm = () => {
        setCurrentForm(currentForm+1);
    }

    const handlePreviousCurrentForm = () => {
        setCurrentForm(1);
    }

    return (
        <DashboardBaseLayout title="Adicionar Cidade">
            <HeaderCityAdd currentForm={currentForm} goBackPreviousCurrentForm={handlePreviousCurrentForm}/>
            {
                currentForm === 1 && (<CityDataForm onNextCurrentFrom={handleNextCurrentForm} />)
            }

            {
                currentForm === 2 && (<PlaceDataForm />)
            }
        </DashboardBaseLayout>
    );
}
