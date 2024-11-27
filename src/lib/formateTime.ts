export const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60); // Get total minutes
    const remainingSeconds = Math.floor(seconds % 60); // Get remaining seconds
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`; // Proper template string with backticks
};
