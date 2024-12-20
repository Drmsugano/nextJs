function Nav() {
    return (
        <nav className="text-white shadow-sm w-screen z-40 absolute  ">
            <div className="py-3 ">
                <div className="container mx-auto px-3">
                    <div className=" flex justify-between p-2">
                        <h1 className="text-2xl font-serif tracking-wider p-0.5 font-semibold transition-all duration-300 hover:text-red-500">Douglas Sugano</h1>
                        <div className="outline outline-offset-2 outline-red-500 space-x-4 py-2 px-4 rounded-2xl drop-shadow-2xl">
                            <a href="#Inicio" className="font-semibold tracking-wider text-white transition-all duration-300 hover:text-red-500 ease-in-out">Inicio</a>
                            <a href="#Sobre" className="font-semibold tracking-wider text-white transition-all duration-300 hover:text-red-500 ease-in-out">Sobre</a>
                            <a href="#Projetos" className="font-semibold tracking-wider text-white transition-all duration-300 hover:text-red-500 ease-in-out">Projetos</a>
                            <a href="#Contato" className="font-semibold tracking-wider text-white transition-all duration-300 hover:text-red-500 ease-in-out">Contato</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blur-sm"></div>
        </nav>
    );
};

export default Nav;