// Shorten text
export const shortenText = (text, sizeUpto = 75) => {
  return text.substring(0, sizeUpto) + '...'
}
