import Head from "next/head";
import { useState, useEffect } from "react";
import PortfolioWithToggle from "./portfolio-with-toggle";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark class to html element for proper dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>Zarana Solanki - Full Stack Software Developer</title>
        <meta 
          name="description" 
          content="Full Stack Software Developer specializing in .NET, React, and modern web technologies. Chat with my AI assistant or view my portfolio!" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/code.png" />
      </Head>

      <PortfolioWithToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
}