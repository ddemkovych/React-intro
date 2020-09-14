import React from 'react';
import Post from './components/post';
import './App.css';


const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://www.soyuz.ru/public/uploads/files/2/7162963/2017121913204549718767a1.jpg";

const postAuthor = [
  {
    name: "Anakin skywalker",
    photo: <img id="photo" src={ANAKIN_IMAGE} alt="Anakin"/>,
    nickname: "@dart_vader",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: <img id="image" src={RAY_IMAGE} alt="Ray"/>,
    date: "12 вер.",
  }
];

function App() {
  return (
    <div>
    { postAuthor.map(post => <Post {...post}/>)}
    </div>
  );
}

export default App;
