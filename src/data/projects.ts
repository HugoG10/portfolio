export const filters = [
  { id: "all", label: "All" },
  { id: "it-support", label: "IT Support" },
  { id: "networking", label: "Networking" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "software", label: "Software Development" },
  { id: "data", label: "Data Analytics" },
] as const;

export type FilterId = (typeof filters)[number]["id"];

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  filters: Exclude<FilterId, "all">[];
  featured: boolean;
  summary: string;
  period?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  demoLabel?: string;
  overview: string;
  objective: string;
  implementation: string[];
  challenges: string[];
  results: string[];
  lessons: string[];
  highlights?: { label: string; value: string }[];
  screenshots?: ProjectScreenshot[];
};

export const projects: Project[] = [
  {
    slug: "windows-system-troubleshooting",
    title: "Windows System Troubleshooting",
    category: "IT Support",
    filters: ["it-support"],
    featured: true,
    summary:
      "Practiced diagnosing Windows performance and software issues with the utilities already built into the operating system.",
    technologies: ["Windows", "Task Manager", "System Diagnostics"],
    overview:
      "This was hands-on practice, not a help desk job. I used Windows itself to look at performance and software problems, then checked whether a change actually helped.",
    objective:
      "Get comfortable diagnosing a Windows machine in a fixed order: see what the system is doing, form one guess, test it, and look again.",
    implementation: [
      "Monitored CPU, memory, and disk utilization in Task Manager.",
      "Investigated application and system performance issues instead of restarting and hoping.",
      "Practiced changing one thing at a time and checking the result before the next step.",
    ],
    challenges: [
      "A high utilization number is not a diagnosis. I had to name the process, watch it for a bit, and check the machine again after a single change.",
    ],
    results: [
      "I can walk a Windows performance problem from Task Manager through a test, instead of jumping straight to reinstalling software.",
      "The practice covered system diagnostics, software issues, and basic hardware awareness. It was lab practice, not production support tickets.",
    ],
    lessons: [
      "Slowing down is part of troubleshooting. Stacking several fixes at once makes it impossible to know which one mattered.",
      "Built-in tools are enough to start. Task Manager already shows where time is going if you read it carefully.",
    ],
  },
  {
    slug: "linux-networking-labs",
    title: "Linux & Networking Labs",
    category: "Networking / Systems",
    filters: ["networking"],
    featured: true,
    summary:
      "Hands-on Linux and networking practice with virtual machines, the terminal, Wireshark, and Scapy.",
    technologies: [
      "Linux",
      "Kali Linux",
      "VirtualBox",
      "Wireshark",
      "Scapy",
      "TCP/IP",
    ],
    overview:
      "I used virtual machines so I could practice on Linux without changing my main system. The work mixed terminal basics with looking at real packets.",
    objective:
      "Learn how a host is organized on disk, how to move around in a shell, and how a client and server actually exchange TCP/IP traffic.",
    implementation: [
      "Ran Kali Linux in VirtualBox.",
      "Practiced filesystem navigation and everyday Linux terminal commands.",
      "Captured and inspected TCP/IP traffic in Wireshark.",
      "Followed client-server communication in those captures.",
      "Used Scapy while analyzing packets.",
    ],
    challenges: [
      "A packet list is noisy. I practiced filtering a capture down to one conversation and checking it against what the lab was supposed to show.",
    ],
    results: [
      "I can navigate a Linux filesystem from the terminal and read a TCP conversation in Wireshark well enough to explain the exchange.",
      "This was lab practice. I am not presenting it as a cybersecurity engagement or a penetration test.",
    ],
    lessons: [
      "Isolating lab work in a virtual machine keeps experiments off the daily system.",
      "Protocol names are the easy part. The useful skill is following one conversation from start to finish.",
    ],
  },
  {
    slug: "guerras-drywall",
    title: "Guerras Drywall Business Website",
    category: "Web Infrastructure / Deployment",
    filters: ["software"],
    featured: true,
    summary:
      "Designed, built, and deployed a responsive business site, including the domain, DNS, HTTPS, and GitHub Pages hosting.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap 5",
      "DNS",
      "HTTPS",
      "GitHub Pages",
    ],
    github: "https://github.com/HugoG10/guerrasdrywall",
    demo: "https://guerrasdrywall.com/",
    demoLabel: "Live website",
    overview:
      "Guerras Drywall needed a straightforward site for a contracting business: services, project photos, an about page, and a way to request an estimate. I built the pages and took the site from a repository to a custom domain.",
    objective:
      "Ship a four-page site that loads at guerrasdrywall.com, over HTTPS, and can be updated from GitHub.",
    implementation: [
      "Built a responsive four-page site: home, about, projects, and contact.",
      "Styled it with CSS and Bootstrap 5, with a small amount of JavaScript.",
      "Hosted it on GitHub Pages and pointed the custom domain with a CNAME file.",
      "Configured DNS records and HTTPS so the public name serves the site securely.",
      "Used Git and GitHub for version control.",
      "Added SEO metadata, robots.txt, and an XML sitemap.",
      "Verified the site in Google Search Console.",
      "The contact page posts estimate requests through Formspree.",
    ],
    challenges: [
      "The pages, GitHub Pages, and the domain registrar do not update as one step. A site can be correct in the repository and still fail in the browser if the CNAME, DNS records, or certificate are wrong.",
      "I checked the live name, not only the github.io address, before calling the deployment done.",
    ],
    results: [
      "The site is live at guerrasdrywall.com.",
      "Visitors get four responsive pages, project photos, and a contact form. The hosting path is GitHub Pages with a custom domain and HTTPS.",
    ],
    lessons: [
      "Deployment is a troubleshooting problem. The HTML is only one layer; DNS and HTTPS have to agree with it.",
      "A small business site still needs a repeatable way to publish. Git made that possible without a separate server to maintain.",
    ],
    screenshots: [
      {
        src: "projects/guerras-drywall-home.jpg",
        alt: "Home page of the Guerras Drywall website on a desktop browser.",
        caption: "Home page at guerrasdrywall.com.",
      },
    ],
  },
  {
    slug: "wallet-worth",
    title: "Wallet Worth — Subscription Manager",
    category: "Full-Stack Web Application",
    filters: ["software"],
    featured: true,
    summary:
      "A deployed web app for tracking subscriptions, spending, and upcoming renewals, with sign-in and a Plaid bank-connection screen.",
    technologies: [
      "Python",
      "Flask",
      "JavaScript",
      "HTML",
      "CSS",
      "MongoDB",
      "Plaid",
      "Vercel",
    ],
    github: "https://github.com/HugoG10/Subscription-Manager",
    demo: "https://subscription-manager-mu-one.vercel.app/#overview",
    demoLabel: "Live demo",
    overview:
      "Wallet Worth is a web application I built so a person can see what they pay for, what renews soon, and which subscriptions they barely use. The interface is a static frontend. The API behind it is a Flask app.",
    objective:
      "Give someone one place to add subscriptions, see spending, and notice renewals, then deploy that application where it can actually be opened.",
    implementation: [
      "Built views for overview, subscriptions, spending, reminders, and usage.",
      "Subscriptions store a name, cost, billing cycle, category, status, renewal date, reminder window, and how often the service is used.",
      "Spending totals leave out paused and canceled plans.",
      "Reminders appear in the app when a renewal falls inside the chosen window. The app does not send email or text alerts.",
      "Sign-in and account creation use server sessions. Passwords are stored as scrypt hashes.",
      "Accounts, subscriptions, and bank links are stored in MongoDB.",
      "A bank can be connected through Plaid, which keeps the bank password on Plaid's side. Bank access tokens are encrypted before they are stored.",
      "A CSV statement can be imported when a bank link is not used.",
      "The repository includes tests for subscription rules and statement parsing.",
      "The running demo is deployed on Vercel.",
    ],
    challenges: [
      "The screen, the database, and the bank connection fail in different ways. A page can render while MongoDB is unreachable, or while Plaid has no credentials configured.",
      "The Plaid code defaults to Plaid's sandbox unless production credentials are set. I treat that as a configuration fact, not as a finished financial product.",
      "Subscription math had to stay consistent: weekly and yearly prices are normalized, and paused or canceled plans stay on the list without inflating the spending total.",
    ],
    results: [
      "The demo is online and covers subscription management, spending, in-app renewal reminders, sign-in, and a Plaid connection screen.",
      "I can point to the repository for the Flask routes, the MongoDB store, and the tests, rather than describing a backend I did not build.",
    ],
    lessons: [
      "Most of the learning showed up after the first screen worked: sessions, environment variables, bad input, and the difference between sandbox and production settings.",
      "Saying what the app does not do is part of explaining it. These reminders are in the interface. They are not a notification service.",
    ],
    screenshots: [
      {
        src: "projects/wallet-worth.png",
        alt: "Sign-in screen for the Wallet Worth subscription manager.",
        caption: "Sign-in screen for the deployed demo.",
      },
    ],
  },
  {
    slug: "job-market-analysis",
    title: "Data Analyst Job Market Analysis",
    category: "Data Analytics",
    filters: ["data"],
    featured: false,
    period: "June 2026 – September 2026",
    summary:
      "SQL analysis of remote data analyst postings, looking at in-demand skills and how those skills sit next to pay.",
    technologies: ["SQL", "PostgreSQL"],
    overview:
      "I analyzed job-posting data to see which skills remote data analyst roles ask for, which roles pay more, and where demand and pay show up together.",
    objective:
      "Use SQL to answer a hiring question: which skills appear most often, and which of those also line up with higher pay.",
    implementation: [
      "Queried the postings in PostgreSQL.",
      "Used JOINs, CTEs, GROUP BY, aggregates, filters, and sorting to pull the trends.",
      "Compared how often a skill was requested with the average salary attached to postings that listed it.",
    ],
    challenges: [
      "A skill ranking by itself was not the point. Demand and pay had to be aggregated side by side, which meant joining postings to skills and grouping carefully.",
    ],
    results: [
      "SQL appeared in 7,291 remote data analyst postings, more than any other skill in the dataset.",
      "The five most in-demand skills, in the order named by the analysis, were SQL, Excel, Python, Tableau, and Power BI.",
      "I also set skill demand next to average salary to see which technologies combined hiring demand with pay.",
    ],
    lessons: [
      "The query is the analysis. If the JOIN or the GROUP BY is wrong, the ranking looks confident and is not.",
    ],
    highlights: [{ label: "SQL postings", value: "7,291" }],
  },
  {
    slug: "ecommerce-sales-analysis",
    title: "E-Commerce Sales Analysis & Dashboard",
    category: "Data Analytics",
    filters: ["data"],
    featured: false,
    period: "April 2026 – June 2026",
    summary:
      "An Excel dashboard of revenue, profitability, products, and regional sales, built after the source data was cleaned.",
    technologies: ["Excel", "Power Query", "PivotTables"],
    overview:
      "I cleaned an e-commerce sales file and built an Excel dashboard so revenue, profit, products, and regions could be compared without rereading the raw rows.",
    objective:
      "Make top products, categories, and regions visible, and make sure the numbers were consistent before the charts were built.",
    implementation: [
      "Cleaned and transformed the sales data with Power Query.",
      "Analyzed revenue, profitability, product performance, and regional sales with PivotTables and formulas.",
      "Built an interactive dashboard with PivotCharts, slicers, and KPI metrics.",
    ],
    challenges: [
      "The dashboard was only as trustworthy as the cleaned file. Inconsistent fields would have made a top product or region look more precise than it was.",
    ],
    results: [
      "The workbook surfaces revenue, profitability, product performance, and regional sales trends.",
      "I identified top products, categories, and regions from that cleaned data and wrote them up as business observations.",
    ],
    lessons: [
      "Cleaning is part of the deliverable. A slicer on bad categories just makes the mistake interactive.",
    ],
  },
  {
    slug: "sales-performance-dashboard",
    title: "Executive Sales Performance Dashboard",
    category: "Data Analytics",
    filters: ["data"],
    featured: false,
    period: "February 2026 – April 2026",
    summary:
      "A Power BI view of sales by product, region, and time, with DAX measures for the figures an executive summary actually needs.",
    technologies: ["Power BI", "DAX", "Power Query"],
    overview:
      "I designed a Power BI dashboard for sales performance and kept the measures short: revenue, profit margin, average order value, and sales growth.",
    objective:
      "Let someone filter sales by product, region, and time without rebuilding the report, and define those four measures once in DAX.",
    implementation: [
      "Cleaned and transformed the raw data in Power Query.",
      "Wrote DAX measures for revenue, profit margin, average order value, and sales growth.",
      "Added filters so the same report could be cut by product, region, and time period.",
    ],
    challenges: [
      "The constraint was keeping the page to the numbers someone would actually check. More visuals would have buried the four measures.",
    ],
    results: [
      "The report evaluates sales across products, regions, and time using those DAX measures.",
    ],
    lessons: [
      "A measure is a definition. If margin is calculated differently in two visuals, the dashboard disagrees with itself.",
    ],
  },
  {
    slug: "customer-churn-analysis",
    title: "Customer Churn Analysis",
    category: "Data Analytics",
    filters: ["data"],
    featured: false,
    period: "December 2025 – February 2026",
    summary:
      "Exploratory Python analysis of which customers leave, compared across contract, tenure, charges, and service use.",
    technologies: ["Python", "Pandas", "Matplotlib"],
    overview:
      "I used Python to explore a customer dataset and look for patterns tied to churn. The work was exploratory analysis and charts, not a production model.",
    objective:
      "Find which account and service differences show up more often among customers who leave.",
    implementation: [
      "Cleaned and explored demographic, account, and service fields with Pandas.",
      "Compared churn across contract type, customer tenure, monthly charges, and service usage.",
      "Used Matplotlib to show the segments where churn ran higher.",
    ],
    challenges: [
      "A chart of a segment is not a cause. I compared contract, tenure, charges, and usage after cleaning, and I stopped at the patterns the comparison supported.",
    ],
    results: [
      "The analysis shows how churn differs across those four cuts and which segments run higher in the charts.",
    ],
    lessons: [
      "Exploratory work should say what was compared. It should not be described as a predictive system if no model was deployed.",
    ],
  },
  {
    slug: "housing-price-analysis",
    title: "Housing Price Analysis",
    category: "Data Analytics",
    filters: ["data"],
    featured: false,
    period: "November 2025 – December 2025",
    summary:
      "Linear and quadratic regression models for home prices, compared with R² and AIC and written up as a technical report.",
    technologies: ["R", "Regression"],
    overview:
      "I analyzed housing data in R to see which factors track with home prices, then compared a linear model with a quadratic one.",
    objective:
      "Build both models, score them with R² and Akaike Information Criterion (AIC), and document the method so the comparison can be checked.",
    implementation: [
      "Explored the housing data and the factors used in the models.",
      "Fit linear and quadratic regression models.",
      "Compared them with R² and AIC.",
      "Made charts for the trends used in the write-up.",
      "Documented the methodology, analysis, and results in a technical report.",
    ],
    // PLACEHOLDER: add the reported R² or AIC figures here only if you copy them from the technical report. Do not estimate them.
    challenges: [
      "A linear fit and a quadratic fit can both look plausible on a chart. I used R² and AIC as the comparison and wrote the method into the report.",
    ],
    results: [
      "The project produced a written comparison of the linear and quadratic models, with the charts used to support it.",
    ],
    lessons: [
      "A model needs a score and a write-up. Fitting a line is not the same thing as explaining why it was preferred.",
    ],
  },
];

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
