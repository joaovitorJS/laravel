import {HeaderDashboard} from "../Components/Pages/Dashboard/HeaderDashboard";
import {DashboardBaseLayout} from "../Layouts/DashboardBaseLayout";
import {NotFoundCitites} from "../Components/Pages/Dashboard/NotFoundCitites";


const cities = []
export default function Dashboard() {
    return (
        <DashboardBaseLayout title="Cidades">
            <HeaderDashboard />

            {cities.length === 0  && (
                <NotFoundCitites />
            )}
        </DashboardBaseLayout>
    );
}
