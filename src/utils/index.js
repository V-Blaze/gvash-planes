export default function isValidImageUrl(imageURL) {
  // Define an array of valid image file extensions
  const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];

  // Get the file extension from the URL
  const extension = imageURL.split('.').pop().toLowerCase();

  // Check if the extension is in the list of valid extensions
  if (validExtensions.includes(extension)) {
    // If the extension is valid, return true
    return true;
  }
  // If the extension is not valid, return false
  return false;
}
