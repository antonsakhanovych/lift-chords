import { keyLabel, svgUrlFor, MIN_SHIFT, MAX_SHIFT } from "./chordKey.js";

async function loadKey(shift: number): Promise<void> {
  const container = document.getElementById("chord-sheet");
  const label = document.getElementById("key-label");
  if (!container || !label) {
    return;
  }
  const response = await fetch(svgUrlFor(shift));
  const svgText = await response.text();
  container.innerHTML = svgText;
  label.textContent = keyLabel(shift);
}

function init(): void {
  const slider = document.getElementById("key-slider");
  if (!(slider instanceof HTMLInputElement)) {
    return;
  }
  slider.min = String(MIN_SHIFT);
  slider.max = String(MAX_SHIFT);
  slider.value = "0";
  slider.addEventListener("input", () => {
    void loadKey(Number(slider.value));
  });
  void loadKey(0);
}

document.addEventListener("DOMContentLoaded", init);
