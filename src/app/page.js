import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="mx-w-[1600px] mx-auto max-w-full ">
        <div className="top-nav py-[10px] bg-[background:#0A4264] px-[95px] relative">
          <Link className=" text-center w-full items-center inline-flex font-[600] leading-[24px] z-10 relative justify-center group" href="#">
            <span className="text-[16px] text-white relative">Socure Unveils AI-Powered Global Watchlist Solution
              <span className="absolute top-[calc(50%-4px)] pl-[5px] group-hover:ml-[5px] transition-all duration-400"><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5H11M11 5L7.25 1.25M11 5L7.25 8.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg></span>
            </span>
          </Link>
          <Image className="absolute top-0 left-0 w-full z-0"
            src="/Keylines.png"
            alt="arrow"
            fill={true}
            // layout="fill"
            object-fit="contain"
          />
        </div>
        <div className="secondary-nav py-[25px] bg-white">
          <div className="container">
            <div className="wrapper w-full flex flex-wrap items-center justify-between">
              <div className="left-nav flex flex-wrap items-center">
                <div className="logo mr-[40px] max-2xl:mr-[20px]">
                  <Link href="#"><svg width="130" height="50" viewBox="0 0 130 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 33.3337L16.6751 50.0004L33.3503 33.3337L16.6751 16.667L0 33.3337Z" fill="#FF8200" />
                    <path d="M16.6751 0L0 16.6667L16.6751 33.3335L33.3503 16.6667L16.6751 0Z" fill="#FF6900" />
                    <path d="M41.4604 30.774L43.6789 28.1146C45.2155 29.3805 46.8248 30.182 48.7705 30.182C50.3071 30.182 51.2345 29.5718 51.2345 28.5699V28.5244C51.2345 27.5772 50.6526 27.0854 47.7977 26.3568C44.3608 25.4825 42.1423 24.5262 42.1423 21.1473V21.1018C42.1423 18.0052 44.6245 15.9561 48.1159 15.9561C50.6072 15.9561 52.7257 16.7393 54.4532 18.1236L52.4984 20.947C50.989 19.8996 49.4979 19.2621 48.0614 19.2621C46.6248 19.2621 45.8701 19.9178 45.8701 20.7466V20.7921C45.8701 21.9124 46.5975 22.2767 49.5525 23.0326C53.0166 23.9342 54.9623 25.182 54.9623 28.151V28.1965C54.9623 31.5845 52.3802 33.488 48.6978 33.488C46.1156 33.488 43.5062 32.5863 41.4604 30.7557" fill="#1C1C4C" />
                    <path d="M67.136 26.8036V26.7581C67.136 24.8364 65.7448 23.1515 63.6991 23.1515C61.6533 23.1515 60.3077 24.7817 60.3077 26.7125V26.7581C60.3077 28.6797 61.6988 30.3646 63.7446 30.3646C65.7903 30.3646 67.136 28.7344 67.136 26.8036ZM56.6526 26.8036V26.7581C56.6526 23.0058 59.6803 19.9639 63.7446 19.9639C67.8088 19.9639 70.791 22.9602 70.791 26.7125V26.7581C70.791 30.5104 67.7633 33.5523 63.6991 33.5523C59.6349 33.5523 56.6526 30.5559 56.6526 26.8036Z" fill="#1C1C4C" />
                    <path d="M72.3737 26.8036V26.7581C72.3737 23.0331 75.2286 19.9639 79.2292 19.9639C81.6932 19.9639 83.2298 20.7926 84.4482 22.1588L82.1842 24.5996C81.3568 23.7253 80.5294 23.1606 79.211 23.1606C77.3562 23.1606 76.0379 24.7908 76.0379 26.7216V26.7672C76.0379 28.7617 77.3289 30.3737 79.3565 30.3737C80.6021 30.3737 81.4568 29.8364 82.3569 28.9803L84.53 31.1752C83.2662 32.5595 81.8023 33.5614 79.1929 33.5614C75.265 33.5614 72.3919 30.5377 72.3919 26.8127" fill="#1C1C4C" />
                    <path d="M86.3667 28.6607V20.209H90.0763V27.495C90.0763 29.2527 90.9037 30.1544 92.3221 30.1544C93.7405 30.1544 94.6406 29.2527 94.6406 27.495V20.209H98.3502V33.2691H94.6406V31.4203C93.7859 32.5132 92.6858 33.515 90.8128 33.515C88.0124 33.515 86.3758 31.6662 86.3758 28.6699" fill="#1C1C4C" />
                    <path d="M101.196 20.2001H104.906V22.8322C105.66 21.0289 106.879 19.8631 109.07 19.9542V23.8249H108.879C106.415 23.8249 104.906 25.3094 104.906 28.4333V33.2603H101.196V20.2001Z" fill="#1C1C4C" />
                    <path d="M119.135 25.7107C118.917 24.0531 117.944 22.9329 116.38 22.9329C114.816 22.9329 113.844 24.0258 113.553 25.7107H119.135ZM109.916 26.8036V26.7581C109.916 23.0331 112.571 19.9639 116.38 19.9639C120.745 19.9639 122.745 23.3519 122.745 27.0586C122.745 27.35 122.718 27.6961 122.699 28.0331H113.607C113.971 29.718 115.144 30.5923 116.798 30.5923C118.044 30.5923 118.944 30.2007 119.972 29.2535L122.09 31.1297C120.872 32.6415 119.117 33.5705 116.753 33.5705C112.825 33.5705 109.925 30.82 109.925 26.8218" fill="#1C1C4C" />
                    <path d="M16.6749 33.3233H33.3501L25.0034 24.999L16.6749 33.3233Z" fill="#1C1C4C" />
                    <path d="M126.799 31.0205V31.4668H126.108V33.5251H125.599V31.4668H124.908V31.0205H126.799Z" fill="#1C1C4C" />
                    <path d="M130 33.5251H129.481L129.3 31.9677L128.69 33.2427H128.29L127.672 31.9677L127.49 33.5251H126.972L127.281 31.0205H127.708L128.481 32.669L129.245 31.0205H129.681L129.991 33.5251H130Z" fill="#1C1C4C" />
                  </svg></Link>
                </div>
                <div className="nav-links">
                  <ul className="flex flex-wrap max-xl:hidden">
                    <li className="mr-[40px] max-2xl:mr-[20px]"><Link className="text-[20px] max-2xl:text-[18px] font-[600] leading-[19.2px] text-[#0A4264] hover:text-[#FF6900] transition-all capitalize" href="#">solution</Link></li>
                    <li className="mr-[40px] max-2xl:mr-[20px]"><Link className="text-[20px] max-2xl:text-[18px] font-[600] leading-[19.2px] text-[#0A4264] hover:text-[#FF6900] transition-all capitalize" href="#">Products</Link></li>
                    <li className="mr-[40px] max-2xl:mr-[20px]"><Link className="text-[20px] max-2xl:text-[18px] font-[600] leading-[19.2px] text-[#0A4264] hover:text-[#FF6900] transition-all capitalize" href="#">Public Sector</Link></li>
                    <li className="mr-[40px] max-2xl:mr-[20px]"><Link className="text-[20px] max-2xl:text-[18px] font-[600] leading-[19.2px] text-[#0A4264] hover:text-[#FF6900] transition-all capitalize" href="#">Resources</Link></li>
                    <li className="max-2xl:mr-[20px]"><Link className="text-[20px] max-2xl:text-[18px] font-[600] leading-[19.2px] text-[#0A4264] hover:text-[#FF6900] transition-all capitalize" href="#">Company</Link></li>
                  </ul>
                </div>
                <div className=""></div>
              </div>
              <div className="right-nav flex flex-wrap items-center">
                <div className="user-icon">
                  <div className="icon-wrap">
                    <Link href="#">
                      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="group">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.59375 9.875C8.59375 8.839 9.0053 7.84543 9.73786 7.11286C10.4704 6.3803 11.464 5.96875 12.5 5.96875C13.536 5.96875 14.5296 6.3803 15.2621 7.11286C15.9947 7.84543 16.4062 8.839 16.4062 9.875C16.4062 10.911 15.9947 11.9046 15.2621 12.6371C14.5296 13.3697 13.536 13.7812 12.5 13.7812C11.464 13.7812 10.4704 13.3697 9.73786 12.6371C9.0053 11.9046 8.59375 10.911 8.59375 9.875ZM12.5 7.53125C11.8784 7.53125 11.2823 7.77818 10.8427 8.21772C10.4032 8.65726 10.1562 9.2534 10.1562 9.875C10.1562 10.4966 10.4032 11.0927 10.8427 11.5323C11.2823 11.9718 11.8784 12.2188 12.5 12.2188C13.1216 12.2188 13.7177 11.9718 14.1573 11.5323C14.5968 11.0927 14.8438 10.4966 14.8438 9.875C14.8438 9.2534 14.5968 8.65726 14.1573 8.21772C13.7177 7.77818 13.1216 7.53125 12.5 7.53125Z" fill="#0A4264" className="group-hover:fill-[#FF6900] transition-all duration-400" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.30078 13.0002C1.30078 6.81579 6.31432 1.80225 12.4987 1.80225C18.6831 1.80225 23.6966 6.81579 23.6966 13.0002C23.6966 19.1845 18.6831 24.1981 12.4987 24.1981C6.31432 24.1981 1.30078 19.1845 1.30078 13.0002ZM12.4987 3.36475C10.5953 3.36483 8.73448 3.92869 7.15114 4.98517C5.5678 6.04165 4.33285 7.54342 3.60209 9.301C2.87134 11.0586 2.67752 12.9932 3.04509 14.8609C3.41266 16.7285 4.32516 18.4454 5.66745 19.795C5.85495 18.7814 6.22474 17.8262 6.96537 17.0575C8.07474 15.9075 9.84661 15.3439 12.4987 15.3439C15.1508 15.3439 16.9227 15.9075 18.031 17.0575C18.7727 17.8262 19.1414 18.7825 19.33 19.796C20.6726 18.4465 21.5854 16.7295 21.9532 14.8617C22.321 12.9939 22.1272 11.059 21.3964 9.3012C20.6656 7.54341 19.4305 6.04147 17.847 4.98494C16.2634 3.92841 14.4024 3.36463 12.4987 3.36475ZM17.9091 20.9741C17.8029 19.7116 17.5289 18.7866 16.907 18.1418C16.2299 17.4408 14.9768 16.9064 12.4987 16.9064C10.0206 16.9064 8.76745 17.4408 8.09037 18.1418C7.46849 18.7877 7.19453 19.7116 7.08828 20.9752C8.68368 22.0603 10.5693 22.6389 12.4987 22.6356C14.4282 22.6386 16.3138 22.0595 17.9091 20.9741Z" fill="#0A4264" className="group-hover:fill-[#FF6900] transition-all duration-400" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="btn-wrap flex flex-wrap items-center max-xl:hidden">
                  <div className="btn-transparent ml-[10px]">
                    <Link className="text-[#0A4264]  bg-white text-[16px] max-2xl:text-[14px] font-[600] inline-block transition-all ease-in-out duration-300 py-[15px] max-2xl:py-[12px] px-[20px] max-2xl:px-[15px] rounded-[24.5px] border-[1.5px] ml-[10px]  hover:text-[#FF6900]" href="#"><span>Talk to an Expert</span></Link>
                  </div>
                  <div className="btn-transparent ml-[10px]">
                    <Link className="text-[#0A4264] bg-[#FF6900] text-[16px] max-2xl:text-[14px] font-[600] inline-block transition-all ease-in-out duration-300 py-[15px] max-2xl:py-[12px] px-[20px] max-2xl:px-[15px] rounded-[24.5px] border-[1.5px] ml-[10px] hover:bg-[#d76826] border-[#FF6900] hover:border-[#d76826]" href="#"><span>Get a Demo</span></Link>
                  </div>
                </div>
                <div className="hamburger ml-[20px] hidden max-xl:block">
                  <button className="w-[35px] h-[25px] relative cursor-pointer" data-collapse-toggle="navbar-hamburger" type="button" aria-controls="navbar-hamburger" aria-expanded="false">
                    <ul className="">
                      <li className="absolute top-0 h-0.5 w-full bg-black transition-all duration-300 ease-in-out "></li>
                      <li className="absolute top-[11px] h-0.5 w-full bg-black transition-all duration-300 ease-in-out "></li>
                      <li className="absolute top-[22px] h-0.5 w-full bg-black transition-all duration-300 ease-in-out "></li>
                    </ul>
                  </button>

                  <div className="hidden w-full" id="navbar-hamburger">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                      <li>
                        <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm dark:bg-blue-600" aria-current="page">Home</a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="banner tablet:bg-black bg-white">
          <div className="container">
            <div className="wrapper flex desktop:flex-wrap">
              <div className="col-left w-1/2">
                <span className="text-[16px] max-lg-[14px] text-[#FF6900] leading-[26px] font-[700] uppercase mb-[20px]">banking</span>
                <h1 className="text-[#0A4264] text-[90px] max-2xl:text-[78px] max-xl:text-[66px] max-lg-[54px] max-md:text-[42px] max-sm:text-[30px] leading-[90px] normal-case mb-[20px]">Identify risk and approve more customers</h1>
                <p className="text-[20px] max-lg-[18px] max-sm:text-[16px] text-[#0A4264] font-[400] leading-[28px] mb-[30px]">Power a seamless customer experience and confident compliance with AI-driven identity verification and fraud prevention solutions that deliver unmatched accuracy.</p>
                <div className="btn-wrap flex flex-wrap items-center max-xl:hidden">
                  <div className="btn-transparent">
                    <Link className="text-[#0A4264] bg-[#FF6900] text-[16px] max-2xl:text-[14px] font-[600] inline-block transition-all ease-in-out duration-300 py-[15px] max-2xl:py-[12px] px-[20px] max-2xl:px-[15px] rounded-[24.5px] border-[1.5px]  hover:bg-[#d76826] border-[#FF6900] hover:border-[#d76826]" href="#"><span>Talk to an Expert</span></Link>
                  </div>
                  <div className="btn-transparent ml-[10px]">
                    <Link className="text-[#0A4264]  bg-white text-[16px] max-2xl:text-[14px] font-[600] inline-block transition-all ease-in-out duration-300 py-[15px] max-2xl:py-[12px] px-[20px] max-2xl:px-[15px] rounded-[24.5px] border-[1.5px] ml-[10px]  hover:text-[#FF6900]" href="#"><span>Get a Demo</span></Link>
                  </div>
                </div>
                <div className="logo-wrapper flex flex-wrap mt-[100px] mb-[50px] align-middle">
                  <div className="icon-wrap">
                    <Image className="w-[155px] h-[87px]"
                      src="/Betterment.png"
                      width={200}
                      height={200}
                      alt={'bettermnet'}
                    />
                  </div>
                  <div className="icon-wrap">
                    <Image className="w-[155px] h-[87px] object-contain"
                      src="/Citi.png"
                      width={200}
                      height={200}
                      alt={"chime"}
                    />
                  </div>
                  <div className="icon-wrap">
                    <Image className="w-[155px] h-[87px] object-contain"
                      src="/chime.png"
                      width={500}
                      height={500}
                      alt={"chime"}
                    />
                  </div>
                </div>
              </div>
              <div className="col-right w-1/2">
                <div className="icon-wrap">
                  <Image className="w-[630px] object-contain"
                    src="/banner-img.png"
                    width={1000}
                    height={1000}
                    alt={"banner"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stick-nav bg-white ">
          <div className="container">
            <ul className="flex flex-wrap border-b-[1px] border-[#9FA9AF] py-[20px]">
              <li className="mr-[50px] group"><Link className="text-[20px] font-[400] leading-[150%] text-[#0A4264]  group-hover:font-[600] transition-all ease-in-out duration-400 group-hover:border-b-3 border-[#FF6900]" href="#">Overview</Link></li>
              <li className="mr-[50px] group"><Link className="text-[20px] font-[400] leading-[150%] text-[#0A4264]  group-hover:font-[600] transition-all ease-in-out duration-400 group-hover:border-b-3 border-[#FF6900]" href="#">How We Help</Link></li>
              <li className="mr-[50px] group"><Link className="text-[20px] font-[400] leading-[150%] text-[#0A4264]  group-hover:font-[600] transition-all ease-in-out duration-400 group-hover:border-b-3 border-[#FF6900]" href="#">Resources</Link></li>
            </ul>
          </div>
        </section>
        <section className="intro py-[50px] bg-white">
          <div className="container">
            <div className="wrapper">
              <span className="text-[16px] max-lg-[14px] text-[#FF6900] leading-[26px] font-[700] uppercase mb-[20px] text-center w-full block">overview</span>
              <p className="text-[20px] max-lg-[18px] max-sm:text-[16px] text-[#0A4264] font-[400] leading-[28px] mb-[30px] max-w-[930px] text-center w-full mx-auto">Banks face mounting pressure from sophisticated fraud schemes and stricter regulations, while legacy verification systems create friction and security gaps.
                The rise of synthetic identities, account takeover attacks, and complex compliance requirements like sanctions screening demands a more sophisticated approach to risk management.</p>
              <div className="flex flex-wrap align-middle">
                <div className="col-left w-1/4">
                  <h4 className="text-[30px] text-[#0A4264] font-[600]">Opportunities</h4>
                </div>
                <div className="col-right w-3/4">
                  <p className="text-[20px] max-lg-[18px] max-sm:text-[16px] text-[#0A4264] font-[400] leading-[28px]">Achieve rigorous compliance, outsmart sophisticated fraud, and streamline operations — all while delivering seamless, customer-centric experiences.</p>
                </div>
              </div>
              <div className="statics-wrapper flex flex-wrap justify-between mt-[30px]">
                <div className="text-center">
                  <span className="block text-[90px] leading-[100%] text-[#FF6900] pb-[20px] border-b-[1px] border-[#9FA9AF] mx-[10px]">99%</span>
                  <p className="block mt-[20px] text-[16px] leading-[26px] uppercase text-[#0A4264] font-[700]">verification of mainstream populations</p>
                </div>
                <div className="text-center">
                  <span className="block text-[90px] leading-[100%] text-[#FF6900] pb-[20px] border-b-[1px] border-[#9FA9AF] mx-[10px]">99%</span>
                  <p className="block mt-[20px] text-[16px] leading-[26px] uppercase text-[#0A4264] font-[700]">verification of mainstream populations</p>
                </div>
                <div className="text-center">
                  <span className="block text-[90px] leading-[100%] text-[#FF6900] pb-[20px] border-b-[1px] border-[#9FA9AF] mx-[10px]">99%</span>
                  <p className="block mt-[20px] text-[16px] leading-[26px] uppercase text-[#0A4264] font-[700]">verification of mainstream populations</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-with-image px-[50px] bg-white">
          <div className="container">
            <div className="intro">
              <span className="text-[16px] max-lg-[14px] text-[#FF6900] leading-[26px] font-[700] uppercase mb-[20px] text-center w-full mx-auto block">HOW WE HELP</span>
            </div>
            <div className="wrapper flex flex-wrap">
              <div className="text-wrap w-1/2">
                <h3 className="text-[#FF6900] text-[50px] max-2xl:text-[46px] max-xl:text-[42px] max-lg-[38px] max-md:text-[34px] max-sm:text-[30px] mb-[20px]">Accelerate verification across your customer journey</h3>
                <p className="text-[20px] max-lg-[18px] max-sm:text-[16px] text-[#0A4264] font-[400] leading-[28px] mb-[30px]">Gain unmatched accuracy and inclusivity through advanced AI and machine learning</p>
                <p className="text-[20px] max-lg-[18px] max-sm:text-[16px] text-[#0A4264] font-[400] leading-[28px] mb-[30px]">Make real-time trust and risk decisions — all from a single, seamless platform</p>
                <div className="related-content">
                  <h4 className="text-[30px]  max-xl:text-[28px] max-lg-[26px] max-md:text-[24px] max-sm:text-[22px]leading-[100%] font-[600] text-[#0A4264] mb-[20px]">Related Products</h4>
                  <Link href='#' className="text-[16px] text-[#0A4264] leading-[120%] flex justify-between border-t-[1px] border-[#E5EAEB] py-[15px] align-center"><p><span className="font-[600]">Socure Verify</span> for CIP/KYC compliance</p>
                    <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill="#FF6900" />
                      <path d="M10 15H20M20 15L16.25 11.25M20 15L16.25 18.75" stroke="#0A4264" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </span>
                  </Link>
                  <Link href='#' className="text-[16px] text-[#0A4264] leading-[120%] flex justify-between  border-t-[1px] border-[#E5EAEB] py-[15px] align-center"><p><span className="font-[600]">Global Watchlist Screening</span> with Monitoring for sanctions screening, PEP, and adverse media risk management</p>
                    <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill="#FF6900" />
                      <path d="M10 15H20M20 15L16.25 11.25M20 15L16.25 18.75" stroke="#0A4264" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="img-wrap w-1/2">
                <Image
                  src="/accelerate.png"
                  width={1000}
                  height={1000}
                  alt={"accelarate"}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


