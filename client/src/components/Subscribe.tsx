import { Input, Button } from "@nextui-org/react";

const Subscribe = () => {
  return (
    <div className="container mx-auto py-12 px-8 lg:px-16 relative bg-[#00a5e6]">
      <div className="w-full h-[150px] bg-[#00a5e6]">
        <div className="max-w-[1330px] h-full m-auto justify-between flex items-center">
          <p className="text-3xl text-white font-semibold">
            Pretplatite se na novosti o BH Akademskom imeniku
          </p>
          <div className="flex gap-5 items-center">
            <Input
              type="search"
              placeholder="Email adresa"
              radius="sm"
              className="w-[350px]"
              classNames={{
                inputWrapper: "shadow-none border-[1px]",
                input: "text-md tracking-wide",
              }}
            />
            <Button
              variant="bordered"
              radius="full"
              size="lg"
              className="border-[1px] text-white">
              Pretplati se
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
