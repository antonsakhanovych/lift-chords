import { test } from "node:test";
import assert from "node:assert/strict";
import { keyLabel, svgUrlFor, MIN_SHIFT, MAX_SHIFT } from "./chordKey.js";

test("keyLabel returns the root key at shift 0", () => {
  assert.equal(keyLabel(0), "Am");
});

test("keyLabel shifts up correctly", () => {
  assert.equal(keyLabel(2), "Bm");
});

test("keyLabel wraps negative shifts", () => {
  assert.equal(keyLabel(-1), "G#m");
});

test("keyLabel wraps shifts past an octave", () => {
  assert.equal(keyLabel(12), "Am");
});

test("svgUrlFor points at the keys directory", () => {
  assert.equal(svgUrlFor(3), "keys/3.svg");
});

test("svgUrlFor handles negative shifts", () => {
  assert.equal(svgUrlFor(-5), "keys/-5.svg");
});

test("MIN_SHIFT and MAX_SHIFT bound the 12-key range", () => {
  assert.equal(MIN_SHIFT, -5);
  assert.equal(MAX_SHIFT, 6);
});
