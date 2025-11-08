export const displayOpacity = {

    hidden: {opacity: 0, scale: 0.8},
    visible: {opacity: 1, scale: 1, transition: {delay: 0.3}},
    exit: {opacity: 0, scale: 2},

}

export const slidingBackground = {
    initial: { x: '10px', width: '100%', height: '100%' },
    animate: (custom: { x: number; width: number; height: number }) => ({
        x: custom.x,
        width: custom.width,
        height: custom.height,
        transition: {
            type: "tween" as const,
            ease: "easeInOut" as const,
            duration: 0.3,
        }
    })
}