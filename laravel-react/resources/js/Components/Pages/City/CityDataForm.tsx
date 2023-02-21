

export function CityDataForm() {
    return (
        <main className="flex justify-center flex-1">
            <form className="mt-12 border border-shapes rounded-2xl bg-white max-w-7xl flex flex-col w-full overflow-hidden">
                <div className="w-full flex items-center space-x-10 px-16 py-10 border-b borde-shapes bg-gradient-green">
                    <div className="font-barlow font-semibold text-2xl text-white flex items-center justify-center h-16 w-16 rounded-[10px] bg-green">
                        01
                    </div>

                    <h1 className="font-barlow font-semibold text-4xl text-green">Adicione uma cidade</h1>
                </div>

                <fieldset className="w-full px-16 mt-12">
                    <legend className="font-barlow font-medium text-2xl text-textTitle">Dados da cidade</legend>

                    <div className="h-px bg-shapes mt-4"></div>
                </fieldset>
            </form>
        </main>
    );
}
