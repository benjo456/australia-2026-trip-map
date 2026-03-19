const points = [
  {
    id: "sydney-arrival",
    title: "Vibe Hotel Sydney Darling Harbour",
    date: "30 Oct to 1 Nov",
    place: "Sydney",
    type: "stay",
    coordinates: [-33.8766, 151.2037],
    dayPart: "evening",
    description: "First Sydney base for the arrival weekend.",
    link: "https://vibehotels.com/book-accommodation/sydney/hotel-sydney-darling-harbour/"
  },
  {
    id: "bridge-climb",
    title: "Sydney Harbour Bridge Climb",
    date: "30 Oct",
    place: "Sydney Harbour",
    type: "tour",
    coordinates: [-33.8523, 151.2108],
    dayPart: "evening",
    description: "Twilight summit climb with harbour and skyline views."
  },
  {
    id: "blue-mountains",
    title: "Blue Mountains Deluxe Day Tour",
    date: "31 Oct",
    place: "Katoomba / Blue Mountains",
    type: "tour",
    coordinates: [-33.7322, 150.3124],
    dayPart: "afternoon",
    description: "Approximate tour anchor covering Three Sisters, Govetts Leap, and scenic lookouts."
  },
  {
    id: "ayers-rock-airport",
    title: "Ayers Rock Airport",
    date: "1 Nov",
    place: "Yulara",
    type: "travel",
    coordinates: [-25.1861, 130.9756],
    dayPart: "afternoon",
    description: "Arrival into the Red Centre from Sydney."
  },
  {
    id: "uluru-stay",
    title: "Sails in the Desert",
    date: "1 Nov to 3 Nov",
    place: "Yulara",
    type: "stay",
    coordinates: [-25.2409, 130.9839],
    dayPart: "evening",
    description: "Two-night Uluru resort stay.",
    link: "https://www.ayersrockresort.com.au/accommodation/sails-in-the-desert"
  },
  {
    id: "wintjiri-wiru",
    title: "Wintjiri Wiru Sunset Dinner",
    date: "1 Nov",
    place: "Uluru region",
    type: "tour",
    coordinates: [-25.2528, 130.9871],
    dayPart: "evening",
    description: "Evening cultural storytelling experience with sunset views."
  },
  {
    id: "desert-awakenings",
    title: "Desert Awakenings and Uluru Base",
    date: "2 Nov",
    place: "Uluru",
    type: "tour",
    coordinates: [-25.3444, 131.0369],
    dayPart: "morning",
    description: "Sunrise, breakfast, base walk, Mutitjulu Waterhole, and Cultural Centre."
  },
  {
    id: "adelaide-stay",
    title: "Majestic Roof Garden Hotel",
    date: "3 Nov to 6 Nov",
    place: "Adelaide",
    type: "stay",
    coordinates: [-34.9247, 138.6059],
    dayPart: "evening",
    description: "Adelaide city base before the South Australia road trip.",
    link: "https://www.majesticroofgardenhotel.com.au/"
  },
  {
    id: "cape-jervis",
    title: "Cape Jervis Ferry Terminal",
    date: "6 Nov",
    place: "Cape Jervis",
    type: "travel",
    coordinates: [-35.6058, 138.1054],
    dayPart: "morning",
    description: "Vehicle and passenger ferry departure for Kangaroo Island."
  },
  {
    id: "penneshaw",
    title: "Penneshaw Ferry Terminal",
    date: "6 Nov and 8 Nov",
    place: "Kangaroo Island",
    type: "travel",
    coordinates: [-35.7244, 137.9342],
    dayPart: "afternoon",
    suggestedDayKeys: ["2026-11-06", "2026-11-08"],
    description: "Ferry arrival and departure point on Kangaroo Island."
  },
  {
    id: "cabn-ki",
    title: "CABN x Kangaroo Island",
    date: "6 Nov to 8 Nov",
    place: "Kangaroo Island",
    type: "stay",
    coordinates: [-35.8138, 137.7828],
    dayPart: "evening",
    description: "Two-night Kangaroo Island cabin stay. Position shown approximately inland from Penneshaw.",
    link: "https://cabn.life/location/kangaroo-island/"
  },
  {
    id: "robe-house",
    title: "Robe House",
    date: "8 Nov to 9 Nov",
    place: "Robe",
    type: "stay",
    coordinates: [-37.1636, 139.7592],
    dayPart: "evening",
    description: "One-night stop on the coastal drive east. Approx onward drive to Port Fairy: 2 hr 45 min, or around 2 hr 30 min inland toward the Grampians.",
    link: "https://www.robehouse.com.au/"
  },
  {
    id: "merrijig",
    title: "Merrijig Inn",
    date: "9 Nov to 11 Nov",
    place: "Port Fairy",
    type: "stay",
    coordinates: [-38.3856, 142.2365],
    dayPart: "evening",
    routeVariant: "current",
    description: "Two-night stay near Port Fairy before the Great Ocean Road section. Approx drive from Robe: 2 hr 45 min.",
    link: "https://www.merrijiginn.com/"
  },
  {
    id: "grampians-detour",
    title: "Potential Grampians Stop-Off",
    date: "Possible detour",
    place: "Halls Gap / Grampians",
    type: "optional",
    coordinates: [-37.1409, 142.5193],
    dayPart: "afternoon",
    routeVariant: "skip",
    suggestedDayKeys: ["2026-11-09", "2026-11-10"],
    description: "Optional inland detour to help visualise where the Grampians sit relative to the Port Fairy and Great Ocean Road part of the trip. Approx drive from Robe: 2 hr 30 min, then around 3 hr 30 min on to Apollo Bay."
  },
  {
    id: "apollo-bay",
    title: "Captain's At The Bay",
    date: "11 Nov to 13 Nov",
    place: "Apollo Bay",
    type: "stay",
    coordinates: [-38.7572, 143.6705],
    dayPart: "evening",
    description: "Apollo Bay base on the Great Ocean Road. Approx drive from Port Fairy: 2 hr 45 min, or about 3 hr 30 min if rerouting from the Grampians instead.",
    link: "https://captains.net.au/"
  },
  {
    id: "melbourne-stay",
    title: "Punthill Flinders Lane",
    date: "13 Nov to 15 Nov",
    place: "Melbourne",
    type: "stay",
    coordinates: [-37.8165, 144.9677],
    dayPart: "evening",
    description: "Melbourne city base before flying north. Approx drive from Apollo Bay: 3 hr 15 min.",
    link: "https://punthill.com.au/hotels/punthill-flinders-lane/"
  },
  {
    id: "phillip-island",
    title: "Phillip Island Full Day Tour",
    date: "14 Nov",
    place: "Phillip Island",
    type: "tour",
    coordinates: [-38.5142, 145.1481],
    dayPart: "afternoon",
    description: "Penguin Parade, wildlife experiences, and island viewpoints."
  },
  {
    id: "hamilton-stay",
    title: "Reef View Hotel",
    date: "15 Nov to 19 Nov",
    place: "Hamilton Island",
    type: "stay",
    coordinates: [-20.3488, 148.9579],
    dayPart: "evening",
    description: "Four-night Whitsundays base with Coral Sea view room.",
    link: "https://www.hamiltonisland.com.au/accommodation/reef-view-hotel"
  },
  {
    id: "whitehaven",
    title: "Whitehaven Beach Cruise",
    date: "16 Nov",
    place: "Whitsunday Island",
    type: "tour",
    coordinates: [-20.2822, 149.0385],
    dayPart: "afternoon",
    description: "Whitehaven Beach day cruise from Hamilton Island."
  },
  {
    id: "hardy-reef",
    title: "Great Barrier Reef Adventure",
    date: "17 Nov",
    place: "Hardy Reef",
    type: "tour",
    coordinates: [-19.7204, 149.2387],
    dayPart: "afternoon",
    description: "Reefworld pontoon, snorkelling, semi-submersible, and optional scenic flight."
  },
  {
    id: "skydiving",
    title: "Optional Whitsundays Skydiving",
    date: "Self-book locally",
    place: "Airlie Beach / Whitsundays",
    type: "optional",
    coordinates: [-20.2675, 148.7169],
    dayPart: "morning",
    suggestedDayKeys: ["2026-11-18"],
    description: "Amanda noted this must be arranged directly with a local supplier and covered by insurance.",
    link: "https://www.tourismwhitsundays.com.au/"
  },
  {
    id: "sydney-final",
    title: "Vibe Hotel Sydney Darling Harbour",
    date: "19 Nov to 22 Nov",
    place: "Sydney",
    type: "stay",
    coordinates: [-33.8766, 151.2037],
    dayPart: "evening",
    description: "Final Sydney stay before the flight home.",
    link: "https://vibehotels.com/book-accommodation/sydney/hotel-sydney-darling-harbour/"
  },
  {
    id: "opera-house",
    title: "Sydney Opera House Tour",
    date: "21 Nov",
    place: "Sydney",
    type: "tour",
    coordinates: [-33.8568, 151.2153],
    dayPart: "morning",
    description: "Morning guided tour beneath the sails."
  }
];

