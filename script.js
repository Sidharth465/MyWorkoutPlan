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
        "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=500",
      ],
      [
        "Flat Barbell Bench Press",
        "3 × 6–10",
        "Mid chest",
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
      ],
      [
        "Seated Cable Row",
        "2 × 8–12",
        "Mid-back",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500",
      ],
      [
        "Seated Dumbbell Shoulder Press",
        "2 × 8–12",
        "Front delts",
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
      ],
      [
        "Dumbbell Lateral Raise",
        "3 × 12–20",
        "Side delts",
        "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=500",
      ],
      [
        "Rope Triceps Pushdown",
        "3 × 10–15",
        "Lateral / medial triceps",
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
      ],
      [
        "Overhead Cable Extension",
        "2 × 10–15",
        "Long-head triceps",
        "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=500",
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
        "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=500",
      ],
      [
        "Single-Arm Cable Lat Pulldown",
        "2 × 10–12",
        "Lats",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500",
      ],
      [
        "Seated Cable Row",
        "2 × 8–12",
        "Mid-back",
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
      ],
      [
        "Face Pull",
        "2 × 12–20",
        "Rear delts / external rotators",
        "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=500",
      ],
      [
        "Incline Dumbbell Curl",
        "3 × 8–12",
        "Biceps long-head emphasis",
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
      ],
      [
        "Preacher Curl",
        "2 × 10–15",
        "Biceps short-head emphasis",
        "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=500",
      ],
      [
        "Cable External Rotation",
        "2 × 12–15",
        "Rotator cuff",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500",
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
        "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=500",
      ],
      [
        "Leg Press",
        "3 × 10–12",
        "Quads",
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
      ],
      [
        "Leg Extension",
        "2 × 12–15",
        "Quads",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500",
      ],
      [
        "Hip Adduction Machine",
        "2 × 12–15",
        "Inner thighs / adductors",
        "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=500",
      ],
      [
        "Standing Calf Raise",
        "3 × 10–15",
        "Gastrocnemius",
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
      ],
      [
        "Tibialis Raise",
        "2 × 15–20",
        "Tibialis anterior",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500",
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
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
      ],
      [
        "High-to-Low Cable Fly",
        "3 × 12–15",
        "Lower chest emphasis",
        "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=500",
      ],
      [
        "Cable Lateral Raise",
        "3 × 12–20",
        "Side delts",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500",
      ],
      [
        "Reverse Cable Fly",
        "2 × 12–20",
        "Rear delts",
        "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=500",
      ],
      [
        "Overhead Cable Triceps Extension",
        "3 × 10–15",
        "Long-head triceps",
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
      ],
      [
        "EZ-Bar Skull Crusher",
        "2 × 10–12",
        "Triceps",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500",
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
        "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=500",
      ],
      [
        "Neutral-Grip Lat Pulldown",
        "2 × 8–12",
        "Lats",
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
      ],
      [
        "Dumbbell Shrugs",
        "2 × 10–15",
        "Upper traps",
        "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=500",
      ],
      [
        "Reverse Pec Deck",
        "3 × 12–20",
        "Rear delts",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500",
      ],
      [
        "Incline Bench Y-Raise",
        "2 × 12–15",
        "Lower traps",
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
      ],
      [
        "Dumbbell Hammer Curl",
        "3 × 10–12",
        "Brachialis / brachioradialis",
        "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=500",
      ],
      [
        "Reverse EZ-Bar Curl",
        "2 × 10–15",
        "Forearms",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500",
      ],
      [
        "Back Extension",
        "2 × 10–15",
        "Spinal erectors",
        "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=500",
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
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
      ],
      [
        "Barbell Hip Thrust",
        "3 × 8–12",
        "Gluteus maximus",
        "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=500",
      ],
      [
        "Lying Leg Curl",
        "3 × 10–15",
        "Hamstrings",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500",
      ],
      [
        "Bulgarian Split Squat",
        "2 × 8–12 each leg",
        "Quads / glutes",
        "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=500",
      ],
      [
        "Hip Abduction Machine",
        "2 × 12–20",
        "Glute medius / minimus",
        "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=500",
      ],
      [
        "Seated Calf Raise",
        "3 × 12–20",
        "Soleus",
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
      ],
      [
        "Tibialis Raise",
        "2 × 15–20",
        "Tibialis anterior",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500",
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
          <h3>${w.day} / ${w.name}</h3>
          <p>${w.priority} · ${w.muscles}</p>
        </div>
        <span class="eyebrow">${w.exercises.length} EXERCISES</span>
      </div>
      <div class="exercise-grid">
        ${w.exercises
          .map((e, i) => {
            const key = `${w.id}-${i}`;
            const done = completed.includes(key);
            return `
            <article class="exercise-card">
              <img src="${e[3]}" alt="${e[0]}" loading="lazy"
                onerror="this.onerror=null;this.src='https://placehold.co/400x400/202f28/b7f36b?text=SID+FITNESS'">
              <div class="exercise-info">
                <h4>${e[0]}</h4>
                <div class="exercise-meta">
                  <span>${e[1]}</span><span>${e[2]}</span>
                </div>
                <p>Perform controlled repetitions with good technique and appropriate resistance.</p>
                <button class="complete-button ${done ? "done" : ""}"
                  onclick="toggleExercise('${key}')">
                  ${done ? "✓ Completed" : "Mark as completed"}
                </button>
              </div>
            </article>`;
          })
          .join("")}
      </div>
    </section>
  `,
      )
      .join("") || "<p>No matching exercises found.</p>";
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
