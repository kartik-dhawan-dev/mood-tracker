const getCurrentDate = () => new Date();
const getYearFromDate = (date) => date.getFullYear();
/**
 * date.getMonth() returns the month from 0 to 11. So actual month is month + 1
 */
const getMonthFromDate = (date) => date.getMonth() + 1;

/**
 * return formatted date in 'YYYY-MM-DD' format
 */
const getFormattedDate = (date) => {
  const year = getYearFromDate(date);
  const month = `${getMonthFromDate(date)}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");

  return `${year}-${month}-${day}`;
};

/**
 * ref: https://stackoverflow.com/a/1184359
 */
const getNoOfDaysInMonth = (date) =>
  new Date(getYearFromDate(date), getMonthFromDate(date), 0).getDate();

/**
 * Responsible for rendering the mood emojis on the screen
 * Steps:
 * [1] - Check if the current date's mood is present in the MOOD_STATE
 * [2] - If present, then check the radio input for that mood when rendering
 * [3] - Render moods in MOOD_AND_EMOJI constant
 * [4] - Add an event listener to update mood for current date when a mood is selected.
 */
const renderMoodEmojis = () => {
  const currentDate = getCurrentDate();
  const moodContainer = document.getElementById(MOOD_CONTAINER_ID);
  const formattedDate = getFormattedDate(currentDate);

  const currentMoodEntry = MOOD_STATE.find(
    (entry) => entry.date === formattedDate
  );

  MOOD_AND_EMOJI.forEach((item, index) => {
    const moodEmojiContainer = document.createElement("div");
    moodEmojiContainer.classList.add(...MOOD_EMOJI_CONTAINER_STYLE_CLASSES);

    const moodEmojiRadioInput = document.createElement("input");
    moodEmojiRadioInput.type = "radio";
    moodEmojiRadioInput.name = "mood";
    moodEmojiRadioInput.value = item.mood;
    moodEmojiRadioInput.id = `mood-${index}`;
    moodEmojiRadioInput.classList.add("hidden");

    // [2]
    if (currentMoodEntry && currentMoodEntry.mood === item.mood) {
      moodEmojiRadioInput.checked = true;
    }

    const moodEmoji = document.createElement("label");
    moodEmoji.htmlFor = moodEmojiRadioInput.id;
    moodEmoji.textContent = item.emoji;
    moodEmoji.classList.add(...MOOD_EMOJI_STYLE_CLASSES);

    moodEmojiContainer.appendChild(moodEmojiRadioInput);
    moodEmojiContainer.appendChild(moodEmoji);
    moodContainer.appendChild(moodEmojiContainer);

    moodEmojiRadioInput.addEventListener("change", () => {
      updateOrCreateMoodForCurrentDate(item.mood);
    });
  });
};

const updateOrCreateMoodForCurrentDate = (mood) => {
  const currentDate = getCurrentDate();
  const formattedDate = getFormattedDate(currentDate);
  const moodEntry = MOOD_STATE.find((entry) => entry.date === formattedDate);

  if (moodEntry) {
    moodEntry.mood = mood;
  } else {
    MOOD_STATE.push({ date: formattedDate, mood });
  }

  localStorage.setItem(
    MOOD_STATE_LOCAL_STORAGE_KEY,
    JSON.stringify(MOOD_STATE)
  );

  renderTimeline(currentDate);
};

const renderTimeline = (currentDate) => {
  const timelineContainer = document.getElementById(TIMELINE_CONTAINER_ID);
  const noOfDaysInCurrentMonth = getNoOfDaysInMonth(currentDate);

  timelineContainer.innerHTML = "";

  for (let day = 1; day <= noOfDaysInCurrentMonth; day++) {
    const dayContainer = document.createElement("div");
    dayContainer.classList.add(...DAY_CONTAINER_STYLE_CLASSES);

    const date = new Date(
      getYearFromDate(currentDate),
      getMonthFromDate(currentDate) - 1,
      day
    );

    const formattedDate = getFormattedDate(date);

    const dayBox = document.createElement("span");
    dayBox.textContent = day;
    dayBox.classList.add(...DAY_BOX_STYLE_CLASSES);
    dayContainer.appendChild(dayBox);

    const moodEntry = MOOD_STATE.find((entry) => entry.date === formattedDate);

    if (moodEntry) {
      const moodItem = MOOD_AND_EMOJI.find(
        (item) => item.mood === moodEntry.mood
      );

      const calenderMoodEmoji = document.createElement("span");

      calenderMoodEmoji.textContent = moodItem.emoji;

      calenderMoodEmoji.classList.add(...CALENDER_MOOD_EMOJI_STYLE_CLASSES);

      dayContainer.classList.add(moodItem.bgColor);

      dayContainer.appendChild(calenderMoodEmoji);
    }

    timelineContainer.appendChild(dayContainer);
  }
};

const currentDate = getCurrentDate();

renderMoodEmojis();
renderTimeline(currentDate);
