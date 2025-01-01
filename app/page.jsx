import ServiceCard from "@/components/reusable/ServiceCard";
import SocialLink from "@/components/reusable/SocialLink";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGraduationCap, FaPaintBrush } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdAlternateEmail, MdCall } from "react-icons/md";

export default function Home() {
  return (
    <main className="container mx-auto px-4 md:px-8 space-y-12 md:space-y-28 scroll-smooth">
      {/* Hero */}
      <section className="flex flex-col space-y-5 items-center justify-between text-center">
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
        <div className="flex flex-col items-center space-y-5">
          <h1 className="font-bold text-3xl md:text-5xl">I&apos;m Fauzan Sadi.</h1>
          <p className="mt-3 leading-relaxed max-w-2xl">
            An animator with a passion for bringing stories to life through innovative and visually stunning animations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-5">
            <Button className="px-6 py-3 flex items-center space-x-2 text-sm rounded-full">
              <span>Resume</span>
              <Download size={18} />
            </Button>
            <SocialLink />
          </div>
        </div>
      </section>

      {/* Recent Project */}
      <section className="flex flex-col space-y-10 md:space-y-20 items-center">
        <h1 className="text-center text-3xl md:text-4xl font-bold">Show Reel</h1>
        <video className="w-full max-w-5xl rounded-lg shadow-lg" controls autoPlay muted loop>
          <source src="/project/volt.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* About Me */}
      <section className="py-12 md:py-20">
        <h1 className="text-center text-3xl md:text-4xl font-bold">About Me</h1>
        <p className="text-center mt-3 leading-relaxed max-w-4xl mx-auto">
          I offer high-quality 2D Illustration and 2D Animation services, tailored to meet your specific needs.
          Whether you&apos;re looking to enhance your branding, create compelling storytelling, or bring your ideas
          to life through animation, I am here to help you achieve your vision.
        </p>
        <div className="py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-9">
            {/* Personal Information */}
            <div className="md:col-span-3 space-y-4">
              <h1 className="text-2xl font-bold text-center md:text-left">Personal Information</h1>
              <div className="space-y-4">
                <h2 className="flex items-center">
                  <IoPerson className="text-primary text-lg mr-2" />
                  Golam Fauzan Sadi
                </h2>
                <h2 className="flex items-center">
                  <MdAlternateEmail className="text-primary text-lg mr-2" />
                  gfsvoltmanager@gmail.com
                </h2>
                <h2 className="flex items-center">
                  <MdCall className="text-primary text-lg mr-2" />
                  +8801331402578
                </h2>
                <h2 className="flex items-center">
                  <IoMdHome className="text-primary text-lg mr-2" />
                  Narayanganj, Dhaka, Bangladesh
                </h2>
              </div>
            </div>

            {/* Qualification */}
            <div className="md:col-span-3 space-y-4">
              <h1 className="text-2xl font-bold text-center md:text-left">Qualifications</h1>
              <div className="flex flex-col gap-5 md:flex-row">
                <div className="space-y-2">
                  <h2 className="flex items-center gap-2 text-xl text-primary font-semibold">
                    <FaGraduationCap size={26} />
                    Education
                  </h2>
                  <div>
                    <h2 className="text-lg font-semibold">Park Polytechnic Institute</h2>
                    <p>Diploma in Engineering (CMT)</p>
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
                    <FaPaintBrush size={20} />
                    Experience
                  </h2>
                  <div>
                    <h2 className="text-lg font-semibold">2D Raster Animation and Illustration</h2>
                    <p>2 Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <h1 className="text-center text-3xl md:text-4xl font-bold">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          <ServiceCard />
        </div>
      </section>

      {/* Contact */}
      <section className="text-center bg-purple-200 dark:bg-purple-400 flex items-center justify-center flex-col py-12 md:py-20">
        <h1 className="px-6 text-2xl md:text-3xl font-bold">
          Prepared to turn your ideas into reality? <br /> I&apos;m here to help.
        </h1>
        <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-full mt-5">
          Contact Me
        </Link>
      </section>
    </main>
  );
}
