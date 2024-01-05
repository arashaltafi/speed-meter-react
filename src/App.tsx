import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from "./Hoc/ScrollToTop";
import Hoc from "./Hoc/Hoc";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  const [orientation, setOrientation] = useState<number | null>(null);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark');
    }

    setOrientation(window.orientation);
    window.addEventListener('orientationchange', () => {
      setOrientation(window.orientation);
    });
  }, [])

  return (
    <div className="w-full h-screen mx-auto overflow-x-hidden ios-padding select-none">
      {orientation ? (
        <p className="h1 w-full h-full flex items-center justify-center">Please Rotate Your Device To Portrait</p>
      ) : (
        <Routes>
          <Route element={<ScrollToTop />}>
            <Route element={<Hoc />}>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>
        </Routes>
      )}
    </div>
  )
}

export default App
