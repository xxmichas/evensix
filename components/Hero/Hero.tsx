import { useEffect, useRef } from "react";
import useMediaMatch from "../../hooks/useMediaMatch";
import { IHeroSection } from "../../types/types";
import Button from "../Button/Button";
import styles from "./Hero.module.scss";
import HeroItem from "./HeroItem/HeroItem";

const Hero = ({ order, heroContent }: { order: number; heroContent: IHeroSection }) => {
  const isDesktop = useMediaMatch("(min-width: 900px)");

  const carouselRef = useRef(null);
  const carouselWrapperRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current as unknown as HTMLDivElement;
    const carouselWrapper = carouselWrapperRef.current as unknown as HTMLDivElement;

    if (heroContent.images.length > 1 && isDesktop) {
      let lastwalk = 0;
      let isDown = false;
      let startX: number;

      // places the carousel in the center of the screen
      carousel.style.left =
        (document.body.offsetWidth - carouselWrapper.parentElement!.getBoundingClientRect().width) /
          2 +
        "px";

      const mouseDown = (e: MouseEvent) => {
        isDown = true;
        lastwalk = 0;
        carousel.setAttribute("data-drag", "true");
        startX = e.pageX;
      };
      carousel.addEventListener("mousedown", mouseDown);
      const mouseLeave = () => {
        isDown = false;
        carousel.removeAttribute("data-drag");
      };
      carousel.addEventListener("mouseleave", mouseLeave);
      const mouseUp = () => {
        isDown = false;
        carousel.removeAttribute("data-drag");
      };
      carousel.addEventListener("mouseup", mouseUp);
      const mouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = startX - x - lastwalk;

        let skipDrap: boolean = false;
        const rect = carousel.getBoundingClientRect();

        if (document.body.offsetWidth < carousel.offsetWidth) {
          if (walk + carouselWrapper.offsetWidth >= carouselWrapper.scrollWidth) {
            // we have reached right screen edge
            skipDrap = true;
          } else if (carousel.offsetLeft - walk > 0) {
            // we have reached left screen edge
            skipDrap = true;
          }
        } else {
          // document.body is bigger than carousel
          const distanceFromRightEdge = rect.x + rect.width - document.body.offsetWidth;
          if (distanceFromRightEdge - walk > 0) {
            // we have reached right screen edge
            skipDrap = true;
          }
          if (rect.x - walk < 0) {
            // we have reached left screen edge
            skipDrap = true;
          }
        }

        if (skipDrap) {
          return;
        }
        lastwalk = startX - x;
        carousel.style.left = `${parseInt(carousel.style.left) - walk}px`;
      };
      carousel.addEventListener("mousemove", mouseMove);

      return () => {
        console.log("cleanup");
        carousel.removeEventListener("mousedown", mouseDown);
        carousel.removeEventListener("mouseleave", mouseLeave);
        carousel.removeEventListener("mouseup", mouseUp);
        carousel.removeEventListener("mousemove", mouseMove);
      };
    } else {
      // reset left style on mobile
      carousel.removeAttribute("style");
    }
  }, [heroContent.images.length, isDesktop]);

  return (
    <section style={{ order }} className={styles.hero}>
      <div className={styles.block}>
        <h1>{heroContent.heading}</h1>
        <p>{heroContent.tagline}</p>
        <Button {...heroContent.button} />
      </div>
      {heroContent.images.length !== 0 ? (
        <div ref={carouselWrapperRef} className={styles["carouser-wrapper"]}>
          <div ref={carouselRef} className={styles.carousel}>
            {heroContent.images.map((el, i) => (
              <HeroItem key={i} {...el} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Hero;
