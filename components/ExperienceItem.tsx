import React from 'react';

function ExperienceItem(props: {
  title: string,
  company: string,
  location: string,
  date: string,
  content: string[],
}) {
  return (
    <div className="bg-white p-4">
      <div className="text-xl font-bold">{props.title}</div>
      <div className="text-lg font-semibold text-gray-700">{props.company}</div>
      <div className="text-gray-600">{props.date}</div>
      <div className="text-gray-600 mb-2">{props.location}</div>
      <ul className="list-disc pl-6">
        {props.content.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceItem;
