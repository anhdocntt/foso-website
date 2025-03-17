'use client'

import { BlogPost, Category } from "@/common/interfaces";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
    const note = "/assets/images/note.png";
    const hand = "/assets/images/hand.png";
    const arrowRight = "/assets/images/arrow-right.png";
    const banner1 = "/assets/images/banner-1.png";
    const banner2 = "/assets/images/banner-2.png";
    const banner3 = "/assets/images/banner-3.png";
    const fmrpBetaLogo = "/assets/images/fmrp-beta-logo.png";
    const iconCalendar = "/assets/images/icon-calendar.png";
    const iconClock = "/assets/images/icon-clock.png";
    const iconMark = "/assets/images/icon-mark.png";
    const iconSearch = "/assets/images/search.png";

    const blogPosts: BlogPost[] = [
        {
            id: "1",
            title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
            date: "12/12/2023",
            readTime: "10 phút đọc",
            image: banner2,
            category: "Quản Lý Sản Xuất",
            slug: "bom-la-gi"
        },
        {
            id: "2",
            title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
            date: "12/12/2023",
            readTime: "10 phút đọc",
            image: banner2,
            category: "Quản Lý Sản Xuất",
            slug: "bom-la-gi"
        },
        {
            id: "3",
            title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
            date: "12/12/2023",
            readTime: "10 phút đọc",
            image: banner2,
            category: "Quản Lý Sản Xuất",
            slug: "bom-la-gi"
        },
        {
            id: "4",
            title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
            date: "12/12/2023",
            readTime: "10 phút đọc",
            image: banner2,
            category: "Quản Lý Sản Xuất",
            slug: "bom-la-gi"
        },
        {
            id: "5",
            title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
            date: "12/12/2023",
            readTime: "10 phút đọc",
            image: banner2,
            category: "Quản Lý Sản Xuất",
            slug: "bom-la-gi"
        }
    ];
    const categories: Category[] = [
        {
            id: "1",
            name: "Tất cả",
            totalPost: 108
        },
        {
            id: "2",
            name: "Thiết Kế Website",
            totalPost: 36
        },
        {
            id: "3",
            name: "Thiết Kế App Mobile",
            totalPost: 13
        },
        {
            id: "4",
            name: "Quản Lý Sản Xuất",
            totalPost: 25
        },
        {
            id: "5",
            name: "Quản Lý Bán Hàng",
            totalPost: 22
        },
        {
            id: "6",
            name: "Báo Chí Nói Về FOSO",
            totalPost: 7
        },
        {
            id: "7",
            name: "Tin Tức FOSO",
            totalPost: 5
        }
    ]

    return (
        <div className="mx-auto px-4">
            <div className="h-[392px] w-full flex justify-between items-center gap-x-[48] mb-12 flex-wrap md:flex-nowrap">
                <div className="p-[36px] hidden md:block">
                    <Image src={note} width={195} height={195} alt="Note" />
                </div>
                <div className="text-center p-8 bg-white">
                    <div className="mb-[40px] text-[#17181A] text-[14px]">
                        <Link href="/">Trang chủ</Link>
                        <span className="text-[#33404A]">{' > '}</span>
                        <Link href="#">Tài nguyên</Link>
                        <span className="text-[#33404A]">{' > '}</span>
                        <Link className="font-semibold" href="/blog">Blog</Link>
                    </div>
                    <div>
                        <h1 className="text-[40px] md:text-[64px] font-normal mb-4 text-[#050505]">
                            Blog <span className="bg-gradient-to-r from-[#54ABB1] to-[#85EEB3] text-transparent bg-clip-text font-extrabold">FOSO</span> -
                        </h1>
                        <h2 className="text-[40px] md:text-[48px] font-normal mb-6 text-[#050505]">
                            Cập Nhật Tin Tức <span className="relative font-extrabold">
                                <span className="relative z-1">Mới Nhất</span>
                                <span className="absolute bottom-0 left-0 w-full h-[32px] bg-[#85EEB3] opacity-50 rounded-full"></span>
                            </span>
                        </h2>
                        <p className="text-[#33404A] text-[18px]">
                            Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
                        </p>
                    </div>
                </div>
                <div className="p-[36] hidden md:block">
                    <Image src={hand} width={195} height={195} alt="Hand" />
                </div>
            </div>
            <div className="mx-[240px]">
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div className="flex-1">
                        <h3 className="font-extrabold text-[#050505] text-[36px] mb-8">Tất Cả Bài Viết</h3>
                        <div className="h-[318px] bg-[#013DA0] rounded-[40px] mb-6">

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                            {blogPosts.map((post) => (
                                <Link href={`/blog/${post.slug}`} key={post.id}>
                                    <div className="rounded-[24px] overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="relative">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                height={475}
                                                width={500}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-[18px] font-medium mb-2">{post.category}</h3>
                                            <h3 className="text-[18px] font-medium mb-2">{post.title}</h3>
                                            <div className="flex items-center text-[14px] text-[#33404A]">
                                                <div className="flex justify-between items-center gap-[4]">
                                                    <Image src={iconCalendar} alt="Calendar" height={18} width={18} />
                                                    {post.date}
                                                </div>
                                                <div className="flex justify-between items-center gap-[4] ml-4">
                                                    <Image src={iconClock} alt="Clock" height={18} width={18} />
                                                    {post.readTime}
                                                </div>
                                            </div>
                                            <Link href={`/blog/${post.slug}`}>
                                                Khám phá thêm
                                                <Image src={arrowRight} alt="Arrow" height={18} width={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-[300px]">
                        <h3 className="font-extrabold text-[#050505] text-[24px] mb-8">Tìm kiếm</h3>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm bài viết"
                                className="h-[72px] w-full px-4 py-2 border rounded-lg"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 flex justify-between items-center p-[12px] rounded-[12px] bg-[#15AA7A]">
                                <Image src={iconSearch} alt="Search" width={20} height={20} />
                            </button>
                        </div>
                        <div className="mt-8">
                            <h3 className="font-extrabold text-[#050505] text-[24px] mb-8">Danh mục</h3>
                            {categories.map((category) => (
                                <div key={category.id} className="flex justify-between items-center">
                                    <span>{category.name}</span>
                                    <span>{category.totalPost}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 h-[650px] bg-[#013DA0] rounded-[24px]"></div>
                        <div className="mt-8 h-[650px] bg-[#013DA0] rounded-[24px]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;