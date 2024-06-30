import { buttonVariants } from "@/components/ui/button"
import { Effect } from "@/components/ui/effects"
import { socialLinks } from "@/constants/social-links"
import { cn } from "@/lib/utils"
import { ArrowRightCircle, Download } from "lucide-react"
import Image from "next/image"

const HomeSection = () => {
  return (
    <section id="home" className="grid md:grid-cols-12 items-center gap-6">
      {/* Social Links 12 cols of grid 
      ul get one col of 12 
      */}
      <ul className="flex md:flex-col gap-4 items-center size-fit mx-auto py-2 md:py-8 px-8 md:px-2 border rounded-3xl">
        {socialLinks.map((link, index) => {
          const { href, icon: Icon } = link;

          return (
            <li key={index} className="hover:text-blue-600">
              <a href={href} target="_blank">
                <Icon className="size-5" />
              </a>
            </li>
          );
        })}
      </ul>
      {/* Presenation get 6 cols of 12   */}
      <div className="md:col-span-6 flex flex-col items-center  md:items-start gap-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground capitalize">
          hi , I&apos;m Omar
        </h2>
        <h5 className="text-xl md:text-2xl font-semibold capitalize">
          front-end developer
        </h5>
        <p className="leading-7 md:text-lg md:max-w-[85%] text-center md:text-start">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere rem,
          voluptates eius excepturi doloribus laudantium debitis pariatur magni
          corporis maiores itaque perferendis a, nemo delectus sit nihil,
          explicabo at adipisci.
        </p>
        <div className="flex items-center gap-2 py-4">
          <a href="#projects" className={cn(buttonVariants({ size: "lg" }),"px-4 md:px-8")}>
            <span>my works</span>
            <ArrowRightCircle className="size-4" />
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            download
            className={cn(buttonVariants({ variant: "outline", size: "lg" }),"px-4 md:px-8")}
          >
            <span>download cv</span>
            <Download className="size-4" />
          </a>
        </div>
      </div>
      {/* Image, Effect has abouste and div has relative */}
      <div className="md:col-span-5 grid place-content-center">
        <div className="relative flex items-center justify-center size-80 md:size-96">
          <Effect className="size-full" />
          <Effect
            variant="square"
            size="sm"
            className="top-[8%] left-[25%] -rotate-12"
          />
          <Effect
            variant="square"
            size="sm"
            className="top-[50%] right-[2%] rotate-12"
          />
          <Effect
            variant="square"
            size="sm"
            className="bottom-[18%] left-[12%] rotate-6"
          />
          <Image
            width={420}
            height={420}
            alt="profile"
            src="/profile.jpg"
            className="object-cover object-bottom size-[80%] border-2 rounded-full ring-4 ring-primary ring-offset-4 ring-offset-background"
          />
        </div>
        </div>
    </section>
  );
}

export default HomeSection
