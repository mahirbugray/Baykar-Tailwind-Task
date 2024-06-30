import { threeRows } from "../Constant/constant"

const Section2Viverra = () => {
    return (
        <section className="relative z-20 flex justify-center items-center max-md:bg-amber-100">
            <div className="container flex items-center justify-center px-4 py-12 md:p-20 gap-20 max-md:gap-8 max-lg:flex-col ">
                {threeRows.map(eachRow => (
                    <div key={eachRow.title} className="flex flex-col gap-4 max-lg:text-center max-lg:items-center max-md:justify-center">
                        <div className="relative">
                            <img className="relative" src={eachRow.source} alt={eachRow.title} />
                            <img className="absolute top-[-5px] left-[25px]" src={eachRow.bgimage} alt={eachRow.title} />
                        </div>
                        <h2 className="text-xl font-semibold text-[#0F172A]">{eachRow.title}</h2>
                        <p className="text-lg font-normal pr-4 max-md:pr-0">{eachRow.detail}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Section2Viverra