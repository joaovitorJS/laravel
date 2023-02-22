interface HeadFormProps {
    number: string;
    title: string;
}

export function HeadForm(props: HeadFormProps) {
    return (
        <div className="w-full flex items-center space-x-10 px-16 py-10 border-b borde-shapes bg-gradient-green">
            <div className="font-barlow font-semibold text-2xl text-white flex items-center justify-center h-16 w-16 rounded-[10px] bg-green">
                {props.number}
            </div>

            <h1 className="font-barlow font-semibold text-4xl text-green">{props.title}</h1>
        </div>
    );
}