const routeSegments = [
  {
    id: "sydney-to-uluru",
    label: "Sydney to Uluru",
    mode: "Flight",
    dateKey: "2026-11-01",
    dayPart: "morning",
    variant: "all",
    navigationMode: "search",
    points: [
      [-33.8766, 151.2037],
      [-25.2409, 130.9839]
    ]
  },
  {
    id: "uluru-to-adelaide",
    label: "Uluru to Adelaide",
    mode: "Flights via Sydney",
    dateKey: "2026-11-03",
    dayPart: "afternoon",
    variant: "all",
    navigationMode: "search",
    points: [
      [-25.2409, 130.9839],
      [-33.8766, 151.2037],
      [-34.9247, 138.6059]
    ]
  },
  {
    id: "adelaide-to-cape-jervis",
    label: "Adelaide to Cape Jervis",
    mode: "Self-drive",
    dateKey: "2026-11-06",
    dayPart: "morning",
    variant: "all",
    navigationMode: "drive",
    detail: "Approx 1 hr 45 min drive",
    points: [
      [-34.9247, 138.6059],
      [-35.6058, 138.1054]
    ]
  },
  {
    id: "cape-jervis-to-penneshaw",
    label: "Cape Jervis to Penneshaw",
    mode: "Ferry",
    dateKey: "2026-11-06",
    dayPart: "afternoon",
    variant: "all",
    navigationMode: "drive",
    points: [
      [-35.6058, 138.1054],
      [-35.7244, 137.9342]
    ]
  },
  {
    id: "penneshaw-to-cabn",
    label: "Penneshaw to CABN x Kangaroo Island",
    mode: "Self-drive",
    dateKey: "2026-11-06",
    dayPart: "afternoon",
    variant: "all",
    navigationMode: "drive",
    detail: "Approx 1 hr drive",
    points: [
      [-35.7244, 137.9342],
      [-35.8138, 137.7828]
    ]
  },
  {
    id: "cabn-to-robe",
    label: "Kangaroo Island back to Robe",
    mode: "Drive and ferry",
    dateKey: "2026-11-08",
    dayPart: "morning",
    variant: "all",
    navigationMode: "drive",
    detail: "Approx 4 hr 30 min drive time plus ferry crossing",
    points: [
      [-35.8138, 137.7828],
      [-35.7244, 137.9342],
      [-35.6058, 138.1054],
      [-37.1636, 139.7592]
    ]
  },
  {
    id: "robe-to-merrijig",
    label: "Robe to Merrijig Inn",
    mode: "Self-drive",
    dateKey: "2026-11-09",
    dayPart: "afternoon",
    variant: "current",
    navigationMode: "drive",
    detail: "Approx 2 hr 45 min drive",
    points: [
      [-37.1636, 139.7592],
      [-38.3856, 142.2365]
    ]
  },
  {
    id: "merrijig-to-apollo",
    label: "Merrijig Inn to Apollo Bay",
    mode: "Self-drive",
    dateKey: "2026-11-11",
    dayPart: "afternoon",
    variant: "current",
    navigationMode: "drive",
    detail: "Approx 2 hr 45 min drive",
    points: [
      [-38.3856, 142.2365],
      [-38.7572, 143.6705]
    ]
  },
  {
    id: "robe-to-grampians",
    label: "Robe to the Grampians",
    mode: "Optional detour",
    dateKey: "2026-11-09",
    dayPart: "afternoon",
    variant: "skip",
    navigationMode: "drive",
    detail: "Approx 2 hr 30 min inland drive",
    points: [
      [-37.1636, 139.7592],
      [-37.1409, 142.5193]
    ]
  },
  {
    id: "grampians-to-apollo",
    label: "Grampians to Apollo Bay",
    mode: "Optional detour",
    dateKey: "2026-11-10",
    dayPart: "afternoon",
    variant: "skip",
    navigationMode: "drive",
    detail: "Approx 3 hr 30 min drive to rejoin the coast",
    points: [
      [-37.1409, 142.5193],
      [-38.7572, 143.6705]
    ]
  },
  {
    id: "apollo-to-melbourne",
    label: "Apollo Bay to Melbourne",
    mode: "Self-drive",
    dateKey: "2026-11-13",
    dayPart: "afternoon",
    variant: "all",
    navigationMode: "drive",
    detail: "Approx 3 hr 15 min drive",
    points: [
      [-38.7572, 143.6705],
      [-37.8165, 144.9677]
    ]
  },
  {
    id: "melbourne-to-hamilton",
    label: "Melbourne to Hamilton Island",
    mode: "Flight",
    dateKey: "2026-11-15",
    dayPart: "morning",
    variant: "all",
    navigationMode: "search",
    points: [
      [-37.8165, 144.9677],
      [-20.3488, 148.9579]
    ]
  },
  {
    id: "hamilton-to-sydney",
    label: "Hamilton Island to Sydney",
    mode: "Flight",
    dateKey: "2026-11-19",
    dayPart: "afternoon",
    variant: "all",
    navigationMode: "search",
    points: [
      [-20.3488, 148.9579],
      [-33.8766, 151.2037]
    ]
  }
];

const STORAGE_KEYS = {
  selectedPointId: "australiaTripMap.selectedPointId",
  tripState: "australiaTripMap.tripState"
};

const ROUTE_MODES = {
  current: "current",
  skipMerrijig: "skip-merrijig",
  compare: "compare"
};

const ROUTE_MODE_META = {
  [ROUTE_MODES.current]: {
    title: "Current plan",
    description: "Keep Merrijig in the route and leave the Grampians as a visual extra."
  },
  [ROUTE_MODES.skipMerrijig]: {
    title: "Skip Merrijig",
    description: "Swap the Port Fairy stay for the Grampians route instead."
  },
  [ROUTE_MODES.compare]: {
    title: "Compare both",
    description: "Show the Merrijig route and the Grampians alternative together."
  }
};

