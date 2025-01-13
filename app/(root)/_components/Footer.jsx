import Link from "next/link";
import React from "react";
import icFacebook from "@/assets/svg/ic_facebook.svg";
import icInstagram from "@/assets/svg/ic_instagram.svg";
import icYoutube from "@/assets/svg/ic_youtube.svg";
import icTwitter from "@/assets/svg/ic_twitter.svg";
import Image from "next/image";
function Footer() {
  return (
    <div className="relative translate-y-full h-[160px] bg-black flex justify-center">
      <div className="flex justify-between max-w-[1120px] w-full mt-8 ">
        <p className="text-[#9CA3AF]">©codeit - 2024 </p>

        <span className="flex text-[#E5E7EB] gap-[30px]">
          <Link className="" href="/">
            Privacy Policy
          </Link>
          <Link className="" href="/">
            FAQ
          </Link>
        </span>
        <span className="flex gap-3">
          <a className="" href="https://www.facebook.com/">
            <Image src={icFacebook} alt="facebookIcon" />
          </a>
          <a className="icon" href="https://www.twitter.com/">
            <Image src={icTwitter} alt="twitterIcon" />
          </a>
          <a className="icon" href="https://www.youtube.com/">
            <Image src={icYoutube} alt="youtubeIcon" />
          </a>
          <a className="icon" href="https://www.instagram.com/">
            <Image src={icInstagram} alt="instagramIcon" />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
