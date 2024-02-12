"use client";

import WeatherCards from "@/components/weatherCards";
import { CountrySelect } from "@/components/country-select";
import { useState } from "react";
import { PlusIcon } from "@radix-ui/react-icons";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export type City = {
  city: string;
  precipitationToday: string;
  precipitationTomorrow: string;
  temperatureToday: number;
  temperatureTomorrow: number;
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [data, setData] = useState<any>();

  const [cities, setCities] = useState<City[]>([]);

  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Multi city Weather App (pro)
      </h1>

      <div className="z-10 max-w-5xl w-full justify-end items-center text-sm lg:flex mt-8">
        <Dialog open={isModalOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setIsModalOpen(true)}>
              <PlusIcon className="mr-2 h-4 w-4" /> Add city
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Select your city</DialogTitle>
            </DialogHeader>
            <CountrySelect
              setIsModalOpen={setIsModalOpen}
              setCities={setCities}
            />
          </DialogContent>
        </Dialog>
      </div>
      <WeatherCards cities={cities} />
    </main>
  );
}