const STATUS_META = {
  none: {
    label: "No status",
    shortLabel: "",
    color: "#c9bca7"
  },
  booked: {
    label: "Booked",
    shortLabel: "Booked",
    color: "#1b4f8a"
  },
  done: {
    label: "Done",
    shortLabel: "Done",
    color: "#007c74"
  },
  maybe: {
    label: "Maybe",
    shortLabel: "Maybe",
    color: "#9d4f2e"
  }
};

const ESSENTIALS = [
  { id: "fuel", label: "Fuel" },
  { id: "groceries", label: "Groceries" },
  { id: "pharmacy", label: "Pharmacy" },
  { id: "laundry", label: "Laundry" },
  { id: "atm", label: "ATM" }
];

const DAY_PART_LABELS = {
  morning: "Morning",
  afternoon: "Afternoon",
  evening: "Evening"
};

const MONTHS = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11
};

const TRIP_WINDOW = {
  start: new Date(2026, 9, 30, 12, 0, 0, 0),
  end: new Date(2026, 10, 22, 12, 0, 0, 0)
};

const WEATHER_CODE_LABELS = {
  0: "Clear",
  1: "Mostly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Fog",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Dense drizzle",
  56: "Freezing drizzle",
  57: "Freezing drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  66: "Freezing rain",
  67: "Freezing rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  77: "Snow grains",
  80: "Rain showers",
  81: "Rain showers",
  82: "Heavy showers",
  85: "Snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with hail",
  99: "Thunderstorm with hail"
};

const WEATHER_CACHE_TTL_MS = 1000 * 60 * 60 * 2;

const pointIndex = new Map();
const routeSegmentIndex = new Map();

function makeLocalDate(year, monthIndex, day) {
  return new Date(year, monthIndex, day, 12, 0, 0, 0);
}

function cloneLocalDate(date) {
  return new Date(date.getTime());
}

function addDays(date, days) {
  const next = cloneLocalDate(date);
  next.setDate(next.getDate() + days);
  return next;
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0, 0);
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseTripDateLabel(label, type) {
  if (!label || /possible detour|self-book locally|and/i.test(label)) {
    return null;
  }

  const match = label.trim().match(/^(\d{1,2})\s+([A-Za-z]{3})(?:\s+to\s+(\d{1,2})\s+([A-Za-z]{3}))?$/i);
  if (!match) {
    return null;
  }

  const startDay = Number(match[1]);
  const startMonth = MONTHS[match[2].toLowerCase()];
  const endDay = match[3] ? Number(match[3]) : null;
  const endMonth = match[4] ? MONTHS[match[4].toLowerCase()] : startMonth;

  if (Number.isNaN(startDay) || startMonth == null || (endDay != null && (Number.isNaN(endDay) || endMonth == null))) {
    return null;
  }

  const start = makeLocalDate(2026, startMonth, startDay);
  const end = endDay == null ? cloneLocalDate(start) : makeLocalDate(2026, endMonth, endDay);

  return {
    start,
    end
  };
}

function expandActiveDays(point) {
  const keys = [];

  if (point.dateRange) {
    if (point.type === "stay" && point.dateRange.end.getTime() !== point.dateRange.start.getTime()) {
      let cursor = cloneLocalDate(point.dateRange.start);
      while (cursor < point.dateRange.end) {
        keys.push(dateKey(cursor));
        cursor = addDays(cursor, 1);
      }
    } else {
      keys.push(dateKey(point.dateRange.start));
    }
  }

  if (Array.isArray(point.suggestedDayKeys)) {
    point.suggestedDayKeys.forEach((key) => {
      if (!keys.includes(key)) {
        keys.push(key);
      }
    });
  }

  return keys;
}

function buildTripDays() {
  const days = [];
  let cursor = cloneLocalDate(TRIP_WINDOW.start);

  while (cursor <= TRIP_WINDOW.end) {
    days.push({
      key: dateKey(cursor),
      date: cloneLocalDate(cursor)
    });
    cursor = addDays(cursor, 1);
  }

  return days;
}

function createDefaultTripState() {
  return {
    selectedDayKey: null,
    selectedPointId: null,
    routeMode: ROUTE_MODES.current,
    selectedEssential: ESSENTIALS[0].id,
    pointState: {},
    weatherCache: {}
  };
}

function loadTripState() {
  const defaults = createDefaultTripState();
  let parsed = {};

  try {
    parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEYS.tripState) || "{}") || {};
  } catch (_error) {
    parsed = {};
  }

  const selectedPointId =
    parsed.selectedPointId ||
    window.localStorage.getItem(STORAGE_KEYS.selectedPointId) ||
    defaults.selectedPointId;

  return {
    ...defaults,
    ...parsed,
    selectedPointId,
    routeMode: Object.values(ROUTE_MODES).includes(parsed.routeMode) ? parsed.routeMode : defaults.routeMode,
    selectedEssential: ESSENTIALS.some((item) => item.id === parsed.selectedEssential)
      ? parsed.selectedEssential
      : defaults.selectedEssential,
    pointState: parsed.pointState && typeof parsed.pointState === "object" ? parsed.pointState : {},
    weatherCache: parsed.weatherCache && typeof parsed.weatherCache === "object" ? parsed.weatherCache : {}
  };
}

function persistTripState() {
  try {
    window.localStorage.setItem(
      STORAGE_KEYS.tripState,
      JSON.stringify({
        selectedDayKey: appState.selectedDayKey,
        selectedPointId: appState.selectedPointId,
        routeMode: appState.routeMode,
        selectedEssential: appState.selectedEssential,
        pointState: appState.pointState,
        weatherCache: appState.weatherCache
      })
    );

    if (appState.selectedPointId) {
      window.localStorage.setItem(STORAGE_KEYS.selectedPointId, appState.selectedPointId);
    }
  } catch (_error) {
    // Local-only niceties should not break the guide.
  }
}

function getPointState(pointId) {
  return {
    status: "none",
    notes: "",
    ...appState.pointState[pointId]
  };
}

function setPointState(pointId, nextState) {
  appState.pointState[pointId] = {
    ...getPointState(pointId),
    ...nextState
  };
  persistTripState();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function truncateText(text, length = 120) {
  if (!text || text.length <= length) {
    return text;
  }
  return `${text.slice(0, Math.max(0, length - 1)).trim()}…`;
}

function formatReadableDate(date, options = {}) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: options.weekday || undefined,
    day: "numeric",
    month: options.month || "short",
    year: options.year || "numeric"
  }).format(date);
}

function formatCompactDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short"
  }).format(date);
}

function formatType(type) {
  if (type === "stay") return "Overnight stay";
  if (type === "tour") return "Experience";
  if (type === "travel") return "Travel anchor";
  return "Optional";
}

function daysBetween(left, right) {
  const leftDay = startOfDay(left);
  const rightDay = startOfDay(right);
  return Math.round((leftDay.getTime() - rightDay.getTime()) / 86400000);
}

function isPhoneLayout() {
  return window.matchMedia("(max-width: 640px)").matches;
}

function isPointOnActiveRoute(point, routeMode = appState.routeMode) {
  if (!point.routeVariant || routeMode === ROUTE_MODES.compare) {
    return true;
  }

  if (routeMode === ROUTE_MODES.skipMerrijig) {
    return point.routeVariant !== "current";
  }

  return point.routeVariant !== "skip";
}

function isRouteSegmentVisible(segment, routeMode = appState.routeMode) {
  if (routeMode === ROUTE_MODES.compare || segment.variant === "all") {
    return true;
  }

  if (routeMode === ROUTE_MODES.skipMerrijig) {
    return segment.variant !== "current";
  }

  return segment.variant !== "skip";
}

function getPointById(id) {
  return pointIndex.get(id) || null;
}

