import getHslAttributes from "./getHslAttributes";

export default function changeTextColor(color) {
  return getHslAttributes.lightness(color) < 50 ? "white" : "black";
}
