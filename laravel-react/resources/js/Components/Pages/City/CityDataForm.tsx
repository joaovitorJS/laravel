import {AiOutlineExclamationCircle} from "react-icons/ai";
import {HeadForm} from "../../GlobalComponents/Form/HeadForm";
import {Input} from "../../GlobalComponents/Form/Input";

interface CityDataFormProps {
    onNextCurrentFrom: () => void;
}

export function CityDataForm({onNextCurrentFrom}: CityDataFormProps) {
    return (
        <main className="flex justify-center flex-1">
            <form className="mt-12 mb-20 pb-12 border border-shapes rounded-2xl bg-white max-w-[798px]  flex flex-col w-full overflow-hidden" encType="multtipart/form-data">
                <HeadForm number="01" title="Adicione uma cidade" />

                <fieldset className="w-full px-16 mt-12">
                    <legend className="font-barlow font-medium text-2xl text-textTitle">Dados da cidade</legend>

                    <div className="h-px bg-shapes mt-4"></div>

                    <Input.Root>
                        <Input.Label htmlFor="name">Nome da cidade</Input.Label>
                        <Input.Text
                            id="name"
                            name="name"
                        />
                    </Input.Root>

                    <Input.Root>
                        <Input.Label htmlFor="photo">Foto da cidade</Input.Label>
                        <Input.File
                            id="photo"
                            name="photo"
                        />
                    </Input.Root>

                    <Input.Root>
                        <Input.Label htmlFor="description">Descrição da cidade</Input.Label>
                        <Input.TextArea
                            id="description"
                            name="description"
                        />
                    </Input.Root>

                    <div className="mt-12 flex justify-between items-center">
                        <div className="flex space-x-6 items-center">
                            <AiOutlineExclamationCircle className="text-orange" size={32}/>
                            <span className="font-heebo text-sm text-textColor leading-6">Preencha todos os <br/> dados com cuidado.</span>
                        </div>

                        <button
                            onClick={onNextCurrentFrom}
                            className="font-heebo font-medium text-base text-white rounded-[10px] transition-all hover:brightness-[.90] bg-blueButton px-8 py-3"
                        >
                            Próximo
                        </button>
                    </div>
                </fieldset>
            </form>
        </main>
    );
}