function getTripDayByKey(dayKey) {
  return tripDays.find((day) => day.key === dayKey) || null;
}

function getInitialDayKey() {
  const today = startOfDay(new Date());
  if (today < TRIP_WINDOW.start) {
    return tripDays[0]?.key || null;
  }
  if (today > TRIP_WINDOW.end) {
    return tripDays[tripDays.length - 1]?.key || null;
  }
  return dateKey(today);
}

function normalizeSelectedDayForPoint(point) {
  if (!point) {
    return appState.selectedDayKey;
  }

  if (point.activeDays.includes(appState.selectedDayKey)) {
    return appState.selectedDayKey;
  }

  return point.activeDays[0] || appState.selectedDayKey || getInitialDayKey();
}

points.forEach((point, index) => {
  point.order = index + 1;
  point.dateRange = parseTripDateLabel(point.date, point.type);
  point.activeDays = expandActiveDays(point);
  pointIndex.set(point.id, point);
});

routeSegments.forEach((segment, index) => {
  segment.sequence = index + 1;
  routeSegmentIndex.set(segment.id, segment);
});

const tripDays = buildTripDays();
const appState = loadTripState();

if (!appState.selectedDayKey || !getTripDayByKey(appState.selectedDayKey)) {
  appState.selectedDayKey = getInitialDayKey();
}

if (!appState.selectedPointId || !pointIndex.has(appState.selectedPointId)) {
  appState.selectedPointId = points[0]?.id || null;
}

function getSelectedPoint() {
  return getPointById(appState.selectedPointId) || points[0] || null;
}

function getSelectedDay() {
  return getTripDayByKey(appState.selectedDayKey) || getTripDayByKey(getInitialDayKey()) || tripDays[0] || null;
}

function assignDisplayCoordinates() {
  const grouped = new Map();

  points.forEach((point) => {
    const key = point.coordinates.map((value) => value.toFixed(4)).join(",");
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key).push(point);
  });

  grouped.forEach((group) => {
    if (group.length === 1) {
      group[0].displayCoordinates = group[0].coordinates;
      return;
    }

    group.forEach((point, index) => {
      const [lat, lng] = point.coordinates;
      const angle = (Math.PI * 2 * index) / group.length - Math.PI / 2;
      const radiusKm = 1.2;
      const latOffset = (radiusKm / 111) * Math.sin(angle);
      const lngOffset = (radiusKm / (111 * Math.cos((lat * Math.PI) / 180))) * Math.cos(angle);
      point.displayCoordinates = [lat + latOffset, lng + lngOffset];
    });
  });
}

assignDisplayCoordinates();

const colors = {
  stay: "#c35a2a",
  tour: "#0a7d72",
  travel: "#2459a8",
  optional: "#8a5a9b"
};

const map = L.map("map", {
  zoomControl: false,
  worldCopyJump: false,
  preferCanvas: true,
  scrollWheelZoom: false,
  zoomSnap: 0.05,
  zoomDelta: 0.5,
  zoomAnimation: true,
  fadeAnimation: true,
  markerZoomAnimation: true
}).setView([-27.5, 135.5], 4);

window.tripMap = map;

L.control.zoom({ position: "bottomright" }).addTo(map);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  maxZoom: 18,
  keepBuffer: 8,
  subdomains: "abcd",
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map);

const mapContainer = map.getContainer();
const wheelZoomState = {
  delta: 0,
  frame: null,
  pointerX: 0,
  pointerY: 0
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function normalizeWheelDelta(event) {
  if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
    return event.deltaY * 18;
  }

  if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
    return event.deltaY * window.innerHeight;
  }

  return event.deltaY;
}

function applySmoothWheelZoom() {
  wheelZoomState.frame = null;

  if (!wheelZoomState.delta) {
    return;
  }

  const rect = mapContainer.getBoundingClientRect();
  const containerPoint = L.point(
    wheelZoomState.pointerX - rect.left,
    wheelZoomState.pointerY - rect.top
  );
  const currentZoom = map.getZoom();
  const zoomChange = clamp(-wheelZoomState.delta / 220, -0.9, 0.9);
  const nextZoom = clamp(currentZoom + zoomChange, map.getMinZoom(), map.getMaxZoom());

  wheelZoomState.delta = 0;

  if (Math.abs(nextZoom - currentZoom) > 0.001) {
    map.setZoomAround(containerPoint, nextZoom, { animate: false });
  }
}

mapContainer.addEventListener(
  "wheel",
  (event) => {
    if (!map._loaded) {
      return;
    }

    event.preventDefault();
    wheelZoomState.delta += normalizeWheelDelta(event);
    wheelZoomState.pointerX = event.clientX;
    wheelZoomState.pointerY = event.clientY;

    if (!wheelZoomState.frame) {
      wheelZoomState.frame = window.requestAnimationFrame(applySmoothWheelZoom);
    }
  },
  { passive: false }
);

const layers = {
  stay: L.layerGroup().addTo(map),
  tour: L.layerGroup().addTo(map),
  travel: L.layerGroup().addTo(map),
  optional: L.layerGroup().addTo(map)
};

const markerIndex = new Map();
const routeLayerIndex = new Map();

const itineraryCards = document.getElementById("cards");
const itinerarySection = document.querySelector(".itinerary");
const sidePanel = document.querySelector("aside");
const itineraryToggle = document.getElementById("itinerary-toggle");
const todaySummary = document.getElementById("today-summary");
const nextLeg = document.getElementById("next-leg");
const dayPlan = document.getElementById("day-plan");
const todayJump = document.getElementById("today-jump");
const stopActions = document.getElementById("stop-actions");
const stopStatus = document.getElementById("stop-status");
const weatherPanel = document.getElementById("weather-panel");
const essentialsPanel = document.getElementById("essentials-panel");
const routeOptionsPanel = document.getElementById("route-options");
const mapsLinksPanel = document.getElementById("maps-links");
const stopNotes = document.getElementById("stop-notes");
const notesInput = document.getElementById("notes-input");

let activeFilter = "all";
let weatherRequestToken = 0;

function markerIcon(point) {
  const status = getPointState(point.id).status;
  const statusColor = STATUS_META[status]?.color;
  const statusDot = status !== "none"
    ? `<div style="
        position:absolute;
        right:-1px;
        bottom:-1px;
        width:10px;
        height:10px;
        border-radius:50%;
        background:${statusColor};
        border:2px solid rgba(255,255,255,0.95);
      "></div>`
    : "";

  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="position:relative;width:28px;height:28px;">
        <div style="
          width:28px;
          height:28px;
          border-radius:50%;
          background:${colors[point.type]};
          border:3px solid rgba(255,255,255,0.95);
          box-shadow:0 4px 14px rgba(0,0,0,0.22);
        "></div>
        <span style="
          position:absolute;
          inset:0;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#ffffff;
          font-size:11px;
          font-weight:700;
          line-height:1;
          pointer-events:none;
        ">${point.order}</span>
        ${statusDot}
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -10]
  });
}

function popupHtml(point) {
  const pointState = getPointState(point.id);
  const statusHtml =
    pointState.status !== "none"
      ? `<div class="popup-meta"><strong>${escapeHtml(STATUS_META[pointState.status].label)}</strong></div>`
      : "";
  const routeHtml =
    isPointOnActiveRoute(point)
      ? ""
      : `<div class="popup-meta">Outside the active route mode.</div>`;
  const notesHtml = pointState.notes
    ? `<div class="popup-desc"><strong>Notes:</strong> ${escapeHtml(truncateText(pointState.notes, 110))}</div>`
    : "";
  const linkHtml = point.link
    ? `<a class="popup-link" href="${point.link}" target="_blank" rel="noreferrer">Open supplier link</a>`
    : "";

  return `
    <div class="popup-title">${escapeHtml(point.title)}</div>
    <div class="popup-meta">${escapeHtml(point.date)} | ${escapeHtml(point.place)}</div>
    ${statusHtml}
    ${routeHtml}
    <div class="popup-desc">${escapeHtml(point.description)}</div>
    ${notesHtml}
    ${linkHtml}
  `;
}

