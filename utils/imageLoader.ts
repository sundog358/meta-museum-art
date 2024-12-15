export const getImagePath = (imageName: string): string => {
  // Handle empty or invalid image names
  if (!imageName) {
    return "/images/placeholder.jpg";
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "/";
    const url = `${baseUrl}images/${imageName}`;

    // Remove any double slashes (except after http/https)
    return url.replace(/([^:]\/)\/+/g, "$1");
  } catch (error) {
    console.error("Error processing image path:", error);
    return "/images/placeholder.jpg";
  }
};

export const preloadImages = (images: string[]) => {
  if (typeof window === "undefined") return;

  images.forEach((image) => {
    const img = new Image();
    img.src = getImagePath(image);
  });
};
