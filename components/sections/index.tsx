import { FC } from "react";
import HeroSection from "./hero";

const sections: { [key: string]: FC } = {
  hero: HeroSection,
};

// export default function Sections({sections}) {
//   return sections.map((i) => {
//     const Component = sections[i];
//     return <Component {...}/>
//   });
// }

export default function Sections() {
  return <div>Sections</div>;
}
