import watchdemo from "../assets/images/watchDemo.png"
import mainShoe from "../assets/images/mainShoe.png"
import mobileMainTriangle from "../assets/images/mobileMainTriangle.png"

const Section1CollectibleSneakers = () => {
    return (
        <section className="relative z-10 ">
            <div className="container mx-auto ">
                <div className=" flex flex-col lg:flex-row justify-between items-center p-20 max-md:py-12 max-md:px-4 gap-8 lg:gap-20  ">
                    <div className="flex flex-col gap-8 max-lg:text-center">
                        <h1 className="text-6xl md:text-7xl font-extrabold max-lg:gap-2">Collectible Sneakers</h1>
                        <p className="font-normal text-lg max-w-[714px] max-lg:w-auto max-lg:text-center">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
                        <div className="flex items-center gap-4 max-lg:justify-center">
                            <button className="sign-up-button text-xl pt-2 px-4">
                                <p className="px-4">Sign up now</p>
                            </button>
                            <div className="flex items-center text-base font-medium px-2 text-amber-900">
                                <img src={watchdemo} alt="watch-demo" className="w-6 h-6" />
                                <button className="px-2">Watch Demo</button>
                            </div>
                        </div>
                    </div>
                    <div className="py-10">
                        <img src={mainShoe} alt="main-shoe" />
                    </div>
                    <div className="hidden max-md:block absolute z-[-1] bottom-0 w-svw">
                        <img className="w-full" src={mobileMainTriangle} alt="mobile-main-triangle" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1CollectibleSneakers