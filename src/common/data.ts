import { BANNER_2, ICON_ANGRY, ICON_BORING, ICON_FACEBOOK, ICON_HEART, ICON_LIKE, ICON_LINKEDIN, ICON_SOCIAL, ICON_SURPRISE, ICON_WOW, ICON_X, ICON_ZALO } from "./constants";
import { BlogPost, Category, Reaction, Social } from "./interfaces";

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        date: "12/12/2023",
        readTime: "10 phút đọc",
        image: BANNER_2,
        category: "Quản Lý Sản Xuất",
        slug: "bom-la-gi"
    },
    {
        id: "2",
        title: "Quy Trình 5S Là Gì? Cách Ứng Dụng Hiệu Quả Nền Móng BOM",
        date: "12/12/2023",
        readTime: "15 phút đọc",
        image: BANNER_2,
        category: "Quản Lý Sản Xuất",
        slug: "quy-trinh-5s-la-gi"
    },
    {
        id: "3",
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        date: "12/12/2023",
        readTime: "10 phút đọc",
        image: BANNER_2,
        category: "Quản Lý Sản Xuất",
        slug: "bom-la-gi"
    },
    {
        id: "4",
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        date: "12/12/2023",
        readTime: "10 phút đọc",
        image: BANNER_2,
        category: "Quản Lý Sản Xuất",
        slug: "bom-la-gi"
    },
    {
        id: "5",
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        date: "12/12/2023",
        readTime: "10 phút đọc",
        image: BANNER_2,
        category: "Quản Lý Sản Xuất",
        slug: "bom-la-gi"
    }
];

export const categories: Category[] = [
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
];

export const socials: Social[] = [
    {
        name: "Zalo",
        icon: ICON_ZALO,
        link: "",
    },
    {
        name: "Facebook",
        icon: ICON_FACEBOOK,
        link: "",
    },
    {
        name: "X",
        icon: ICON_X,
        link: "",
    },
    {
        name: "Linkedin",
        icon: ICON_LINKEDIN,
        link: "",
    },
    {
        name: "Social",
        icon: ICON_SOCIAL,
        link: "",
    }
];

export const listReaction: Reaction[] = [
    { id: 'useful', emoji: ICON_LIKE, label: 'Hữu ích', count: 1, isSelected: true },
    { id: 'love', emoji: ICON_HEART, label: 'Yêu thích', count: 2, isSelected: false },
    { id: 'fun', emoji: ICON_SURPRISE, label: 'Thú vị', count: 0, isSelected: false },
    { id: 'wow', emoji: ICON_WOW, label: 'Bất ngờ', count: 1, isSelected: false },
    { id: 'boring', emoji: ICON_BORING, label: 'Nhàm chán', count: 0, isSelected: false },
    { id: 'angry', emoji: ICON_ANGRY, label: 'Tức giận', count: 0, isSelected: false },
];