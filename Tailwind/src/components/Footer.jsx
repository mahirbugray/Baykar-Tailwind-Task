import { footerItems } from "../Constant/constant"
import AppStore from "../assets/images/appStore.png"
import GooglePlay from "../assets/images/googlePlay.png"
import World from "../assets/images/world.png"

const FooterCaption = () => {
  return (
    <footer className=" px-20 max-md:px-4 bg-[#0f172a] text-white max-md:text-center ">
      <div className="flex justify-center items-center">
        <div className="container grid grid-cols-4 max-md:grid-cols-1 gap-12  py-12">
          <ul className="flex flex-col gap-2 justify-between ">
            <h6 className="font-semibold my-2">Products</h6>
            {footerItems.products.map(item => (
              <li className="my-2 font-normal text-[#e2e8f0]" key={item}><a href="" className="cursor-pointer">{item}</a></li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2 justify-between">
            <h6 className="font-semibold my-2">Solutions</h6>
            {footerItems.solutions.map(item => (
              <li className="my-3 font-normal text-[#e2e8f0]" key={item}><a href="" className="cursor-pointer">{item}</a></li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2 justify-between">
            <h6 className="font-semibold my-2">Support</h6>
            {footerItems.support.map(item => (
              <li className="my-3 font-normal text-[#e2e8f0]" key={item}><a href="" className="cursor-pointer">{item}</a></li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 justify-between">
            <div className=" flex flex-col justify-between">
              <h6 className="font-semibold my-2"> Get the App</h6>
              <div className="flex flex-col ">
                <div className="max-md:flex max-md:justify-center"><img className="my-2" src={AppStore} alt="App-Store" /></div>
                <div className="max-md:flex max-md:justify-center"><img className="my-2" src={GooglePlay} alt="Google-Play-Store" /></div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="font-semibold my-3 text-[#e2e8f0]">Follow Us</h6>
              <div className="flex gap-4  max-md:justify-center">
                {footerItems.followingLinks.map(item => (
                  <div className="my-2 font-normal cursor-pointer flex max-md:justify-center text-[#e2e8f0]" key={item}>
                    <img src={item} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-between items-center py-6 border-t-2 border-[#334155] max-md:flex-col max-md:py-12 max-md:gap-6 ">
        <p>Collers @ 2023. All rights reserved.</p>
        <ul className="flex gap-8">
          {footerItems.footerBottomNav.map(item => (
            <div className="my-2 font-normal cursor-pointer flex max-md:justify-center text-[#e2e8f0]" key={item}>
              <li>{item}</li>
            </div>
          ))}
          <div className="flex items-center gap-3 text-[#e2e8f0]">
            <img src={World} alt="world" />
            <p>EN</p>
          </div>
        </ul>
      </div>
    </footer>
  )
}

export default FooterCaption