const IMG_BASE =
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/";

const workouts = [
  {
    id: "pushA",
    day: "MONDAY",
    name: "Push A",
    category: "Push",
    priority: "Upper chest priority",
    muscles: "Chest · Front/side delts · Triceps",
    exercises: [
      [
        "Incline Dumbbell Press",
        "3 × 8–12",
        "Upper chest",
        `${IMG_BASE}Incline_Dumbbell_Press/0.jpg`,
      ],
      [
        "Flat Barbell Bench Press",
        "3 × 6–10",
        "Mid chest",
        `${IMG_BASE}Barbell_Bench_Press_-_Medium_Grip/0.jpg`,
      ],
      [
        "Seated Cable Row",
        "2 × 8–12",
        "Mid-back",
        `${IMG_BASE}Seated_Cable_Rows/0.jpg`,
      ],
      [
        "Seated Dumbbell Shoulder Press",
        "2 × 8–12",
        "Front delts",
        `${IMG_BASE}Dumbbell_Shoulder_Press/0.jpg`,
      ],
      [
        "Dumbbell Lateral Raise",
        "3 × 12–20",
        "Side delts",
        `${IMG_BASE}Side_Lateral_Raise/0.jpg`,
      ],
      [
        "Rope Triceps Pushdown",
        "3 × 10–15",
        "Lateral / medial triceps",
        `${IMG_BASE}Triceps_Pushdown_-_Rope_Attachment/0.jpg`,
      ],
      [
        "Overhead Cable Extension",
        "2 × 10–15",
        "Long-head triceps",
        `${IMG_BASE}Cable_Rope_Overhead_Triceps_Extension/0.jpg`,
      ],
    ],
  },
  {
    id: "pullA",
    day: "TUESDAY",
    name: "Pull A",
    category: "Pull",
    priority: "Back width priority",
    muscles: "Lats · Rear delts · Biceps · Rotator cuff",
    exercises: [
      [
        "Wide-Grip Lat Pulldown",
        "3 × 8–12",
        "Lats / back width",
        `${IMG_BASE}Wide-Grip_Lat_Pulldown/0.jpg`,
      ],
      [
        "Single-Arm Cable Lat Pulldown",
        "2 × 10–12",
        "Lats",
        `${IMG_BASE}One_Arm_Lat_Pulldown/0.jpg`,
      ],
      [
        "Seated Cable Row",
        "2 × 8–12",
        "Mid-back",
        `${IMG_BASE}Seated_Cable_Rows/0.jpg`,
      ],
      [
        "Face Pull",
        "2 × 12–20",
        "Rear delts / external rotators",
        `${IMG_BASE}Face_Pull/0.jpg`,
      ],
      [
        "Incline Dumbbell Curl",
        "3 × 8–12",
        "Biceps long-head emphasis",
        `${IMG_BASE}Incline_Dumbbell_Curl/0.jpg`,
      ],
      [
        "Preacher Curl",
        "2 × 10–15",
        "Biceps short-head emphasis",
        `${IMG_BASE}Preacher_Curl/0.jpg`,
      ],
      [
        "Cable External Rotation",
        "2 × 12–15",
        "Rotator cuff",
        `${IMG_BASE}Cable_Internal_Rotation/0.jpg`,
      ],
    ],
  },
  {
    id: "legsA",
    day: "WEDNESDAY",
    name: "Legs A",
    category: "Legs",
    priority: "Quad priority",
    muscles: "Quads · Adductors · Calves · Tibialis",
    exercises: [
      [
        "Barbell Squat",
        "3 × 6–10",
        "Quads / glutes",
        `${IMG_BASE}Barbell_Full_Squat/0.jpg`,
      ],
      ["Leg Press", "3 × 10–12", "Quads", `${IMG_BASE}Leg_Press/0.jpg`],
      [
        "Leg Extension",
        "2 × 12–15",
        "Quads",
        `${IMG_BASE}Leg_Extensions/0.jpg`,
      ],
      [
        "Hip Adduction Machine",
        "2 × 12–15",
        "Inner thighs / adductors",
        `${IMG_BASE}Thigh_Adductor/0.jpg`,
      ],
      [
        "Standing Calf Raise",
        "3 × 10–15",
        "Gastrocnemius",
        `${IMG_BASE}Standing_Calf_Raises/0.jpg`,
      ],
      [
        "Tibialis Raise",
        "2 × 15–20",
        "Tibialis anterior",
        `${IMG_BASE}Toe_Raise/0.jpg`,
      ],
    ],
  },
  {
    id: "pushB",
    day: "THURSDAY",
    name: "Push B",
    category: "Push",
    priority: "Lower chest priority",
    muscles: "Chest · Side/rear delts · Triceps",
    exercises: [
      [
        "Chest Dips (Forward Lean)",
        "3 × 8–12",
        "Lower chest emphasis",
        `${IMG_BASE}Dips_-_Chest_Version/0.jpg`,
      ],
      [
        "High-to-Low Cable Fly",
        "3 × 12–15",
        "Lower chest emphasis",
        `${IMG_BASE}Cable_Crossover/0.jpg`,
      ],
      [
        "Cable Lateral Raise",
        "3 × 12–20",
        "Side delts",
        `${IMG_BASE}Cable_Seated_Lateral_Raise/0.jpg`,
      ],
      [
        "Reverse Cable Fly",
        "2 × 12–20",
        "Rear delts",
        `${IMG_BASE}Cable_Rear_Delt_Fly/0.jpg`,
      ],
      [
        "Overhead Cable Triceps Extension",
        "3 × 10–15",
        "Long-head triceps",
        `${IMG_BASE}Cable_Rope_Overhead_Triceps_Extension/0.jpg`,
      ],
      [
        "EZ-Bar Skull Crusher",
        "2 × 10–12",
        "Triceps",
        `${IMG_BASE}EZ-Bar_Skullcrusher/0.jpg`,
      ],
    ],
  },
  {
    id: "pullB",
    day: "FRIDAY",
    name: "Pull B",
    category: "Pull",
    priority: "Back thickness priority",
    muscles: "Mid-back · Traps · Rear delts · Forearms",
    exercises: [
      [
        "Chest-Supported T-Bar Row",
        "3 × 6–10",
        "Mid-back thickness",
        `${IMG_BASE}Lying_T-Bar_Row/0.jpg`,
      ],
      [
        "Neutral-Grip Lat Pulldown",
        "2 × 8–12",
        "Lats",
        `${IMG_BASE}V-Bar_Pulldown/0.jpg`,
      ],
      [
        "Dumbbell Shrugs",
        "2 × 10–15",
        "Upper traps",
        `${IMG_BASE}Dumbbell_Shrug/0.jpg`,
      ],
      [
        "Reverse Pec Deck",
        "3 × 12–20",
        "Rear delts",
        `${IMG_BASE}Reverse_Machine_Flyes/0.jpg`,
      ],
      [
        "Incline Bench Y-Raise",
        "2 × 12–15",
        "Lower traps",
        `${IMG_BASE}Front_Incline_Dumbbell_Raise/0.jpg`,
      ],
      [
        "Dumbbell Hammer Curl",
        "3 × 10–12",
        "Brachialis / brachioradialis",
        `${IMG_BASE}Hammer_Curls/0.jpg`,
      ],
      [
        "Reverse EZ-Bar Curl",
        "2 × 10–15",
        "Forearms",
        `${IMG_BASE}Reverse_Barbell_Curl/0.jpg`,
      ],
      [
        "Back Extension",
        "2 × 10–15",
        "Spinal erectors",
        `${IMG_BASE}Hyperextensions_Back_Extensions/0.jpg`,
      ],
    ],
  },
  {
    id: "legsB",
    day: "SATURDAY",
    name: "Legs B",
    category: "Legs",
    priority: "Posterior-chain priority",
    muscles: "Hamstrings · Glutes · Soleus · Tibialis",
    exercises: [
      [
        "Romanian Deadlift",
        "3 × 8–12",
        "Hamstrings / glutes",
        `${IMG_BASE}Romanian_Deadlift/0.jpg`,
      ],
      [
        "Barbell Hip Thrust",
        "3 × 8–12",
        "Gluteus maximus",
        `${IMG_BASE}Barbell_Hip_Thrust/0.jpg`,
      ],
      [
        "Lying Leg Curl",
        "3 × 10–15",
        "Hamstrings",
        `${IMG_BASE}Lying_Leg_Curls/0.jpg`,
      ],
      [
        "Bulgarian Split Squat",
        "2 × 8–12 each leg",
        "Quads / glutes",
        `${IMG_BASE}Split_Squat_with_Dumbbells/0.jpg`,
      ],
      [
        "Hip Abduction Machine",
        "2 × 12–20",
        "Glute medius / minimus",
        `${IMG_BASE}Thigh_Abductor/0.jpg`,
      ],
      [
        "Seated Calf Raise",
        "3 × 12–20",
        "Soleus",
        `${IMG_BASE}Seated_Calf_Raise/0.jpg`,
      ],
      [
        "Tibialis Raise",
        "2 × 15–20",
        "Tibialis anterior",
        `${IMG_BASE}Toe_Raise/0.jpg`,
      ],
    ],
  },
];

