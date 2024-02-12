import React from "react";
import { cityWeatherType } from "../types/cityWeatherType";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

//

type CardProps = {
  className?: string;
  cityWeather: cityWeatherType;
};

function WeatherCard({
  className,
  cityWeather = {
    city: "",
    temperatureToday: 0,
    temperatureTomorrow: 0,
    precipitationToday: "",
    precipitationTomorrow: "",
  },
  ...props
}: CardProps) {
  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardHeader>
        <CardTitle>City : {cityWeather.city}</CardTitle>
        {/* <CardDescription>You have 3 unread messages.</CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Today Temperature :
              </p>
              <p className="text-sm text-muted-foreground">
                {cityWeather.temperatureToday}° Degree
              </p>
            </div>
          </div>

          <div className="mb-2 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Tomorrow Temperature :
              </p>

              <p className="text-sm text-muted-foreground">
                {cityWeather.temperatureTomorrow}° Degree
              </p>
            </div>
          </div>

          <div className="mb-2 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Tomorrow Precipitation
              </p>
              <p className="text-sm text-muted-foreground">
                {cityWeather.precipitationToday}
              </p>
            </div>
          </div>

          <div className="mb-2 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Tomorrow Precipitation
              </p>
              <p className="text-sm text-muted-foreground">
                {cityWeather.precipitationTomorrow}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      {/* <CardFooter>
        <Button className="w-full">
          <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter> */}
    </Card>
  );
}

export default WeatherCard;