function createMarker(point) {
  const marker = L.marker(point.displayCoordinates, {
    icon: markerIcon(point),
    title: point.title
  }).bindPopup(popupHtml(point));

  marker.addTo(layers[point.type]);
  marker.on("click", () => focusPoint(point.id));
  markerIndex.set(point.id, marker);
}

function createRouteLayer(segment) {
  const isDrive = segment.mode === "Self-drive";
  const isOptional = segment.variant === "skip";

  const layer = L.polyline(segment.points, {
    color: isDrive ? "#a35f1e" : isOptional ? "#8a5a9b" : "#2459a8",
    weight: isDrive ? 4 : 3,
    opacity: 0.78,
    dashArray: isDrive ? "" : isOptional ? "6 10" : "8 8"
  }).bindTooltip(
    segment.detail
      ? `<strong>${escapeHtml(segment.mode)}</strong><br>${escapeHtml(segment.label)}<br>${escapeHtml(segment.detail)}`
      : `<strong>${escapeHtml(segment.mode)}</strong><br>${escapeHtml(segment.label)}`,
    { sticky: true }
  );

  routeLayerIndex.set(segment.id, layer);
}

points.forEach(createMarker);
routeSegments.forEach(createRouteLayer);

function getVisiblePoints() {
  return points.filter((point) => activeFilter === "all" || point.type === activeFilter);
}

function getPointsForDay(dayKey, routeMode = appState.routeMode) {
  return points
    .filter((point) => point.activeDays.includes(dayKey))
    .filter((point) => routeMode === ROUTE_MODES.compare || isPointOnActiveRoute(point, routeMode))
    .sort((left, right) => left.order - right.order);
}

function getSegmentsForDay(dayKey, routeMode = appState.routeMode) {
  return routeSegments
    .filter((segment) => segment.dateKey === dayKey)
    .filter((segment) => isRouteSegmentVisible(segment, routeMode))
    .sort((left, right) => left.sequence - right.sequence);
}

function getUpcomingSegment(dayKey, routeMode = appState.routeMode) {
  return routeSegments
    .filter((segment) => segment.dateKey >= dayKey)
    .filter((segment) => isRouteSegmentVisible(segment, routeMode))
    .sort((left, right) => left.dateKey.localeCompare(right.dateKey) || left.sequence - right.sequence)[0] || null;
}

function getUpcomingDriveSegment(dayKey, routeMode = appState.routeMode) {
  return routeSegments
    .filter((segment) => segment.dateKey >= dayKey)
    .filter((segment) => isRouteSegmentVisible(segment, routeMode))
    .filter((segment) => segment.navigationMode === "drive")
    .sort((left, right) => left.dateKey.localeCompare(right.dateKey) || left.sequence - right.sequence)[0] || null;
}

function fitBoundsFor(currentPoints) {
  const bounds = L.latLngBounds(currentPoints.map((point) => point.displayCoordinates || point.coordinates));
  map.fitBounds(bounds.pad(0.18));
}

function scrollActiveCardIntoView() {
  if (!isPhoneLayout()) {
    return;
  }

  const activeCard = document.querySelector(`.card[data-id="${appState.selectedPointId}"]`);
  if (activeCard) {
    activeCard.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }
}

function updateMarkerVisuals() {
  points.forEach((point) => {
    const marker = markerIndex.get(point.id);
    if (!marker) {
      return;
    }

    marker.setIcon(markerIcon(point));
    marker.setPopupContent(popupHtml(point));
  });
}

function renderCards() {
  itineraryCards.innerHTML = "";

  points.forEach((point) => {
    const pointState = getPointState(point.id);
    const statusBadge =
      pointState.status !== "none"
        ? `<span class="status-badge" data-status="${pointState.status}">${escapeHtml(
            STATUS_META[pointState.status].shortLabel
          )}</span>`
        : "";
    const routeBadge =
      isPointOnActiveRoute(point) || appState.routeMode === ROUTE_MODES.compare
        ? ""
        : '<span class="route-badge" data-route-state="off-route">Off route</span>';

    const card = document.createElement("article");
    card.className = "card";
    card.dataset.type = point.type;
    card.dataset.id = point.id;
    card.dataset.routeState = isPointOnActiveRoute(point) ? "on-route" : "off-route";
    card.classList.toggle("active", point.id === appState.selectedPointId);
    card.innerHTML = `
      <div class="card-head">
        <div class="date">#${point.order} | ${escapeHtml(point.date)}</div>
        ${statusBadge || routeBadge}
      </div>
      <h3>${escapeHtml(point.title)}</h3>
      <div class="meta">${escapeHtml(point.place)} | ${escapeHtml(formatType(point.type))}</div>
      <div class="desc">${escapeHtml(point.description)}</div>
    `;
    card.addEventListener("click", () => focusPoint(point.id));
    itineraryCards.appendChild(card);
  });
}

function refreshVisibility() {
  points.forEach((point) => {
    const marker = markerIndex.get(point.id);
    const card = document.querySelector(`.card[data-id="${point.id}"]`);
    const show = activeFilter === "all" || point.type === activeFilter;

    if (show) {
      if (!map.hasLayer(marker)) {
        marker.addTo(layers[point.type]);
      }
      card?.classList.remove("hidden");
    } else {
      if (map.hasLayer(marker)) {
        map.removeLayer(marker);
      }
      card?.classList.add("hidden");
    }
  });
}

function applyRouteVisibility() {
  routeSegments.forEach((segment) => {
    const layer = routeLayerIndex.get(segment.id);
    if (!layer) {
      return;
    }

    const show = isRouteSegmentVisible(segment, appState.routeMode);
    if (show && !map.hasLayer(layer)) {
      layer.addTo(map);
    }
    if (!show && map.hasLayer(layer)) {
      map.removeLayer(layer);
    }
  });
}

function setRouteMode(routeMode) {
  if (!Object.values(ROUTE_MODES).includes(routeMode)) {
    return;
  }

  appState.routeMode = routeMode;
  persistTripState();
  renderAll();
}

function setSelectedDayKey(dayKey) {
  if (!getTripDayByKey(dayKey)) {
    return;
  }

  appState.selectedDayKey = dayKey;
  persistTripState();
}

function setSelectedPoint(pointId) {
  if (!pointIndex.has(pointId)) {
    return;
  }

  appState.selectedPointId = pointId;
  persistTripState();
}

function focusPoint(pointId, options = {}) {
  const point = getPointById(pointId);
  const marker = markerIndex.get(pointId);

  if (!point || !marker) {
    return;
  }

  if (options.syncDay !== false) {
    setSelectedDayKey(normalizeSelectedDayForPoint(point));
  }

  setSelectedPoint(pointId);

  if (window.matchMedia("(max-width: 980px)").matches && !isPhoneLayout()) {
    itinerarySection.classList.add("collapsed");
    itineraryToggle.textContent = "Show itinerary list";
    itineraryToggle.classList.remove("active");
  }

  const animate = options.animate !== false;
  map.flyTo(marker.getLatLng(), point.type === "tour" ? 7 : 8, {
    animate,
    duration: animate ? 1.1 : 0
  });
  marker.openPopup();

  renderAll({ refreshMap: false });
}