const coverage = [
  [
    "Chest",
    "Upper chest · Mid chest · Lower chest",
    "Incline presses, flat presses, dips and high-to-low fly.",
  ],
  [
    "Shoulders",
    "Front delts · Side delts · Rear delts",
    "Shoulder press, lateral raises, face pulls and reverse fly.",
  ],
  [
    "Triceps",
    "Long head · Lateral head · Medial head",
    "Overhead extensions, pushdowns and skull crushers.",
  ],
  [
    "Back",
    "Lats · Rhomboids · Traps · Spinal erectors",
    "Pulldowns, rows, Y-raises, shrugs and back extensions.",
  ],
  [
    "Arms",
    "Biceps · Brachialis · Brachioradialis",
    "Incline curls, preacher curls, hammer curls and reverse curls.",
  ],
  [
    "Legs",
    "Quads · Hamstrings · Glutes · Calves · Tibialis",
    "Squats, leg curls, RDLs, hip thrusts and calf raises.",
  ],
  [
    "Additional",
    "Adductors · Abductors · Rotator cuff",
    "Adduction, abduction and external rotation exercises.",
  ],
];

const scheduleGrid = document.getElementById("scheduleGrid");
const workoutContainer = document.getElementById("workoutContainer");
const coverageGrid = document.getElementById("coverageGrid");
const search = document.getElementById("search");

