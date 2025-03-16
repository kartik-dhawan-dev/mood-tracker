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
];

const CALENDER_MOOD_EMOJI_STYLE_CLASSES = [
  "text-sm",
  "sm:text-base",
  "md:text-lg",
  "lg:text-xl",
  "xl:text-2xl",
];
