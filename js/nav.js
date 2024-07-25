const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  // Call this function to switch modes, e.g., on a button click

  const menu = document.querySelector(".hidden_dropdown");
  function closeDropdown() {
    if (window.innerWidth < 992) {
      menu.classList.toggle("dropdown");
    }
  }