"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import fetchWeatherData from "@/FetchingService";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { FormEvent } from "react";
import { City } from "@/app/page";

const cities = [
  { label: "Tunis", value: "Tunis" },
  { label: "Sfax", value: "Sfax" },
  { label: "Mannouba", value: "Mannouba" },
  { label: "Soukra", value: "Soukra" },
] as const;

const FormSchema = z.object({
  city: z.string({
    required_error: "Please select a city to begin.",
  }),
});

export function CountrySelect(props: any) {
  const [field, setField] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit() {
    if (!field) {
      toast({
        title: "You selected :",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">No field selected</code>
          </pre>
        ),
      });

      return;
    }
    

    const response = await fetchWeatherData(field);
    if (response) {
      props.setCities((prev: City[]) => [
        ...prev,
        {
          city: response.cityName,
          temperatureToday: response.weatherData.Temperature,
          temperatureTomorrow: response.weatherData.TommorowTemperature,
          precipitationToday: "",
          precipitationTomorrow: "",
        },
      ]);
    } else {
      toast({
        title: "We're Sorry, ",
        description: (
          field + " doesn't exist in our database"
        ),
      });
    }

    props.setIsModalOpen(false);
  }

  function handleAdd(event: FormEvent<HTMLButtonElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex flex-col gap-4 mt-4">
      <Popover open={isOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className={cn("w-[200px] justify-between")}
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            {field
              ? cities.find((city) => city.value === field)?.label
              : "Select a city"}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search cities..." className="h-9" />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {cities.map((city: any) => (
                <CommandItem
                  value={city.label}
                  key={city.value}
                  onSelect={() => {
                    setField(city.value);
                    setIsOpen((prev) => !prev);
                  }}
                >
                  {city.label}
                  {city.value === field && (
                    <CheckIcon
                      className={cn("ml-auto h-4 w-4", "opacity-100")}
                    />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      <Button type="submit" onClick={onSubmit}>
        Add
      </Button>
    </div>
  );
}
