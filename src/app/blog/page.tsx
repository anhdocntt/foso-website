'use client'

import { ARROW_UP_RIGHT, BANNER_1, BANNER_3, FMRP_BETA_LOGO, HAND, ICON_MARK, ICON_SEARCH, NOTE } from "@/common/constants";
import { blogPosts, categories } from "@/common/data";
import Image from "next/image";
import Link from "next/link";
import PostCard from "../components/PostCard/postCard";

const Blog = () => {
    return (
        <div className="mx-auto px-4">
            <div className="h-[392px] w-full flex justify-between items-center gap-x-[48] mb-12 flex-wrap md:flex-nowrap">
                <div className="p-[36px] hidden md:block">
                    <Image src={NOTE} width={195} height={195} alt="Note" sizes="auto" />
                </div>
                <div className="text-center p-8">
                    <div className="mb-6 text-[14px]">
                        <Link href="/" className="hover:text-green-600">Trang chủ</Link>
                        <span className="text-[#33404A] mx-2">{'>'}</span>
                        <Link href="#" className="hover:text-green-600">Tài nguyên</Link>
                        <span className="text-[#33404A] mx-2">{'>'}</span>
                        <span className="font-semibold">Blog</span>
                    </div>
                    <div>
                        <h1 className="text-[32px] md:text-[48px] font-normal mb-4 text-[#050505]">
                            Blog <span className="bg-gradient-to-r from-[#54ABB1] to-[#85EEB3] text-transparent bg-clip-text font-extrabold">FOSO</span> -
                        </h1>
                        <h2 className="text-[32px] md:text-[40px] font-normal mb-6 text-[#050505]">
                            Cập Nhật Tin Tức <span className="relative font-extrabold">
                                <span className="relative z-1">Mới Nhất</span>
                                <span className="absolute bottom-0 left-0 w-full h-[32px] bg-[#85EEB3] opacity-50 rounded-full"></span>
                            </span>
                        </h2>
                        <p className="text-[#33404A] text-[16px]">
                            Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
                        </p>
                    </div>
                </div>
                <div className="p-[36] hidden md:block">
                    <Image src={HAND} width={195} height={195} alt="Hand" sizes="auto" />
                </div>
            </div>
            <div className="w-full max-w-[1200px] m-auto">
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div className="flex-1">
                        <h3 className="font-extrabold text-[#050505] text-[28px] mb-8">Tất Cả Bài Viết</h3>
                        <div className="h-[318px] bg-[#013DA0] rounded-[40px] mb-6 flex justify-between items-center gap-8">
                            <div className="w-[50%] py-[24px] pl-[24px] lg:py-[48px] lg:pl-[48px]">
                                <h3 className="text-[28px] lg:text-[36px] font-bold text-white">Gia nhập cộng đồng FMRP - Kết nối, chia sẻ, cùng phát triển!</h3>
                                <div className="flex justify-between items-center cursor-pointer w-fit gap-x-[10px] md:gap-x-[20px] px-[8px] md:px-[12px] py-[6px] md:py-[8px] mt-[15px] md:mt-[20px] rounded-[40] border-2 border-white hover:opacity-90">
                                    <span className="text-white">Tham gia ngay</span>
                                    <div className="h-[22] w-[22] flex justify-center items-center">
                                        <Image src={ARROW_UP_RIGHT} height={14} width={14} alt="Arrow" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 w-full h-full" style={{ backgroundImage: `url(${BANNER_1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                            {blogPosts.map((post) => (
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
                    <div className="w-full md:w-[280px] lg:w-[300px]">
                        <h3 className="font-extrabold text-[#050505] text-[20px] mb-8">Tìm kiếm</h3>
                        <div className="relative bg-white">
                            <input
                                type="text"
                                placeholder="Tìm kiếm bài viết"
                                className="h-[72px] w-full px-4 py-2 shadow-md rounded-lg"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 flex justify-between items-center p-[12px] rounded-[12px] bg-[#15AA7A]">
                                <Image src={ICON_SEARCH} alt="Search" width={20} height={20} sizes="auto" />
                            </button>
                        </div>
                        <div className="mt-8">
                            <div className="bg-white p-6 rounded-lg border sticky top-6">
                                <h3 className="font-bold mb-4 text-[#17181A]">Danh mục</h3>
                                <ul className="space-y-3">
                                    {categories.map((category) => (
                                        <li key={category.id} className="flex justify-between items-center text-[14px] text-[#33404A] hover:text-green-600 cursor-pointer transition-colors">
                                            <span>{category.name}</span>
                                            <span>{category.totalPost}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
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
            </div>
        </div>
    );
};

export default Blog;