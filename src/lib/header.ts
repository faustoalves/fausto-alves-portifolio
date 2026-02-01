export interface HeaderProps {
  id: number;
  title: string;
  description: string;
  imageFront: string;
  imageBg: string;
  imageFrontMobile: string;
  imageBgMobile: string;
  days: number[];
  time: {
    start: number;
    end: number;
  };
}

export interface DayScheduleItem extends HeaderProps {
  isHoliday: boolean;
}

export interface HolidaysProps {
  day: number;
  month: number;
}

export const Header: HeaderProps[] = [
  {
    id: 1,
    title: "Sleeping",
    description: "Completely out, see you tomorrow",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032711/portifolio/header/sleep_front_kcycc2.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032696/portifolio/header/sleep_back_eqhujk.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881326/portifolio/header/sleep_mobile_front_qdi4ri.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881318/portifolio/header/sleep_mobile_back_oqntzg.png",
    days: [1, 2, 3, 4, 5, 6, 7, 8],
    time: {
      start: 0,
      end: 7,
    },
  },
  {
    id: 2,
    title: "Sleeping",
    description: "Completely out, see you tomorrow",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032696/portifolio/header/sleep_back_eqhujk.png",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032711/portifolio/header/sleep_front_kcycc2.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881326/portifolio/header/sleep_mobile_front_qdi4ri.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881318/portifolio/header/sleep_mobile_back_oqntzg.png",
    days: [1, 2, 3, 4, 5, 6, 7, 8],
    time: {
      start: 23,
      end: 24,
    },
  },
  {
    id: 3,
    title: "Developing",
    description: "Locked on the screen, the rest of the world on pause",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032714/portifolio/header/dev_front_i51k9w.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032705/portifolio/header/dev_back_y4kxtc.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881333/portifolio/header/dev_mobile_front_z6zby2.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881324/portifolio/header/dev_mobile_back_sgh4yy.png",
    days: [1, 2, 3, 4, 5],
    time: {
      start: 10,
      end: 12,
    },
  },
  {
    id: 4,
    title: "Developing",
    description: "A lot of stuff open and I'm making it all look simple",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032714/portifolio/header/dev_front_i51k9w.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032705/portifolio/header/dev_back_y4kxtc.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881333/portifolio/header/dev_mobile_front_z6zby2.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881324/portifolio/header/dev_mobile_back_sgh4yy.png",
    days: [1, 2, 3, 4, 5],
    time: {
      start: 14,
      end: 18,
    },
  },
  {
    id: 5,
    title: "Calling",
    description: "Talking more than I should, listening less than I'd like",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032714/portifolio/header/call_front_dovke7.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032708/portifolio/header/call_back_gc2pvw.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881332/portifolio/header/call_mobile_front_healah.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881323/portifolio/header/call_mobile_back_ca9ixh.png",
    days: [1, 2, 3, 4, 5],
    time: {
      start: 9,
      end: 10,
    },
  },
  {
    id: 6,
    title: "Calling",
    description: "Waving my hands like everyone's actually here in the room",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032714/portifolio/header/call_front_dovke7.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032708/portifolio/header/call_back_gc2pvw.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881332/portifolio/header/call_mobile_front_healah.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881323/portifolio/header/call_mobile_back_ca9ixh.png",
    days: [1, 2, 3, 4, 5],
    time: {
      start: 13,
      end: 14,
    },
  },
  {
    id: 7,
    title: "Coffee",
    description: "First sip of the day, still trying to actually wake up",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032713/portifolio/header/coffee_front_tiajkv.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032706/portifolio/header/coffee_back_j3gi7x.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881330/portifolio/header/coffee_mobile_front_nsj1vg.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881319/portifolio/header/coffee_mobile_back_x6wqcf.png",
    days: [1, 2, 3, 4, 5, 6, 7, 8],
    time: {
      start: 8,
      end: 9,
    },
  },
  {
    id: 8,
    title: "Gym",
    description: "My arms are burning and I swore I’d go easy today",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032712/portifolio/header/gym_front_nvthy0.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032705/portifolio/header/gym_back_lmtypg.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881331/portifolio/header/gym_mobile_front_jkysyc.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881319/portifolio/header/gym_mobile_back_xla0pg.png",
    days: [1, 3, 5],
    time: {
      start: 18,
      end: 20,
    },
  },
  {
    id: 9,
    title: "Pub",
    description: "Laughing out loud, not checking the time or my phone",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032712/portifolio/header/pub_front_dpdgtc.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032703/portifolio/header/pub_back_inryxr.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881329/portifolio/header/pub_mobile_front_lueuz5.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881319/portifolio/header/pub_mobile_back_sog6w5.png",
    days: [5, 6, 8],
    time: {
      start: 21,
      end: 23,
    },
  },
  {
    id: 10,
    title: "Relax",
    description: "Lying down with no rush, just letting time go by",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032712/portifolio/header/relax_front_wglsmw.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032699/portifolio/header/relax_back_p9qkwv.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881324/portifolio/header/relax_mobile_front_tiheww.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881318/portifolio/header/relax_mobile_back_fvis9q.png",
    days: [1, 2, 3, 4],
    time: {
      start: 22,
      end: 23,
    },
  },
  {
    id: 11,
    title: "Relax",
    description: "No plans, no guilt, just resting",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032712/portifolio/header/relax_front_wglsmw.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032699/portifolio/header/relax_back_p9qkwv.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881324/portifolio/header/relax_mobile_front_tiheww.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881318/portifolio/header/relax_mobile_back_fvis9q.png",
    days: [7],
    time: {
      start: 21,
      end: 23,
    },
  },
  {
    id: 12,
    title: "Dinner",
    description: "Full plate, easy talk and no rush to leave the table",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032711/portifolio/header/dinner_front_kaejvi.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769039417/portifolio/header/dinner_back_sr4dpt.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881326/portifolio/header/dinner_mobile_front_jmu4b8.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881318/portifolio/header/dinner_mobile_back_tb660x.png",
    days: [1, 2, 3, 4, 5, 6, 7, 8],
    time: {
      start: 20,
      end: 21,
    },
  },
  {
    id: 13,
    title: "BBQ",
    description: "Barbecue smoke in the air and the conversation going far",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032712/portifolio/header/bbq_front_mc0ryq.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032701/portifolio/header/bbq_back_tmh7mk.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881328/portifolio/header/bbq_mobile_front_pmitbz.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881319/portifolio/header/bbq_mobile_back_x4ngyw.png",
    days: [7, 8],
    time: {
      start: 12,
      end: 18,
    },
  },
  {
    id: 14,
    title: "Support",
    description:
      "My team mostly loses, when we draw it already feels like a final",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032712/portifolio/header/support_front_rqztui.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032703/portifolio/header/support_back_hgb2ug.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881329/portifolio/header/support_mobile_front_nmzzle.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881319/portifolio/header/support_mobile_back_jh9lxa.png",
    days: [7, 8],
    time: {
      start: 18,
      end: 20,
    },
  },
  {
    id: 15,
    title: "Cats",
    description:
      "House is quiet until someone knocks something over in the kitchen",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032711/portifolio/header/cats_front_vbr3xa.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032703/portifolio/header/cats_back_vfzkia.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881328/portifolio/header/cats_mobile_front_y0jycv.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881319/portifolio/header/cats_mobile_back_r2sk5o.png",
    days: [1, 2, 3, 4, 5, 6, 7, 8],
    time: {
      start: 7,
      end: 8,
    },
  },
  {
    id: 16,
    title: "Cats",
    description:
      "House is quiet until someone knocks something over in the kitchen",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032711/portifolio/header/cats_front_vbr3xa.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032703/portifolio/header/cats_back_vfzkia.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881328/portifolio/header/cats_mobile_front_y0jycv.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881319/portifolio/header/cats_mobile_back_r2sk5o.png",
    days: [1, 2, 3, 4, 5, 8],
    time: {
      start: 21,
      end: 22,
    },
  },
  {
    id: 17,
    title: "Lunch",
    description:
      "Simple lunch, but it’s the highlight of the middle of the day",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032709/portifolio/header/lunch_front_dp8kae.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032698/portifolio/header/lunch_back_vdyvuo.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881328/portifolio/header/lunch_mobile_front_hevcbl.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881319/portifolio/header/lunch_mobile_back_zyjdrn.png",
    days: [1, 2, 3, 4, 5],
    time: {
      start: 12,
      end: 13,
    },
  },
  {
    id: 18,
    title: "Beach",
    description: "Feet in the sand, listening to the waves with zero rush",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032708/portifolio/header/beach_front_ks9wup.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032699/portifolio/header/beach_back_cnzep5.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881325/portifolio/header/beach_mobile_front_f6pqef.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881318/portifolio/header/beach_mobile_back_edf5gj.png",
    days: [6],
    time: {
      start: 9,
      end: 12,
    },
  },
  {
    id: 19,
    title: "Beach",
    description: "Cold water, warm sun and a really light head",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032708/portifolio/header/beach_front_ks9wup.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032699/portifolio/header/beach_back_cnzep5.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881325/portifolio/header/beach_mobile_front_f6pqef.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881318/portifolio/header/beach_mobile_back_edf5gj.png",
    days: [6],
    time: {
      start: 13,
      end: 19,
    },
  },
  {
    id: 20,
    title: "Sun",
    description:
      "Sun setting on the beach and me wishing the day would last a bit longer",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032706/portifolio/header/sun_front_vjkwxa.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032706/portifolio/header/sun_back_l1fxnw.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881325/portifolio/header/sun_mobile_front_cjk5oi.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881318/portifolio/header/sun_mobile_back_hlclwo.png",
    days: [6],
    time: {
      start: 19,
      end: 20,
    },
  },
  {
    id: 21,
    title: "Cycling",
    description: "Wind on my face, tired legs and a clear mind",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032708/portifolio/header/cycling_front_srs7f1.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032697/portifolio/header/cycling_back_c9lxrx.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881325/portifolio/header/cycling_mobile_front_vnstgl.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881317/portifolio/header/cycling_mobile_back_szetbo.png",
    days: [2, 4],
    time: {
      start: 18,
      end: 20,
    },
  },
  {
    id: 22,
    title: "Cycling",
    description: "Endless climb, but the view at the top makes it worth it",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032708/portifolio/header/cycling_front_srs7f1.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032697/portifolio/header/cycling_back_c9lxrx.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881325/portifolio/header/cycling_mobile_front_vnstgl.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881317/portifolio/header/cycling_mobile_back_szetbo.png",
    days: [7, 8],
    time: {
      start: 9,
      end: 12,
    },
  },
  {
    id: 23,
    title: "Beach Lunch",
    description: "Food on the sand, bare feet and zero formality",
    imageFront:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032707/portifolio/header/beach_lunch_front_pex6jo.png",
    imageBg:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769032697/portifolio/header/beach_lunch_back_l1fkog.png",
    imageFrontMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881324/portifolio/header/beach_lunch_mobile_front_rwwsss.png",
    imageBgMobile:
      "https://res.cloudinary.com/faustoalves/image/upload/v1769881318/portifolio/header/beach_lunch_mobile_back_fmnibf.png",
    days: [6],
    time: {
      start: 12,
      end: 13,
    },
  },
];

