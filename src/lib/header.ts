export interface HeaderProps {
  id: number;
  title: string;
  description: string;
  imageFront: string;
  imageBg: string;
  days: number[];
  time: {
    start: number;
    end: number;
  }
}

export interface DayScheduleItem extends HeaderProps {
  isHoliday: boolean;
}

export interface HolidaysProps {
  day: number;
  month: number;
}

export const Header:HeaderProps[] = [
  {
    id: 1,
    title: 'Sleeping',
    description: 'I sleep 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032711/portifolio/header/sleep_front_kcycc2.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032696/portifolio/header/sleep_back_eqhujk.png',
    days: [1, 2, 3, 4, 5, 6, 7, 8],
    time: {
      start: 0,
      end: 7,
    }
  },
  {
    id: 2,
    title: 'Sleeping',
    description: 'I sleep 8 hours a day',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032696/portifolio/header/sleep_back_eqhujk.png',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032711/portifolio/header/sleep_front_kcycc2.png',
    days: [1, 2, 3, 4, 5, 6, 7, 8],
    time: {
      start: 23,
      end: 24,
    }
  },
  {
    id: 3,
    title: 'Developing',
    description: 'I develop 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032714/portifolio/header/dev_front_i51k9w.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032705/portifolio/header/dev_back_y4kxtc.png≈',
    days: [1, 2, 3, 4, 5],
    time: {
      start: 10,
      end: 12,
    }
  },
  {
    id: 4,
    title: 'Developing',
    description: 'I develop 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032714/portifolio/header/dev_front_i51k9w.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032705/portifolio/header/dev_back_y4kxtc.png',
    days: [1, 2, 3, 4, 5],
    time: {
      start: 14,
      end: 18,
    }
  },
  {
    id: 5,
    title: 'Calling',
    description: 'I call 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032714/portifolio/header/call_front_dovke7.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032708/portifolio/header/call_back_gc2pvw.png',
    days: [1, 2, 3, 4, 5],
    time: {
      start: 9,
      end: 10,
    }
  },
  {
    id: 6,
    title: 'Calling',
    description: 'I call 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032714/portifolio/header/call_front_dovke7.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032708/portifolio/header/call_back_gc2pvw.png',
    days: [1, 2, 3, 4, 5],
    time: {
      start: 13,
      end: 14,
    }
  },
  {
    id: 7,
    title: 'Coffee',
    description: 'I drink coffee 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032713/portifolio/header/coffee_front_tiajkv.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032706/portifolio/header/coffee_back_j3gi7x.png',
    days: [1, 2, 3, 4, 5, 6, 7, 8],
    time: {
      start: 8,
      end: 9,
    }
  },
  {
    id: 8,
    title: 'Gym',
    description: 'I go to the gym 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032712/portifolio/header/gym_front_nvthy0.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032705/portifolio/header/gym_back_lmtypg.png',
    days: [1, 3, 5],
    time: {
      start: 18,
      end: 20,
    }
  },
  {
    id: 9,
    title: 'Pub',
    description: 'I go to the pub 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032712/portifolio/header/pub_front_dpdgtc.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032703/portifolio/header/pub_back_inryxr.png',
    days: [5, 6, 8],
    time: {
      start: 21,
      end: 23,
    }
  },
  {
    id: 10,
    title: 'Relax',
    description: 'I relax 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032712/portifolio/header/relax_front_wglsmw.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032699/portifolio/header/relax_back_p9qkwv.png',
    days: [1, 2, 3, 4],
    time: {
      start: 22,
      end: 23,
    }
  },
  {
    id: 11,
    title: 'Relax',
    description: 'I relax 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032712/portifolio/header/relax_front_wglsmw.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032699/portifolio/header/relax_back_p9qkwv.png',
    days: [7],
    time: {
      start: 21,
      end: 23,
    }
  },
  {
    id: 12,
    title: 'Dinner',
    description: 'I eat dinner 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032711/portifolio/header/dinner_front_kaejvi.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769039417/portifolio/header/dinner_back_sr4dpt.png',
    days: [1, 2, 3, 4, 5, 6, 7, 8],
    time: {
      start: 20,
      end: 21,
    }
  },
  {
    id: 13,
    title: 'BBQ',
    description: 'I go to the BBQ 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032712/portifolio/header/bbq_front_mc0ryq.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032701/portifolio/header/bbq_back_tmh7mk.png',
    days: [ 7, 8],
    time: {
      start: 12,
      end: 18,
    }
  },
  {
    id: 14,
    title: 'Support',
    description: 'I support 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032712/portifolio/header/support_front_rqztui.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032703/portifolio/header/support_back_hgb2ug.png',
    days: [7, 8],
    time: {
      start: 18,
      end: 20,
    }
  },
  {
    id: 15,
    title: 'Cats',
    description: 'I have 8 cats',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032711/portifolio/header/cats_front_vbr3xa.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032703/portifolio/header/cats_back_vfzkia.png',
    days: [1, 2, 3, 4, 5, 6, 7,  8],
    time: {
      start: 7,
      end: 8,
    }
  },
  {
    id: 16,
    title: 'Cats',
    description: 'I have 8 cats',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032711/portifolio/header/cats_front_vbr3xa.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032703/portifolio/header/cats_back_vfzkia.png',
    days: [1, 2, 3, 4, 5,  8],
    time: {
      start: 21,
      end: 22,
    }
  },
  {
    id: 17,
    title: 'Lunch',
    description: 'I eat lunch 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032709/portifolio/header/lunch_front_dp8kae.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032698/portifolio/header/lunch_back_vdyvuo.png',
    days: [1, 2, 3, 4, 5],
    time: {
      start: 12,
      end: 13,
    }
  },
  {
    id: 18,
    title: 'Beach',
    description: 'I go to the beach 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032708/portifolio/header/beach_front_ks9wup.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032699/portifolio/header/beach_back_cnzep5.png',
    days: [6],
    time: {
      start: 9,
      end: 12,
    }
  },
  {
    id: 19,
    title: 'Beach',
    description: 'I go to the beach 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032708/portifolio/header/beach_front_ks9wup.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032699/portifolio/header/beach_back_cnzep5.png',
    days: [6],
    time: {
      start: 13,
      end: 19,
    }
  },
  {
    id: 20,
    title: 'Sun',
    description: 'I go to the sun 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032706/portifolio/header/sun_front_vjkwxa.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032706/portifolio/header/sun_back_l1fxnw.png',
    days: [6],
    time: {
      start: 19,
      end: 20,
    }
  },
  {
    id: 21,
    title: 'Cycling',
    description: 'I cycle 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032708/portifolio/header/cycling_front_srs7f1.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032697/portifolio/header/cycling_back_c9lxrx.png',
    days: [2,4],
    time: {
      start: 18,
      end: 20,
    }
  },
  {
    id: 22,
    title: 'Cycling',
    description: 'I cycle 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032708/portifolio/header/cycling_front_srs7f1.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032697/portifolio/header/cycling_back_c9lxrx.png',
    days: [7,8],
    time: {
      start: 9,
      end: 12,
    }
  }, 
  {
    id: 23,
    title: 'Beach Lunch',
    description: 'I go to the beach lunch 8 hours a day',
    imageFront: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032707/portifolio/header/beach_lunch_front_pex6jo.png',
    imageBg: 'https://res.cloudinary.com/faustoalves/image/upload/v1769032697/portifolio/header/beach_lunch_back_l1fkog.png',
    days: [6],
    time: {
      start: 12,
      end: 13,
    }
  }
]

