"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  getTimezonesByRegion,
  type Timezone,
} from "@/lib/timezone";
import { useScheduleStore } from "@/stores/ScheduleStore";

function formatTimezoneLabel(tz: string): string {
  if (tz === "UTC") return "UTC";
  const parts = tz.split("/");
  return parts[parts.length - 1].replace(/_/g, " ");
}

type TimezoneSelectorProps = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export function TimezoneSelector({
  value,
  onChange,
  placeholder = "Select timezone...",
  className,
}: TimezoneSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const { schedule, updateSchedule } = useScheduleStore();
  const storeTimezone = schedule.timezone ?? "";

  const currentValue = ((value ?? storeTimezone) as string) ?? "";

  const regions = React.useMemo(() => getTimezonesByRegion(), []);

  const handleSelect = (tz: Timezone) => {
    updateSchedule({ timezone: tz });
    onChange?.(tz);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between font-normal", className)}
        >
          {currentValue ? formatTimezoneLabel(currentValue) : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-(--radix-popover-trigger-width) p-0"
        align="start"
      >
        <Command>
          <CommandInput placeholder="Search timezone..." className="h-9" />
          <CommandList>
            <CommandEmpty>No timezone found.</CommandEmpty>
            {Object.entries(regions).map(
              ([region, zones]) =>
                zones.length > 0 && (
                  <CommandGroup key={region} heading={region}>
                    {zones.map((tz) => (
                      <CommandItem
                        key={tz}
                        value={tz}
                        onSelect={() => handleSelect(tz as Timezone)}
                      >
                        {formatTimezoneLabel(tz)}
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            currentValue === tz ? "opacity-100" : "opacity-0",
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ),
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

/** @deprecated Use TimezoneSelector instead. Kept for backward compatibility. */
export function ComboboxWithGroupsAndSeparator() {
  return <TimezoneSelector placeholder="Select a timezone" />;
}
