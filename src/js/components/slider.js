import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider"

let w = window.innerWidth;

export default function viewportsСheck() {
const diet = tns({
    "container": "#rewind",
  "items": 1,
  "rewind": true,
  "swipeAngle": false,
  "speed": 400,
  "fixedWidth": 280,
   "gutter": 40,
});

  if (w >=765) {
    return;
      } else {
    const buf = tns({
    "container": ".mouse-drag2",
    "items": 1,
    "rewind": true,
    "swipeAngle": false,
    "speed": 400,
    "fixedWidth": 327,
    "gutter": 40,
  });
}}
