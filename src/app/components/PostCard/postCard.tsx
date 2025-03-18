'use client'

import { BlogPost } from "@/common/interfaces";
import Image from "next/image";
import Link from "next/link";

const PostCard = (post: BlogPost) => {
  const arrowRight = "/assets/images/arrow-right.png";
  const iconCalendar = "/assets/images/icon-calendar.png";
  const iconClock = "/assets/images/icon-clock.png";

  return (
    <div>
      <Link href={`/blog/${post.slug}`}>
        <div className="rounded-[24px] overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative">
            <Image
              src={post.image}
              alt={post.title}
              height={475}
              width={500}
              className="object-cover"
              sizes="auto"
            />
          </div>
          <div className="p-4">
            <h3 className="text-[18px] font-medium mb-2">{post.category}</h3>
            <h3 className="text-[18px] font-medium mb-2">{post.title}</h3>
            <div className="flex items-center text-[14px] text-[#33404A]">
              <div className="flex justify-between items-center gap-[4]">
                <Image src={iconCalendar} alt="Calendar" height={18} width={18} sizes="auto" />
                {post.date}
              </div>
              <div className="flex justify-between items-center gap-[4] ml-4">
                <Image src={iconClock} alt="Clock" height={18} width={18} sizes="auto" />
                {post.readTime}
              </div>
            </div>
            Khám phá thêm
            <Image src={arrowRight} alt="Arrow" height={18} width={18} sizes="auto" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard;