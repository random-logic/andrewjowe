import {ReactElement} from "react";

export default function ExperienceSection(props: { title: string, elements: ReactElement[] }) {
  return <div className="max-w-3xl mx-auto mb-8">
    <div className="text-2xl font-bold mb-4">{props.title}</div>
    {props.elements}
  </div>;
}