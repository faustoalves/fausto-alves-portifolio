"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { TIMEZONES, getTimezonesByRegion } from "@/lib/timezone";

interface TimezoneSelectorProps {
  onSelect?: (timezone: string) => void;
  selectedTimezone?: string;
}

const TimezoneSelector: React.FC<TimezoneSelectorProps> = ({
  onSelect,
  selectedTimezone,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTimes, setCurrentTimes] = useState<Record<string, string>>({});

  // Atualizar horários a cada segundo
  useEffect(() => {
    const updateTimes = () => {
      const times: Record<string, string> = {};
      TIMEZONES.forEach((tz) => {
        try {
          const now = new Date();
          const timeString = now.toLocaleString("pt-BR", {
            timeZone: tz,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          });
          times[tz] = timeString;
        } catch {
          times[tz] = "N/A";
        }
      });
      setCurrentTimes(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  // Obter timezones agrupados por região
  const timezonesByRegion = useMemo(() => {
    return getTimezonesByRegion();
  }, []);

  // Filtrar timezones baseado na busca
  const filteredTimezonesByRegion = useMemo(() => {
    if (!searchQuery.trim()) {
      return timezonesByRegion;
    }

    const query = searchQuery.toLowerCase();
    const filtered: Record<string, string[]> = {};

    Object.entries(timezonesByRegion).forEach(([region, timezones]) => {
      const filteredTz = timezones.filter((tz) =>
        tz.toLowerCase().includes(query) ||
        tz.split("/").pop()?.toLowerCase().includes(query)
      );
      if (filteredTz.length > 0) {
        filtered[region] = filteredTz;
      }
    });

    return filtered;
  }, [searchQuery, timezonesByRegion]);

  const formatTimezoneName = (tz: string) => {
    const parts = tz.split("/");
    return parts.length > 1 ? parts.slice(1).join(" / ") : tz;
  };

  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <Input
          type="text"
          placeholder="Buscar timezone..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="max-h-[600px] overflow-y-auto">
        <Accordion type="multiple" className="w-full">
          {Object.entries(filteredTimezonesByRegion)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([region, timezones]) => (
              <AccordionItem key={region} value={region}>
                <AccordionTrigger className="text-sm font-semibold">
                  {region} ({timezones.length})
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {timezones
                      .sort()
                      .map((tz) => (
                        <button
                          key={tz}
                          onClick={() => onSelect?.(tz)}
                          className={`w-full text-left p-2 rounded-md transition-colors hover:bg-purple-900/50 ${
                            selectedTimezone === tz
                              ? "bg-purple-700 text-white"
                              : "bg-purple-800/30 text-purple-200"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                              <span className="text-sm font-medium">
                                {formatTimezoneName(tz)}
                              </span>
                              <span className="text-xs text-purple-300/70">
                                {tz}
                              </span>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="text-sm font-mono font-semibold">
                                {currentTimes[tz] || "..."}
                              </span>
                            </div>
                          </div>
                        </button>
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
};

export default TimezoneSelector;
