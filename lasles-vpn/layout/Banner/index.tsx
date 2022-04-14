import { User, Location, Cpu } from "iconsax-react";
import Image from "next/image";
import Container from "../../components/Container";
import BannerImage from "../../public/asset/Banner.svg";
// import

export interface IBannerProps {}

export default function Banner(props: IBannerProps) {
  return (
    <Container>
      <section className="grid grid-cols-2 w-full py-20 pb-24 gap-8">
        <div className="max-w-xl flex flex-col gap-5">
            <h1 className="text-5xl leading-[70px] font-medium text-[#0B132A]">Want anything to be easy with <strong>LaslesVPN.</strong></h1>
            <p className="text-[#4F5665] leading-[30px] font-light text-base">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
            <div className="my-auto">
                <button className="bg-[#F53838] shadow-lg shadow-[#F53838]/50 px-16 py-4 rounded-xl text-base text-white font-semibold drop-shadow-2xl">Get Started</button>
            </div>
        </div>
        <BannerImage />
      </section>

      <section className=" px-20 py-9 shadow-2xl shadow-black/10 grid grid-cols-3 border">
        <div className="flex gap-9 items-center border-r justify-center">
            <div className="p-4 rounded-full bg-[#FFECEC]">
                <User
                    size="32"
                    color="#F53838"
                    variant="Bold"
                />
            </div>
            <div>
                <header className="font-semibold text-2xl">90+</header>
                <h3 className="text-[#4F5665] text-xl font-normal">Users</h3>
            </div>
        </div>

        <div className="flex gap-9 items-center border-r justify-center">
            <div className="p-4 rounded-full bg-[#FFECEC]">
            <Location
                size="32"
                color="#F53838"
                variant="Bold"
            />
            </div>
            <div>
                <header className="font-semibold text-2xl">90+</header>
                <h3 className="text-[#4F5665] text-xl font-normal">Users</h3>
            </div>
        </div>

        <div className="flex gap-9 items-center justify-center">
            <div className="p-4 rounded-full bg-[#FFECEC]">
                <Cpu
                    size="32"
                    color="#F53838"
                    variant="Bold"
                />
            </div>
            <div>
                <header className="font-semibold text-2xl">90+</header>
                <h3 className="text-[#4F5665] text-xl font-normal">Users</h3>
            </div>
        </div>
      </section>
    </Container>
  );
}
