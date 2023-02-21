import {AiOutlineExclamationCircle} from "react-icons/ai";


export function CityDataForm() {
    return (
        <main className="flex justify-center flex-1">
            <form className="mt-12 mb-20 pb-12 border border-shapes rounded-2xl bg-white max-w-7xl flex flex-col w-full overflow-hidden" encType="multtipart/form-data">
                <div className="w-full flex items-center space-x-10 px-16 py-10 border-b borde-shapes bg-gradient-green">
                    <div className="font-barlow font-semibold text-2xl text-white flex items-center justify-center h-16 w-16 rounded-[10px] bg-green">
                        01
                    </div>

                    <h1 className="font-barlow font-semibold text-4xl text-green">Adicione uma cidade</h1>
                </div>

                <fieldset className="w-full px-16 mt-12">
                    <legend className="font-barlow font-medium text-2xl text-textTitle">Dados da cidade</legend>

                    <div className="h-px bg-shapes mt-4"></div>

                    <div className="mt-6 flex flex-col space-y-[10px]">
                        <label htmlFor="name" className="font-heebo text-textColor text-sm">
                            Nome da cidade
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="bg-background border border-shapes rounded-[10px] h-14"
                        />
                    </div>

                    <div className="mt-6 flex flex-col space-y-[10px]">
                        <label htmlFor="photo" className="font-heebo text-textColor text-sm">
                            Foto da cidade
                        </label>
                        <div className="border-2 border-dashed border-shapes h-40 rounded-2xl bg-background relative transition-all hover:opacity-[0.8]">
                            <input
                                type="file"
                                className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer z-10"
                                name="photo"
                                id="photo"
                                accept="image/*"
                                multiple={false}
                                title="Escolha uma foto"
                            />
                            <span className="font-heebo text-base text-orange absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">+ Adicionar uma foto</span>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col space-y-[10px] relative">
                        <label htmlFor="description" className="font-heebo text-textColor text-sm">
                            Descrição da cidade
                        </label>
                        <textarea
                            className="bg-background border border-shapes rounded-[10px] resize-none h-52"
                            maxLength={320}
                            id="description"
                            name="description"
                        >

                        </textarea>
                        <span className="font-heebo text-textComplement text-xs absolute bottom-2 right-4">Máximo 320 caracteres</span>
                    </div>

                    <div className="mt-12 flex justify-between items-center">
                        <div className="flex space-x-6 items-center">
                            <AiOutlineExclamationCircle className="text-orange" size={32}/>
                            <span className="font-heebo text-sm text-textColor leading-6">Preencha todos os <br/> dados com cuidado.</span>
                        </div>

                        <button className="font-heebo font-medium text-base text-white rounded-[10px] transition-all hover:brightness-[.90] bg-blueButton px-8 py-3">
                            Próximo
                        </button>
                    </div>
                </fieldset>
            </form>
        </main>
    );
}
