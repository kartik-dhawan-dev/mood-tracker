const MOOD_AND_EMOJI = [
  {
    mood: "happy",
    emoji: "😊",
    bgColor: "bg-[#8B6E2B]",
  },
  {
    mood: "sad",
    emoji: "😢",
    bgColor: "bg-[#4A647A]",
  },
  {
    mood: "angry",
    emoji: "😠",
    bgColor: "bg-[#8F494D]",
  },
  {
    mood: "excited",
    emoji: "😃",
    bgColor: "bg-[#7A946A]",
  },
  {
    mood: "nervous",
    emoji: "😬",
    bgColor: "bg-[#8A6A8A]",
  },
  {
    mood: "relaxed",
    emoji: "😌",
    bgColor: "bg-[#6A9BAA]",
  },
  {
    mood: "bored",
    emoji: "😐",
    bgColor: "bg-[#3A3F4A]",
  },
];

const MOOD_CONTAINER_ID = "mood-container";
const TIMELINE_CONTAINER_ID = "timeline-container";
const PREVIOUS_MONTH_BUTTON_ID = "prev-month";
const NEXT_MONTH_BUTTON_ID = "next-month";
const CURRENT_MONTH_ID = "current-month";

const MOOD_EMOJI_CONTAINER_STYLE_CLASSES = [
  "flex",
  "flex-wrap",
  "gap-4",
  "justify-center",
];
const MOOD_EMOJI_STYLE_CLASSES = [
  "text-md",
  "sm:text-lg",
  "md:text-xl",
  "lg:text-2xl",
  "xl:text-3xl",
  "rounded-md",
  "transition",
  "hover:shadow-lg",
  "hover:scale-105",
  "duration-100",
  "ease-in-out",
];

const MOOD_STATE_LOCAL_STORAGE_KEY = "MOOD_STATE";

const DAY_CONTAINER_STYLE_CLASSES = [
  "flex",
  "flex-col",
  "items-center",
  "justify-center",
  "p-2",
  "border",
  "rounded-lg",
  "transition",
  "duration-100",
  "ease-in-out",
];

const DAY_BOX_STYLE_CLASSES = [
  "flex",
  "flex-col",
  "items-center",
  "justify-center",
  "rounded-lg",
  "transition",
  "duration-300",
  "ease-in-out",
  "text-sm",
  "sm:text-base",
  "md:text-lg",
  "lg:text-xl",
];

const CALENDER_MOOD_EMOJI_STYLE_CLASSES = [
  "text-sm",
  "sm:text-base",
  "md:text-lg",
  "lg:text-xl",
  "xl:text-2xl",
];

const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const DAY_HEADER_STYLE_CLASSES = [
  "text-center",
  "font-bold",
  "text-sm",
  "sm:text-base",
  "md:text-lg",
  "lg:text-xl",
];

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
