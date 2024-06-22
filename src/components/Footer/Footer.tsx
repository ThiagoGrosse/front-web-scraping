export const Footer = () => {
    const version = process.env.VERSION;
    return (

        <footer className="w-full mb-5 border-t border-gray-500">
            <div className="flex flex-col items-center gap-2 text-xs text-slate-500 mt-5">
                <span>&copy; 2024 Thiago Grosse. Todos os direitos reservados.</span>
                <span>Versão: {version}</span>
            </div>
        </footer>
    )
}