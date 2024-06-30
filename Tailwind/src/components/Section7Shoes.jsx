import coolShoes from "../assets/images/coolShoes.png"

const Section7Shoes = () => {
    return (
        <section className="relative bg-worldMap bg-local bg-no-repeat bg-[1rem] lg:bg-center bg-amber-900 py-20 max-lg:px-0 overflow-x-hidden  ">
            <div className="bg-worldPoints bg-local bg-no-repeat bg-[14.5rem_6rem] md:bg-[14rem_6.5rem] lg:bg-center ml-20  max-lg:ml-0 mb-6 max-lg:mb-0 min-h-[717px] ">
                <div className="flex justify-center items-center text-center">
                    <div className="relative mx-auto w-full flex justify-center items-center  min-h-[700px]  ">
                        <div className=" absolute z-40 flex flex-col justify-center items-center gap-2 lg:mr-20  md:mt-16 md:mb-0 text-white ">
                            <h1 className="text-8xl max-md:text-5xl font-extrabold">11,658,467</h1>
                            <h2 className="text-[56px] max-md:text-3xl font-bold">Shoes Collected</h2>
                        </div>
                    </div>
                    <div className="absolute z-10 top-20 md:top-10 lg:top-20 lg:ml-0 w-full max-w-[1100px] ml-12">
                        <img src={coolShoes} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section7Shoes