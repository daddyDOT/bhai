import { Input, Button } from "@nextui-org/react";

const Subscribe = () => {
  return (
    <div className="container mx-auto py-12 px-8 lg:px-16 relative bg-[#263387]">
      <div className="w-full h-[300px]">
        <div className="max-w-[1330px] h-full m-auto justify-between flex items-center">
          <div className="flex gap-5 text-white">
            <div>
              <h1 className="text-xl font-semibold mb-10">
                Šta je BH akademski imenik?
              </h1>
              <p className="text-xl w-[300px]">
                BH akademski imenik je platforma za prikupljanje i
                dokumentovanje naučno-istraživačkih aktivnosti svih istraživača
                BH porijekla.
              </p>
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-10">
                Ko sve može imati profil?
              </h1>
              <p className="text-xl w-[300px]">
                Sve osobe BH porijekla koje imaju barem jednu naučnu publikaciju
                su dobrodošle da se prijave na BH akademski imenik.
              </p>
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-10">
                Imate još pitanja?
              </h1>
              <p className="text-xl w-[300px]">
                Saznaj više na stranici često postavljenih pitanja.
              </p>
            </div>
          </div>
          <img src="./ai_logo_inverted.svg" alt="logo-white" />
        </div>
      </div>

      <div className="w-full h-[70px] bg-[#1e286c] p-4">
        <div className="max-w-[1330px] h-full m-auto flex items-center">
          <p className="text-lg text-white">
            BH Akademski Imenik 2023. Sva prava zadržana. Design by: RunIT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
