'use client'

import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const logo = "/assets/images/logo.png";
    const iconCountry = "/assets/images/icon-country-vn.png";
    const arrowDown = "/assets/images/arrow-down.png";
    const arrowUpRight = "/assets/images/arrow-up-right.png";

    return (
        <header className="w-[70%] m-auto bg-white text-sm shadow-md py-[12] px-[36] h-[80] rounded-[40] flex justify-evenly items-center">
            <Link href="/" className="cursor-pointer">
                <Image src={logo} height={56} width={134} alt="Logo" />
            </Link>
            <nav className="space-x-4 flex items-center">
                <a href="#" className="text-gray-700 hover:text-green-600">Về Chúng Tôi</a>
                <a href="#" className="text-gray-700 hover:text-green-600 flex justify-between items-center gap-x-[8]">
                    Giải Pháp
                    <Image src={arrowDown} height={14} width={14} alt="Arrow" />
                </a>
                <a href="#" className="text-gray-700 hover:text-green-600 flex justify-between items-center gap-x-[8]">
                    Tài Nguyên
                    <Image src={arrowDown} height={14} width={14} alt="Arrow" />
                </a>
                <a href="#" className="text-gray-700 hover:text-green-600">Liên Hệ</a>
            </nav>
            <div className="flex justify-between items-center gap-x-[8] cursor-pointer">
                <div className="flex justify-between items-center cursor-pointer gap-x-[4] px-[12] py-[8] bg-[#09090B0D] border-[#09090B1A] text-[#25272A] rounded-[40] hover:opacity-90">
                    <Image className="mr-2" src={iconCountry} height={14} width={14} alt="Arrow" />
                    <span>VI</span>
                    <Image src={arrowDown} height={14} width={14} alt="Arrow" />
                    {/* <div className="w-full md:w-[300px]">
                        <select className="w-full px-4 py-2 border rounded-lg">
                            <option value="">Tất cả</option>
                            <option value="website">Thiết kế Website</option>
                            <option value="app">Thiết kế App Mobile</option>
                            <option value="management">Quản lý sản xuất</option>
                        </select>
                    </div> */}
                </div>
                <div className="flex justify-between items-center cursor-pointer gap-x-[12] px-[12] py-[8] bg-[#1AD598] text-[#052B1E] rounded-[40] hover:opacity-90">
                    <span>Trở Thành Khách Hàng</span>
                    <div className="h-[22] w-[22] bg-black rounded-full flex justify-center items-center">
                        <Image src={arrowUpRight} height={14} width={14} alt="Arrow" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;