export const smoothScrollTo = (targetId: string): void => {
    const targetElement = document.getElementById(targetId);

    if (!targetElement) return;

    setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth" });
    }, 100);
};
