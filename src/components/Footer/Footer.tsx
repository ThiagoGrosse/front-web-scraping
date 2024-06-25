export const Footer = () => {
    const version = process.env.VERSION;
    return (

        <footer className="mb-5 border-t border-gray-500 max-w-xs sm:max-w-md lg:max-w-3xl xl:max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 text-xs text-slate-500 mt-5">
                <span>&copy; 2024 Thiago Grosse. Todos os direitos reservados.</span>
                <span>Versão: {version}</span>
            </div>
        </footer>
    )
}