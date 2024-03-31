import { StringToComponent, SectionsProps } from "@/lib/types";
import Hero from "./hero";
import TitleDescription from "./title-description";

export const sectionList: StringToComponent = {
  hero: Hero,
  titledescription: TitleDescription,
};

export default function Sections({ content, sections }: SectionsProps) {
  return (
    <>
      {sections.map((i) => {
        const [sectionName, sectionId] = i.split("__");
        const Component = sectionList[sectionName];
        return <Component key={i} {...content[i]} id={sectionId} />;
      })}
    </>
  );
}
