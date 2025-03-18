'use client'

import { ARROW_DOWN, ARROW_UP_RIGHT, ICON_COUNTRY, LOGO } from "@/common/constants";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full max-w-[1200px] m-auto bg-white text-sm shadow-md py-4 px-8 h-[80] rounded-[40] flex justify-between items-center">
            <Link href="/" className="cursor-pointer">
                <Image src={LOGO} height={56} width={134} alt="Logo" />
            </Link>
            <nav className="space-x-6 flex items-center">
                <a href="#" className="text-gray-700 hover:text-green-600">Về Chúng Tôi</a>
                <a href="#" className="text-gray-700 hover:text-green-600 flex justify-between items-center gap-x-[8]">
                    Giải Pháp
                    <Image src={ARROW_DOWN} height={14} width={14} alt="Arrow" />
                </a>
                <a href="#" className="text-gray-700 hover:text-green-600 flex justify-between items-center gap-x-[8]">
                    Tài Nguyên
                    <Image src={ARROW_DOWN} height={14} width={14} alt="Arrow" />
                </a>
                <a href="#" className="text-gray-700 hover:text-green-600">Liên Hệ</a>
            </nav>
            <div className="flex justify-between items-center gap-x-[8] cursor-pointer">
                <div className="flex justify-between items-center cursor-pointer gap-x-[4] px-[12] py-[8] bg-[#09090B0D] border-[#09090B1A] text-[#25272A] rounded-[40] hover:opacity-90">
                    <Image className="mr-2" src={ICON_COUNTRY} height={14} width={14} alt="Arrow" />
                    <span>VI</span>
                    <Image src={ARROW_DOWN} height={14} width={14} alt="Arrow" />
                </div>
                <div className="flex justify-between items-center cursor-pointer gap-x-[12] px-[12] py-[8] bg-[#1AD598] text-[#052B1E] rounded-[40] hover:opacity-90">
                    <span>Trở Thành Khách Hàng</span>
                    <div className="h-[22] w-[22] bg-black rounded-full flex justify-center items-center">
                        <Image src={ARROW_UP_RIGHT} height={14} width={14} alt="Arrow" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;