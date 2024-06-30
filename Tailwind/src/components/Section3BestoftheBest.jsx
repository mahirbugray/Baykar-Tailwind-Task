import { bestProducts } from "../Constant/constant"
import ShoppingCart from "../assets/images/shoppingCart.png"
import BigPinkSquare from "../assets/images/bigPinkSquare.png"
import BigBlueSquare from "../assets/images/bigBlueSquare.png"
import BigOrangeSquare from "../assets/images/bigOrangeSquare.png"
import BigPurpleSquare from "../assets/images/bigPurpleSquare.png"
import BigGreenSquare from "../assets/images/bigGreenSquare.png"

const Section3BestoftheBest = () => {
    return (
        <section className=" bg-[#0f172a] text-white ">
            <div className="container mx-auto">
                <div className="flex flex-col gap-8 md:gap-20 p-20 max-lg:px-4 max-lg:py-12 overflow-hidden">
                    <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-8 ">
                        <h1 className="text-[56px] font-extrabold max-lg:text-3xl ">The best of the best</h1>
                        <button className="bg-transparent border-2 rounded-lg px-6 py-5">
                            <p className="px-6 text-2xl font-bold">Sign up now</p>
                        </button>
                    </div>
                    <div className="relative mx-auto ">
                        <div className="absolute left-[-40px] max-md:left-[30px] bottom-[20px] max-md:top-[295px] max-md:w-[202px] max-md:rounded-[50px] ">
                            <img src={BigPinkSquare} alt="big-purple-square" />
                        </div>
                        <div className="absolute left-[460px]  top-[-30px]  ">
                            <img src={BigBlueSquare} alt="big-blue-square" />
                        </div>
                        <div className="absolute right-[460px] bottom-[60px] max-md:hidden">
                            <img src={BigOrangeSquare} alt="big-orange-square" />
                        </div>
                        <div className="absolute right-[100px] bottom-[-30px] ">
                            <img src={BigPurpleSquare} alt="big-purple-square" />
                        </div>
                        <div className="absolute right-[-50px] top-[30px] max-md:hidden">
                            <img src={BigGreenSquare} alt="big-green-square" />
                        </div>
                        <div className="relative grid grid-cols-3 max-lg:grid-cols-1 gap-20 max-md:gap-10">
                            {bestProducts.map(card => (
                                <div key={card.id} className="bg-[#0f172a] rounded-lg  drop-shadow-[0_35px_35px_rgba(255,255,255,0.15)]  ">
                                    <img className="w-full rounded-t-lg" src={card.source} alt={card.title}/>
                                    <div className="px-8 pt-8 flex flex-col gap-4" >
                                        <h3 className="text-2xl font-bold">{card.title}</h3>
                                        <p className="text-lg font-normal">{card.text}</p>
                                    </div>
                                    <div className="p-8 flex items-center justify-center">
                                        <button className="bg-transparent border-2 rounded-lg p-4 w-full flex justify-center items-center gap-3" >
                                            <img src={ShoppingCart} alt="shopping-cart" />
                                            {card.buttonText}
                                        </button>
                                    </div>
                                </div>
                            ))}
        
        
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Section3BestoftheBest