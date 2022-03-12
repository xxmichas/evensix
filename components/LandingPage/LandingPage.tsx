import { IHeroSection, ILandingPageContent } from "../../types/types";
import Hero from "../Hero/Hero";

const LandingPage = ({ content }: { content: ILandingPageContent[] }) => {
  const heroItems = content.filter((el) => el["_type"] === "hero") as IHeroSection[];
  const contentSections = content.filter((el) => el["_type"].startsWith("contentSection"));
  console.log(heroItems);
  console.log("===========================");
  console.log(contentSections);

  return (
    <main>
      {heroItems.map((el) => {
        return <Hero key={el._key} {...el} />;
      })}
    </main>
  );
};

export default LandingPage;
