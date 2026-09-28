import AppRouter from "./router/AppRouter"
import { useEffect } from "react";

function App() {
  const tg = window.Telegram.WebApp;
  const user = tg.initDataUnsafe?.user;
  
  useEffect(() => {
    tg.ready()
    tg.expand()
  }, [])
  
  // return (
  //   <AppRouter/>  
  // )

  return user
}

export default App
