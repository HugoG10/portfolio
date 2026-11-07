export const skillGroups = [
  {
    id: "os",
    title: "Operating Systems",
    items: ["Windows", "Ubuntu", "Kali Linux"],
  },
  {
    id: "support",
    title: "IT Support & Troubleshooting",
    items: [
      "System diagnostics",
      "Windows troubleshooting",
      "Software installation",
      "Hardware fundamentals",
    ],
  },
  {
    id: "networking",
    title: "Networking",
    items: ["TCP/IP", "DNS", "DHCP", "IP addressing", "Packet analysis"],
  },
  {
    id: "tools",
    title: "Security & Networking Tools",
    items: ["Wireshark", "Scapy", "VirtualBox"],
  },
  {
    id: "programming",
    title: "Programming & Development",
    items: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    id: "devtools",
    title: "Developer Tools",
    items: ["Git", "GitHub", "Linux Terminal"],
  },
] as const;
