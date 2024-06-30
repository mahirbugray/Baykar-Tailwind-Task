import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { collectionTabs } from '../Constant/constant';

import rightArrow from "../assets/images/rightArrow.png"
import tripleImage from "../assets/images/tripleImage.png"
import webTripleImage from "../assets/images/webTripleImage.png"

const Section6Grow = () => {
    return (
        <section className="flex justify-center items-center overflow-x-hidden">
            <div className="container flex flex-col justify-center items-center gap-20 max-md:gap-8 px-20 max-md:px-4 pt-36 max-md:pt-0 pb-20  max-md:pb-11">
                <div className="flex flex-col text-left max-md:text-center  gap-8">
                    <h1 className="text-6xl max-md:text-3xl font-bold">Grow your collection</h1>
                    <p className='text-lg'>Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.</p>
                </div>
                <div className='grid grid-cols-[300px_minmax(auto,_1fr)] max-lg:grid-cols-1 items-start overflow-x-hidden gap-8'>
                    <ul className='max-lg:hidden flex flex-col justify-start gap-4 w-full'>
                        {
                            collectionTabs.slice(0, 1).map(item => (
                                <li key={item.id} className='flex items-center p-4 mr-4 rounded-lg w-64 cursor-pointer border border-l-gray-100 bg-white shadow-xl'>
                                    <div> <img src={item.tabLogo} alt={item.title} /></div>
                                    <p className='px-4 text-xl'>{item.title}</p>
                                    <div className='flex items-center max-md:hidden'><img src={rightArrow} alt="" /></div>
                                </li>
                            ))
                        }
                        {
                            collectionTabs.slice(1).map(item => (
                                <li key={item.id} className='flex items-center p-4 mr-4 rounded-lg w-64 cursor-pointer'>
                                    <div> <img src={item.tabLogo} alt={item.title} /></div>
                                    <p className='px-4 text-xl'>{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <ScrollingCarousel className='gap-8 bg-transparent hidden max-lg:block ml-4 rounded-md'>
                        {
                            collectionTabs.slice(0, 1).map(item => (
                                <div key={item.id} className='flex items-center p-4 mr-4 rounded-lg w-fit cursor-pointer border border-[#00000012] bg-white shadow-xl'>
                                    <div> <img src={item.tabLogo} alt={item.title} /></div>
                                    <p className='px-4 text-xl font-medium'>{item.title}</p>
                                </div>
                            ))
                        }
                        {
                            collectionTabs.slice(1).map(item => (
                                <div key={item.id} className='flex items-center p-4 mx-4 rounded-lg  w-fit cursor-pointer '>
                                    <div> <img src={item.tabLogo} alt={item.title} /></div>
                                    <p className='px-4  text-xl font-medium'>{item.title}</p>
                                </div>
                            ))
                        }
                    </ScrollingCarousel>
                    <div className='bg-transparent flex justify-center items-center'>
                        <div className='block max-md:hidden'><img src={webTripleImage} alt="" /></div>
                        <div className='hidden max-md:block'><img src={tripleImage} alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section6Grow