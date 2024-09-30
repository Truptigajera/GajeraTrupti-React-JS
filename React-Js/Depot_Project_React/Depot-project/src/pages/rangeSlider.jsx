import React from "react";
import {Slider, Tooltip} from "@nextui-org/react";
// import {InfoIcon} from "./InfoIcon";

export default function App() {
  return (
    <Slider
      size="sm"
      color="secondary"
      label="Price Range"
      maxValue={1000}
      step={10}
      defaultValue={[100, 300]}
      formatOptions={{style: "currency", currency: "USD"}}
      classNames={{
        base: "max-w-md gap-3",
        filler: "bg-black",
      }}
    />
  );
}
