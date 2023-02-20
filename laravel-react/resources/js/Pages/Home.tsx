import {FormEvent, useEffect, useState} from "react";
import {Link, router, usePage} from '@inertiajs/react';
import loginImg from '../../images/login.png';
import {AiOutlineExclamationCircle} from "react-icons/ai";
import {FiCheck, FiEye, FiEyeOff} from "react-icons/fi";
import * as Checkbox from '@radix-ui/react-checkbox';
import clsx from "clsx";

export default function Home(props) {
    const [data, setData] = useState({
        email: '',
        password: '',
        remember_me: false,
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { errors, user } = usePage().props

    useEffect(() => {
        if (user) {
            router.get(route('dashboard'))
        }
    }, [user])

    /**
     * Alterna o valor do estado dos dados do formulário
     *
     * @param event
     * Pode ser o evento ou o proprio valor, no caso de inputs checkbox
     * @param name
     * Nome do input
     */
    const handleChangeInputs = (event, name=null) => {
        if (name) { /*Checkbox input*/
            setData(values => ({
                ...values,
                [name]: event,
            }));
            return;
        }
        setData(values => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };


    /**
     * Trocar entre mostrar ou não mostrar senha
     */
    const handleToggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    /**
     * Faz o submit do formulário de login
     * @param event
     */
    const handleSubmitLogin = (event: FormEvent) => {
        event.preventDefault();

        router.post(route('login', data));

    };

    return (
        <>
            <div className="h-screen  flex">
                <div>
                    <img
                        className="h-full max-w-2xl md:max-w-full hidden lg:block"
                        src={loginImg}
                        alt="Casal em no topo de uma montanha com mochilas nas costas e tirando foto da paisagem"
                    />
                </div>
                <main className="flex-1 flex justify-center items-center px-8">
                    <div  className="w-full sm:w-[416px]">
                        <h2>Fazer login</h2>
                        <form onSubmit={handleSubmitLogin} className="flex flex-col mt-11 w-full" noValidate={true}>

                            {
                                props.errors && (
                                    <div className="flex flex-col space-y-1 w-full items-center mb-4">

                                        {
                                            Object.keys(errors).map((error) => {
                                                return  (
                                                    <div
                                                        className={clsx("bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full", (error?.[error]) && 'hidden')}
                                                        role="alert"
                                                        key={error}
                                                    >
                                                        <span
                                                            className="block sm:inline">{errors?.[error]}</span>
                                                    </div>
                                                );
                                            })
                                        }

                                    </div>
                                )
                            }

                            <div className="flex flex-col w-full border border-shapes rounded-[10px] overflow-hidden">

                                <div className="relative w-full">
                                    <input
                                        className="block p-6 focus:pb-[14px] focus:pt-[34px] peer/email bg-white h-[72px] w-full font-heebo text-base text-textColor [&:not(:placeholder-shown)]:pt-[34px] [&:not(:placeholder-shown)]:pb-[14px] border-0 focus:border-transparent focus:outline-none focus:outline-offset-0 focus:outline-0 focus:border-shapes focus: ring-offset-0 focus:shadow-none focus:ring-0"
                                        type="email"
                                        placeholder=" "
                                        name="email"
                                        autoComplete="off"
                                        id="email"
                                        value={data.email}
                                        onChange={handleChangeInputs}
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute font-heebo text-base text-textComplement duration-300 transform -translate-y-4 scale-75 top-6 origin-[0] z-10 left-6 peer-focus/email:text-textComplement peer-placeholder-shown/email:scale-100 peer-placeholder-shown/email:translate-y-0 peer-focus/email:scale-75 peer-focus/email:-translate-y-4 outline-transparent"
                                    >
                                        E-mail
                                    </label>
                                </div>

                                {/*Divider*/}
                                <div className="h-px bg-shapes"></div>

                                <div className="relative w-full">
                                        <input

                                            className="block p-6 focus:pb-[14px] focus:pt-[34px]  peer/password bg-white h-[72px] w-full font-heebo text-base text-textColor [&:not(:placeholder-shown)]:pt-[34px] [&:not(:placeholder-shown)]:pb-[14px] border-0 focus:border-transparent focus:outline-none focus:outline-offset-0 focus:outline-0 focus:border-shapes focus: ring-offset-0 focus:shadow-none focus:ring-0"
                                            type={showPassword ? "text" : "password"}
                                            placeholder=" "
                                            name="password"
                                            autoComplete="off"
                                            id="password"
                                            value={data.password}
                                            onChange={handleChangeInputs}
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute font-heebo text-base text-textComplement duration-300 transform -translate-y-4 scale-75 top-6 origin-[0] z-10 left-6 peer-focus/password:text-textComplement peer-placeholder-shown/password:scale-100 peer-placeholder-shown/password:translate-y-0 peer-focus/password:scale-75 peer-focus/password:-translate-y-4 outline-transparent"
                                        >
                                            Senha
                                        </label>
                                        <button
                                            type="button"
                                            className="absolute right-6 top-6 w-6 h-6"
                                            onClick={handleToggleShowPassword}
                                            title="Ver senha"
                                        >
                                            {
                                                showPassword
                                                    ? (
                                                        <FiEyeOff
                                                            className="w-6 h-6 text-orange"
                                                        />
                                                    )
                                                    : (
                                                        <FiEye
                                                            className="w-6 h-6 text-textComplement"
                                                        />
                                                    )
                                            }
                                        </button>
                                </div>

                            </div>

                            <div className="mt-6  flex justify-between items-center">
                                <div className="flex items-center space-x-6">
                                    <Checkbox.Root
                                        className="bg-white w-6 h-6 border border-shapes rounded-lg data-[state=checked]:bg-green data-[state=checked]:border-green flex items-center justify-center"
                                        id="remember_me"
                                        name="remember_me"
                                        defaultChecked={data.remember_me}
                                        onCheckedChange={(event) => handleChangeInputs(event, "remember_me")}
                                    >
                                        <Checkbox.Indicator>
                                            <FiCheck className="w-4 h-3 text-white"/>
                                        </Checkbox.Indicator>
                                    </Checkbox.Root>
                                    <label htmlFor="remember_me" className="text-textComplement text-base font-heebo">Lembrar-me</label>
                                </div>

                                <Link href="/" className="text-textComplement text-base font-heebo">Esqueci minha senha</Link>
                            </div>

                            <button
                                className="mt-8 h-[72px] font-heebo font-medium bg-orange text-lg text-white rounded-[10px] transition-all hover:brightness-[0.90]"
                                type="submit"
                            >
                                Acessar plataforma
                            </button>
                        </form>

                        <div className="flex space-x-6 items-center mt-20">
                            <AiOutlineExclamationCircle className="text-orange" size={32}/>
                            <span className="font-heebo text-sm text-textColor leading-6">Acesso restrito à <br/> sócios e moderadores</span>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
