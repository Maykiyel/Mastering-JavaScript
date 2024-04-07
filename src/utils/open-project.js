const openProject = () => {
  const projectContainer = document.getElementById("projectContainer");
  const projectTitle = document.getElementById("projectTitle");
  const projectFrame = document.getElementById("projectFrame");
  const closeProjectContainer = document.getElementById(
    "closeProjectContainer"
  );
  const appElements = document.querySelectorAll(".app__icon");

  appElements.forEach((appElement) => {
    appElement.addEventListener("click", () => {
      const projectContent = appElement.dataset.project;
      const projectTitleText = appElement.dataset.title;
      document.body.style.pointerEvents = "none";
      projectContainer.classList.add(
        "transition-all",
        "duration-200",
        "pointer-events-auto",
        "scale-100"
      );
      projectContainer.classList.remove("scale-0");
      projectTitle.textContent = projectTitleText;
      projectFrame.src = `../Apps/${projectContent}.html`;
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      projectContainer.classList.remove("scale-100");
      projectContainer.classList.add("scale-0");
      document.body.style.pointerEvents = "auto";
      projectFrame.src = "";
    }
  });

  closeProjectContainer.addEventListener("click", () => {
    projectContainer.classList.remove("scale-100");
    projectContainer.classList.add("scale-0");
    document.body.style.pointerEvents = "auto";
    projectFrame.src = "";
  });
};

export default openProject;
