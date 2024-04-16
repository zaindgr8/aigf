import React from "react";
import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";

import {
  CONTACT_EMAIL,
  GITHUB_AVATAR_URL,
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
} from "@/lib/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function NavBar() {
  return (
    <nav className="backdrop-blur-md w-full fixed top-0 side-padding left-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001444] z-20 h-14 flex justify-between items-center">
      {/* Avatar and name */}
      <Link
        className="flex gap-3 items-center"
        href={GITHUB_PROFILE_URL}
        target="_blank"
      >
        <Avatar>
          <AvatarImage src="/1.png" />
          <AvatarFallback>GF</AvatarFallback>
        </Avatar>
        <span className="font-medium text-gray-100 max-xs:hidden">
          Ai Love: Virtual Girlfriend
        </span>
      </Link>

      {/* Page links */}
      {/* <div className="flex items-center gap-16 mr-24 max-xl:hidden bg-black/40 px-4 rounded-full border border-solid border-black/20">
        <Link
          className="hover:tracking-wider focus-visible:tracking-wider transition-all px-4 py-2"
          href="#hero"
        >
          About me
        </Link>
        <Link
          className="hover:tracking-wider focus-visible:tracking-wider transition-all px-4 py-2"
          href="#skills"
        >
          Skills
        </Link>
        <Link
          className="hover:tracking-wider focus-visible:tracking-wider transition-all px-4 py-2"
          href="#projects"
        >
          Projects
        </Link>
      </div> */}

      {/* Social media links */}
      <div className="flex items-center gap-6">
        <Link href="https://www.instagram.com/ailove_vgf/" target="_blank">
          <Instagram strokeWidth={1.5} />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61557586390371"
          target="_blank"
        >
          <Facebook strokeWidth={1.5} />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