let activeFilter = "All";
let searchTerm = "";

function getCompleted() {
  return JSON.parse(localStorage.getItem("sidFitnessCompleted") || "[]");
}
function saveCompleted(list) {
  localStorage.setItem("sidFitnessCompleted", JSON.stringify(list));
}

function renderSchedule() {
  const days = [
    ...workouts,
    {
      day: "SUNDAY",
      name: "Rest Day",
      priority: "Recovery",
      muscles: "Rest · Nutrition · Mobility",
    },
  ];

  scheduleGrid.innerHTML = days
    .map(
      (w) => `
    <article class="schedule-card">
      <span class="day">${w.day}</span>
      <h3>${w.name}</h3>
      <p>${w.muscles}</p>
      <div class="focus">${w.priority}</div>
    </article>
  `,
    )
    .join("");
}

function renderWorkouts() {
  const completed = getCompleted();

  const filtered = workouts.filter(
    (w) =>
      (activeFilter === "All" || w.category === activeFilter) &&
      (w.name.toLowerCase().includes(searchTerm) ||
        w.exercises.some((e) =>
          e.join(" ").toLowerCase().includes(searchTerm),
        )),
  );

  workoutContainer.innerHTML =
    filtered
      .map(
        (w) => `
    <section class="day-block">
      <div class="day-header">
        <div>
          <h3>${w.day} / <span>${w.name}</span></h3>
          <p>${w.priority} · ${w.muscles}</p>
        </div>
        <span class="day-count">${w.exercises.length} EXERCISES</span>
      </div>
      <div class="exercise-grid">
        ${w.exercises
          .map((e, i) => {
            const key = `${w.id}-${i}`;
            const done = completed.includes(key);
            return `
            <article class="exercise-card ${done ? "completed" : ""}">
              <div class="exercise-title-row">
                <h4>${e[0]}</h4>
                <span class="rep-pill">${e[1]}</span>
              </div>
              <div class="exercise-visual-row">
                <div class="exercise-visual">
                  <img src="${e[3]}" alt="${e[0]}" loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/400x300/17202b/ed2635?text=SID+FITNESS'">
                  <span class="visual-caption">${w.category.toUpperCase()}</span>
                </div>
                <div class="muscle-target">
                  <span class="target-icon">◉</span>
                  <small>TARGET</small>
                  <strong>${e[2]}</strong>
                </div>
              </div>
              <div class="exercise-details">
                <p class="form-cue"><i>✓</i> Perform controlled repetitions with full range of motion.</p>
                <div class="card-actions">
                  <button class="complete-button ${done ? "done" : ""}" style="width:100%"
                    onclick="toggleExercise('${key}')">
                    ${done ? "✓ Completed" : "Mark as completed"}
                  </button>
                </div>
              </div>
            </article>`;
          })
          .join("")}
      </div>
    </section>
  `,
      )
      .join("") || '<p class="empty-state">No matching exercises found.</p>';
}

function toggleExercise(key) {
  let completed = getCompleted();
  completed = completed.includes(key)
    ? completed.filter((x) => x !== key)
    : [...completed, key];
  saveCompleted(completed);
  renderWorkouts();
  updateProgress();
}

function updateProgress() {
  const completed = getCompleted();
  const total = workouts.length;
  const count = workouts.filter((w) =>
    w.exercises.every((e, i) => completed.includes(`${w.id}-${i}`)),
  ).length;
  const percent = Math.round((count / total) * 100);
  document.getElementById("progressText").textContent =
    `${count} / ${total} sessions completed`;
  document.getElementById("progressPercent").textContent = `${percent}%`;
  document.getElementById("progressBar").style.width = `${percent}%`;
}

function renderCoverage() {
  coverageGrid.innerHTML = coverage
    .map(
      (c) => `
    <article class="coverage-card">
      <h3>${c[0]}</h3>
      <p><strong>${c[1]}</strong></p>
      <p>${c[2]}</p>
    </article>
  `,
    )
    .join("");
}

document.getElementById("filters").addEventListener("click", (e) => {
  const button = e.target.closest("button[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  document
    .querySelectorAll(".filter")
    .forEach((b) => b.classList.toggle("active", b === button));
  renderWorkouts();
});

search.addEventListener("input", (e) => {
  searchTerm = e.target.value.toLowerCase().trim();
  renderWorkouts();
});

renderSchedule();
renderWorkouts();
renderCoverage();
updateProgress();
