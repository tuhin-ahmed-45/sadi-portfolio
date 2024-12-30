import SocialLink from "@/components/reusable/SocialLink";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import { FaGraduationCap, FaPaintBrush } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { IoPerson } from "react-icons/io5";
import { MdAlternateEmail, MdCall } from 'react-icons/md';

export default function Home() {
  return (
    <main className="container space-y-12 md:space-y-28 mx-auto px-4 md:px-8 scroll-smooth">
      {/* Hero */}
      <section className="flex flex-col space-y-5 items-center justify-between">
        {/* Right Content */}
        <div className="flex justify-center">
          <Image
            src="/hero/hero.png"
            width={300}
            height={300}
            className="rounded-full object-cover"
            alt="Hero Image"
            priority
          />
        </div>
        {/* Left Content */}
        <div className="flex items-center flex-col space-y-5 text-center">
          <h1 className="font-bold text-4xl md:text-5xl">
            I&apos;m Fauzan Sadi.
          </h1>
          <p className="mt-3 leading-relaxed">
            An animator with a passion for bringing stories to life
            through innovative and visually stunning animations.
          </p>
          <div className="flex items-center space-x-4">
            <Button className="mt-5 px-6 py-3 flex items-center space-x-2 text-sm rounded-full">
              <span>Resume</span>
              <Download size={18} />
            </Button>
            <div className="mt-5">
              <SocialLink />
            </div>
          </div>
        </div>

      </section>

      {/* Recent Project */}
      <section className="flex flex-col space-y-20 items-center">  
        <h1 className="text-center text-4xl font-bold">Show Reel</h1>
        
          <video
            className="w-full max-w-5xl rounded-lg shadow-lg"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/project/volt.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    
      </section>
      {/* About Me */}
      <section className="py-20">
        <h1 className="text-center text-4xl font-bold">About Me</h1>
        <p className="text-center mt-3 leading-relaxed">
          I offer high-quality 2D Illustration and 2D Animation services, tailored to meet your
          specific needs.
          Whether you&apos;re looking to enhance your branding, create compelling storytelling, or
          bring your ideas
          to life through animation, I am here to help you achieve your vision.
        </p>

        <div className="py-16 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-9">
            {/* Personal Information Box */}
            <div className="md:col-span-3 space-y-4">
              <h1 className="text-2xl font-bold text-center md:text-left">Personal Information</h1>
              <div className="space-y-4">
                <h2 className="flex items-center">
                  <span className="mr-2">
                    <IoPerson className="text-primary text-lg" />
                  </span>
                  Golam Fauzan Sadi
                </h2>
                <h2 className="flex items-center">
                  <span className="mr-2">
                    <MdAlternateEmail className="text-primary text-lg" />
                  </span>
                  gfsvoltmanager@gmail.com
                </h2>
                <h2 className="flex items-center">
                  <span className="mr-2">
                    <MdCall className="text-primary text-lg" />
                  </span>
                  +8801331402578
                </h2>
                <h2 className="flex items-center">
                  <span className="mr-2">
                    <IoMdHome className="text-primary text-lg" />
                  </span>
                  Narayanganj, Dhaka, Bangladesh
                </h2>
              </div>
            </div>

            {/* Qualification Box */}
            <div className="md:col-span-3 space-y-4">
              <h1 className="text-2xl font-bold text-center md:text-left">Qualifications</h1>
              <div className="flex gap-5">
                <div className="space-y-2">
                  <h2 className="flex items-center gap-2 text-xl text-primary font-semibold">
                    <span>
                      <FaGraduationCap className="text-primary" size={26} />
                    </span>
                    Education
                  </h2>
                  <div>
                    <h2 className="text-lg font-semibold">Park Polytechnic Institute</h2>
                    <p>Diploma in Engineer (CMT)</p>
                    <p>2022-2026</p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Aligonj High School</h2>
                    <p>JSC - SSC</p>
                    <p>2018-2022</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="flex items-center gap-2 text-xl text-primary font-semibold">
                    <span>
                      <FaPaintBrush className="text-primary" size={20} />
                    </span>
                    Experience
                  </h2>
                  <div>
                    <h2 className="text-lg font-semibold">2D raster animation and illustration</h2>
                    <p>2 Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
