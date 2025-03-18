'use client'

import PostCard from "@/app/components/PostCard/postCard";
import { ARROW_UP_RIGHT, AVATAR, BANNER_1, BANNER_3, BANNER_5S_1, BANNER_5S_2, BANNER_5S_3, FMRP_BETA_LOGO, ICON_CALENDAR, ICON_CLOCK, ICON_MARK } from "@/common/constants";
import { blogPosts, listReaction, socials } from "@/common/data";
import { Reaction, TableContent } from "@/common/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BlogDetail = () => {
    const tableOfContents: TableContent[] = [
        { id: "intro", title: "1. Quy trình 5S là gì?" },
        { id: "benefits", title: "2. Tại sao doanh nghiệp cần quy trình 5S?" },
        { id: "steps", title: "3. Quy trình 5S gồm các bước" },
        { id: "implementation", title: "4. Các bước thực hiện quy trình 5S" },
        { id: "success", title: "5. Các yếu tố tạo nên thành công quy trình 5S" },
    ];

    const [reactions, setReactions] = useState<Reaction[]>(listReaction);
    const handleReaction = (selectedId: string) => {
        setReactions(prev => prev.map(reaction => ({
            ...reaction,
            isSelected: reaction.id === selectedId ? !reaction.isSelected : reaction.isSelected,
            count: reaction.id === selectedId
                ? (reaction.isSelected ? reaction.count - 1 : reaction.count + 1)
                : reaction.count
        })));
    };

    return (
        <div className="mx-auto px-4 md:px-[100px] xl:px-[240px] py-12">
            <div className="mb-12 text-sm md:text-base">
                <Link href="/" className="hover:text-green-600">Trang chủ</Link>
                <span className="text-[#33404A] mx-2">{'>'}</span>
                <Link href="#" className="hover:text-green-600">Tài nguyên</Link>
                <span className="text-[#33404A] mx-2">{'>'}</span>
                <Link href="/blog" className="hover:text-green-600">Blog</Link>
                <span className="text-[#33404A] mx-2">{'>'}</span>
                <span className="font-semibold">Quy trình 5S là gì?</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
                <div className="flex-1">
                    <span className="text-xs md:text-sm text-[#0F4F9E] w-fit bg-[#E2F0FE] px-2 py-1 rounded-[8px]">
                        Quản Lý Sản Xuất
                    </span>
                    <h1 className="text-[20px] md:text-[28px] lg:text-[36px] font-extrabold mb-4 text-[#17181A]">
                        Quy Trình 5S Là Gì? Cách Ứng Dụng Hiệu Quả Nền Móng BOM
                    </h1>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
                        <div className="flex items-center gap-4 mb-6 text-sm md:text-base text-[#33404A]">
                            <div className="flex justify-center items-center w-[48px] h-[48px] rounded-full bg-white">
                                <Image src={AVATAR} alt="avatar" width={32} height={32} sizes="auto" />
                            </div>
                            <div className="flex items-start flex-col">
                                <span className="text-sm text-[#667F93] font-medium">Tác giả</span>
                                <span className="text-base text-[#33404A] font-bold">FOSO Creator</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm md:text-base text-[#33404A]">
                            <div className="flex justify-between items-center gap-2">
                                <Image src={ICON_CALENDAR} alt="Calendar" height={18} width={18} sizes="auto" />
                                <span className="text-[#667F93] text-base">Cập nhật vào: 17/11/2022</span>
                            </div>
                            <span className="text-[#D9E1E7]">|</span>
                            <div className="flex justify-between items-center gap-2">
                                <Image src={ICON_CLOCK} alt="Clock" height={18} width={18} sizes="auto" />
                                <span className="text-[#667F93] text-base">10 phút đọc</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-8 rounded-lg overflow-hidden">
                        <Image
                            src={BANNER_5S_1}
                            alt="5S Process"
                            fill
                            className="object-cover"
                            sizes="auto"
                        />
                    </div>
                    <div className="prose max-w-none">
                        <blockquote className="bg-[#F5F5F5] p-4 md:p-6 border-l-4 border-[#54ABB1] mb-8 italic text-[#33404A]">
                            5S là một phương pháp quản lý và tổ chức nơi làm việc có nguồn gốc từ Nhật Bản. Phương pháp này giúp cải thiện hiệu quả, năng suất và an toàn trong môi trường làm việc thông qua việc duy trì một không gian làm việc ngăn nắp, sạch sẽ và có tổ chức.
                        </blockquote>
                        <div id="intro" className="scroll-mt-24">
                            <h2 className="text-[24px] font-bold mb-4 text-[#17181A]">1. Quy trình 5S là gì?</h2>
                            <p className="text-[#33404A] leading-relaxed mb-6">
                                5S là một phương pháp quản lý và tổ chức nơi làm việc được phát triển tại Nhật Bản. Tên gọi "5S" bắt nguồn từ 5 từ tiếng Nhật bắt đầu bằng chữ "S": Seiri, Seiton, Seiso, Seiketsu và Shitsuke.
                            </p>
                        </div>
                        <div id="benefits" className="scroll-mt-24">
                            <h2 className="text-[24px] font-bold mb-4 text-[#17181A]">2. Tại sao doanh nghiệp cần quy trình 5S?</h2>
                            <ul className="list-disc pl-6 text-[#33404A] space-y-3 mb-6">
                                <li>Tăng năng suất và hiệu quả làm việc</li>
                                <li>Giảm thiểu lãng phí thời gian và nguồn lực</li>
                                <li>Cải thiện môi trường làm việc</li>
                                <li>Nâng cao tinh thần làm việc của nhân viên</li>
                            </ul>
                        </div>
                        <div id="steps" className="scroll-mt-24 hidden md:block">
                            <h2 className="text-[24px] font-bold mb-4 text-[#17181A]">3. Quy trình 5S gồm các bước</h2>
                            <div className="relative w-full h-[500px] my-8">
                                <Image
                                    src={BANNER_5S_2}
                                    alt="5S Steps"
                                    fill
                                    className="object-contain"
                                    sizes="auto"
                                />
                            </div>
                        </div>
                        <div id="implementation" className="scroll-mt-24 hidden md:block">
                            <h2 className="text-[24px] font-bold mb-4 text-[#17181A]">4. Các bước thực hiện quy trình 5S</h2>
                            <div className="relative w-full h-[500px] my-8">
                                <Image
                                    src={BANNER_5S_3}
                                    alt="5S Implementation"
                                    fill
                                    className="object-contain"
                                    sizes="auto"
                                />
                            </div>
                        </div>
                        <div id="success" className="scroll-mt-24">
                            <h2 className="text-[24px] font-bold mb-4 text-[#17181A]">5. Các yếu tố tạo nên thành công quy trình 5S</h2>
                            <div className="bg-[#F5F5F5] p-6 rounded-lg mb-8">
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-[#54ABB1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-[#33404A]">Lãnh đạo cam kết</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-[#54ABB1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-[#33404A]">Kế hoạch thực hiện rõ ràng</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-6 h-6 text-[#54ABB1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-[#33404A]">Sự tự nguyện tham gia của mọi người</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-12 mb-8">
                            <div className="text-center">
                                <h3 className="text-[20px] font-medium mb-4 text-[#17181A]">
                                    Bạn thấy bài viết như thế nào?
                                </h3>
                                <p className="text-[14px] text-[#33404A] mb-6">
                                    {reactions.reduce((sum, reaction) => sum + reaction.count, 0)} phản hồi
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {reactions.map((reaction) => (
                                        <button
                                            key={reaction.id}
                                            onClick={() => handleReaction(reaction.id)}
                                            className={`flex flex-col items-center min-w-[90px] p-3 rounded-[4px] transition-all cursor-pointer hover:bg-[#F5F5F5]
                                                ${reaction.isSelected
                                                    ? 'border-2 border-[#10805B]'
                                                    : ''
                                                }`}
                                        >
                                            <Image src={reaction.emoji} alt={reaction.label} width={48} height={48} sizes="auto" />
                                            <span className="text-[14px] text-[#17181A] mb-1">
                                                {reaction.count}
                                            </span>
                                            <span className="text-[12px] text-[#33404A]">
                                                {reaction.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[300px] space-y-4 md:space-y-6">
                    <div className="bg-white p-4 md:p-6 rounded-lg border">
                        <h3 className="font-bold mb-4 text-[#17181A] text-lg">Nội Dung Bài Viết</h3>
                        <ul className="space-y-2 md:space-y-3">
                            {tableOfContents.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className="text-sm md:text-base text-[#33404A] hover:text-green-600 block transition-colors"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-8 h-[650px] py-[24px] lg:py-[36px] bg-[#013DA0] rounded-[24px] flex justify-between items-center flex-col">
                        <div className="flex-1 w-full" style={{ backgroundImage: `url(${BANNER_3})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                        <div className="flex justify-between items-center gap-[12px] mb-12 px-4">
                            <Image src={ICON_MARK} alt="Mark" width={136} height={136} sizes="auto" />
                            <div className="flex justify-between items-center flex-col gap-[16px]">
                                <span className="text-white font-bold text-[12px] lg:text-[20px]">Miễn phí dùng thử</span>
                                <Image src={FMRP_BETA_LOGO} alt="FMRP Logo" width={120} height={45} sizes="auto" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center cursor-pointer w-fit gap-x-[10px] md:gap-x-[20px] px-[8px] md:px-[12px] py-[6px] md:py-[8px] mt-[15px] md:mt-[20px] rounded-[40] border-2 border-white hover:opacity-90">
                            <span className="text-white">Trải nghiệm ngay</span>
                            <div className="h-[22] w-[22] flex justify-center items-center">
                                <Image src={ARROW_UP_RIGHT} height={14} width={14} alt="Arrow" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 h-[650px] py-[24px] lg:py-[36px] bg-[#013DA0] rounded-[24px] flex justify-between items-center flex-col">
                        <div className="flex-1 w-full" style={{ backgroundImage: `url(${BANNER_1})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                        <span className="text-white font-bold px-4 text-[12px] lg:text-[20px]">
                            Gia nhập cộng đồng FMRP Việt - Kết nối, chia sẻ, cùng phát triển!
                        </span>
                        <div className="flex justify-between items-center cursor-pointer w-fit gap-x-[10px] md:gap-x-[20px] px-[8px] md:px-[12px] py-[6px] md:py-[8px] mt-[15px] md:mt-[20px] rounded-[40] border-2 border-white hover:opacity-90">
                            <span className="text-white">Tham gia ngay</span>
                            <div className="h-[22] w-[22] flex justify-center items-center">
                                <Image src={ARROW_UP_RIGHT} height={14} width={14} alt="Arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 md:mt-12">
                <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-extrabold mb-8 text-[#17181A]">
                    Bài Viết Liên Quan
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {blogPosts.slice(0, 3).map((post) => (
                        <PostCard
                            key={post.id}
                            id={post.id}
                            category={post.category}
                            date={post.date}
                            image={post.image}
                            readTime={post.readTime}
                            slug={post.slug}
                            title={post.title}
                        />
                    ))}
                </div>
            </div>
            <div className="fixed left-[20px] xl:left-[90px] top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-3">
                {socials.map((social) => (
                    <button key={social.name} className="p-2 md:p-[12px] rounded-[16px] border-[1px] border-[#15AA7A] hover:bg-[#15AA7A22] cursor-pointer transition-colors">
                        <Image src={social.icon} alt={social.name} width={24} height={24} sizes="auto" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogDetail; 