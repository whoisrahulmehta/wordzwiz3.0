import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Landing from "./components/Landing";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={`App App-${theme}`}>
          <Landing theme={theme} handletheme={toggleTheme} />
        </div>
      )}
    </>
  );
}

export default App;
