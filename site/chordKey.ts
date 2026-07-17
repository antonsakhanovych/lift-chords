const NOTE_NAMES = [
  "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#",
] as const;

export const MIN_SHIFT = -5;
export const MAX_SHIFT = 6;

export function keyLabel(semitoneShift: number): string {
  const index = ((semitoneShift % 12) + 12) % 12;
  return `${NOTE_NAMES[index]}m`;
}

export function svgUrlFor(semitoneShift: number): string {
  return `keys/${semitoneShift}.svg`;
}
