const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll("#theme-toggle");

  // State
  const theme = localStorage.getItem("theme");

  // On mount
  theme && document.documentElement.classList.add(theme);

  // Handlers
  const handleThemeToggle = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    }
  };

  // Event
  themeToggleBtns.forEach((btn) =>
    btn.addEventListener("click", handleThemeToggle)
  );
};

export default darkMode;
