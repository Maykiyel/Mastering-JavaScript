const openProject = () => {
  const projectContainer = document.getElementById("projectContainer");
  const projectTitle = document.getElementById("projectTitle");
  const projectFrame = document.getElementById("projectFrame");
  const closeProjectContainer = document.getElementById(
    "closeProjectContainer"
  );
  const appElements = document.querySelectorAll(".app__icon");

  // Open the project
  const openProjectHandler = (projectContent, projectTitleText) => {
    document.body.style.pointerEvents = "none";
    document.body.style.overflow = "hidden";
    projectContainer.classList.add(
      "transition-all",
      "duration-200",
      "pointer-events-auto",
      "scale-100"
    );
    projectContainer.classList.remove("scale-0");
    projectTitle.textContent = projectTitleText;
    projectFrame.src = `../Apps/${projectContent}.html`;
  };

  // Add click event listener to each app icon
  appElements.forEach((appElement) => {
    const projectContent = appElement.dataset.project;
    const projectTitleText = appElement.dataset.title;
    appElement.addEventListener("click", () =>
      openProjectHandler(projectContent, projectTitleText)
    );
  });

  // Close the project
  const closeProject = () => {
    projectContainer.classList.remove("scale-100");
    projectContainer.classList.add("scale-0");
    document.body.style.pointerEvents = "auto";
    document.body.style.overflow = "auto";
    projectFrame.src = "";
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProject();
    }
  });

  closeProjectContainer.addEventListener("click", closeProject);
};

export default openProject;
