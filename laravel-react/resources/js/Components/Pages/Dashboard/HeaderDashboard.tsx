import {Link} from "@inertiajs/react";
export function HeaderDashboard() {
    return (
        <header className="h-24 bg-white w-full border-b border-shapes">
            <div className="w-[83%] h-full max-w-7xl mx-auto flex items-center justify-between">
                <h1>Cidades</h1>

                <Link
                    href={route('cities.index')}
                    className="flex items-center justify-center py-3 px-8 bg-green text-white font-heebo font-medium text-base transition-all hover:brightness-[.95] rounded-[10px]"
                >
                    +
                    Adicionar um perfil
                </Link>
            </div>
        </header>
    );
}