function setViewButton(id) {
  document.querySelectorAll(".button-secondary").forEach((button) => {
    button.classList.toggle("active", button.id === id);
  });
}

function renderTodayPanel() {
  const selectedDay = getSelectedDay();
  const selectedPoint = getSelectedPoint();
  const dayPoints = selectedDay ? getPointsForDay(selectedDay.key) : [];
  const daySegments = selectedDay ? getSegmentsForDay(selectedDay.key) : [];
  const upcomingSegment = selectedDay ? getUpcomingSegment(selectedDay.key) : null;
  const progressIndex = selectedDay ? tripDays.findIndex((day) => day.key === selectedDay.key) + 1 : 0;
  const today = startOfDay(new Date());

  let summaryLead = "Pick a stop to inspect that travel day.";
  if (selectedDay) {
    const selectedLabel = formatReadableDate(selectedDay.date, { weekday: "short" });
    const summaryBits = [`${selectedLabel}`, `Day ${progressIndex} of ${tripDays.length}`];
    if (selectedPoint) {
      summaryBits.push(selectedPoint.place);
    }

    if (today < TRIP_WINDOW.start) {
      summaryLead = `Trip starts in ${daysBetween(TRIP_WINDOW.start, today)} days.`;
    } else if (today > TRIP_WINDOW.end) {
      summaryLead = "The trip window has finished, but your saved notes and route choices remain available.";
    } else {
      const diff = daysBetween(selectedDay.date, today);
      if (diff === 0) {
        summaryLead = "This is today's live trip day.";
      } else if (diff > 0) {
        summaryLead = `${diff} day${diff === 1 ? "" : "s"} ahead of today.`;
      } else {
        const ago = Math.abs(diff);
        summaryLead = `${ago} day${ago === 1 ? "" : "s"} back in the trip.`;
      }
    }

    const routeLabel = ROUTE_MODE_META[appState.routeMode].title;
    todaySummary.innerHTML = `
      <span class="inline-strong">${escapeHtml(summaryBits.join(" • "))}</span>
      <br />
      ${escapeHtml(summaryLead)} Route mode: ${escapeHtml(routeLabel)}.
    `;
  } else {
    todaySummary.textContent = summaryLead;
  }

  if (!selectedDay) {
    nextLeg.textContent = "Select a stop to see the next move.";
    dayPlan.innerHTML = '<div class="panel-muted">No trip day selected yet.</div>';
    todayJump.textContent = "Jump to trip start";
    return;
  }

  if (upcomingSegment) {
    nextLeg.innerHTML = `
      <span class="inline-strong">${escapeHtml(upcomingSegment.mode)}</span><br />
      ${escapeHtml(upcomingSegment.label)}
      <span class="weather-kicker">${escapeHtml(
        `${formatCompactDate(new Date(`${upcomingSegment.dateKey}T12:00:00`))}${upcomingSegment.detail ? ` • ${upcomingSegment.detail}` : ""}`
      )}</span>
    `;
  } else {
    nextLeg.innerHTML = `
      <span class="inline-strong">Final stretch</span><br />
      Independent flight home after the last Sydney stay.
    `;
  }

  const buckets = {
    morning: [],
    afternoon: [],
    evening: []
  };

  daySegments.forEach((segment) => {
    buckets[segment.dayPart || "afternoon"].push(
      `${segment.label}${segment.detail ? ` (${segment.detail})` : ""}`
    );
  });

  dayPoints.forEach((point) => {
    const bucketKey = point.type === "stay" ? "evening" : point.dayPart || "afternoon";
    const prefix = point.type === "stay" ? "Stay at " : "";
    buckets[bucketKey].push(`${prefix}${point.title}`);
  });

  if (
    !buckets.morning.length &&
    !buckets.afternoon.length &&
    !buckets.evening.length &&
    selectedDay.key === dateKey(TRIP_WINDOW.end)
  ) {
    buckets.morning.push("Independent flight arrangements home.");
  }

  const timelineHtml = Object.entries(DAY_PART_LABELS)
    .filter(([bucketKey]) => buckets[bucketKey].length)
    .map(([bucketKey, label]) => {
      const items = buckets[bucketKey]
        .map((item) => `<li><strong>${escapeHtml(label)}:</strong> ${escapeHtml(item)}</li>`)
        .join("");
      return items;
    })
    .join("");

  dayPlan.innerHTML = timelineHtml
    ? `<ol class="mini-timeline">${timelineHtml}</ol>`
    : '<div class="panel-muted">No activities mapped for this day yet.</div>';

  if (today < TRIP_WINDOW.start) {
    todayJump.textContent = "Jump to trip start";
  } else if (today > TRIP_WINDOW.end) {
    todayJump.textContent = "Jump to final day";
  } else {
    todayJump.textContent = "Jump to today";
  }
}

function renderStopActions() {
  const point = getSelectedPoint();
  const pointState = point ? getPointState(point.id) : getPointState("");

  stopActions.innerHTML = `
    <span class="panel-label">Stop actions</span>
    <div class="chip-row">
      ${["done", "maybe", "booked"]
        .map((status) => {
          const isActive = pointState.status === status;
          return `<button class="chip ${isActive ? "active" : ""}" type="button" data-stop-action="${status}">
            ${escapeHtml(STATUS_META[status].label)}
          </button>`;
        })
        .join("")}
    </div>
    <div class="panel-note">Tap the active status again to clear it. Saved locally on this device.</div>
  `;
}

function renderStopStatus() {
  const point = getSelectedPoint();
  if (!point) {
    stopStatus.innerHTML = `
      <span class="panel-label">Status</span>
      <p>No stop selected yet.</p>
    `;
    return;
  }

  const pointState = getPointState(point.id);
  const statusBadge =
    pointState.status !== "none"
      ? `<span class="status-badge" data-status="${pointState.status}">${escapeHtml(
          STATUS_META[pointState.status].label
        )}</span>`
      : '<span class="status-badge" data-status="none">Not set</span>';
  const routeBadge = isPointOnActiveRoute(point)
    ? ""
    : '<span class="route-badge" data-route-state="off-route">Outside active route</span>';
  const notesSummary = pointState.notes
    ? `Notes saved for this stop: ${truncateText(pointState.notes, 80)}`
    : "No saved notes for this stop yet.";

  stopStatus.innerHTML = `
    <span class="panel-label">Status</span>
    <div class="panel-links">
      ${statusBadge}
      ${routeBadge}
    </div>
    <p>${escapeHtml(notesSummary)}</p>
    <p>${navigator.onLine ? "Online now. Weather and maps links are live." : "Offline now. Saved state and cached data remain available."}</p>
  `;
}

function buildAppleSearchUrl(point, query) {
  return `https://maps.apple.com/?ll=${point.coordinates[0]},${point.coordinates[1]}&q=${encodeURIComponent(query)}`;
}

function buildGoogleSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function buildAppleDirectionsUrl(from, to) {
  return `https://maps.apple.com/?saddr=${from[0]},${from[1]}&daddr=${to[0]},${to[1]}&dirflg=d`;
}

function buildGoogleDirectionsUrl(from, to) {
  return `https://www.google.com/maps/dir/?api=1&origin=${from[0]},${from[1]}&destination=${to[0]},${to[1]}&travelmode=driving`;
}

