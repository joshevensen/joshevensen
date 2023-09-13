export function getColor(index: number, prefix?: "bg-" | "border-" | "text-") {
  let newIndex = null;

  let colors = ["orange", "yellow", "teal", "blue"];

  if (prefix) {
    colors = colors.map((color) => prefix + color);
  }

  if (index > colors.length - 1) {
    const multiple = Math.floor(index / colors.length);
    newIndex = index - colors.length * multiple;
  } else {
    newIndex = index;
  }

  return colors[newIndex];
}
