import { onMounted } from "vue";
import { AnimationOptions } from "@/types/Animation";

export const useAnimation = (selector = ".animate", options: AnimationOptions = {}): void => {

    const {
        trigger = "scroll",
        delay = 100,
        duration = 600,
        distance = 100,
        animationType = "fade-in"
    } = options

    onMounted(() => {
        const elements: NodeListOf<HTMLElement> = document.querySelectorAll(selector);
        let observer: IntersectionObserver

        elements.forEach((el, index) => {
            el.classList.add(animationType)
            el.style.setProperty("--anim-duration", `${duration}ms`)

            switch (animationType) {
                case "fade-in-up":
                    el.style.setProperty("--anim-y", `${distance}px`)
                    break;
                case "fade-in-down":
                    el.style.setProperty("--anim-y", `-${distance}px`)
                    break;
                case "fade-in-left":
                    el.style.setProperty("--anim-x", `${distance}px`)
                    break;
                case "fade-in-right":
                    el.style.setProperty("--anim-x", `-${distance}px`)
                    break;
                case "zoom-in":
                    el.style.setProperty("--anim-scale", `0.8`)
                    el.style.setProperty("--anim-x", `0`)
                    el.style.setProperty("--anim-y", `0`)
                    break;
                case "fade-in":
                    el.style.setProperty("--anim-x", `0`)
                    el.style.setProperty("--anim-y", `0`)
                    el.style.setProperty("--anim-scale", `1`)
                    break;
            }

            switch (trigger) {
                case "load":
                    setTimeout(() => {
                        el.classList.add("visible")
                    }, delay * index);
                    break;
                case "scroll":
                    observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
                        entries.forEach((entry: IntersectionObserverEntry) => {
                            if (entry.isIntersecting) {
                                setTimeout(() => {
                                    (entry.target as HTMLElement).classList.add("visible");
                                    observer.unobserve(entry.target);
                                }, delay);
                            }
                        });
                    }, { threshold: 0.2 });

                    observer.observe(el);
                    break;
            }
        })
    })
}

export const smoothScrollTo = (targetId: string): void => {
    const targetElement = document.getElementById(targetId);

    if (!targetElement) return;

    setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth" });
    }, 100);
};
