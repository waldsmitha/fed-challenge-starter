import tonedThumb from "./img/20-minutes-to-toned-thumb.jpg";
import tonedTrainer from "./img/20-minutes-to-toned-trainer.jpg";
import charlesThumb from "./img/charles-race-thumb.jpg";
import charlesTrainer from "./img/charles-race-trainer.jpg";
import hiitThumb from "./img/full-body-hiit-thumb.jpg";
import hiitTrainer from "./img/full-body-hiit-trainer.jpg";
import kafueThumb from "./img/kafue-river-thumb.jpg";
import kafueTrainer from "./img/kafue-river-trainer.jpg";
import lakeThumb from "./img/lake-inniscarra-thumb.jpg";
import lakeTrainer from "./img/lake-inniscarra-trainer.jpg";
import performanceThumb from "./img/performance-series-thumb.jpg";
import performanceTrainer from "./img/performance-series-trainer.jpg";
import shredThumb from "./img/shred-and-burn-thumb.jpg";
import shredTrainer from "./img/shred-and-burn-trainer.jpg";
import slowThumb from "./img/slow-pulls-thumb.jpg";
import slowTrainer from "./img/slow-pulls-trainer.jpg";

let data = [
  {
    type: "video",
    title: "Lake Inniscarra, Ireland - Pyramid",
    time: "30:53",
    views: "6,248 M",
    img: [lakeThumb, lakeTrainer],
  },
  {
    type: "series",
    title: "Performance Series",
    img: [performanceThumb, performanceTrainer],
    workouts: 9,
  },
  {
    type: "video",
    title: "Slow Pulls and Fast Intervals",
    time: "44:13",
    views: "9,948 M",
    img: [slowThumb, slowTrainer],
  },

  {
    type: "series",
    title: "20 Minutes to Toned",
    img: [tonedThumb, tonedTrainer],
    workouts: 12,
  },
  {
    type: "video",
    title: "Charles Race, Boston, Massachusetts",
    time: "36:22",
    views: "8,648 M",
    img: [charlesThumb, charlesTrainer],
  },
  {
    type: "series",
    title: "Full-Body HIIT Series",
    img: [hiitThumb, hiitTrainer],
    workouts: 12,
  },
  {
    type: "video",
    title: "Kafue River, Zambia - Power Stroke Pyramid",
    time: "22:22",
    views: "4,660 M",
    img: [kafueThumb, kafueTrainer],
  },
  {
    type: "series",
    title: "Shred & Burn Series",
    img: [shredThumb, shredTrainer],
    workouts: 16,
  },
];

export default data;
