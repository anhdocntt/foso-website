'use client'

import { Reaction, Social, TableContent } from "@/common/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BlogDetail = () => {
    const avatar = "/assets/images/avatar-logo.png";
    const iconZalo = "/assets/images/icon-zalo.png";
    const iconFacebook = "/assets/images/icon-facebook.png";
    const iconX = "/assets/images/icon-x.png";
    const iconLinkedin = "/assets/images/icon-linkedin.png";
    const iconSocial = "/assets/images/icon-social.png";
    const iconLike = "/assets/images/icon-like.png";
    const iconHeart = "/assets/images/icon-heart.png";
    const iconSurprise = "/assets/images/icon-surprise.png";
    const iconWow = "/assets/images/icon-wow.png";
    const iconBoring = "/assets/images/icon-boring.png";
    const iconAngry = "/assets/images/icon-angry.png";
    const banner5s_1 = "/assets/images/quy-trinh-5s.png";
    const banner5s_2 = "/assets/images/quy-trinh-5s-2.png";
    const banner5s_3 = "/assets/images/quy-trinh-5s-3.png";

    const tableOfContents: TableContent[] = [
        { id: "intro", title: "1. Quy trình 5S là gì?" },
        { id: "benefits", title: "2. Tại sao doanh nghiệp cần quy trình 5S?" },
        { id: "steps", title: "3. Quy trình 5S gồm các bước" },
        { id: "implementation", title: "4. Các bước thực hiện quy trình 5S" },
        { id: "success", title: "5. Các yếu tố tạo nên thành công quy trình 5S" },
    ];
    const socials: Social[] = [
        {
            name: "Zalo",
            icon: iconZalo,
            link: "",
        },
        {
            name: "Facebook",
            icon: iconFacebook,
            link: "",
        },
        {
            name: "X",
            icon: iconX,
            link: "",
        },
        {
            name: "Linkedin",
            icon: iconLinkedin,
            link: "",
        },
        {
            name: "Social",
            icon: iconSocial,
            link: "",
        }
    ]

    const [reactions, setReactions] = useState<Reaction[]>([
        { id: 'useful', emoji: iconLike, label: 'Hữu ích', count: 1, isSelected: true },
        { id: 'love', emoji: iconHeart, label: 'Yêu thích', count: 2, isSelected: false },
        { id: 'fun', emoji: iconSurprise, label: 'Thú vị', count: 0, isSelected: false },
        { id: 'wow', emoji: iconWow, label: 'Bất ngờ', count: 1, isSelected: false },
        { id: 'boring', emoji: iconBoring, label: 'Nhàm chán', count: 0, isSelected: false },
        { id: 'angry', emoji: iconAngry, label: 'Tức giận', count: 0, isSelected: false },
    ]);

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
        <div className="mx-auto px-[240px] py-8">
            <div className="mb-6 text-[14px]">
                <Link href="/" className="hover:text-green-600">Trang chủ</Link>
                <span className="text-[#33404A] mx-2">{'>'}</span>
                <Link href="/blog" className="hover:text-green-600">Blog</Link>
                <span className="text-[#33404A] mx-2">{'>'}</span>
                <span className="font-semibold">Quy trình 5S là gì?</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                    <h1 className="text-[32px] md:text-[40px] font-bold mb-4 text-[#17181A]">
                        Quy Trình 5S Là Gì? Cách Ứng Dụng Hiệu Quả Nền Móng BOM
                    </h1>

                    <div className="flex items-center gap-4 mb-6 text-[14px] text-[#33404A]">
                        <span>21/12/2023</span>
                        <span>•</span>
                        <span>10 phút đọc</span>
                    </div>

                    <div className="relative w-full h-[500px] mb-8 rounded-lg overflow-hidden">
                        <Image
                            src={banner5s_1}
                            alt="5S Process"
                            fill
                            className="object-cover"
                            sizes="auto"
                        />
                    </div>

                    <div className="prose max-w-none">
                        <blockquote className="bg-[#F5F5F5] p-6 border-l-4 border-[#54ABB1] mb-8 italic text-[#33404A]">
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

                        <div id="steps" className="scroll-mt-24">
                            <h2 className="text-[24px] font-bold mb-4 text-[#17181A]">3. Quy trình 5S gồm các bước</h2>
                            <div className="relative w-full h-[500px] my-8">
                                <Image
                                    src={banner5s_2}
                                    alt="5S Steps"
                                    fill
                                    className="object-contain"
                                    sizes="auto"
                                />
                            </div>
                        </div>

                        <div id="implementation" className="scroll-mt-24">
                            <h2 className="text-[24px] font-bold mb-4 text-[#17181A]">4. Các bước thực hiện quy trình 5S</h2>
                            <div className="relative w-full h-[500px] my-8">
                                <Image
                                    src={banner5s_3}
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

                <div className="w-full lg:w-[300px] space-y-6">
                    <div className="bg-white p-6 rounded-lg border sticky top-6">
                        <h3 className="font-bold mb-4 text-[#17181A]">Nội Dung Bài Viết</h3>
                        <ul className="space-y-3">
                            {tableOfContents.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className="text-[14px] text-[#33404A] hover:text-green-600 block transition-colors"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="fixed left-[90px] top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-3">
                {socials.map((social) => (
                    <button key={social.name} className="p-[12px] rounded-[16px] border-[1px] border-[#15AA7A] hover:bg-[#15AA7A22] cursor-pointer transition-colors">
                        <Image src={social.icon} alt={social.name} width={24} height={24} sizes="auto" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogDetail; 