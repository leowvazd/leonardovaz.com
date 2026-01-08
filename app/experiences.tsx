"use client";

import { useState } from "react";

const experiences = [
  {
    company: "Itaú Unibanco - Insurances (Accenture)",
    role: "Mid Software Engineer",
    period: "JAN 2024 - PRESENT",
    highlights: [
      "Collaborated on modernizing the end-to-end journey of some of the bank's insurance products, such as the protected card.",
      "Refactoring the databases to standardize certain data types across the community's databases. For example, rewriting all customer documents and zip codes as numbers only in our databases.",
      "Redesign and development of the flow for sending information from insured clients to their respective insurance companies.",
    ],
  },
  {
    company: "Santander S.A - PLARD (Accenture)",
    role: "Junior Software Engineer",
    period: "AUG 2023 - DEC 2023",
    highlights: [
      "Modernizing the card platform by removing workflows from the legacy system and replacing them with a modern Quarkus-based system, targeting individual customer segments.nco.",
      "Technical construction of all manufacturing processes that manage the modern card system related to debit transactions.",
      "Standardization of project documentation, using AI to group them by their respective themes and subtopics."      
    ],
  },
  {
    company: "Natura (Accenture)",
    role: "Intern Software Engineer",
    period: "OCT 2022 - JUL 2023",
    highlights: [
      "Worked mainly with JavaScript in the maintenance and development of Natura’s e-commerce platform.",
      "Implemented improvements and bug fixes to enhance performance, usability, and reliability.",
      "Collaborated within agile teams, following best practices for version control and continuous delivery.",
    ],
  },
  {
    company: "Telefônica (Accenture)",
    role: "Intern Software Engineer",
    period: "DEC 2021 - SEP 2022",
    highlights: [
      "Worked with C# providing application support and handling tickets and service requests.",
      "Investigated, diagnosed, and resolved incidents to ensure system stability and availability.",
      "Interacted with different teams to prioritize demands and deliver timely and effective solutions.",
    ],
  },
];

export default function ExperienceList() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col sm:flex-row">
      <ul className="flex flex-col py-8 px-2">
        {experiences.map((exp, idx) => (
          <li
            key={exp.company}
            className={`text-base cursor-pointer px-4 py-2 mb-2 transition-all
              ${
                selected === idx
                  ? "text-yellow-600 border-l-2 border-yellow-600 bg-[#192133]"
                  : "text-gray-400 hover:text-yellow-600"
              }
            `}
            onClick={() => setSelected(idx)}
          >
            {exp.company}
          </li>
        ))}
      </ul>
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold text-white mb-1">
          {experiences[selected].role}{" "}
          <span className="text-yellow-600">
            @ {experiences[selected].company}
          </span>
        </h2>
        <div className="text-gray-400 mb-6">{experiences[selected].period}</div>
        <ul className="text-sm leading-7 space-y-4">
          {experiences[selected].highlights.map((item, i) => (
            <li key={i} className="flex items-start text-gray-300">
              <span className="text-yellow-600 mr-3">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
