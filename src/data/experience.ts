export type ExperienceItem = {
  role: string;
  organization: string;
  dates: string;
  summary: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Freelance Software Developer",
    organization: "Guerras Drywall Inc.",
    dates: "June 2024 – Present",
    summary:
      "The useful part for IT work was tracing a live site from the repository to DNS, HTTPS, and the browser, then fixing what did not line up.",
    points: [
      "Developed and deployed a responsive business website.",
      "Managed DNS, HTTPS, and hosting configuration.",
      "Maintained the project using Git and GitHub.",
      "Implemented responsive design and web accessibility features.",
    ],
  },
  {
    role: "Stock Associate",
    organization: "Burlington",
    dates: "October 2025 – December 2025",
    summary:
      "Retail is not IT, but the day-to-day is close to help desk work: a person with a problem, incomplete information, and a need for a clear next step.",
    points: [
      "Assisted customers and resolved inquiries.",
      "Worked collaboratively in a fast-paced environment.",
      "Maintained accurate inventory records.",
      "Developed communication and customer-service skills.",
    ],
  },
  {
    role: "Volunteer",
    organization: "Miles For Montclair",
    dates: "Spring 2024, 2025",
    summary:
      "Community work, kept here because it is real experience with teamwork and follow-through.",
    points: [
      "Worked with other volunteers to encourage campus-wide participation and community engagement.",
      "Contributed to fundraising that supported student assistance programs.",
    ],
  },
];
