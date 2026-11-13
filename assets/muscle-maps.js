const muscleGroups = {
  chest: "chest",
  shoulders: "shoulders",
  arms: "arms",
  back: "back",
  glutes: "glutes",
  legs: "legs",
  calves: "calves",
  core: "core"
};

const exerciseTargets = {
  "Flat Barbell Bench Press": { primary: ["chest"], support: ["shoulders", "arms"] },
  "Seated DB Shoulder Press": { primary: ["shoulders"], support: ["chest", "arms"] },
  "Standing DB Lateral Raise": { primary: ["shoulders"], support: [] },
  "Pec Deck Fly Machine": { primary: ["chest"], support: [] },
  "Cable Rope Pushdown": { primary: ["arms"], support: [] },
  "Parallel Bar / Bench Dips": { primary: ["arms"], support: ["chest"] },
  "Wide-Grip Lat Pulldown / Pull-Ups": { primary: ["back"], support: ["arms"] },
  "Seated Cable Row (Close V-Grip)": { primary: ["back"], support: ["arms"] },
  "Single-Arm DB Row": { primary: ["back"], support: ["arms"] },
  "Cable Rope Face Pulls": { primary: ["shoulders"], support: ["back"] },
  "Incline Dumbbell Curl": { primary: ["arms"], support: [] },
  "Barbell Squat / 45° Leg Press": { primary: ["legs"], support: ["glutes"] },
  "Bulgarian Split Squat": { primary: ["legs", "glutes"], support: [] },
  "Leg Extension Machine": { primary: ["legs"], support: [] },
  "Lying Leg Curl": { primary: ["legs"], support: [] },
  "Standing Calf Raise": { primary: ["calves"], support: [] },
  "Hanging Knee / Leg Raise": { primary: ["core"], support: [] },
  "30° Incline Dumbbell Press": { primary: ["chest"], support: ["shoulders", "arms"] },
  "Flat Dumbbell Press": { primary: ["chest"], support: ["shoulders", "arms"] },
  "Cable Lateral Raise": { primary: ["shoulders"], support: [] },
  "Low-to-High Cable Fly": { primary: ["chest"], support: [] },
  "Overhead Cable Rope Extension": { primary: ["arms"], support: [] },
  "Lying DB Skull Crushers": { primary: ["arms"], support: [] },
  "Chest-Supported T-Bar / Machine Row": { primary: ["back"], support: ["arms"] },
  "Close Neutral-Grip Pulldown": { primary: ["back"], support: ["arms"] },
  "Cable Straight-Arm Pulldown": { primary: ["back"], support: [] },
  "Reverse Pec Deck / Rear Delt Fly": { primary: ["shoulders"], support: ["back"] },
  "Dumbbell Hammer Curls": { primary: ["arms"], support: [] },
  "Romanian Deadlift (RDL)": { primary: ["legs", "glutes"], support: ["back"] },
  "Seated Leg Curl Machine": { primary: ["legs"], support: [] },
  "Hack Squat / Goblet Squat": { primary: ["legs"], support: ["glutes"] },
  "Seated Calf Raise": { primary: ["calves"], support: [] },
  "Plank Holds / Dead Bug": { primary: ["core"], support: [] }
};

const colors = {
  base: "#e5e3dc",
  outline: "#52646d",
  primary: "#d65b38",
  support: "#3282a3",
  label: "#52646d"
};

function roundedRect(context, x, y, width, height, radius = 5) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
  context.fill();
  context.stroke();
}

function ellipse(context, x, y, radiusX, radiusY) {
  context.beginPath();
  context.ellipse(x, y, radiusX, radiusY, 0, 0, Math.PI * 2);
  context.fill();
  context.stroke();
}

