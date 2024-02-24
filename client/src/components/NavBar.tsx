import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="sticky bg-white top-0 z-50 h-16 lg:h-[8.5rem] w-full flex flex-col border-solid border-b-[1px] container px-8 lg:px-16">
      <div className="flex items-center justify-center lg:h-[60%]">
        <div className="max-w-[1330px] h-full w-full p-3 flex items-center justify-between lg:gap-20">
          <img
            src={"./ai_logo_color.svg"}
            alt="logo"
            className="hidden lg:block"
          />
          <div className="lg:hidden w-[150px]">
            <img src={"./ai_logo_color.svg"} alt="logo" />
          </div>
          <Input
            type="search"
            variant="bordered"
            placeholder="Traži"
            radius="full"
            labelPlacement="outside"
            className="hidden lg:block"
            classNames={{
              inputWrapper: "shadow-none border-[1px]",
              input: "text-md tracking-wide",
            }}
            /*endContent={
              <Search className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }*/
          />
          <div className="gap-4 hidden lg:flex">
            <Button
              radius="full"
              className="px-9 bg-[#00a5e6] text-white font-semibold text-md">
              Prijava
            </Button>
            <Button
              radius="full"
              color="default"
              className="px-5 bg-slate-200 font-semibold text-md">
              Registracija
            </Button>
          </div>
          <div className="gap-4 flex lg:hidden">
            <Button
              radius="full"
              color="default"
              className="px-5 bg-slate-200 text-md">
              Postani član
            </Button>
            <Button
              radius="full"
              color="default"
              className="bg-slate-200"
              isIconOnly>
              {/* <Menu className="p-[2px]" /> */}
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center h-[40%] border-solid border-t-[1px]">
        <div className="max-w-[1330px] w-full p-3 flex items-center justify-between font-semibold">
          <div className="flex gap-10">
            <Link href="/publication">POČETNA</Link>
            <Link href="/publication">PUBLIKACIJE</Link>
            <Link href="/publication">ISTRAŽIVAČI</Link>
            <Link href="/publication">O NAMA</Link>
          </div>
          <Link href="/publication">KONTAKT</Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
