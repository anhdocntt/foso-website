'use client'

import Image from "next/image";
import Link from "next/link";

const BlogDetail = () => {
    const tableOfContents = [
        { id: "intro", title: "1. Quy trình 5S là gì?" },
        { id: "benefits", title: "2. Tại sao doanh nghiệp cần quy trình 5S?" },
        { id: "steps", title: "3. Quy trình 5S gồm các bước" },
        { id: "implementation", title: "4. Các bước thực hiện quy trình 5S" },
        { id: "success", title: "5. Các yếu tố tạo nên thành công quy trình 5S" },
    ];

    return (
        <div className="mx-auto px-[240px] py-8">
            <div className="mb-6 text-[14px]">
                <Link href="/" className="hover:text-[#54ABB1]">Trang chủ</Link>
                <span className="text-[#33404A] mx-2">{'>'}</span>
                <Link href="/blog" className="hover:text-[#54ABB1]">Blog</Link>
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

                    <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                        <Image
                            src="/assets/images/5s-process.png"
                            alt="5S Process"
                            fill
                            className="object-cover"
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
                            <div className="relative w-full h-[300px] my-8">
                                <Image
                                    src="/assets/images/5s-steps.png"
                                    alt="5S Steps"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div id="implementation" className="scroll-mt-24">
                            <h2 className="text-[24px] font-bold mb-4 text-[#17181A]">4. Các bước thực hiện quy trình 5S</h2>
                            <div className="relative w-full h-[300px] my-8">
                                <Image
                                    src="/assets/images/5s-implementation.png"
                                    alt="5S Implementation"
                                    fill
                                    className="object-contain"
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
                                        className="text-[14px] text-[#33404A] hover:text-[#54ABB1] block transition-colors"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-3">
                <button className="p-3 rounded-full bg-[#54ABB1] text-white hover:bg-[#3d8a8f] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </button>
                <button className="p-3 rounded-full bg-[#54ABB1] text-white hover:bg-[#3d8a8f] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default BlogDetail; 