export const Holidays:HolidaysProps[] = [
  {
    day: 1,
    month: 1,
  },
  {
    day: 18,
    month: 2,
  }
]


export interface DayScheduleItem extends HeaderProps {
  isHoliday: boolean;
}

export const getDaySchedule = (dateTime: Date): DayScheduleItem[] => {
  const day = dateTime.getDay();
  const currentDay = dateTime.getDate();
  const currentMonth = dateTime.getMonth() + 1;

  const isHoliday = Holidays.some(
    holiday => holiday.day === currentDay && holiday.month === currentMonth
  );

  const dayIndex = day === 0 ? 7 : day;

  const searchDays = isHoliday ? [dayIndex, 8] : [dayIndex];

  const dayActivities = Header.filter(item => 
    searchDays.some(d => item.days.includes(d))
  );

  const sortedActivities = dayActivities.sort((a, b) => {
    if (a.time.start !== b.time.start) {
      return a.time.start - b.time.start;
    }
    return a.time.end - b.time.end;
  });

  return sortedActivities.map(activity => ({
    ...activity,
    isHoliday
  }));
};


export const getHeaderByDateTime = (dateTime: Date): DayScheduleItem | null => {
  const day = dateTime.getDay();
  const hour = dateTime.getHours(); 
  const currentDay = dateTime.getDate();
  const currentMonth = dateTime.getMonth() + 1; 

  const isHoliday = Holidays.some(
    holiday => holiday.day === currentDay && holiday.month === currentMonth
  );

  const dayIndex = day === 0 ? 7 : day;
  const searchDays = isHoliday ? [dayIndex, 8] : [dayIndex];

  const activity = Header.find(item => {
    const matchesDay = searchDays.some(d => item.days.includes(d));
    const matchesTime = hour >= item.time.start && hour < item.time.end;
    return matchesDay && matchesTime;
  });

  if (!activity) {
    return null;
  }

  return {
    ...activity,
    isHoliday
  }
}
