/**
 * Lista reduzida de timezones IANA
 * Baseado no arquivo timezone.html
 */
export const TIMEZONES = [
  // US/Canada
  'America/Los_Angeles',      // Pacific Time - US & Canada
  'America/Denver',            // Mountain Time - US & Canada
  'America/Chicago',           // Central Time - US & Canada
  'America/New_York',          // Eastern Time - US & Canada
  'America/Anchorage',         // Alaska Time
  'America/Phoenix',           // Arizona, Yukon Time
  'America/St_Johns',          // Newfoundland Time
  'Pacific/Honolulu',         // Hawaii Time

  // America
  'America/Adak',
  'America/Argentina/Buenos_Aires',  // Buenos Aires Time
  'America/Asuncion',                // Asuncion Time
  'America/Bogota',                  // Bogota, Jamaica, Lima Time
  'America/Campo_Grande',
  'America/Caracas',                 // Caracas Time
  'America/Godthab',
  'America/Halifax',                 // Atlantic Time
  'America/Regina',                  // Saskatchewan, Guatemala, Costa Rica Time
  'America/Havana',
  'America/Mazatlan',
  'America/Mexico_City',             // Mexico City Time
  'America/Montevideo',              // Montevideo Time
  'America/Miquelon',
  'America/Noronha',
  'America/Santiago',                // Santiago Time
  'Atlantic/Bermuda',                // Atlantic Standard Time
  'America/Sao_Paulo',               // Brasilia Time

  // Africa
  'Africa/Cairo',
  'Africa/Johannesburg',             // Central Africa Time
  'Africa/Lagos',                    // West Africa Time
  'Africa/Windhoek',

  // Asia
  'Asia/Amman',                      // Jordan Time
  'Asia/Baghdad',                    // Baghdad, East Africa Time
  'Asia/Baku',
  'Asia/Beirut',                     // Lebanon Time
  'Asia/Damascus',                   // Syria Time
  'Asia/Dhaka',
  'Asia/Dubai',                      // Dubai Time
  'Asia/Gaza',
  'Asia/Irkutsk',
  'Asia/Ho_Chi_Minh',                // Indochina Time
  'Asia/Jerusalem',                  // Israel Time
  'Asia/Kabul',                      // Kabul Time
  'Asia/Karachi',                    // Pakistan, Maldives Time
  'Asia/Kathmandu',                  // Kathmandu Time
  'Asia/Kolkata',                    // India, Sri Lanka Time
  'Asia/Krasnoyarsk',                // Krasnoyarsk Time
  'Asia/Omsk',
  'Asia/Yangon',                     // Asia/Rangoon
  'Asia/Shanghai',                   // China, Singapore, Perth
  'Asia/Tehran',                     // Tehran Time
  'Asia/Tokyo',                      // Japan, Korea Time
  'Asia/Vladivostok',
  'Asia/Yakutsk',
  'Asia/Yekaterinburg',              // Yekaterinburg Time
  'Asia/Yerevan',

  // Atlantic
  'Atlantic/Azores',                 // Azores Time
  'Atlantic/Cape_Verde',             // Cape Verde Time

  // Australia
  'Australia/Adelaide',               // Adelaide Time
  'Australia/Brisbane',              // Brisbane Time
  'Australia/Darwin',
  'Australia/Eucla',
  'Australia/Lord_Howe',
  'Australia/Perth',
  'Australia/Sydney',                // Sydney, Melbourne Time

  // UTC
  'UTC',

  // Europe
  'Europe/Berlin',                   // Central European Time
  'Europe/Athens',                   // Eastern European Time
  'Europe/London',                   // UK, Ireland, Lisbon Time
  'Europe/Minsk',                    // Minsk Time
  'Europe/Moscow',                   // Moscow Time
  'Europe/Istanbul',                 // Turkey Time

  // Pacific
  'Pacific/Apia',
  'Pacific/Auckland',                // Auckland Time
  'Pacific/Chatham',
  'Pacific/Easter',
  'Pacific/Fiji',
  'Pacific/Gambier',
  'Pacific/Kiritimati',
  'Pacific/Majuro',
  'Pacific/Marquesas',
  'Pacific/Norfolk',
  'Pacific/Noumea',
  'Pacific/Pago_Pago',
  'Pacific/Pitcairn',
  'Pacific/Tarawa',
  'Pacific/Tongatapu',
] as const;

/**
 * Tipo TypeScript para timezones
 */
export type Timezone = typeof TIMEZONES[number];

/**
 * Função auxiliar para verificar se um timezone é válido
 */
export function isValidTimezone(timezone: string): timezone is Timezone {
  return TIMEZONES.includes(timezone as Timezone);
}

/**
 * Função auxiliar para obter timezones agrupados por região
 */
export function getTimezonesByRegion() {
  const regions: Record<string, string[]> = {
    Africa: [],
    America: [],
    Antarctica: [],
    Arctic: [],
    Asia: [],
    Atlantic: [],
    Australia: [],
    Europe: [],
    Indian: [],
    Pacific: [],
    UTC: [],
  };

  TIMEZONES.forEach((tz) => {
    const region = tz.split('/')[0];
    if (regions[region]) {
      regions[region].push(tz);
    } else if (tz === 'UTC') {
      regions.UTC.push(tz);
    }
  });

  return regions;
}