function getMapsContext() {
  const selectedPoint = getSelectedPoint();
  const selectedDay = getSelectedDay();
  const sameDayDriveSegment = selectedDay
    ? getSegmentsForDay(selectedDay.key).find((segment) => segment.navigationMode === "drive")
    : null;
  const driveSegment = sameDayDriveSegment;

  if (driveSegment) {
    const origin = driveSegment.points[0];
    const destination = driveSegment.points[driveSegment.points.length - 1];
    return {
      title: driveSegment.detail
        ? `${driveSegment.label} • ${driveSegment.detail}`
        : driveSegment.label,
      appleUrl: buildAppleDirectionsUrl(origin, destination),
      googleUrl: buildGoogleDirectionsUrl(origin, destination),
      supplierUrl: selectedPoint?.link || null,
      primaryLabel: "Open next drive in Apple Maps",
      secondaryLabel: "Open next drive in Google Maps"
    };
  }

  if (!selectedPoint) {
    return null;
  }

  const query = `${selectedPoint.title}, ${selectedPoint.place}`;
  return {
    title: `Open ${selectedPoint.place}`,
    appleUrl: buildAppleSearchUrl(selectedPoint, query),
    googleUrl: buildGoogleSearchUrl(query),
    supplierUrl: selectedPoint.link || null,
    primaryLabel: "Open stop in Apple Maps",
    secondaryLabel: "Open stop in Google Maps"
  };
}

function renderMapsLinks() {
  const context = getMapsContext();

  if (!context) {
    mapsLinksPanel.innerHTML = `
      <span class="panel-label">Maps links</span>
      <p>Add a selected stop to generate Apple Maps and Google Maps links.</p>
    `;
    return;
  }

  const supplierLink = context.supplierUrl
    ? `<a class="panel-link-chip" href="${context.supplierUrl}" target="_blank" rel="noreferrer">Open supplier link</a>`
    : "";

  mapsLinksPanel.innerHTML = `
    <span class="panel-label">Maps links</span>
    <p>${escapeHtml(context.title)}</p>
    <div class="panel-links">
      <a class="panel-link-chip primary" href="${context.appleUrl}" target="_blank" rel="noreferrer">${escapeHtml(
        context.primaryLabel
      )}</a>
      <a class="panel-link-chip" href="${context.googleUrl}" target="_blank" rel="noreferrer">${escapeHtml(
        context.secondaryLabel
      )}</a>
      ${supplierLink}
    </div>
  `;
}

function renderEssentialsPanel() {
  const selectedPoint = getSelectedPoint();
  const essential = ESSENTIALS.find((item) => item.id === appState.selectedEssential) || ESSENTIALS[0];

  if (!selectedPoint) {
    essentialsPanel.innerHTML = `
      <span class="panel-label">Nearby essentials</span>
      <p>Select a stop to build nearby essentials searches.</p>
    `;
    return;
  }

  const query = `${essential.label} near ${selectedPoint.place}`;
  const appleUrl = buildAppleSearchUrl(selectedPoint, query);
  const googleUrl = buildGoogleSearchUrl(`${query} ${selectedPoint.coordinates.join(",")}`);

  essentialsPanel.innerHTML = `
    <span class="panel-label">Nearby essentials</span>
    <div class="chip-row">
      ${ESSENTIALS.map((item) => {
        const isActive = item.id === appState.selectedEssential;
        return `<button class="chip ${isActive ? "active" : ""}" type="button" data-essential="${item.id}">
          ${escapeHtml(item.label)}
        </button>`;
      }).join("")}
    </div>
    <div class="panel-links">
      <a class="panel-link-chip primary" href="${appleUrl}" target="_blank" rel="noreferrer">Apple Maps ${escapeHtml(
        essential.label
      )}</a>
      <a class="panel-link-chip" href="${googleUrl}" target="_blank" rel="noreferrer">Google Maps ${escapeHtml(
        essential.label
      )}</a>
    </div>
    <div class="panel-note">Searches use the selected stop as the local anchor.</div>
  `;
}

function renderRouteOptions() {
  routeOptionsPanel.innerHTML = `
    <span class="panel-label">Route options</span>
    <div class="chip-row">
      ${Object.values(ROUTE_MODES)
        .map((routeMode) => {
          const isActive = appState.routeMode === routeMode;
          return `<button class="chip ${isActive ? "active" : ""}" type="button" data-route-option="${routeMode}">
            ${escapeHtml(ROUTE_MODE_META[routeMode].title)}
          </button>`;
        })
        .join("")}
    </div>
    <div class="panel-note">${escapeHtml(ROUTE_MODE_META[appState.routeMode].description)}</div>
  `;
}

function renderPlannerPanel(forceSyncInput = false) {
  const selectedPoint = getSelectedPoint();

  if (!selectedPoint) {
    notesInput.value = "";
    notesInput.dataset.pointId = "";
    stopNotes.textContent = "Select a stop to keep notes here.";
    return;
  }

  const pointState = getPointState(selectedPoint.id);
  const shouldSyncInput =
    forceSyncInput ||
    notesInput.dataset.pointId !== selectedPoint.id ||
    document.activeElement !== notesInput;

  if (shouldSyncInput) {
    notesInput.value = pointState.notes;
  }

  notesInput.dataset.pointId = selectedPoint.id;
  notesInput.placeholder = `Notes for ${selectedPoint.title}: parking, check-in, booking refs, food ideas.`;
  stopNotes.textContent = pointState.notes
    ? `Saved locally for ${selectedPoint.title}.`
    : `No saved note yet for ${selectedPoint.title}.`;
}

function weatherCodeLabel(code) {
  return WEATHER_CODE_LABELS[code] || "Conditions unavailable";
}

function getCachedWeatherEntry(pointId) {
  const entry = appState.weatherCache[pointId];
  if (!entry || !entry.data || !entry.fetchedAt) {
    return null;
  }
  return entry;
}

