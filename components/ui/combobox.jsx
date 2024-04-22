"use client";

import * as React from "react";
import { useContext } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { NewsContext } from "@/context/NewsContext";

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const { frameworks, value, setValue } = useContext(NewsContext);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size={"sm"}
          role="combobox"
          aria-expanded={open}
          aria-label="Select Department"
          className="w-[200px] justify-between dark:text-white text-md"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select Country"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50 lg:block" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>Not found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