export const Holidays: HolidaysProps[] = [
  {
    day: 1,
    month: 1,
  },
  {
    day: 18,
    month: 2,
  },
];

export interface DayScheduleItem extends HeaderProps {
  isHoliday: boolean;
}

export const getDaySchedule = (dateTime: Date): DayScheduleItem[] => {
  const day = dateTime.getDay();
  const currentDay = dateTime.getDate();
  const currentMonth = dateTime.getMonth() + 1;

  const isHoliday = Holidays.some(
    (holiday) => holiday.day === currentDay && holiday.month === currentMonth,
  );

  const dayIndex = day === 0 ? 7 : day;

  const searchDays = isHoliday ? [dayIndex, 8] : [dayIndex];

  const dayActivities = Header.filter((item) =>
    searchDays.some((d) => item.days.includes(d)),
  );

  const sortedActivities = dayActivities.sort((a, b) => {
    if (a.time.start !== b.time.start) {
      return a.time.start - b.time.start;
    }
    return a.time.end - b.time.end;
  });

  return sortedActivities.map((activity) => ({
    ...activity,
    isHoliday,
  }));
};

export const getHeaderByDateTime = (dateTime: Date): DayScheduleItem | null => {
  const day = dateTime.getDay();
  const hour = dateTime.getHours();
  const currentDay = dateTime.getDate();
  const currentMonth = dateTime.getMonth() + 1;

  const isHoliday = Holidays.some(
    (holiday) => holiday.day === currentDay && holiday.month === currentMonth,
  );

  const dayIndex = day === 0 ? 7 : day;
  const searchDays = isHoliday ? [dayIndex, 8] : [dayIndex];

  const activity = Header.find((item) => {
    const matchesDay = searchDays.some((d) => item.days.includes(d));
    const matchesTime = hour >= item.time.start && hour < item.time.end;
    return matchesDay && matchesTime;
  });

  if (!activity) {
    return null;
  }

  return {
    ...activity,
    isHoliday,
  };
};
