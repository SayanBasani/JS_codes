import { createContext, useState } from "react"


export const TheContext = createContext({});
function HandleContet({ children, value }) {
  const NavOptions = [
    {
      title: "Chat",
      iconBootstrap: "bi-chat-left-text"
    },
    {
      title: "Create Post",
      iconBootstrap: "bi-plus-circle"
    },
    {
      title: "Videos",
      iconBootstrap: "bi-play-btn-fill"
    },
    {
      title: "Reels",
      iconBootstrap: " bi-file-play-fill"
    }
  ]
  const [Navoption, setNavoption] = useState(NavOptions);
  return (
    <TheContext.Provider value={{...value,Navoption,setNavoption}}>
      {children}
    </TheContext.Provider>
  )
}
export default HandleContet;