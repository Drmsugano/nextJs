import Image from 'next/image';

function Inicio() {
    return (
        <section id='Inicio'>
            <div className="bg-black-700 h-screen py-3 relative">
                <div className="container mx-auto">
                    <div className="content-center p-40">
                            <div className="flex justify-between">
                                <div className="py-40">
                                    <h1 className="text-5xl text-white font-serif tracking-wider  font-semibold transition-all duration-300 hover:text-red-500">Douglas Sugano</h1>
                                    <p className="text-2xl text-white font-serif tracking-wider py-3 font-semibold transition-all duration-300 hover:text-red-500">Desenvolvedor Web</p>
                                    <div className="bg-slate-500 h-full w-auto p-2 me-96 rounded-lg">
                                        <p className='font-serif text-black'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis nesciunt sapiente minus, nisi quibusdam cum esse fuga voluptatem eveniet assumenda alias consectetur reiciendis at eum culpa itaque ex nobis!
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-end ">
                                    <Image className='rounded-full bg-slate-400 z-20' src="/images/gojo.gif" width={403} height={403} alt="Douglas" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inicio;