function drawFigure(context, center, view, targets) {
  const front = view === "front";
  const shape = (group, x, y, width, height, radius) => {
    const fill = targets.primary.has(group)
      ? colors.primary
      : targets.support.has(group) ? colors.support : colors.base;
    context.fillStyle = fill;
    context.strokeStyle = colors.outline;
    context.lineWidth = 1.4;
    roundedRect(context, center + x, y, width, height, radius);
  };
  const oval = (group, x, y, rx, ry) => {
    const fill = targets.primary.has(group)
      ? colors.primary
      : targets.support.has(group) ? colors.support : colors.base;
    context.fillStyle = fill;
    context.strokeStyle = colors.outline;
    context.lineWidth = 1.4;
    ellipse(context, center + x, y, rx, ry);
  };

  context.fillStyle = colors.base;
  context.strokeStyle = colors.outline;
  context.lineWidth = 1.4;
  ellipse(context, center, 22, 10, 13);
  roundedRect(context, center - 5, 34, 10, 9, 3);

  shape(front ? "torso" : "back", -15, 41, 30, 42, 8);
  oval("shoulders", -17, 47, 8, 8);
  oval("shoulders", 17, 47, 8, 8);
  if (front) {
    oval("chest", -8, 59, 7, 9);
    oval("chest", 8, 59, 7, 9);
    shape("core", -11, 68, 22, 20, 5);
  } else {
    shape("back", -11, 60, 22, 27, 5);
    shape("glutes", -13, 88, 12, 14, 4);
    shape("glutes", 1, 88, 12, 14, 4);
  }

  shape("arms", -29, 49, 9, 21, 4);
  shape("arms", 20, 49, 9, 21, 4);
  shape("arms", -31, 72, 8, 22, 4);
  shape("arms", 23, 72, 8, 22, 4);

  shape("legs", -13, 91, 11, 33, 5);
  shape("legs", 2, 91, 11, 33, 5);
  shape("calves", -12, 127, 9, 29, 4);
  shape("calves", 3, 127, 9, 29, 4);
  roundedRect(context, center - 15, 157, 12, 5, 2);
  roundedRect(context, center + 2, 157, 12, 5, 2);
}

function drawMuscleMap(canvas, targets) {
  const context = canvas.getContext("2d");
  if (!context) return false;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.lineCap = "round";
  context.lineJoin = "round";
  const mappedTargets = {
    primary: new Set(targets.primary),
    support: new Set(targets.support.filter((group) => !targets.primary.includes(group)))
  };
  drawFigure(context, 92, "front", mappedTargets);
  drawFigure(context, 236, "back", mappedTargets);

  context.fillStyle = colors.label;
  context.font = "600 11px system-ui, sans-serif";
  context.textAlign = "center";
  context.fillText("FRONT", 92, 181);
  context.fillText("BACK", 236, 181);
  return true;
}

function createMuscleMap(exercise, targets) {
  const figure = document.createElement("figure");
  figure.className = "muscle-map";

  const canvas = document.createElement("canvas");
  canvas.width = 328;
  canvas.height = 190;
  canvas.className = "muscle-map-canvas";
  canvas.setAttribute("role", "img");
  const primaryText = targets.primary.map((group) => muscleGroups[group]).join(", ");
  const supportText = targets.support.map((group) => muscleGroups[group]).join(", ");
  const alternative = `${exercise}: primary muscles worked: ${primaryText}. Supporting muscles: ${supportText || "none listed"}.`;
  canvas.setAttribute("aria-label", alternative);
  if (!drawMuscleMap(canvas, targets)) {
    canvas.textContent = alternative;
  }

  const caption = document.createElement("figcaption");
  caption.className = "map-caption";
  caption.innerHTML = `<strong>Primary:</strong> ${primaryText}${supportText ? `<br><strong>Supporting:</strong> ${supportText}` : ""}`;

  const legend = document.createElement("div");
  legend.className = "map-legend";
  legend.innerHTML = '<span class="map-key"><i class="map-swatch map-swatch-primary"></i>Primary</span>';
  if (supportText) {
    legend.innerHTML += '<span class="map-key"><i class="map-swatch map-swatch-support"></i>Supporting</span>';
  }

  figure.append(canvas, caption, legend);
  return figure;
}

document.querySelectorAll(".exercise-table td.muscles").forEach((cell) => {
  const exercise = cell.closest("tr").cells[0].textContent.trim();
  const targets = exerciseTargets[exercise];
  if (!targets) {
    console.warn(`No muscle map targets defined for: ${exercise}`);
    return;
  }
  cell.append(createMuscleMap(exercise, targets));
});
