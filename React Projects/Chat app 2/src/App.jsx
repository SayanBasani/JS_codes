import { useContext, useState } from 'react';
import './App.css';
import Nav from './Component/SideNav/Nav';
import HandleContet, { TheContext } from './Component/Storages/Store&Functions';
import HeaderMain from './Component/BodyContent/Header/HeaderMain';
import ChatBody from './Component/BodyContent/BodyContents/ChatContent/ChatBody';
import FriendsChats from './Component/BodyContent/BodyContents/ChatContent/FriendsChats/FriendsChats';
import Uplodepost from './Component/BodyContent/BodyContents/CreatePostContent/UplodePost';
function App() {
  return (
      <HandleContet>
        <TheAppContent />
      </HandleContet>
  );
}

export default App;
function TheAppContent() {
  const [NavWidth, setNavWidth] = useState('48px')
  const { selectNav } = useContext(TheContext);  // Now inside the context
  return (
    <>
      <div className={`h-screen`} style={{ display: 'grid', gridTemplateColumns: `${NavWidth} 1fr` }}>
        <Nav className="h-full" setNavWidth={setNavWidth}></Nav>
        <div className="">
          {selectNav == '' && <div className='bg-slate-700  h-screen flex justify-center items-center'><h1 className='text-[40px]'>Hello Lets Start...</h1></div> }
          {selectNav == 'Reels' && <div className='bg-slate-700  h-screen flex justify-center items-center'><h1 className='text-[40px]'>Hello Lets Start...</h1></div> }
          {selectNav == 'Chat' && <ChatBody></ChatBody> }
          {selectNav == 'Create Post' && <Uplodepost></Uplodepost> }
        </div>
      </div>
    </>
  );
}