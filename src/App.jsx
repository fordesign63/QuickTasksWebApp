import AppRouter from "./router/AppRouter"
import { useEffect } from "react";

function App() {
  const tg = window.Telegram.WebApp;
  const user = tg.initDataUnsafe?.user;
  
  useEffect(() => {
    tg.ready()
    tg.expand()
  }, [])
  
  return (
    <>
      <div>
        <h2>Telegram User</h2>
        <p>Initial data: {tg.initData}</p>
        <br />
        <br />
        <p>ID: {user?.id}</p>
        <p>First name: {user?.first_name}</p>
        <p>Last name: {user?.last_name}</p>
        <p>Username: {user?.username}</p>
        <p>Language: {user?.language_code}</p>
      </div>

      <AppRouter />
    </>
  );
}

export default App
