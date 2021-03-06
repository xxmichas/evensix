import { memo } from "react";
import { IContentSection, ICTASection, IHeroSection, LandingPageContent } from "../../types/types";
import ContentSection from "../ContentSection/ContentSection";
import CTASection from "../CTASection/CTASection";
import Hero from "../Hero/Hero";

const LandingPage = ({ content }: { content: LandingPageContent[] }) => {
  const heroItems: { order: number; heroContent: IHeroSection }[] = [];
  const contentSections: { order: number; item: IContentSection }[] = [];
  const CTASections: { order: number; section: ICTASection }[] = [];

  for (let i = 0; i < content.length; i++) {
    if (content[i]._type === "hero") {
      heroItems.push({ order: i, heroContent: content[i] as IHeroSection });
    } else if (content[i]._type.startsWith("contentSection")) {
      contentSections.push({ order: i, item: content[i] as IContentSection });
    } else if (content[i]._type === "CTASection") {
      CTASections.push({ order: i, section: content[i] as ICTASection });
    }
  }

  return (
    <main>
      {heroItems.map((el) => {
        return <Hero key={el.heroContent._key} {...el} />;
      })}
      {contentSections.map((el) => {
        return <ContentSection key={el.item._key} {...el} />;
      })}
      {CTASections.map((el) => {
        return <CTASection key={el.section._key} {...el} />;
      })}
    </main>
  );
};

export default memo(LandingPage);
