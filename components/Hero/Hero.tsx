import { useEffect, useRef } from "react";
import useMediaMatch from "../../hooks/useMediaMatch";
import { IHeroSection } from "../../types/types";
import Button from "../Button/Button";
import styles from "./Hero.module.scss";
import HeroItem from "./HeroItem/HeroItem";

const Hero = (heroContent: IHeroSection) => {
  const isDesktop = useMediaMatch("(min-width: 900px)");

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current as unknown as HTMLDivElement;
    carousel.removeAttribute("style");

    if (heroContent.images.length > 0 && isDesktop) {
      let isDown = false;
      let startX: number;
      let scrollLeft: number;

      let lastwalk = 0;
      carousel.style.left = "0";

      const mouseDown = (e: MouseEvent) => {
        isDown = true;
        lastwalk = 0;
        carousel.setAttribute("data-drag", "true");
        startX = e.pageX;
        scrollLeft = carousel.style.left === "" ? 0 : parseInt(carousel.style.left);
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
    }
  }, [heroContent.images.length, isDesktop]);

  return (
    <section className={styles.hero}>
      <div className={styles.block}>
        <h1>{heroContent.heading}</h1>
        <p>{heroContent.tagline}</p>
        <Button {...heroContent.button} />
      </div>
      {heroContent.images.length !== 0 ? (
        <div className={styles["carouser-wrapper"]}>
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
