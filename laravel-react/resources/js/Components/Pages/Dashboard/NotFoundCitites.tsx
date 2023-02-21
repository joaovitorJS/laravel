import {EmojiBad} from "../../GlobalComponents/SVG/EmojiBad";

export function NotFoundCitites() {
    return (
        <main className="flex items-center justify-center flex-1">
            <div className="flex flex-col space-y-8 items-center">
                <EmojiBad />
                <p className="text-textColor font-medium text-2xl leading-normal text-center">Sem resultados. <br/>Cadastre uma nova cidade!</p>
            </div>
        </main>
    );
}
