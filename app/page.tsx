import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import ExperienceSection from "@/components/ExperienceSection";
import ExperienceItem from "@/components/ExperienceItem";

export default function Home() {
  const hook = 'Hey guys!';
  const name = `I'm Andrew Jowe`;
  const role = 'Software Engineer';

  const title = 'title';
  const company = 'company name';
  const date = 'jun-aug';
  const location = 'here';
  const content = ['a', 'b'];

  const experienceItems = [
    <ExperienceItem key={1} title={title} company={company} location={location} date={date} content={content} />,
    <ExperienceItem key={2} title={title} company={company} location={location} date={date} content={content} />
  ];

  return (
    <main>
      <Navbar/>
      <Welcome hook={hook} name={name} role={role}/>
      <ExperienceSection title="Experience" elements={experienceItems}/>
    </main>
  )
}
