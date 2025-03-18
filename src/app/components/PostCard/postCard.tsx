'use client'

import { ARROW_RIGHT, ICON_CALENDAR, ICON_CLOCK } from "@/common/constants";
import { BlogPost } from "@/common/interfaces";
import Image from "next/image";
import Link from "next/link";

const PostCard = (post: BlogPost) => {
  return (
    <div>
      <Link href={`/blog/${post.slug}`}>
        <div className="rounded-[24px] overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative">
            <Image
              src={post.image}
              alt={post.title}
              height={700}
              width={700}
              className="object-cover"
              sizes="auto"
            />
          </div>
          <div className="py-8 px-4 flex justify-between flex-col gap-[8px]">
            <span className="text-xs text-[#0F4F9E] w-fit bg-[#E2F0FE] px-[8px] py-[4px] rounded-[8px]">{post.category}</span>
            <h3 className="text-[20px] lg:text-[24px] text-[#33404A] font-extrabold my-2">{post.title}</h3>
            <div className="flex items-center gap-[12px] text-[14px] lg:text-[16px] text-[#33404A]">
              <div className="flex justify-between items-center gap-[8px]">
                <Image src={ICON_CALENDAR} alt="Calendar" height={18} width={18} sizes="auto" />
                <span className="text-[#667F93] text-[12px] lg:text-[14px]">{post.date}</span>
              </div>
              <span className="text-[#D9E1E7]">|</span>
              <div className="flex justify-between items-center gap-[8px]">
                <Image src={ICON_CLOCK} alt="Clock" height={18} width={18} sizes="auto" />
                <span className="text-[#667F93] text-[12px] lg:text-[14px]">{post.readTime}</span>
              </div>
            </div>
            <div className="flex items-center gap-[12px] text-[14px] lg:text-[16px] text-[#667F93] font-semibold">
              Khám phá thêm
              <Image src={ARROW_RIGHT} alt="Arrow" height={18} width={18} sizes="auto" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard;