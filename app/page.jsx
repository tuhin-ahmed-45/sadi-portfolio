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
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-6">About Me</h1>
        <p className="text-center leading-relaxed max-w-4xl mx-auto mb-12">
          I specialize in high-quality 2D Illustration and Animation services, tailored to meet your unique needs.
          Whether you&apos;re enhancing your branding, creating compelling stories, or visualizing your ideas through
          animation, I&apos;m here to bring your vision to life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 lg:px-16">
          {/* Personal Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Personal Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <IoPerson className="text-primary text-2xl" />
                <p className="text-lg">Golam Fauzan Sadi</p>
              </div>
              <div className="flex items-center gap-3">
                <MdAlternateEmail className="text-primary text-2xl" />
                <p className="text-lg">
                  <a href="mailto:gfsvoltmanager@gmail.com" className="hover:text-primary transition-colors">
                    gfsvoltmanager@gmail.com
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <MdCall className="text-primary text-2xl" />
                <p className="text-lg">
                  <a href="tel:+8801331402578" className="hover:text-primary transition-colors">
                    +880 1331 402578
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <IoMdHome className="text-primary text-2xl" />
                <p className="text-lg">Narayanganj, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Qualifications</h2>
            <div className="space-y-8">
              {/* Education */}
              <div>
                <h3 className="flex items-center gap-3 text-xl text-primary font-semibold mb-4">
                  <FaGraduationCap className="text-primary text-2xl" />
                  Education
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-lg font-semibold">Park Polytechnic Institute</h4>
                    <p className="text-sm">Diploma in Engineering (CMT), 2022–2026</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Aligonj High School</h4>
                    <p className="text-sm">JSC - SSC, 2018–2022</p>
                  </div>
                </div>
              </div>
              {/* Experience */}
              <div>
                <h3 className="flex items-center gap-3 text-xl text-primary font-semibold mb-4">
                  <FaPaintBrush className="text-primary text-2xl" />
                  Experience
                </h3>
                <div>
                  <h4 className="text-lg font-semibold">2D Raster Animation and Illustration</h4>
                  <p className="text-sm">2 Years of Professional Experience</p>
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
