const loadFooter = () => {
    // Footer container creation
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footer");
    footerContainer.textContent = "DragonflyValkyrie's Todo List 2023";

    return footerContainer;
};

export { loadFooter };