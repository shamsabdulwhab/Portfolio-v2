// All project text lives here.
// Change a title, description, or link in this file
// and the cards update. You do not need to edit the components.
//
// The small-card sentences are copied from the frame as closely as
// the export could be read. Edit any line that should say something else.
//
// image is empty until you add a picture. Put the file in public/images
// and set image to "/images/your-file.jpg".

const projects = [
  {
    id: "softness",
    group: "featured",
    kicker: "01 / Selected work",
    title: "The shape of softness",
    description:
      "A study of silk, light and movement for an independent fashion house.",
    tone: "sage",
    button: "yellow",
    buttonLabel: "View project",
    image: "",
  },
  {
    id: "identity",
    group: "featured",
    kicker: "02 / Selected work",
    title: "A considered identity",
    description:
      "A flexible visual language inspired by the rhythm of natural materials.",
    tone: "cream",
    button: "green",
    buttonLabel: "View project",
    image: "",
  },
  {
    id: "expressive",
    group: "featured",
    kicker: "03 / Selected work",
    title: "Quietly expressive",
    description:
      "A digital journal that gives thoughtful stories the space to breathe.",
    tone: "lilac",
    button: "yellow",
    buttonLabel: "View project",
    image: "",
  },
  {
    id: "printed-journeys",
    group: "editorial",
    kicker: "05 / Printed journeys",
    title: "05 / Printed journeys",
    description: "An invitation to look closer.",
    tone: "blush",
    image: "",
  },
  {
    id: "first-light",
    group: "small",
    category: "Identity",
    year: "2026",
    title: "First light",
    description: "A quiet study for thoughtful craft.",
    tone: "cream",
    button: "green",
    buttonLabel: "View",
    image: "",
  },
  {
    id: "honest-forms",
    group: "small",
    category: "Identity",
    year: "2026",
    title: "Honest forms",
    description: "Quiet geometry in nature.",
    tone: "sand",
    button: "yellow",
    buttonLabel: "View",
    image: "",
  },
  {
    id: "rooted",
    group: "small",
    category: "Environment",
    year: "2026",
    title: "Rooted",
    description: "An invitation to look closer.",
    tone: "mist",
    button: "green",
    buttonLabel: "View",
    image: "",
  },
  {
    id: "elsewhere",
    group: "small",
    category: "Place",
    year: "2026",
    title: "Elsewhere",
    description: "A place for independent ideas.",
    tone: "rose",
    button: "yellow",
    buttonLabel: "View",
    image: "",
  },
  {
    id: "in-view",
    group: "small",
    category: "Editorial",
    year: "2026",
    title: "In view",
    description: "Stories shaped with care.",
    tone: "mist",
    button: "green",
    buttonLabel: "View",
    wide: true,
    image: "",
  },
];

export const featuredProjects = projects.filter(
  (project) => project.group === "featured",
);

export const editorialProject = projects.find(
  (project) => project.group === "editorial",
);

export const smallProjects = projects.filter(
  (project) => project.group === "small",
);

export function getProject(id) {
  return projects.find((project) => project.id === id);
}

export default projects;