async function fetchWeatherForPoint(point) {
  const cached = getCachedWeatherEntry(point.id);
  if (cached && Date.now() - cached.fetchedAt < WEATHER_CACHE_TTL_MS) {
    return cached;
  }

  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(point.coordinates[0]));
  url.searchParams.set("longitude", String(point.coordinates[1]));
  url.searchParams.set("current", "temperature_2m,weather_code,wind_speed_10m");
  url.searchParams.set("daily", "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max");
  url.searchParams.set("forecast_days", "16");
  url.searchParams.set("timezone", "auto");

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Weather request failed with status ${response.status}`);
  }

  const data = await response.json();
  const entry = {
    fetchedAt: Date.now(),
    data
  };

  appState.weatherCache[point.id] = entry;
  persistTripState();
  return entry;
}

function renderWeatherFromEntry(point, selectedDay, entry) {
  const dayIndex = entry.data?.daily?.time?.indexOf(selectedDay.key) ?? -1;
  const current = entry.data?.current || null;
  const fetchedAt = entry.fetchedAt ? formatReadableDate(new Date(entry.fetchedAt), { month: "short" }) : null;

  if (dayIndex >= 0) {
    const high = entry.data.daily.temperature_2m_max?.[dayIndex];
    const low = entry.data.daily.temperature_2m_min?.[dayIndex];
    const code = entry.data.daily.weather_code?.[dayIndex];
    const rain = entry.data.daily.precipitation_probability_max?.[dayIndex];

    weatherPanel.innerHTML = `
      <span class="panel-label">Weather</span>
      <div class="inline-strong">${escapeHtml(weatherCodeLabel(code))}</div>
      <span class="weather-kicker">${escapeHtml(
        `${formatCompactDate(selectedDay.date)} • ${point.place}${high != null && low != null ? ` • ${Math.round(high)}° / ${Math.round(low)}°C` : ""}`
      )}</span>
      <p>${rain != null ? `Rain chance up to ${Math.round(rain)}%. ` : ""}Live forecast uses the selected stop coordinates.</p>
      <p>${fetchedAt ? `Last updated ${fetchedAt}.` : ""}</p>
    `;
    return;
  }

  if (current) {
    weatherPanel.innerHTML = `
      <span class="panel-label">Weather</span>
      <div class="inline-strong">${escapeHtml(weatherCodeLabel(current.weather_code))}</div>
      <span class="weather-kicker">${escapeHtml(
        `${point.place} now • ${Math.round(current.temperature_2m)}°C • wind ${Math.round(current.wind_speed_10m)} km/h`
      )}</span>
      <p>Daily forecast for ${formatCompactDate(selectedDay.date)} is not in range yet. It should appear closer to the travel date.</p>
      <p>${fetchedAt ? `Last updated ${fetchedAt}.` : ""}</p>
    `;
    return;
  }

  weatherPanel.innerHTML = `
    <span class="panel-label">Weather</span>
    <p>Forecast data is not available for this stop yet.</p>
  `;
}

async function renderWeatherPanelAsync() {
  const point = getSelectedPoint();
  const selectedDay = getSelectedDay();

  if (!point || !selectedDay) {
    weatherPanel.innerHTML = `
      <span class="panel-label">Weather</span>
      <p>Select a stop to see weather and forecast context.</p>
    `;
    return;
  }

  const cached = getCachedWeatherEntry(point.id);

  if (!navigator.onLine) {
    if (cached) {
      renderWeatherFromEntry(point, selectedDay, cached);
    } else {
      weatherPanel.innerHTML = `
        <span class="panel-label">Weather</span>
        <p>Offline with no cached weather for ${escapeHtml(point.place)} yet.</p>
      `;
    }
    return;
  }

  weatherPanel.innerHTML = `
    <span class="panel-label">Weather</span>
    <p>Loading live weather for ${escapeHtml(point.place)}…</p>
  `;

  const requestToken = ++weatherRequestToken;

  try {
    const entry = await fetchWeatherForPoint(point);
    if (requestToken !== weatherRequestToken || point.id !== appState.selectedPointId) {
      return;
    }
    renderWeatherFromEntry(point, getSelectedDay(), entry);
  } catch (_error) {
    const fallback = getCachedWeatherEntry(point.id);
    if (fallback) {
      renderWeatherFromEntry(point, getSelectedDay(), fallback);
      return;
    }

    weatherPanel.innerHTML = `
      <span class="panel-label">Weather</span>
      <p>Live weather could not be loaded right now.</p>
    `;
  }
}

function renderAll(options = {}) {
  renderCards();
  updateMarkerVisuals();
  refreshVisibility();
  applyRouteVisibility();
  renderTodayPanel();
  renderStopActions();
  renderStopStatus();
  renderRouteOptions();
  renderMapsLinks();
  renderEssentialsPanel();
  renderPlannerPanel(options.forcePlannerSync === true);
  scrollActiveCardIntoView();
  void renderWeatherPanelAsync();
}

document.getElementById("filter-row").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) {
    return;
  }

  activeFilter = button.dataset.filter;
  document.querySelectorAll("[data-filter]").forEach((chip) => {
    chip.classList.toggle("active", chip === button);
  });

  refreshVisibility();
  fitBoundsFor(getVisiblePoints());
});

document.getElementById("fit-all").addEventListener("click", () => {
  setViewButton("fit-all");
  fitBoundsFor(getVisiblePoints());
});

document.getElementById("focus-east").addEventListener("click", () => {
  setViewButton("focus-east");
  map.fitBounds(
    L.latLngBounds([
      [-38.6, 144.4],
      [-19.2, 151.4]
    ]),
    { padding: [20, 20] }
  );
});

document.getElementById("focus-south").addEventListener("click", () => {
  setViewButton("focus-south");
  map.fitBounds(
    L.latLngBounds([
      [-39.3, 137.3],
      [-34.2, 145.4]
    ]),
    { padding: [20, 20] }
  );
});

document.getElementById("focus-red").addEventListener("click", () => {
  setViewButton("focus-red");
  map.fitBounds(
    L.latLngBounds([
      [-25.7, 130.6],
      [-24.9, 131.4]
    ]),
    { padding: [20, 20] }
  );
});

if (itineraryToggle) {
  itineraryToggle.addEventListener("click", () => {
    const collapsed = itinerarySection.classList.toggle("collapsed");
    itineraryToggle.textContent = collapsed ? "Show itinerary list" : "Hide itinerary list";
    itineraryToggle.classList.toggle("active", !collapsed);
  });

  if (window.matchMedia("(max-width: 980px)").matches && !isPhoneLayout()) {
    itinerarySection.classList.add("collapsed");
    itineraryToggle.textContent = "Show itinerary list";
    itineraryToggle.classList.remove("active");
  }
}

document.body.addEventListener("click", (event) => {
  const stopActionButton = event.target.closest("[data-stop-action]");
  if (stopActionButton) {
    const point = getSelectedPoint();
    if (!point) {
      return;
    }

    const nextStatus = stopActionButton.dataset.stopAction;
    const currentStatus = getPointState(point.id).status;
    setPointState(point.id, { status: currentStatus === nextStatus ? "none" : nextStatus });
    renderAll();
    return;
  }

  const essentialButton = event.target.closest("[data-essential]");
  if (essentialButton) {
    appState.selectedEssential = essentialButton.dataset.essential;
    persistTripState();
    renderEssentialsPanel();
    return;
  }

  const routeOptionButton = event.target.closest("[data-route-option]");
  if (routeOptionButton) {
    setRouteMode(routeOptionButton.dataset.routeOption);
    return;
  }
});

notesInput.addEventListener("input", () => {
  const point = getSelectedPoint();
  if (!point) {
    return;
  }

  setPointState(point.id, { notes: notesInput.value });
  stopNotes.textContent = notesInput.value
    ? `Saved locally for ${point.title}.`
    : `No saved note yet for ${point.title}.`;
  renderStopStatus();
  updateMarkerVisuals();
});

todayJump.addEventListener("click", () => {
  const today = startOfDay(new Date());
  let targetDayKey = tripDays[0]?.key || null;

  if (today < TRIP_WINDOW.start) {
    targetDayKey = tripDays[0]?.key || null;
  } else if (today > TRIP_WINDOW.end) {
    targetDayKey = tripDays[tripDays.length - 1]?.key || null;
  } else {
    targetDayKey = dateKey(today);
  }

  if (!targetDayKey) {
    return;
  }

  setSelectedDayKey(targetDayKey);
  const dayPoints = getPointsForDay(targetDayKey);
  const targetPoint = dayPoints[0] || points[0];
  if (targetPoint) {
    focusPoint(targetPoint.id, { animate: true, syncDay: false });
  } else {
    renderAll();
  }
});

window.addEventListener("resize", () => {
  map.invalidateSize();

  if (isPhoneLayout()) {
    itinerarySection.classList.remove("collapsed");
  }
});

window.addEventListener("online", () => {
  renderStopStatus();
  void renderWeatherPanelAsync();
});

window.addEventListener("offline", () => {
  renderStopStatus();
  void renderWeatherPanelAsync();
});

applyRouteVisibility();
refreshVisibility();
fitBoundsFor(points);
renderAll({ forcePlannerSync: true });

requestAnimationFrame(() => {
  const selectedPoint = getSelectedPoint();
  if (selectedPoint) {
    focusPoint(selectedPoint.id, { animate: false, syncDay: false });
  }
  if (isPhoneLayout() && sidePanel) {
    sidePanel.scrollTop = 0;
  }
});
