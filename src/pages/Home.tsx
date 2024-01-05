import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import locationSlice from "../redux/locationSlice";
import SpeedMeter from "../Components/SpeedMeter";

const Home = () => {
  const [speed, setSpeed] = useState<number | null>(null);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(locationSlice.actions.addLocation([{
      pathName: location.pathname,
      isLoaded: true
    }]));
  }, [])

  useEffect(() => {
    let watchId: number;

    const handleSuccess = (position: GeolocationPosition) => {
      console.log(position)
      const currentSpeed = position.coords.speed || null;
      setSpeed(currentSpeed);
    };

    const handleError = (error: GeolocationPositionError) => {
      console.error('Error getting location:', error.message);
    };

    if (navigator.geolocation) {
      // Start watching the location changes
      watchId = navigator.geolocation.watchPosition(handleSuccess, handleError);
    } else {
      console.error('Geolocation is not supported by this browser');
    }

    return () => {
      // Stop watching the location when the component unmounts
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  });

  // const changeTheme = () => {
  //   if (localStorage.getItem('theme') === 'light') {
  //     localStorage.setItem('theme', 'dark');
  //     document.documentElement.classList.add('dark');
  //   } else if (localStorage.getItem('theme') === 'dark') {
  //     localStorage.setItem('theme', 'light');
  //     document.documentElement.classList.remove('dark')
  //   } else {
  //     localStorage.setItem('theme', 'dark');
  //     document.documentElement.classList.add('dark');
  //   }
  // }

  return (
    <div className={`w-full h-screen flex flex-col items-center justify-center gap-3 sm:gap-4 bg-slate-200 dark:bg-slate-900 py-4 px-2 sm:px-4`}>
      {speed !== null ? (
        <p>Current Speed: {speed} m/s</p>
      ) : (
        <p>Waiting for location data...</p>
      )}
      <SpeedMeter />
    </div>
  )
}

export default Home