export const useMovieTags = (query, Movie_Tags) => {
  if (!query) return [];

  const normalizedQuery = query.toLowerCase();

  const LANGUAGES = ["telugu", "hindi", "tamil", "malayalam"];
  const GENRES = ["action", "funny", "romantic", "horror", "old","thriller","dark","emotional","comedy","animation"];

  const detectedLanguage = LANGUAGES.find((lang) =>
    normalizedQuery.includes(lang)
  );

  const detectedGenre = GENRES.find((genre) =>
    normalizedQuery.includes(genre)
  );

  // 🔥 Priority 1: language + genre
  if (detectedLanguage && detectedGenre) {
    const combinedTag =
      detectedLanguage +
      detectedGenre.charAt(0).toUpperCase() +
      detectedGenre.slice(1);

    if (Movie_Tags[combinedTag]) {
      return [combinedTag];
    }
  }

  // 🔁 Priority 2: genre only
  if (detectedGenre && Movie_Tags[detectedGenre]) {
    return [detectedGenre];
  }

  // ❌ No tag match
  return [];
};
