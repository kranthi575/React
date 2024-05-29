import { useState } from "react";
const useCheckOnlineStatus=()=>{

    const [isOnline, setIsOnline] = useState(navigator.onLine);

  const updateOnlineStatus = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return (
    <div className="w-2 h-2">
      {isOnline ? (
        <span style={{ color: 'green' }}>You are online</span>
      ) : (
        <span style={{ color: 'red' }}>You are offline</span>
      )}
    </div>
  );

};

export default useCheckOnlineStatus;
