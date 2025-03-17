import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="mx-w-[1600px] mx-auto max-w-full relative">
        <div className="top-nav py-[10px] bg-[background:#0A4264] px-[95px] relative">
          <Link className=" text-center w-full items-center inline-flex font-[600] leading-[24px] z-10 relative justify-center group" href="#">
            <span className="text-[16px] max-md:text-[14px] text-white relative">Socure Unveils AI-Powered Global Watchlist Solution
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
        <section className="banner tablet:bg-black bg-white py-[50px]">
          <div className="container">
            <div className="wrapper min-lg:flex min-lg:flex-wrap block">
              <div className="col-left min-lg:w-1/2 w-full">
                <span className="text-[16px] max-lg-[14px] text-[#FF6900]  font-[700] uppercase mb-[20px]">banking</span>
                <h1 className="text-[#0A4264] text-[90px] max-2xl:text-[78px] max-xl:text-[66px] max-lg:text-[54px] max-md:text-[42px] max-sm:text-[30px]  normal-case mb-[20px]">Identify risk and approve more customers</h1>
                <p className="text-[20px] max-lg-[18px] max-sm:text-[16px] text-[#0A4264] font-[400] leading-[28px] mb-[30px]">Power a seamless customer experience and confident compliance with AI-driven identity verification and fraud prevention solutions that deliver unmatched accuracy.</p>
                <div className="btn-wrap flex flex-wrap items-center">
                  <div className="btn-transparent">
                    <Link className="text-[#0A4264] bg-[#FF6900] text-[16px] max-2xl:text-[14px] font-[600] inline-block transition-all ease-in-out duration-300 py-[15px] max-2xl:py-[12px] px-[20px] max-2xl:px-[15px] rounded-[24.5px] border-[1.5px]  hover:bg-[#d76826] border-[#FF6900] hover:border-[#d76826]" href="#"><span>Talk to an Expert</span></Link>
                  </div>
                  <div className="btn-transparent ml-[10px]">
                    <Link className="text-[#0A4264]  bg-white text-[16px] max-2xl:text-[14px] font-[600] inline-block transition-all ease-in-out duration-300 py-[15px] max-2xl:py-[12px] px-[20px] max-2xl:px-[15px] rounded-[24.5px] border-[1.5px] ml-[10px]  hover:text-[#FF6900]" href="#"><span>Get a Demo</span></Link>
                  </div>
                </div>
                <div className="logo-wrapper flex flex-wrap min-lg:mt-[100px] mt-[20px] min-lg:mb-[50px] mb-[20px] align-middle">
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
              <div className="col-right min-lg:w-1/2 w-full">
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
        <section className="text-with-image py-[50px] bg-white">
          <div className="container">
            <div className="intro">
              <span className="text-[16px] max-lg-[14px] text-[#FF6900] leading-[26px] font-[700] uppercase mb-[20px] text-center w-full mx-auto block">HOW WE HELP</span>
            </div>
            <div className="wrapper flex flex-wrap">
              <div className="text-wrap w-1/2 pr-[100px]">
                <h3 className="text-[#FF6900] text-[50px] max-2xl:text-[46px] max-xl:text-[42px] max-lg-[38px] max-md:text-[34px] max-sm:text-[30px] mb-[20px]">Accelerate verification across your customer journey</h3>
                <p className="text-[20px] max-lg-[18px] max-sm:text-[16px] text-[#0A4264] font-[400] leading-[28px] mb-[30px]">Gain unmatched accuracy and inclusivity through advanced AI and machine learning</p>
                <p className="text-[20px] max-lg-[18px] max-sm:text-[16px] text-[#0A4264] font-[400] leading-[28px] mb-[30px]">Make real-time trust and risk decisions — all from a single, seamless platform</p>
                <div className="related-content">
                  <h4 className="text-[30px]  max-xl:text-[28px] max-lg-[26px] max-md:text-[24px] max-sm:text-[22px]leading-[100%] font-[600] text-[#0A4264] mb-[20px]">Related Products</h4>
                  <Link href='#' className="text-[16px] text-[#0A4264] leading-[120%] flex justify-between border-t-[1px] border-[#E5EAEB] py-[15px] items-center group"><p className="pr-[10px] group-hover:font-[600]"><span className="font-[600]">Socure Verify</span> for CIP/KYC compliance</p>
                    <span ><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill="#FF6900" className="group-hover:fill-[#FF6900]" />
                      <path d="M10 15H20M20 15L16.25 11.25M20 15L16.25 18.75" stroke="#0A4264" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </span>
                  </Link>
                  <Link href='#' className="text-[16px] text-[#0A4264] leading-[120%] flex justify-between  border-t-[1px] border-[#E5EAEB] py-[15px] items-center"><p className="pr-[10px] hover:font-[600]"><span className="font-[600]">Global Watchlist Screening</span> with Monitoring for sanctions screening, PEP, and adverse media risk management</p>
                    <span className="group-hover:fill-[#D76825]"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill="#FF6900" />
                      <path d="M10 15H20M20 15L16.25 11.25M20 15L16.25 18.75" stroke="#0A4264" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
        <section className="text-with-image py-[50px] bg-white">
          <div className="container">
            <div className="wrapper flex flex-wrap">
              <div className="text-wrap w-1/2 pr-[100px]">
                <h3 className="text-[#FF6900] text-[50px] max-2xl:text-[46px] max-xl:text-[42px] max-lg-[38px] max-md:text-[34px] max-sm:text-[30px] mb-[20px]">Achieve effortless compliance with powerful protection</h3>
                <p className="text-[20px] max-lg-[18px] max-sm:text-[16px] text-[#0A4264] font-[400] leading-[28px] mb-[30px]">Focus on the risk that matters by eliminating irrelevant alerts while streamlining operations with automated CIP/KYC and sanctions screening</p>
                <p className="text-[20px] max-lg-[18px] max-sm:text-[16px] text-[#0A4264] font-[400] leading-[28px] mb-[30px]">Quickly adapt to changes in regulations, keeping your institution compliant even as new rules and laws emerge Complete customization for your business and regulatory requirements</p>
                <div className="related-content">
                  <h4 className="text-[30px]  max-xl:text-[28px] max-lg-[26px] max-md:text-[24px] max-sm:text-[22px]leading-[100%] font-[600] text-[#0A4264] mb-[20px]">Related Products</h4>
                  <Link href='#' className="text-[16px] text-[#0A4264] leading-[120%] flex justify-between border-t-[1px] border-[#E5EAEB] py-[15px] items-center"><p className="pr-[10px] hover:font-[600]"><span className="font-[600]">Socure Verify</span> for CIP/KYC compliance</p>
                    <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill="#FF6900" />
                      <path d="M10 15H20M20 15L16.25 11.25M20 15L16.25 18.75" stroke="#0A4264" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </span>
                  </Link>
                  <Link href='#' className="text-[16px] text-[#0A4264] leading-[120%] flex justify-between  border-t-[1px] border-[#E5EAEB] py-[15px] items-center"><p className="pr-[10px] hover:font-[600]"><span className="font-[600]">Global Watchlist Screening</span> with Monitoring for sanctions screening, PEP, and adverse media risk management</p>
                    <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill="#FF6900" />
                      <path d="M10 15H20M20 15L16.25 11.25M20 15L16.25 18.75" stroke="#0A4264" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="img-wrap w-1/2">
                <Image
                  src="/achieve_effortless.png"
                  width={1000}
                  height={1000}
                  alt={"accelarate"}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="text-with-image py-[50px] bg-white">
          <div className="container">
            <div className="wrapper flex flex-wrap">
              <div className="text-wrap w-1/2 pr-[100px]">
                <h3 className="text-[#FF6900] text-[50px] max-2xl:text-[46px] max-xl:text-[42px] max-lg-[38px] max-md:text-[34px] max-sm:text-[30px] mb-[20px]">Proactively identify high-risk customers and behaviors</h3>
                <p className="text-[20px] max-lg-[18px] max-sm:text-[16px] text-[#0A4264] font-[400] leading-[28px] mb-[30px]">Precise fraud detection models minimize false positives while maintaining security</p>
                <p className="text-[20px] max-lg-[18px] max-sm:text-[16px] text-[#0A4264] font-[400] leading-[28px] mb-[30px]">Predict and prevent payment defaults, bad-faith disputes, and bust-out fraud with our first-party fraud consortium Root out money movers and sleepers in your portfolio with third-party and synthetic fraud scrubs</p>
                <div className="related-content">
                  <h4 className="text-[30px]  max-xl:text-[28px] max-lg-[26px] max-md:text-[24px] max-sm:text-[22px]leading-[100%] font-[600] text-[#0A4264] mb-[20px]">Related Products</h4>
                  <Link href='#' className="text-[16px] text-[#0A4264] leading-[120%] flex justify-between border-t-[1px] border-[#E5EAEB] py-[15px] items-center"><p className="pr-[10px] hover:font-[600]"><span className="font-[600]">Socure Verify</span> for CIP/KYC compliance</p>
                    <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill="#FF6900" />
                      <path d="M10 15H20M20 15L16.25 11.25M20 15L16.25 18.75" stroke="#0A4264" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </span>
                  </Link>
                  <Link href='#' className="text-[16px] text-[#0A4264] leading-[120%] flex justify-between  border-t-[1px] border-[#E5EAEB] py-[15px] items-center"><p className="pr-[10px] hover:font-[600]"><span className="font-[600]">Global Watchlist Screening</span> with Monitoring for sanctions screening, PEP, and adverse media risk management</p>
                    <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill="#FF6900" />
                      <path d="M10 15H20M20 15L16.25 11.25M20 15L16.25 18.75" stroke="#0A4264" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="img-wrap w-1/2">
                <Image
                  src="/proactively_identify.png"
                  width={1000}
                  height={1000}
                  alt={"accelarate"}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="text-with-image py-[50px] bg-white">
          <div className="container">
            <div className="wrapper flex flex-wrap">
              <div className="text-wrap w-1/2 pr-[100px]">
                <h3 className="text-[#FF6900] text-[50px] max-2xl:text-[46px] max-xl:text-[42px] max-lg-[38px] max-md:text-[34px] max-sm:text-[30px] mb-[20px]">Proactively identify high-risk customers and behaviors</h3>
                <p className="text-[20px] max-lg-[18px] max-sm:text-[16px] text-[#0A4264] font-[400] leading-[28px] mb-[30px]">Precise fraud detection models minimize false positives while maintaining security</p>
                <p className="text-[20px] max-lg-[18px] max-sm:text-[16px] text-[#0A4264] font-[400] leading-[28px] mb-[30px]">Predict and prevent payment defaults, bad-faith disputes, and bust-out fraud with our first-party fraud consortium Root out money movers and sleepers in your portfolio with third-party and synthetic fraud scrubs</p>
                <div className="related-content">
                  <h4 className="text-[30px]  max-xl:text-[28px] max-lg-[26px] max-md:text-[24px] max-sm:text-[22px]leading-[100%] font-[600] text-[#0A4264] mb-[20px]">Related Products</h4>
                  <Link href='#' className="text-[16px] text-[#0A4264] leading-[120%] flex justify-between border-t-[1px] border-[#E5EAEB] py-[15px] items-center"><p className="pr-[10px] hover:font-[600]"><span className="font-[600]">Socure Verify</span> for CIP/KYC compliance</p>
                    <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill="#FF6900" />
                      <path d="M10 15H20M20 15L16.25 11.25M20 15L16.25 18.75" stroke="#0A4264" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </span>
                  </Link>
                  <Link href='#' className="text-[16px] text-[#0A4264] leading-[120%] flex justify-between  border-t-[1px] border-[#E5EAEB] py-[15px] items-center"><p className="pr-[10px] hover:font-[600]"><span className="font-[600]">Global Watchlist Screening</span> with Monitoring for sanctions screening, PEP, and adverse media risk management</p>
                    <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill="#FF6900" />
                      <path d="M10 15H20M20 15L16.25 11.25M20 15L16.25 18.75" stroke="#0A4264" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="img-wrap w-1/2">
                <Image
                  src="/proactively_identify.png"
                  width={1000}
                  height={1000}
                  alt={"accelarate"}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="author-content py-[50px] bg-white">
          <div className="container">
            <div className="wrapper flex flex-wrap">
              <div className="col-left w-1/3">
                <span className="block text-[90px] leading-[100%] text-[#FF6900] pb-[20px]">50%</span>
                <span className="uppercase text-[16px] font-[700] text-[#0A4264] leading-[26px] max-w-[252px] block">decrease in fraudulent loan applications</span>
              </div>
              <div className="col-right w-2/3">
                <h3 className="text-[40px] text-[#0A4264] leading-[120%] mb-[20px]">“The number of fraudulent loan applications getting through was cut by over 50%. Fraud reduction was achieved without any impact or friction to the end user — unless they were a fraudster.”</h3>
                <p className="text-[24px] text-[#0A4264] font-[400]">Chief Risk Officer Leading online lender Read the case study</p>
              </div>
            </div>
          </div>
        </section>
        <section className="resources py-[50px] bg-white">
          <div className="container">
            <div className="wrapper flex flex-wrap">
              <div className="col-left w-1/2">
                <span className="text-[16px] max-lg-[14px] text-[#FF6900] leading-[26px] font-[700] uppercase mb-[20px]">Our Resources</span>
                <h3 className="text-[50px] text-[#0A4264] font-[400] leading-[120%] mb-[20px]">Our latest digital identity and fraud insights</h3>
                <a className="text-[#0A4264]  bg-white text-[16px] max-2xl:text-[14px] font-[600] inline-block transition-all ease-in-out duration-300 py-[15px] max-2xl:py-[12px] px-[20px] max-2xl:px-[15px] rounded-[24.5px] border-[1.5px]  hover:text-[#FF6900] mb-[20px]" href="#"><span>View resource center</span></a>
              </div>
              <div className="col-right w-1/2">
                <div className="wrapper">
                  <div className="item group border-[#E5EAEB] border-b-[1px] py-[30px] group-hover:border-[#FF6900]">
                    <Link href="#">
                      <div className="wrapper flex flex-wrap">
                        <div className="img-wrap w-[90px]">
                          <span>
                            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_1_7030)">
                                <path d="M89 45C89 69.3005 69.3005 89 45 89C20.6995 89 1 69.3005 1 45C1 20.6995 20.6995 1 45 1C69.3005 1 89 20.6995 89 45Z" stroke="#0A4264" strokeWidth="2" />
                                <path d="M73.8362 42.373C73.4418 40.6358 72.8459 38.9992 72.057 37.5138C71.1255 35.743 69.9338 34.1317 68.5155 32.7133C68.5155 32.7133 68.5071 32.7133 68.4987 32.6966L59.1831 23.381L59.0488 23.2467C59.0488 23.2467 59.0488 23.2467 59.0404 23.2467C55.7338 19.9737 51.353 17.9511 46.712 17.5567C44.6727 17.3804 42.5914 17.5315 40.5268 18.0015C38.7896 18.4043 37.1615 19.0002 35.676 19.7891C33.922 20.7206 32.3191 21.9039 30.9092 23.3139C30.9092 23.3139 30.9092 23.3139 30.9092 23.3223L21.5684 32.663C21.5684 32.663 21.5684 32.663 21.56 32.6714C21.5516 32.6798 21.5516 32.6882 21.5432 32.6966C21.5432 32.6966 21.5348 32.6966 21.5265 32.705C21.5181 32.7133 21.5097 32.7301 21.4929 32.7469C21.4845 32.7553 21.4677 32.7637 21.4593 32.7721C21.4593 32.7721 21.4593 32.7721 21.4509 32.7721C18.1695 36.0871 16.1469 40.4679 15.7525 45.1173C15.5763 47.1734 15.7273 49.2548 16.1973 51.3025C16.5917 53.0313 17.196 54.6595 17.9849 56.1449C18.908 57.8989 20.0914 59.5019 21.5097 60.9118L30.8756 70.2777L31.0099 70.412C34.3165 73.685 38.6973 75.7076 43.3383 76.102C43.3383 76.102 43.3551 76.102 43.3718 76.102C43.3886 76.102 43.4054 76.102 43.4222 76.102C43.9425 76.144 44.4713 76.1692 45 76.1692C46.5106 76.1692 48.0212 75.9929 49.5235 75.6488C51.2439 75.2544 52.872 74.6501 54.3743 73.8612C55.6919 73.1563 56.892 72.2751 58.025 71.3016C58.1592 71.2596 58.2935 71.1841 58.4026 71.075L59.1328 70.3448L67.7517 61.7175C67.8357 61.6335 67.8944 61.5412 67.9364 61.4405C68.1294 61.2643 68.3308 61.0964 68.5155 60.9118C71.8137 57.6052 73.8614 53.2244 74.2726 48.5666C74.4573 46.5104 74.3062 44.4291 73.8362 42.373ZM67.1391 59.5354C64.1598 62.5147 60.207 64.3611 55.994 64.7303C53.963 64.9066 51.8817 64.7303 49.834 64.2016C47.2407 63.5218 44.8993 62.3049 42.8599 60.5929L41.8025 59.5354L41.7521 59.4851C39.9729 57.6891 39.9897 54.7769 41.7689 52.9894C42.1466 52.6117 42.1466 51.9907 41.7689 51.613C41.3829 51.227 40.7702 51.2354 40.3926 51.613C37.9588 54.0384 37.8664 57.9157 40.0653 60.4838C40.1072 60.6348 40.1744 60.7859 40.3002 60.9034C40.7115 61.3146 41.1479 61.6923 41.5843 62.0615C43.1201 63.3624 44.8405 64.3778 46.6701 65.1499C43.7243 65.6954 40.7282 64.7723 38.6134 62.6574C36.4733 60.5173 35.5501 57.4625 36.1376 54.4748C36.4901 52.704 37.3461 51.1011 38.6134 49.8254C38.991 49.4478 38.991 48.8267 38.6134 48.4491C38.2357 48.0714 37.6147 48.0714 37.237 48.4491C35.6928 49.9933 34.6522 51.9487 34.2241 54.0888C33.5024 57.7059 34.6354 61.4237 37.237 64.0254C37.279 64.0673 37.3377 64.1009 37.3797 64.1429C39.4526 66.1402 42.1801 67.2397 45.0084 67.2397C45.7217 67.2397 46.4435 67.1725 47.1652 67.0298C47.9709 66.8704 48.8017 66.5599 49.6997 66.1402C51.0005 66.4508 52.3097 66.627 53.619 66.6774C52.5783 67.5334 51.4202 68.23 50.1697 68.7419C48.6255 69.3713 46.989 69.7154 45.2853 69.749C41.5423 69.8245 38.1098 68.4314 35.4914 65.8381C35.483 65.8297 35.4662 65.8213 35.4578 65.8129C35.4494 65.7962 35.4326 65.7878 35.4243 65.771C35.4243 65.771 35.4243 65.7542 35.4075 65.7458C32.8142 63.1274 31.4295 59.6445 31.505 55.9435C31.5386 54.307 31.8575 52.7208 32.4533 51.2354C32.4617 51.2186 32.4785 51.2186 32.4869 51.2018C32.5457 51.1011 32.5792 50.992 32.596 50.8745C33.2758 49.2967 34.2241 47.87 35.4494 46.6447C35.8271 46.2671 35.8271 45.646 35.4494 45.2684C35.0718 44.8907 34.4507 44.8907 34.0731 45.2684C32.7219 46.6195 31.6645 48.1889 30.8924 49.9261C30.8924 49.9261 30.8756 49.9261 30.8672 49.9429C30.649 50.1611 30.5567 50.4297 30.5735 50.6982C29.944 52.3515 29.5832 54.0972 29.5496 55.9099C29.4657 60.1229 31.0434 64.0925 33.9892 67.0886C33.9892 67.0886 33.9892 67.097 33.9975 67.1054C33.9975 67.1054 34.0059 67.1054 34.0143 67.1138L34.1067 67.2061H34.115C34.115 67.2061 34.1402 67.2313 34.1486 67.2397C37.0608 70.0931 40.8793 71.6624 44.9664 71.6624C45.0755 71.6624 45.1762 71.6624 45.2853 71.6624C47.224 71.6205 49.1039 71.2344 50.8663 70.5127C52.7629 69.7322 54.4582 68.5992 55.9101 67.1473C55.9101 67.1473 55.9101 67.1473 55.9101 67.1389L56.4724 66.5766C58.0585 66.4088 59.6027 66.0563 61.0882 65.5276L57.6893 68.9265C56.4136 70.1938 54.9701 71.268 53.384 72.1072C52.0328 72.8206 50.5641 73.3661 49.0031 73.7186C47.1484 74.1466 45.2685 74.2809 43.4222 74.1214C39.2344 73.7689 35.2816 71.9394 32.2939 68.9853C32.2855 68.9769 32.2687 68.9769 32.2603 68.9685C32.2435 68.9433 32.21 68.9181 32.1848 68.8929C32.1848 68.8929 32.1848 68.8762 32.1764 68.8762C29.2139 65.8885 27.3927 61.9357 27.0403 57.7478C26.864 55.7085 27.0403 53.644 27.5858 51.613C28.3159 48.8267 29.751 46.2167 31.7148 44.0683L32.2519 43.5311L32.2855 43.4976C34.0899 41.7184 37.002 41.7268 38.7812 43.5144C38.9658 43.7074 39.2176 43.7997 39.4694 43.7997C39.7212 43.7997 39.9645 43.7074 40.1576 43.5144C40.5352 43.1367 40.5352 42.5157 40.1576 42.138C37.707 39.679 33.771 39.6119 31.1945 41.8862C31.077 41.9366 30.9679 42.0037 30.8756 42.096C30.7245 42.2387 30.5902 42.3982 30.456 42.5492L30.2965 42.7339C28.7439 44.4207 27.5102 46.3846 26.629 48.4743C26.0583 45.5117 26.9899 42.4737 29.1132 40.3504C31.2616 38.202 34.3165 37.2788 37.2958 37.8663C39.0582 38.2104 40.6611 39.0664 41.9368 40.342C42.1298 40.5351 42.3732 40.6274 42.6249 40.6274C42.8767 40.6274 43.1285 40.5351 43.3131 40.342C43.6908 39.9644 43.6908 39.3433 43.3131 38.9657C41.7605 37.4215 39.8051 36.3808 37.665 35.9612C34.0479 35.2478 30.3385 36.3724 27.7368 38.9741C25.1352 41.5757 24.0022 45.2852 24.724 48.9107C24.8834 49.7163 25.1939 50.5556 25.6303 51.4536C25.3114 52.746 25.1268 54.0552 25.068 55.356C24.2204 54.3238 23.5238 53.1656 23.0119 51.9151C22.3825 50.3709 22.0468 48.7344 22.0132 47.0308C21.9377 43.3213 23.3308 39.8385 25.9325 37.2201C25.9325 37.2201 25.9576 37.1949 25.9744 37.1781C25.9744 37.1781 25.9744 37.1781 25.9828 37.1697C28.6012 34.5681 32.0841 33.1498 35.7935 33.2505C37.3377 33.284 38.84 33.5778 40.2583 34.1065C40.3002 34.1484 40.3254 34.2072 40.3674 34.2408C40.5604 34.3834 40.7702 34.4506 40.98 34.4506C41.0052 34.4506 41.0304 34.4338 41.0555 34.4338C42.5578 35.1052 43.9174 36.0283 45.0839 37.1949C45.2685 37.3879 45.5203 37.4802 45.7721 37.4802C46.0238 37.4802 46.2672 37.3879 46.4602 37.1949C46.8379 36.8172 46.8379 36.1962 46.4602 35.8185C45.0839 34.4338 43.4726 33.3512 41.685 32.5791C41.5171 32.4364 41.3241 32.3609 41.1227 32.3441C39.4358 31.6895 37.665 31.3286 35.8187 31.295C31.6561 31.2195 27.6781 32.7805 24.6904 35.701C24.6316 35.7346 24.5981 35.7598 24.5393 35.8437L24.5141 35.8689C21.5516 38.865 19.9655 42.8346 20.0494 47.0643C20.0914 49.003 20.4774 50.8829 21.1992 52.6369C21.9796 54.542 23.1126 56.2456 24.5645 57.6975L25.1352 58.2682C25.2946 59.8376 25.6387 61.3818 26.1591 62.8588L22.7769 59.4767C21.5013 58.201 20.4271 56.7575 19.5962 55.1798C18.8829 53.837 18.3373 52.3683 17.9849 50.799C17.5569 48.9442 17.4226 47.0727 17.582 45.218C17.9345 41.0218 19.7641 37.069 22.7266 34.0729L22.8105 33.989C25.7982 31.0265 29.751 29.1969 33.9472 28.8361C36.0033 28.6598 38.0846 28.8361 40.1072 29.3816C42.6753 30.0614 45 31.2699 47.0309 32.9735L48.1219 34.0645H48.1303C48.1303 34.0645 48.1303 34.0729 48.1387 34.0729L48.1723 34.1065C49.9431 35.9025 49.9263 38.8062 48.1471 40.5938C47.7695 40.9715 47.7695 41.5925 48.1471 41.9702C48.3401 42.1632 48.5835 42.2555 48.8353 42.2555C49.0871 42.2555 49.3304 42.1632 49.5235 41.9702C51.9573 39.528 52.0412 35.6255 49.8172 33.0574C49.7752 32.9064 49.6997 32.7553 49.5822 32.6378C49.1626 32.2266 48.743 31.8573 48.3066 31.4881C46.7792 30.204 45.0839 29.1969 43.2711 28.4248C46.2169 27.8877 49.1962 28.8109 51.3111 30.9174C53.4595 33.0658 54.3827 36.1291 53.7868 39.1C53.4427 40.8708 52.5867 42.4737 51.3111 43.7493C50.9334 44.127 50.9334 44.748 51.3111 45.1257C51.4957 45.3187 51.7475 45.411 51.9992 45.411C52.251 45.411 52.4944 45.3187 52.6874 45.1257C54.2316 43.5815 55.2723 41.6345 55.6919 39.4944C55.6919 39.4944 55.6919 39.4944 55.6919 39.486C56.4136 35.8773 55.289 32.1594 52.6874 29.5494C50.0858 26.9478 46.3595 25.8232 42.7592 26.5449C41.9703 26.7044 41.1395 27.0065 40.2667 27.4261C38.9742 27.1072 37.665 26.9226 36.3474 26.8639C37.3713 26.0246 38.5043 25.3448 39.7463 24.8329C41.2905 24.2035 42.9354 23.8594 44.6307 23.8258C48.2898 23.7335 51.8146 25.1434 54.433 27.7367C54.4414 27.7367 54.4498 27.7451 54.4666 27.7534C54.4834 27.7702 54.5002 27.787 54.5169 27.8038C54.5169 27.8038 54.5169 27.8206 54.5337 27.8206C57.127 30.4474 58.5117 33.9219 58.4362 37.6145C58.4026 39.1587 58.1089 40.6525 57.5886 42.0541C57.5634 42.0709 57.5298 42.0876 57.5046 42.1044C57.3032 42.331 57.2193 42.5996 57.2445 42.8681C56.5731 44.3788 55.6499 45.7383 54.475 46.9133C54.0973 47.2909 54.0973 47.912 54.475 48.2896C54.668 48.4827 54.9114 48.575 55.1632 48.575C55.4149 48.575 55.6667 48.4827 55.8513 48.2896C57.2109 46.9301 58.2767 45.3523 59.0488 43.5983C59.0572 43.5899 59.0656 43.5815 59.0824 43.5731C59.267 43.3717 59.3594 43.1199 59.351 42.8681C59.9888 41.2148 60.3413 39.4692 60.3748 37.6481C60.4588 33.4183 58.8726 29.4403 55.9017 26.4442C55.9017 26.4442 55.9017 26.4442 55.8933 26.4358L55.7926 26.3435C55.7842 26.3351 55.7758 26.3183 55.759 26.31C52.7797 23.3894 48.8437 21.8368 44.6391 21.8956H44.6223C42.6921 21.9375 40.8122 22.3236 39.0414 23.0453C37.1447 23.8258 35.4494 24.9588 33.9975 26.4107C33.9975 26.4107 33.9975 26.4107 33.9975 26.4191L33.4604 26.9478C31.8827 27.1156 30.3385 27.4597 28.8614 27.98L32.2184 24.6231C33.4856 23.3474 34.9291 22.2816 36.5153 21.4424C37.8497 20.7374 39.3183 20.1919 40.8877 19.831C42.7508 19.403 44.6223 19.2687 46.4686 19.4282C50.6564 19.7807 54.6093 21.6018 57.597 24.5643C57.6053 24.5643 57.6137 24.5727 57.6305 24.5811C57.6473 24.6063 57.6809 24.6399 57.7061 24.665C57.7061 24.665 57.7061 24.6734 57.7144 24.6818C60.677 27.6695 62.4981 31.6223 62.8506 35.8101C63.0268 37.8831 62.8506 39.9476 62.3051 41.9702C61.5666 44.7564 60.1315 47.3581 58.1676 49.5065L57.9494 49.7499C57.9159 49.7835 57.8823 49.817 57.8571 49.859C57.7648 49.901 57.6809 49.9513 57.6053 50.0269C55.8681 51.7641 52.8301 51.7641 51.0928 50.0269C50.7152 49.6492 50.0942 49.6492 49.7165 50.0269C49.3388 50.4045 49.3388 51.0255 49.7165 51.4032C50.9502 52.6369 52.5951 53.3251 54.3491 53.3251C55.952 53.3251 57.4459 52.7292 58.6376 51.6885C58.7803 51.6382 58.9229 51.5711 59.0404 51.4536C59.1747 51.3193 59.3006 51.1766 59.4265 51.0339L59.6111 50.8241C61.1553 49.1457 62.3806 47.207 63.2618 45.1257C63.8073 48.063 62.8758 51.0675 60.7609 53.1908C58.6292 55.3225 55.5828 56.254 52.6119 55.6833C50.8411 55.3392 49.2213 54.4748 47.9289 53.1908C47.5513 52.8131 46.9302 52.8131 46.5526 53.1908C46.1749 53.5684 46.1749 54.1895 46.5526 54.5671C48.1219 56.1281 50.0858 57.1688 52.2426 57.5884C52.3014 57.5968 52.3601 57.6052 52.4272 57.6052C53.0651 57.7143 53.7113 57.7898 54.3491 57.7898C57.2445 57.7898 60.0475 56.6485 62.1372 54.5587C64.7305 51.9655 65.8635 48.2645 65.1585 44.6641C64.999 43.8668 64.6969 43.0192 64.2689 42.1212C64.5878 40.8288 64.7724 39.5196 64.8228 38.202C65.6704 39.2342 66.3586 40.384 66.8705 41.6429C67.5 43.1871 67.8357 44.832 67.8692 46.544C67.9364 50.2534 66.5265 53.7279 63.9248 56.3379C61.3064 58.948 57.8403 60.3831 54.1225 60.2907C52.5028 60.2656 50.925 59.955 49.4312 59.3676C49.3221 59.3004 49.2046 59.2501 49.0787 59.2249C47.4673 58.5367 46.0238 57.5716 44.7902 56.3379C44.4125 55.9519 43.7915 55.9603 43.4138 56.3379C43.0362 56.7156 43.0362 57.3366 43.4138 57.7143C44.8657 59.1746 46.5777 60.3075 48.4912 61.0964C50.2788 61.8266 52.1587 62.2042 54.0973 62.2378C54.1896 62.2378 54.282 62.2378 54.3743 62.2378C58.5033 62.2378 62.3806 60.6348 65.3096 57.7143C68.2972 54.7266 69.9002 50.7486 69.8247 46.5104C69.7911 44.5634 69.405 42.6751 68.6833 40.9127C67.9028 38.9992 66.7698 37.2872 65.3012 35.8353L64.7724 35.2982C64.613 33.7288 64.2689 32.1846 63.7486 30.716L67.0971 34.0645C67.0971 34.0645 67.1055 34.0645 67.1139 34.0729C68.3896 35.3569 69.4638 36.8088 70.303 38.395C71.008 39.7294 71.5451 41.2064 71.906 42.7758C72.334 44.6389 72.4599 46.5188 72.3004 48.3652C71.9312 52.5697 70.0848 56.531 67.1055 59.5103L67.1391 59.5354Z" fill="#0A4264" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_7030">
                                  <rect width="90" height="90" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        </div>
                        <div className="text-wrap w-[calc(100%-90px)] pl-[20px]">
                          <h4 className="text-[30px]  max-xl:text-[28px] max-lg-[26px] max-md:text-[24px] max-sm:text-[22px]leading-[100%] font-[600] text-[#0A4264] mb-[20px] group-hover:text-[#FF6900] transition-all duration-400">Building the Future of Citizen Experience on Digital Trust</h4>
                          <span className="text-[16px] text-[#0A4264] relative font-[600]">Read Article
                            <span className="absolute top-[calc(50%-4px)] pl-[5px] group-hover:ml-[5px] transition-all duration-400"><svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 5.5H11M11 5.5L7.25 1.75M11 5.5L7.25 9.25" stroke="#0A4264" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            </span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="item group border-[#E5EAEB] border-b-[1px] py-[30px]">
                    <Link href="#">
                      <div className="wrapper flex flex-wrap">
                        <div className="img-wrap w-[90px]">
                          <span>
                            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_1_7030)">
                                <path d="M89 45C89 69.3005 69.3005 89 45 89C20.6995 89 1 69.3005 1 45C1 20.6995 20.6995 1 45 1C69.3005 1 89 20.6995 89 45Z" stroke="#0A4264" strokeWidth="2" />
                                <path d="M73.8362 42.373C73.4418 40.6358 72.8459 38.9992 72.057 37.5138C71.1255 35.743 69.9338 34.1317 68.5155 32.7133C68.5155 32.7133 68.5071 32.7133 68.4987 32.6966L59.1831 23.381L59.0488 23.2467C59.0488 23.2467 59.0488 23.2467 59.0404 23.2467C55.7338 19.9737 51.353 17.9511 46.712 17.5567C44.6727 17.3804 42.5914 17.5315 40.5268 18.0015C38.7896 18.4043 37.1615 19.0002 35.676 19.7891C33.922 20.7206 32.3191 21.9039 30.9092 23.3139C30.9092 23.3139 30.9092 23.3139 30.9092 23.3223L21.5684 32.663C21.5684 32.663 21.5684 32.663 21.56 32.6714C21.5516 32.6798 21.5516 32.6882 21.5432 32.6966C21.5432 32.6966 21.5348 32.6966 21.5265 32.705C21.5181 32.7133 21.5097 32.7301 21.4929 32.7469C21.4845 32.7553 21.4677 32.7637 21.4593 32.7721C21.4593 32.7721 21.4593 32.7721 21.4509 32.7721C18.1695 36.0871 16.1469 40.4679 15.7525 45.1173C15.5763 47.1734 15.7273 49.2548 16.1973 51.3025C16.5917 53.0313 17.196 54.6595 17.9849 56.1449C18.908 57.8989 20.0914 59.5019 21.5097 60.9118L30.8756 70.2777L31.0099 70.412C34.3165 73.685 38.6973 75.7076 43.3383 76.102C43.3383 76.102 43.3551 76.102 43.3718 76.102C43.3886 76.102 43.4054 76.102 43.4222 76.102C43.9425 76.144 44.4713 76.1692 45 76.1692C46.5106 76.1692 48.0212 75.9929 49.5235 75.6488C51.2439 75.2544 52.872 74.6501 54.3743 73.8612C55.6919 73.1563 56.892 72.2751 58.025 71.3016C58.1592 71.2596 58.2935 71.1841 58.4026 71.075L59.1328 70.3448L67.7517 61.7175C67.8357 61.6335 67.8944 61.5412 67.9364 61.4405C68.1294 61.2643 68.3308 61.0964 68.5155 60.9118C71.8137 57.6052 73.8614 53.2244 74.2726 48.5666C74.4573 46.5104 74.3062 44.4291 73.8362 42.373ZM67.1391 59.5354C64.1598 62.5147 60.207 64.3611 55.994 64.7303C53.963 64.9066 51.8817 64.7303 49.834 64.2016C47.2407 63.5218 44.8993 62.3049 42.8599 60.5929L41.8025 59.5354L41.7521 59.4851C39.9729 57.6891 39.9897 54.7769 41.7689 52.9894C42.1466 52.6117 42.1466 51.9907 41.7689 51.613C41.3829 51.227 40.7702 51.2354 40.3926 51.613C37.9588 54.0384 37.8664 57.9157 40.0653 60.4838C40.1072 60.6348 40.1744 60.7859 40.3002 60.9034C40.7115 61.3146 41.1479 61.6923 41.5843 62.0615C43.1201 63.3624 44.8405 64.3778 46.6701 65.1499C43.7243 65.6954 40.7282 64.7723 38.6134 62.6574C36.4733 60.5173 35.5501 57.4625 36.1376 54.4748C36.4901 52.704 37.3461 51.1011 38.6134 49.8254C38.991 49.4478 38.991 48.8267 38.6134 48.4491C38.2357 48.0714 37.6147 48.0714 37.237 48.4491C35.6928 49.9933 34.6522 51.9487 34.2241 54.0888C33.5024 57.7059 34.6354 61.4237 37.237 64.0254C37.279 64.0673 37.3377 64.1009 37.3797 64.1429C39.4526 66.1402 42.1801 67.2397 45.0084 67.2397C45.7217 67.2397 46.4435 67.1725 47.1652 67.0298C47.9709 66.8704 48.8017 66.5599 49.6997 66.1402C51.0005 66.4508 52.3097 66.627 53.619 66.6774C52.5783 67.5334 51.4202 68.23 50.1697 68.7419C48.6255 69.3713 46.989 69.7154 45.2853 69.749C41.5423 69.8245 38.1098 68.4314 35.4914 65.8381C35.483 65.8297 35.4662 65.8213 35.4578 65.8129C35.4494 65.7962 35.4326 65.7878 35.4243 65.771C35.4243 65.771 35.4243 65.7542 35.4075 65.7458C32.8142 63.1274 31.4295 59.6445 31.505 55.9435C31.5386 54.307 31.8575 52.7208 32.4533 51.2354C32.4617 51.2186 32.4785 51.2186 32.4869 51.2018C32.5457 51.1011 32.5792 50.992 32.596 50.8745C33.2758 49.2967 34.2241 47.87 35.4494 46.6447C35.8271 46.2671 35.8271 45.646 35.4494 45.2684C35.0718 44.8907 34.4507 44.8907 34.0731 45.2684C32.7219 46.6195 31.6645 48.1889 30.8924 49.9261C30.8924 49.9261 30.8756 49.9261 30.8672 49.9429C30.649 50.1611 30.5567 50.4297 30.5735 50.6982C29.944 52.3515 29.5832 54.0972 29.5496 55.9099C29.4657 60.1229 31.0434 64.0925 33.9892 67.0886C33.9892 67.0886 33.9892 67.097 33.9975 67.1054C33.9975 67.1054 34.0059 67.1054 34.0143 67.1138L34.1067 67.2061H34.115C34.115 67.2061 34.1402 67.2313 34.1486 67.2397C37.0608 70.0931 40.8793 71.6624 44.9664 71.6624C45.0755 71.6624 45.1762 71.6624 45.2853 71.6624C47.224 71.6205 49.1039 71.2344 50.8663 70.5127C52.7629 69.7322 54.4582 68.5992 55.9101 67.1473C55.9101 67.1473 55.9101 67.1473 55.9101 67.1389L56.4724 66.5766C58.0585 66.4088 59.6027 66.0563 61.0882 65.5276L57.6893 68.9265C56.4136 70.1938 54.9701 71.268 53.384 72.1072C52.0328 72.8206 50.5641 73.3661 49.0031 73.7186C47.1484 74.1466 45.2685 74.2809 43.4222 74.1214C39.2344 73.7689 35.2816 71.9394 32.2939 68.9853C32.2855 68.9769 32.2687 68.9769 32.2603 68.9685C32.2435 68.9433 32.21 68.9181 32.1848 68.8929C32.1848 68.8929 32.1848 68.8762 32.1764 68.8762C29.2139 65.8885 27.3927 61.9357 27.0403 57.7478C26.864 55.7085 27.0403 53.644 27.5858 51.613C28.3159 48.8267 29.751 46.2167 31.7148 44.0683L32.2519 43.5311L32.2855 43.4976C34.0899 41.7184 37.002 41.7268 38.7812 43.5144C38.9658 43.7074 39.2176 43.7997 39.4694 43.7997C39.7212 43.7997 39.9645 43.7074 40.1576 43.5144C40.5352 43.1367 40.5352 42.5157 40.1576 42.138C37.707 39.679 33.771 39.6119 31.1945 41.8862C31.077 41.9366 30.9679 42.0037 30.8756 42.096C30.7245 42.2387 30.5902 42.3982 30.456 42.5492L30.2965 42.7339C28.7439 44.4207 27.5102 46.3846 26.629 48.4743C26.0583 45.5117 26.9899 42.4737 29.1132 40.3504C31.2616 38.202 34.3165 37.2788 37.2958 37.8663C39.0582 38.2104 40.6611 39.0664 41.9368 40.342C42.1298 40.5351 42.3732 40.6274 42.6249 40.6274C42.8767 40.6274 43.1285 40.5351 43.3131 40.342C43.6908 39.9644 43.6908 39.3433 43.3131 38.9657C41.7605 37.4215 39.8051 36.3808 37.665 35.9612C34.0479 35.2478 30.3385 36.3724 27.7368 38.9741C25.1352 41.5757 24.0022 45.2852 24.724 48.9107C24.8834 49.7163 25.1939 50.5556 25.6303 51.4536C25.3114 52.746 25.1268 54.0552 25.068 55.356C24.2204 54.3238 23.5238 53.1656 23.0119 51.9151C22.3825 50.3709 22.0468 48.7344 22.0132 47.0308C21.9377 43.3213 23.3308 39.8385 25.9325 37.2201C25.9325 37.2201 25.9576 37.1949 25.9744 37.1781C25.9744 37.1781 25.9744 37.1781 25.9828 37.1697C28.6012 34.5681 32.0841 33.1498 35.7935 33.2505C37.3377 33.284 38.84 33.5778 40.2583 34.1065C40.3002 34.1484 40.3254 34.2072 40.3674 34.2408C40.5604 34.3834 40.7702 34.4506 40.98 34.4506C41.0052 34.4506 41.0304 34.4338 41.0555 34.4338C42.5578 35.1052 43.9174 36.0283 45.0839 37.1949C45.2685 37.3879 45.5203 37.4802 45.7721 37.4802C46.0238 37.4802 46.2672 37.3879 46.4602 37.1949C46.8379 36.8172 46.8379 36.1962 46.4602 35.8185C45.0839 34.4338 43.4726 33.3512 41.685 32.5791C41.5171 32.4364 41.3241 32.3609 41.1227 32.3441C39.4358 31.6895 37.665 31.3286 35.8187 31.295C31.6561 31.2195 27.6781 32.7805 24.6904 35.701C24.6316 35.7346 24.5981 35.7598 24.5393 35.8437L24.5141 35.8689C21.5516 38.865 19.9655 42.8346 20.0494 47.0643C20.0914 49.003 20.4774 50.8829 21.1992 52.6369C21.9796 54.542 23.1126 56.2456 24.5645 57.6975L25.1352 58.2682C25.2946 59.8376 25.6387 61.3818 26.1591 62.8588L22.7769 59.4767C21.5013 58.201 20.4271 56.7575 19.5962 55.1798C18.8829 53.837 18.3373 52.3683 17.9849 50.799C17.5569 48.9442 17.4226 47.0727 17.582 45.218C17.9345 41.0218 19.7641 37.069 22.7266 34.0729L22.8105 33.989C25.7982 31.0265 29.751 29.1969 33.9472 28.8361C36.0033 28.6598 38.0846 28.8361 40.1072 29.3816C42.6753 30.0614 45 31.2699 47.0309 32.9735L48.1219 34.0645H48.1303C48.1303 34.0645 48.1303 34.0729 48.1387 34.0729L48.1723 34.1065C49.9431 35.9025 49.9263 38.8062 48.1471 40.5938C47.7695 40.9715 47.7695 41.5925 48.1471 41.9702C48.3401 42.1632 48.5835 42.2555 48.8353 42.2555C49.0871 42.2555 49.3304 42.1632 49.5235 41.9702C51.9573 39.528 52.0412 35.6255 49.8172 33.0574C49.7752 32.9064 49.6997 32.7553 49.5822 32.6378C49.1626 32.2266 48.743 31.8573 48.3066 31.4881C46.7792 30.204 45.0839 29.1969 43.2711 28.4248C46.2169 27.8877 49.1962 28.8109 51.3111 30.9174C53.4595 33.0658 54.3827 36.1291 53.7868 39.1C53.4427 40.8708 52.5867 42.4737 51.3111 43.7493C50.9334 44.127 50.9334 44.748 51.3111 45.1257C51.4957 45.3187 51.7475 45.411 51.9992 45.411C52.251 45.411 52.4944 45.3187 52.6874 45.1257C54.2316 43.5815 55.2723 41.6345 55.6919 39.4944C55.6919 39.4944 55.6919 39.4944 55.6919 39.486C56.4136 35.8773 55.289 32.1594 52.6874 29.5494C50.0858 26.9478 46.3595 25.8232 42.7592 26.5449C41.9703 26.7044 41.1395 27.0065 40.2667 27.4261C38.9742 27.1072 37.665 26.9226 36.3474 26.8639C37.3713 26.0246 38.5043 25.3448 39.7463 24.8329C41.2905 24.2035 42.9354 23.8594 44.6307 23.8258C48.2898 23.7335 51.8146 25.1434 54.433 27.7367C54.4414 27.7367 54.4498 27.7451 54.4666 27.7534C54.4834 27.7702 54.5002 27.787 54.5169 27.8038C54.5169 27.8038 54.5169 27.8206 54.5337 27.8206C57.127 30.4474 58.5117 33.9219 58.4362 37.6145C58.4026 39.1587 58.1089 40.6525 57.5886 42.0541C57.5634 42.0709 57.5298 42.0876 57.5046 42.1044C57.3032 42.331 57.2193 42.5996 57.2445 42.8681C56.5731 44.3788 55.6499 45.7383 54.475 46.9133C54.0973 47.2909 54.0973 47.912 54.475 48.2896C54.668 48.4827 54.9114 48.575 55.1632 48.575C55.4149 48.575 55.6667 48.4827 55.8513 48.2896C57.2109 46.9301 58.2767 45.3523 59.0488 43.5983C59.0572 43.5899 59.0656 43.5815 59.0824 43.5731C59.267 43.3717 59.3594 43.1199 59.351 42.8681C59.9888 41.2148 60.3413 39.4692 60.3748 37.6481C60.4588 33.4183 58.8726 29.4403 55.9017 26.4442C55.9017 26.4442 55.9017 26.4442 55.8933 26.4358L55.7926 26.3435C55.7842 26.3351 55.7758 26.3183 55.759 26.31C52.7797 23.3894 48.8437 21.8368 44.6391 21.8956H44.6223C42.6921 21.9375 40.8122 22.3236 39.0414 23.0453C37.1447 23.8258 35.4494 24.9588 33.9975 26.4107C33.9975 26.4107 33.9975 26.4107 33.9975 26.4191L33.4604 26.9478C31.8827 27.1156 30.3385 27.4597 28.8614 27.98L32.2184 24.6231C33.4856 23.3474 34.9291 22.2816 36.5153 21.4424C37.8497 20.7374 39.3183 20.1919 40.8877 19.831C42.7508 19.403 44.6223 19.2687 46.4686 19.4282C50.6564 19.7807 54.6093 21.6018 57.597 24.5643C57.6053 24.5643 57.6137 24.5727 57.6305 24.5811C57.6473 24.6063 57.6809 24.6399 57.7061 24.665C57.7061 24.665 57.7061 24.6734 57.7144 24.6818C60.677 27.6695 62.4981 31.6223 62.8506 35.8101C63.0268 37.8831 62.8506 39.9476 62.3051 41.9702C61.5666 44.7564 60.1315 47.3581 58.1676 49.5065L57.9494 49.7499C57.9159 49.7835 57.8823 49.817 57.8571 49.859C57.7648 49.901 57.6809 49.9513 57.6053 50.0269C55.8681 51.7641 52.8301 51.7641 51.0928 50.0269C50.7152 49.6492 50.0942 49.6492 49.7165 50.0269C49.3388 50.4045 49.3388 51.0255 49.7165 51.4032C50.9502 52.6369 52.5951 53.3251 54.3491 53.3251C55.952 53.3251 57.4459 52.7292 58.6376 51.6885C58.7803 51.6382 58.9229 51.5711 59.0404 51.4536C59.1747 51.3193 59.3006 51.1766 59.4265 51.0339L59.6111 50.8241C61.1553 49.1457 62.3806 47.207 63.2618 45.1257C63.8073 48.063 62.8758 51.0675 60.7609 53.1908C58.6292 55.3225 55.5828 56.254 52.6119 55.6833C50.8411 55.3392 49.2213 54.4748 47.9289 53.1908C47.5513 52.8131 46.9302 52.8131 46.5526 53.1908C46.1749 53.5684 46.1749 54.1895 46.5526 54.5671C48.1219 56.1281 50.0858 57.1688 52.2426 57.5884C52.3014 57.5968 52.3601 57.6052 52.4272 57.6052C53.0651 57.7143 53.7113 57.7898 54.3491 57.7898C57.2445 57.7898 60.0475 56.6485 62.1372 54.5587C64.7305 51.9655 65.8635 48.2645 65.1585 44.6641C64.999 43.8668 64.6969 43.0192 64.2689 42.1212C64.5878 40.8288 64.7724 39.5196 64.8228 38.202C65.6704 39.2342 66.3586 40.384 66.8705 41.6429C67.5 43.1871 67.8357 44.832 67.8692 46.544C67.9364 50.2534 66.5265 53.7279 63.9248 56.3379C61.3064 58.948 57.8403 60.3831 54.1225 60.2907C52.5028 60.2656 50.925 59.955 49.4312 59.3676C49.3221 59.3004 49.2046 59.2501 49.0787 59.2249C47.4673 58.5367 46.0238 57.5716 44.7902 56.3379C44.4125 55.9519 43.7915 55.9603 43.4138 56.3379C43.0362 56.7156 43.0362 57.3366 43.4138 57.7143C44.8657 59.1746 46.5777 60.3075 48.4912 61.0964C50.2788 61.8266 52.1587 62.2042 54.0973 62.2378C54.1896 62.2378 54.282 62.2378 54.3743 62.2378C58.5033 62.2378 62.3806 60.6348 65.3096 57.7143C68.2972 54.7266 69.9002 50.7486 69.8247 46.5104C69.7911 44.5634 69.405 42.6751 68.6833 40.9127C67.9028 38.9992 66.7698 37.2872 65.3012 35.8353L64.7724 35.2982C64.613 33.7288 64.2689 32.1846 63.7486 30.716L67.0971 34.0645C67.0971 34.0645 67.1055 34.0645 67.1139 34.0729C68.3896 35.3569 69.4638 36.8088 70.303 38.395C71.008 39.7294 71.5451 41.2064 71.906 42.7758C72.334 44.6389 72.4599 46.5188 72.3004 48.3652C71.9312 52.5697 70.0848 56.531 67.1055 59.5103L67.1391 59.5354Z" fill="#0A4264" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_7030">
                                  <rect width="90" height="90" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        </div>
                        <div className="text-wrap w-[calc(100%-90px)] pl-[20px]">
                          <h4 className="text-[30px]  max-xl:text-[28px] max-lg-[26px] max-md:text-[24px] max-sm:text-[22px]leading-[100%] font-[600] text-[#0A4264] mb-[20px] group-hover:text-[#FF6900] transition-all duration-400">America’s Digital Ghosts: Why the lack of a financial footprint is locking millions out of the modern economy</h4>
                          <span className="text-[16px] text-[#0A4264] relative font-[600]">Read Article
                            <span className="absolute top-[calc(50%-4px)] pl-[5px] group-hover:ml-[5px] transition-all duration-400"><svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 5.5H11M11 5.5L7.25 1.75M11 5.5L7.25 9.25" stroke="#0A4264" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            </span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="item group border-[#E5EAEB] border-b-[1px] py-[30px]">
                    <Link href="#">
                      <div className="wrapper flex flex-wrap">
                        <div className="img-wrap w-[90px]">
                          <span>
                            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_1_7030)">
                                <path d="M89 45C89 69.3005 69.3005 89 45 89C20.6995 89 1 69.3005 1 45C1 20.6995 20.6995 1 45 1C69.3005 1 89 20.6995 89 45Z" stroke="#0A4264" strokeWidth="2" />
                                <path d="M73.8362 42.373C73.4418 40.6358 72.8459 38.9992 72.057 37.5138C71.1255 35.743 69.9338 34.1317 68.5155 32.7133C68.5155 32.7133 68.5071 32.7133 68.4987 32.6966L59.1831 23.381L59.0488 23.2467C59.0488 23.2467 59.0488 23.2467 59.0404 23.2467C55.7338 19.9737 51.353 17.9511 46.712 17.5567C44.6727 17.3804 42.5914 17.5315 40.5268 18.0015C38.7896 18.4043 37.1615 19.0002 35.676 19.7891C33.922 20.7206 32.3191 21.9039 30.9092 23.3139C30.9092 23.3139 30.9092 23.3139 30.9092 23.3223L21.5684 32.663C21.5684 32.663 21.5684 32.663 21.56 32.6714C21.5516 32.6798 21.5516 32.6882 21.5432 32.6966C21.5432 32.6966 21.5348 32.6966 21.5265 32.705C21.5181 32.7133 21.5097 32.7301 21.4929 32.7469C21.4845 32.7553 21.4677 32.7637 21.4593 32.7721C21.4593 32.7721 21.4593 32.7721 21.4509 32.7721C18.1695 36.0871 16.1469 40.4679 15.7525 45.1173C15.5763 47.1734 15.7273 49.2548 16.1973 51.3025C16.5917 53.0313 17.196 54.6595 17.9849 56.1449C18.908 57.8989 20.0914 59.5019 21.5097 60.9118L30.8756 70.2777L31.0099 70.412C34.3165 73.685 38.6973 75.7076 43.3383 76.102C43.3383 76.102 43.3551 76.102 43.3718 76.102C43.3886 76.102 43.4054 76.102 43.4222 76.102C43.9425 76.144 44.4713 76.1692 45 76.1692C46.5106 76.1692 48.0212 75.9929 49.5235 75.6488C51.2439 75.2544 52.872 74.6501 54.3743 73.8612C55.6919 73.1563 56.892 72.2751 58.025 71.3016C58.1592 71.2596 58.2935 71.1841 58.4026 71.075L59.1328 70.3448L67.7517 61.7175C67.8357 61.6335 67.8944 61.5412 67.9364 61.4405C68.1294 61.2643 68.3308 61.0964 68.5155 60.9118C71.8137 57.6052 73.8614 53.2244 74.2726 48.5666C74.4573 46.5104 74.3062 44.4291 73.8362 42.373ZM67.1391 59.5354C64.1598 62.5147 60.207 64.3611 55.994 64.7303C53.963 64.9066 51.8817 64.7303 49.834 64.2016C47.2407 63.5218 44.8993 62.3049 42.8599 60.5929L41.8025 59.5354L41.7521 59.4851C39.9729 57.6891 39.9897 54.7769 41.7689 52.9894C42.1466 52.6117 42.1466 51.9907 41.7689 51.613C41.3829 51.227 40.7702 51.2354 40.3926 51.613C37.9588 54.0384 37.8664 57.9157 40.0653 60.4838C40.1072 60.6348 40.1744 60.7859 40.3002 60.9034C40.7115 61.3146 41.1479 61.6923 41.5843 62.0615C43.1201 63.3624 44.8405 64.3778 46.6701 65.1499C43.7243 65.6954 40.7282 64.7723 38.6134 62.6574C36.4733 60.5173 35.5501 57.4625 36.1376 54.4748C36.4901 52.704 37.3461 51.1011 38.6134 49.8254C38.991 49.4478 38.991 48.8267 38.6134 48.4491C38.2357 48.0714 37.6147 48.0714 37.237 48.4491C35.6928 49.9933 34.6522 51.9487 34.2241 54.0888C33.5024 57.7059 34.6354 61.4237 37.237 64.0254C37.279 64.0673 37.3377 64.1009 37.3797 64.1429C39.4526 66.1402 42.1801 67.2397 45.0084 67.2397C45.7217 67.2397 46.4435 67.1725 47.1652 67.0298C47.9709 66.8704 48.8017 66.5599 49.6997 66.1402C51.0005 66.4508 52.3097 66.627 53.619 66.6774C52.5783 67.5334 51.4202 68.23 50.1697 68.7419C48.6255 69.3713 46.989 69.7154 45.2853 69.749C41.5423 69.8245 38.1098 68.4314 35.4914 65.8381C35.483 65.8297 35.4662 65.8213 35.4578 65.8129C35.4494 65.7962 35.4326 65.7878 35.4243 65.771C35.4243 65.771 35.4243 65.7542 35.4075 65.7458C32.8142 63.1274 31.4295 59.6445 31.505 55.9435C31.5386 54.307 31.8575 52.7208 32.4533 51.2354C32.4617 51.2186 32.4785 51.2186 32.4869 51.2018C32.5457 51.1011 32.5792 50.992 32.596 50.8745C33.2758 49.2967 34.2241 47.87 35.4494 46.6447C35.8271 46.2671 35.8271 45.646 35.4494 45.2684C35.0718 44.8907 34.4507 44.8907 34.0731 45.2684C32.7219 46.6195 31.6645 48.1889 30.8924 49.9261C30.8924 49.9261 30.8756 49.9261 30.8672 49.9429C30.649 50.1611 30.5567 50.4297 30.5735 50.6982C29.944 52.3515 29.5832 54.0972 29.5496 55.9099C29.4657 60.1229 31.0434 64.0925 33.9892 67.0886C33.9892 67.0886 33.9892 67.097 33.9975 67.1054C33.9975 67.1054 34.0059 67.1054 34.0143 67.1138L34.1067 67.2061H34.115C34.115 67.2061 34.1402 67.2313 34.1486 67.2397C37.0608 70.0931 40.8793 71.6624 44.9664 71.6624C45.0755 71.6624 45.1762 71.6624 45.2853 71.6624C47.224 71.6205 49.1039 71.2344 50.8663 70.5127C52.7629 69.7322 54.4582 68.5992 55.9101 67.1473C55.9101 67.1473 55.9101 67.1473 55.9101 67.1389L56.4724 66.5766C58.0585 66.4088 59.6027 66.0563 61.0882 65.5276L57.6893 68.9265C56.4136 70.1938 54.9701 71.268 53.384 72.1072C52.0328 72.8206 50.5641 73.3661 49.0031 73.7186C47.1484 74.1466 45.2685 74.2809 43.4222 74.1214C39.2344 73.7689 35.2816 71.9394 32.2939 68.9853C32.2855 68.9769 32.2687 68.9769 32.2603 68.9685C32.2435 68.9433 32.21 68.9181 32.1848 68.8929C32.1848 68.8929 32.1848 68.8762 32.1764 68.8762C29.2139 65.8885 27.3927 61.9357 27.0403 57.7478C26.864 55.7085 27.0403 53.644 27.5858 51.613C28.3159 48.8267 29.751 46.2167 31.7148 44.0683L32.2519 43.5311L32.2855 43.4976C34.0899 41.7184 37.002 41.7268 38.7812 43.5144C38.9658 43.7074 39.2176 43.7997 39.4694 43.7997C39.7212 43.7997 39.9645 43.7074 40.1576 43.5144C40.5352 43.1367 40.5352 42.5157 40.1576 42.138C37.707 39.679 33.771 39.6119 31.1945 41.8862C31.077 41.9366 30.9679 42.0037 30.8756 42.096C30.7245 42.2387 30.5902 42.3982 30.456 42.5492L30.2965 42.7339C28.7439 44.4207 27.5102 46.3846 26.629 48.4743C26.0583 45.5117 26.9899 42.4737 29.1132 40.3504C31.2616 38.202 34.3165 37.2788 37.2958 37.8663C39.0582 38.2104 40.6611 39.0664 41.9368 40.342C42.1298 40.5351 42.3732 40.6274 42.6249 40.6274C42.8767 40.6274 43.1285 40.5351 43.3131 40.342C43.6908 39.9644 43.6908 39.3433 43.3131 38.9657C41.7605 37.4215 39.8051 36.3808 37.665 35.9612C34.0479 35.2478 30.3385 36.3724 27.7368 38.9741C25.1352 41.5757 24.0022 45.2852 24.724 48.9107C24.8834 49.7163 25.1939 50.5556 25.6303 51.4536C25.3114 52.746 25.1268 54.0552 25.068 55.356C24.2204 54.3238 23.5238 53.1656 23.0119 51.9151C22.3825 50.3709 22.0468 48.7344 22.0132 47.0308C21.9377 43.3213 23.3308 39.8385 25.9325 37.2201C25.9325 37.2201 25.9576 37.1949 25.9744 37.1781C25.9744 37.1781 25.9744 37.1781 25.9828 37.1697C28.6012 34.5681 32.0841 33.1498 35.7935 33.2505C37.3377 33.284 38.84 33.5778 40.2583 34.1065C40.3002 34.1484 40.3254 34.2072 40.3674 34.2408C40.5604 34.3834 40.7702 34.4506 40.98 34.4506C41.0052 34.4506 41.0304 34.4338 41.0555 34.4338C42.5578 35.1052 43.9174 36.0283 45.0839 37.1949C45.2685 37.3879 45.5203 37.4802 45.7721 37.4802C46.0238 37.4802 46.2672 37.3879 46.4602 37.1949C46.8379 36.8172 46.8379 36.1962 46.4602 35.8185C45.0839 34.4338 43.4726 33.3512 41.685 32.5791C41.5171 32.4364 41.3241 32.3609 41.1227 32.3441C39.4358 31.6895 37.665 31.3286 35.8187 31.295C31.6561 31.2195 27.6781 32.7805 24.6904 35.701C24.6316 35.7346 24.5981 35.7598 24.5393 35.8437L24.5141 35.8689C21.5516 38.865 19.9655 42.8346 20.0494 47.0643C20.0914 49.003 20.4774 50.8829 21.1992 52.6369C21.9796 54.542 23.1126 56.2456 24.5645 57.6975L25.1352 58.2682C25.2946 59.8376 25.6387 61.3818 26.1591 62.8588L22.7769 59.4767C21.5013 58.201 20.4271 56.7575 19.5962 55.1798C18.8829 53.837 18.3373 52.3683 17.9849 50.799C17.5569 48.9442 17.4226 47.0727 17.582 45.218C17.9345 41.0218 19.7641 37.069 22.7266 34.0729L22.8105 33.989C25.7982 31.0265 29.751 29.1969 33.9472 28.8361C36.0033 28.6598 38.0846 28.8361 40.1072 29.3816C42.6753 30.0614 45 31.2699 47.0309 32.9735L48.1219 34.0645H48.1303C48.1303 34.0645 48.1303 34.0729 48.1387 34.0729L48.1723 34.1065C49.9431 35.9025 49.9263 38.8062 48.1471 40.5938C47.7695 40.9715 47.7695 41.5925 48.1471 41.9702C48.3401 42.1632 48.5835 42.2555 48.8353 42.2555C49.0871 42.2555 49.3304 42.1632 49.5235 41.9702C51.9573 39.528 52.0412 35.6255 49.8172 33.0574C49.7752 32.9064 49.6997 32.7553 49.5822 32.6378C49.1626 32.2266 48.743 31.8573 48.3066 31.4881C46.7792 30.204 45.0839 29.1969 43.2711 28.4248C46.2169 27.8877 49.1962 28.8109 51.3111 30.9174C53.4595 33.0658 54.3827 36.1291 53.7868 39.1C53.4427 40.8708 52.5867 42.4737 51.3111 43.7493C50.9334 44.127 50.9334 44.748 51.3111 45.1257C51.4957 45.3187 51.7475 45.411 51.9992 45.411C52.251 45.411 52.4944 45.3187 52.6874 45.1257C54.2316 43.5815 55.2723 41.6345 55.6919 39.4944C55.6919 39.4944 55.6919 39.4944 55.6919 39.486C56.4136 35.8773 55.289 32.1594 52.6874 29.5494C50.0858 26.9478 46.3595 25.8232 42.7592 26.5449C41.9703 26.7044 41.1395 27.0065 40.2667 27.4261C38.9742 27.1072 37.665 26.9226 36.3474 26.8639C37.3713 26.0246 38.5043 25.3448 39.7463 24.8329C41.2905 24.2035 42.9354 23.8594 44.6307 23.8258C48.2898 23.7335 51.8146 25.1434 54.433 27.7367C54.4414 27.7367 54.4498 27.7451 54.4666 27.7534C54.4834 27.7702 54.5002 27.787 54.5169 27.8038C54.5169 27.8038 54.5169 27.8206 54.5337 27.8206C57.127 30.4474 58.5117 33.9219 58.4362 37.6145C58.4026 39.1587 58.1089 40.6525 57.5886 42.0541C57.5634 42.0709 57.5298 42.0876 57.5046 42.1044C57.3032 42.331 57.2193 42.5996 57.2445 42.8681C56.5731 44.3788 55.6499 45.7383 54.475 46.9133C54.0973 47.2909 54.0973 47.912 54.475 48.2896C54.668 48.4827 54.9114 48.575 55.1632 48.575C55.4149 48.575 55.6667 48.4827 55.8513 48.2896C57.2109 46.9301 58.2767 45.3523 59.0488 43.5983C59.0572 43.5899 59.0656 43.5815 59.0824 43.5731C59.267 43.3717 59.3594 43.1199 59.351 42.8681C59.9888 41.2148 60.3413 39.4692 60.3748 37.6481C60.4588 33.4183 58.8726 29.4403 55.9017 26.4442C55.9017 26.4442 55.9017 26.4442 55.8933 26.4358L55.7926 26.3435C55.7842 26.3351 55.7758 26.3183 55.759 26.31C52.7797 23.3894 48.8437 21.8368 44.6391 21.8956H44.6223C42.6921 21.9375 40.8122 22.3236 39.0414 23.0453C37.1447 23.8258 35.4494 24.9588 33.9975 26.4107C33.9975 26.4107 33.9975 26.4107 33.9975 26.4191L33.4604 26.9478C31.8827 27.1156 30.3385 27.4597 28.8614 27.98L32.2184 24.6231C33.4856 23.3474 34.9291 22.2816 36.5153 21.4424C37.8497 20.7374 39.3183 20.1919 40.8877 19.831C42.7508 19.403 44.6223 19.2687 46.4686 19.4282C50.6564 19.7807 54.6093 21.6018 57.597 24.5643C57.6053 24.5643 57.6137 24.5727 57.6305 24.5811C57.6473 24.6063 57.6809 24.6399 57.7061 24.665C57.7061 24.665 57.7061 24.6734 57.7144 24.6818C60.677 27.6695 62.4981 31.6223 62.8506 35.8101C63.0268 37.8831 62.8506 39.9476 62.3051 41.9702C61.5666 44.7564 60.1315 47.3581 58.1676 49.5065L57.9494 49.7499C57.9159 49.7835 57.8823 49.817 57.8571 49.859C57.7648 49.901 57.6809 49.9513 57.6053 50.0269C55.8681 51.7641 52.8301 51.7641 51.0928 50.0269C50.7152 49.6492 50.0942 49.6492 49.7165 50.0269C49.3388 50.4045 49.3388 51.0255 49.7165 51.4032C50.9502 52.6369 52.5951 53.3251 54.3491 53.3251C55.952 53.3251 57.4459 52.7292 58.6376 51.6885C58.7803 51.6382 58.9229 51.5711 59.0404 51.4536C59.1747 51.3193 59.3006 51.1766 59.4265 51.0339L59.6111 50.8241C61.1553 49.1457 62.3806 47.207 63.2618 45.1257C63.8073 48.063 62.8758 51.0675 60.7609 53.1908C58.6292 55.3225 55.5828 56.254 52.6119 55.6833C50.8411 55.3392 49.2213 54.4748 47.9289 53.1908C47.5513 52.8131 46.9302 52.8131 46.5526 53.1908C46.1749 53.5684 46.1749 54.1895 46.5526 54.5671C48.1219 56.1281 50.0858 57.1688 52.2426 57.5884C52.3014 57.5968 52.3601 57.6052 52.4272 57.6052C53.0651 57.7143 53.7113 57.7898 54.3491 57.7898C57.2445 57.7898 60.0475 56.6485 62.1372 54.5587C64.7305 51.9655 65.8635 48.2645 65.1585 44.6641C64.999 43.8668 64.6969 43.0192 64.2689 42.1212C64.5878 40.8288 64.7724 39.5196 64.8228 38.202C65.6704 39.2342 66.3586 40.384 66.8705 41.6429C67.5 43.1871 67.8357 44.832 67.8692 46.544C67.9364 50.2534 66.5265 53.7279 63.9248 56.3379C61.3064 58.948 57.8403 60.3831 54.1225 60.2907C52.5028 60.2656 50.925 59.955 49.4312 59.3676C49.3221 59.3004 49.2046 59.2501 49.0787 59.2249C47.4673 58.5367 46.0238 57.5716 44.7902 56.3379C44.4125 55.9519 43.7915 55.9603 43.4138 56.3379C43.0362 56.7156 43.0362 57.3366 43.4138 57.7143C44.8657 59.1746 46.5777 60.3075 48.4912 61.0964C50.2788 61.8266 52.1587 62.2042 54.0973 62.2378C54.1896 62.2378 54.282 62.2378 54.3743 62.2378C58.5033 62.2378 62.3806 60.6348 65.3096 57.7143C68.2972 54.7266 69.9002 50.7486 69.8247 46.5104C69.7911 44.5634 69.405 42.6751 68.6833 40.9127C67.9028 38.9992 66.7698 37.2872 65.3012 35.8353L64.7724 35.2982C64.613 33.7288 64.2689 32.1846 63.7486 30.716L67.0971 34.0645C67.0971 34.0645 67.1055 34.0645 67.1139 34.0729C68.3896 35.3569 69.4638 36.8088 70.303 38.395C71.008 39.7294 71.5451 41.2064 71.906 42.7758C72.334 44.6389 72.4599 46.5188 72.3004 48.3652C71.9312 52.5697 70.0848 56.531 67.1055 59.5103L67.1391 59.5354Z" fill="#0A4264" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_7030">
                                  <rect width="90" height="90" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        </div>
                        <div className="text-wrap w-[calc(100%-90px)] pl-[20px]">
                          <h4 className="text-[30px]  max-xl:text-[28px] max-lg-[26px] max-md:text-[24px] max-sm:text-[22px]leading-[100%] font-[600] text-[#0A4264] mb-[20px] group-hover:text-[#FF6900] transition-all duration-400">
                            Example Post with Image</h4>
                          <span className="text-[16px] text-[#0A4264] relative font-[600]">Read Article
                            <span className="absolute top-[calc(50%-4px)] pl-[5px] group-hover:ml-[5px] transition-all duration-400"><svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 5.5H11M11 5.5L7.25 1.75M11 5.5L7.25 9.25" stroke="#0A4264" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            </span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer-cta bg-[#62829D] w-full h-full py-[50px] z-10 relative before:bg-[#0A4264] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[-1] before:rounded-b-[100px]">
          <div className="container  ">
            <div className="wrapper flex flex-wrap align-middle">
              <div className="text-wrap">
                <h3 className="text-white text-[50px] max-2xl:text-[46px] max-xl:text-[42px] max-lg-[38px] max-md:text-[34px] max-sm:text-[30px]">Let us prove it.</h3>
              </div>
              <div className="btn-wrap flex flex-wrap items-center pl-[50px]">
                <div className="btn-transparent ml-[10px]">
                  <Link className="text-white  bg-transparent text-[16px] max-2xl:text-[14px] font-[600] inline-block transition-all ease-in-out duration-300 py-[15px] max-2xl:py-[12px] px-[20px] max-2xl:px-[15px] rounded-[24.5px] border-[1.5px] ml-[10px]  hover:text-[#FF6900] border-white hover:border-[#d76826]" href="#"><span>Talk to an Expert</span></Link>
                </div>
                <div className="btn-transparent ml-[10px]">
                  <Link className="text-[#0A4264] bg-[#FF6900] text-[16px] max-2xl:text-[14px] font-[600] inline-block transition-all ease-in-out duration-300 py-[15px] max-2xl:py-[12px] px-[20px] max-2xl:px-[15px] rounded-[24.5px] border-[1.5px] ml-[10px] hover:bg-[#d76826] border-[#FF6900] hover:border-[#d76826]" href="#"><span>Get a Demo</span></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer bg-[#62829D] py-[50px]">
          <div className="container">
            <div className="wrapper flex flex-wrap">
              <div className="col-left w-1/4 pr-[25px]">
                <div className="logo mb-[50px]">
                  <Link href="#">
                    <svg width="176" height="69" viewBox="0 0 176 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1_7174)">
                        <path d="M55.5938 42.0284L58.5969 38.4305C60.6769 40.1432 62.8554 41.2275 65.4892 41.2275C67.5692 41.2275 68.8246 40.402 68.8246 39.0466V38.985C68.8246 37.7036 68.0369 37.0382 64.1723 36.0525C59.52 34.8697 56.5169 33.5759 56.5169 29.0047V28.9431C56.5169 24.7538 59.8769 21.9814 64.6031 21.9814C67.9754 21.9814 70.8431 23.0411 73.1815 24.9139L70.5354 28.7336C68.4923 27.3166 66.4738 26.4541 64.5292 26.4541C62.5846 26.4541 61.5631 27.3413 61.5631 28.4625V28.5241C61.5631 30.0397 62.5477 30.5325 66.5477 31.5552C71.2369 32.775 73.8708 34.4631 73.8708 38.4798V38.5414C73.8708 43.125 70.3754 45.7002 65.3908 45.7002C61.8954 45.7002 58.3631 44.4804 55.5938 42.0038" fill="white" />
                        <path d="M90.3508 36.6562V36.5946C90.3508 33.9948 88.4677 31.7153 85.6985 31.7153C82.9292 31.7153 81.1077 33.9209 81.1077 36.533V36.5946C81.1077 39.1944 82.9908 41.4739 85.76 41.4739C88.5292 41.4739 90.3508 39.2684 90.3508 36.6562ZM76.16 36.6562V36.5946C76.16 31.5182 80.2585 27.4028 85.76 27.4028C91.2615 27.4028 95.2985 31.4566 95.2985 36.533V36.5946C95.2985 41.671 91.2 45.7864 85.6985 45.7864C80.1969 45.7864 76.16 41.7327 76.16 36.6562Z" fill="white" />
                        <path d="M97.4404 36.6562V36.5946C97.4404 31.5552 101.305 27.4028 106.72 27.4028C110.056 27.4028 112.136 28.5241 113.785 30.3723L110.72 33.6744C109.6 32.4916 108.48 31.7277 106.696 31.7277C104.185 31.7277 102.4 33.9332 102.4 36.5453V36.6069C102.4 39.3053 104.148 41.4862 106.893 41.4862C108.579 41.4862 109.736 40.7593 110.954 39.601L113.896 42.5705C112.185 44.4434 110.204 45.7987 106.671 45.7987C101.354 45.7987 97.4651 41.708 97.4651 36.6685" fill="white" />
                        <path d="M116.381 39.1696V27.7354H121.403V37.5925C121.403 39.9705 122.523 41.1904 124.443 41.1904C126.363 41.1904 127.581 39.9705 127.581 37.5925V27.7354H132.603V45.4043H127.581V42.903C126.424 44.3816 124.935 45.737 122.399 45.737C118.609 45.737 116.393 43.2357 116.393 39.182" fill="white" />
                        <path d="M136.455 27.7232H141.477V31.2841C142.498 28.8445 144.147 27.2673 147.114 27.3905V32.6271H146.855C143.52 32.6271 141.477 34.6355 141.477 38.8618V45.3921H136.455V27.7232Z" fill="white" />
                        <path d="M160.739 35.1776C160.443 32.9352 159.126 31.4196 157.01 31.4196C154.893 31.4196 153.576 32.8982 153.182 35.1776H160.739ZM148.259 36.6562V36.5946C148.259 31.5552 151.853 27.4028 157.01 27.4028C162.917 27.4028 165.625 31.9864 165.625 37.0012C165.625 37.3955 165.588 37.8637 165.563 38.3196H153.256C153.748 40.5991 155.336 41.7819 157.576 41.7819C159.262 41.7819 160.48 41.2521 161.871 39.9707L164.739 42.5089C163.09 44.5543 160.714 45.811 157.514 45.811C152.197 45.811 148.271 42.09 148.271 36.6809" fill="white" />
                        <path d="M171.114 42.3608V42.9646H170.178V45.7492H169.489V42.9646H168.554V42.3608H171.114Z" fill="white" />
                        <path d="M175.445 45.7492H174.744L174.498 43.6423L173.673 45.3673H173.131L172.294 43.6423L172.048 45.7492H171.347L171.765 42.3608H172.344L173.39 44.591L174.424 42.3608H175.014L175.433 45.7492H175.445Z" fill="white" />
                        <path d="M22.068 0.640625L43.4711 22.006L22.068 43.2974L0.664963 22.006L22.068 0.640625Z" fill="white" />
                        <path d="M25.0222 44.5051L34.9422 34.6973L44.813 44.5051H25.0222Z" fill="white" />
                        <path d="M10.733 36.4468L21.6007 47.1911H42.6591L21.7976 68.0143L0.394531 46.7228L10.733 36.4468Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_7174">
                          <rect width="176" height="69" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                  </Link>
                </div>
                <p className="text-[16px] text-white font-[400] mb-[30px]">Socure is the leading platform for digital identity verification and trust. Its predictive analytics platform applies artificial intelligence and machine learning technology with trusted online/offline data intelligence from email, phone address, IP, device, velocity, and the broader internet to verify identities in real time.</p>
                <div className="btn-transparent">
                  <Link className="text-[#0A4264] bg-[#FF6900] text-[16px] max-2xl:text-[14px] font-[600] inline-block transition-all ease-in-out duration-300 py-[15px] max-2xl:py-[12px] px-[20px] max-2xl:px-[15px] rounded-[24.5px] border-[1.5px]  hover:bg-[#d76826] border-[#FF6900] hover:border-[#d76826]" href="#"><span>Contact us</span></Link>
                </div>
                <div className="social-icon flex flex-wrap mt-[30px]">
                  <Link href="#" className="mr-[10px] group"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18.375" cy="19.125" r="16.125" fill="white" className="group-hover:fill-[#FF6900] transition-all ease-in-out duration-300" />
                    <path d="M13.6351 27.74H10.0096V16.2472H13.6351V27.74ZM11.8198 14.6545C11.4085 14.6522 11.0072 14.5284 10.6664 14.2987C10.3256 14.0689 10.0606 13.7436 9.90494 13.3637C9.74924 12.9839 9.70979 12.5665 9.79156 12.1643C9.87333 11.762 10.0727 11.393 10.3644 11.1037C10.6561 10.8144 11.0272 10.6179 11.4308 10.5389C11.8343 10.4598 12.2523 10.5019 12.6319 10.6597C13.0116 10.8175 13.3358 11.084 13.5639 11.4256C13.7919 11.7672 13.9134 12.1685 13.913 12.5789C13.9169 12.8537 13.8653 13.1265 13.7613 13.3809C13.6573 13.6354 13.5031 13.8663 13.3077 14.06C13.1124 14.2537 12.88 14.4062 12.6244 14.5083C12.3687 14.6104 12.0951 14.6602 11.8198 14.6545ZM26.9983 27.75H23.3745V21.4713C23.3745 19.6197 22.5858 19.0481 21.5676 19.0481C20.4925 19.0481 19.4375 19.857 19.4375 21.5181V27.75H15.812V16.2555H19.2985V17.8482H19.3454C19.6954 17.1413 20.9212 15.933 22.7917 15.933C24.8147 15.933 27 17.1313 27 20.6408L26.9983 27.75Z" fill="#0A4264" />
                  </svg>
                  </Link>
                  <Link href="#" className="mr-[20px] group"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18.375" cy="19.125" r="16.125" fill="white" className="group-hover:fill-[#FF6900] transition-all ease-in-out duration-300" />
                    <path d="M23.9261 11.25H26.6862L20.6561 17.9215L27.75 27H22.1956L17.8451 21.494L12.8672 27H10.1054L16.5552 19.864L9.75 11.25H15.4455L19.3779 16.2827L23.9261 11.25ZM22.9573 25.4008H24.4868L14.6144 12.7652H12.9732L22.9573 25.4008Z" fill="#0A4264" />
                  </svg>
                  </Link>
                  <Link href="#" className="mr-[20px] group"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18.375" cy="19.125" r="16.125" fill="white" className="group-hover:fill-[#FF6900] transition-all ease-in-out duration-300" />
                    <path d="M23.8654 24.9794L24.5651 20.8034H20.1884V18.0947C20.1884 16.9522 20.7999 15.8374 22.7601 15.8374H24.75V12.2822C24.75 12.2822 22.9441 12 21.2175 12C17.6129 12 15.2568 14 15.2568 17.6206V20.8034H11.25V24.9794H15.2568V35.0745C16.8907 35.3085 18.5545 35.3085 20.1884 35.0745V24.9794H23.8654Z" fill="#0A4264" />
                  </svg>
                  </Link>
                  <Link href="#" className="group">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="18.375" cy="18.375" r="16.125" fill="white" className="group-hover:fill-[#FF6900] transition-all ease-in-out duration-300" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M26.6759 12.9727C26.9511 13.2552 27.1488 13.6066 27.2491 13.9916C27.62 15.4126 27.62 18.376 27.62 18.376C27.62 18.376 27.62 21.3393 27.2491 22.7603C27.1488 23.1453 26.9511 23.4967 26.6759 23.7793C26.4007 24.0619 26.0575 24.2658 25.6808 24.3705C24.2939 24.751 18.7504 24.751 18.7504 24.751C18.7504 24.751 13.2069 24.751 11.8201 24.3705C11.4433 24.2658 11.1002 24.0619 10.8249 23.7793C10.5497 23.4967 10.3521 23.1453 10.2518 22.7603C9.88086 21.3393 9.88086 18.376 9.88086 18.376C9.88086 18.376 9.88086 15.4126 10.2518 13.9916C10.3521 13.6066 10.5497 13.2552 10.8249 12.9727C11.1002 12.6901 11.4433 12.4862 11.8201 12.3814C13.2069 12.001 18.7504 12.001 18.7504 12.001C18.7504 12.001 24.2939 12.001 25.6808 12.3814C26.0575 12.4862 26.4007 12.6901 26.6759 12.9727ZM21.5222 18.3764L16.533 15.8818V20.871L21.5222 18.3764Z" fill="#0A4264" />
                    </svg>

                  </Link>
                </div>
              </div>
              <div className="col-right w-3/4 flex flex-wrap">
                <div className="column w-[calc(25%-10px)] mx-[5px]">
                  <h5 className="text-[24px] text-white leading-[140%] capitalize border-b-[1px] border-white pb-[5px] mx-[10px]">Solutions</h5>
                  <ul className="">
                    <li className="mb-[10px]">
                      <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Use Cases</h5>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">New Account</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Compliance</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Bank Account Verification</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Call Center</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Account Takeover Prevention</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Login/ Authentication</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Payment fraud protection</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Portfolio screening</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Monitoring and alerts</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Industries</h5>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Financial Services</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">eCommerce & Marketplaces</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Social & Dating</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Gig Economy</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Online Gaming</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Crypto</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Workforce</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Telco</p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="column w-[calc(25%-10px)] mx-[5px]">
                  <h5 className="text-[24px] text-white leading-[140%] capitalize border-b-[1px] border-white pb-[5px] mx-[10px]">Products</h5>
                  <ul className="">
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Orchestration</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Fraud & Risk </h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Sigma Synthetic Fraud</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Sigma Identity Fraud</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Bank Account Verification</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Email RiskScore</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Address RiskScore</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Digital Intelligence</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Alert List</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Portfolio scrub</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Phone RiskScore</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Sigma First-Party Fraud</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Compliance </h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Verify/Verify+</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">eCBSV</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline-block hover:border-b-[1px] hoover:border-white">Global Watchlist Screening with Monitoring</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Control center</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Portfolio scrub</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Deceased check</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Case management</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">ID + Biometric Verification</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Predictive DocV </p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#" className="">
                        <p className="text-[16px] text-white leading-[150%] font-[400] mx-[10px] inline hover:border-b-[1px] hoover:border-white">Selfie reverification</p>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Account Intelligence</h5>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="column w-[calc(25%-10px)] mx-[5px]">
                  <h5 className="text-[24px] text-white leading-[140%] capitalize border-b-[1px] border-white pb-[5px] mx-[10px]">Public Sector</h5>
                  <ul className="">
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Federal</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">State</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Local</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Higher Education</h5>
                      </Link>
                    </li>
                  </ul>
                  <h5 className="text-[24px] text-white leading-[140%] capitalize border-b-[1px] border-white pb-[5px] mx-[10px]">Innovation</h5>
                  <ul>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Socure ID+ Platform</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Identity Graph</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">AI</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Security & Governance</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Use Cases</h5>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="column w-[calc(25%-10px)] mx-[5px]">
                  <h5 className="text-[24px] text-white leading-[140%] capitalize border-b-[1px] border-white pb-[5px] mx-[10px]">Resources</h5>
                  <ul className="">
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px] hover:underline">Blogs</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px] hover:underline">Case Studies</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px] hover:underline">Glossary</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px] hover:underline">Reports</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px] hover:underline">Webinars</h5>
                      </Link>
                    </li>
                  </ul>
                  <h5 className="text-[24px] text-white leading-[140%] capitalize border-b-[1px] border-white pb-[5px] mx-[10px] hover:underline">Company</h5>
                  <ul>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Customers</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Partners</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">News & Press</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Events</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Use Cases</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Careers</h5>
                      </Link>
                    </li>
                    <li className="mb-[10px]">
                      <Link href="#">
                        <h5 className="text-[20px] text-white leading-[150%] my-[10px] font-[600] mx-[10px]">Contact Us</h5>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer-nav bg-[#0A4264] py-[20px]">
          <div className="container">
            <div className="wrapper flex flex-wrap align-middle justify-between">
              <div className="col-left">
                <p className="text-white text-[13px] leading-[130%] font-[400]">© Copyright 2024 Socure. All rights reserved.</p>
              </div>
              <div className="col-mid">
                <p className="text-white text-[13px] leading-[130%] font-[400]">885 Tahoe Blvd., Suite 1, Incline Village, Nevada 89451, US</p>
              </div>
              <div className="col-right">
                <ul className="flex flex-wrap align-middle">
                  <li className="mr-[10px]"><Link href="" className="text-white text-[13px] leading-[130%] font-[400] hover:underline border-r-[1px] border-white pr-[10px]">Do Not Share My Personal Information</Link></li>
                  <li className="mr-[10px]"><Link href="" className="text-white text-[13px] leading-[130%] font-[400] hover:underline border-r-[1px] border-white pr-[10px]">Privacy</Link></li>
                  <li className="mr-[10px]"><Link href="" className="text-white text-[13px] leading-[130%] font-[400] hover:underline border-r-[1px] border-white pr-[10px]">Terms</Link></li>
                  <li><Link href="" className="text-white text-[13px] leading-[130%] font-[400] hover:underline">Code of Conduct</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


