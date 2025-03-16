const storedMoodState = localStorage.getItem(MOOD_STATE_LOCAL_STORAGE_KEY);

/**
 * This will contain the actual state of the mood of the user
 * eg: [{ date: '2025-03-17', mood: 'happy' }, { date: '2025-03-18', mood: 'sad' }]
 */
const MOOD_STATE = storedMoodState
  ? JSON.parse(storedMoodState)
  : [
      { date: "2025-03-14", mood: "excited" },
      { date: "2025-03-15", mood: "sad" },
      { date: "2025-03-16", mood: "happy" },
    ];
