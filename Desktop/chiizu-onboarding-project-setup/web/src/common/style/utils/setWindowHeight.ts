const setWindowHeight = () => {
    const handleResize = () => {
        document.documentElement.style.setProperty("--window-height", `${window.innerHeight}px`);
    };
    handleResize();
    
    window.addEventListener("resize", handleResize);
};

export default setWindowHeight;