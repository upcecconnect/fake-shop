export interface AnimationOptions {
    trigger?: "load" | "scroll";
    delay?: number;
    duration?: number,
    distance?: number,
    animationType?: "fade-in" | "fade-in-up" | "fade-in-down" | "fade-in-left" | "fade-in-right" | "zoom-in";
}