export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      aria-pressed={isDark}
      onClick={onToggle}
      className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm 
      bg-white hover:bg-gray-50 border-gray-200 text-gray-700
      dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-200
      transition"
      title={isDark ? "Cambiar a claro" : "Cambiar a oscuro"}
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.752 15.002A9 9 0 1111.002 2.248 7 7 0 0021.752 15z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 18a6 6 0 100-12M12 22a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm9-8a1 1 0 011 1h1a1 1 0 010 2h-1a1 1 0 
          01-1-1zm-9-9a1 1 0 011-1V3a1 1 0 00-2 0v1a1 1 0 011 1zm-9 8a1 1 0 011-1H3a1 1 0 000 2h1a1 1 0 01-1-1zm15.364 6.364a1 
          1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM7.05 5.636a1 1 0 010-1.414L7.757 3.515a1 1 0 
          011.414 1.414L8.464 6.05a1 1 0 01-1.414 0zm9.9 12.728a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 
          01-1.414 0zM4.636 6.343a1 1 0 011.414-1.414L6.757 5.636a1 1 0 01-1.414 1.414L4.636 6.343z" />
        </svg>
      )}
      <span className="hidden sm:inline">{isDark ? "Oscuro" : "Claro"}</span>
    </button>
  );
}
