import React, { useState } from 'react'
import './static/App.css';
import './js/chara.js';
import {add, chara, g_name} from "./js/chara.js"
import { Card } from './components/Card';
import { Card2 } from './components/Card2';
import LoggedIn from './components/LoggedIn';

const style = {
  // color: "blue",
  // fontSize: "20px",
};

const obj = {name: "moyasi", num: 3}

let isLoggedIn = false;

function App() {
  let name = "kishida";
  const url = "https://www.google.com";

  const [state, setState] = useState(0)
  function countEvent(){
    if(state >= 3){
      setState(0);
    } else{
      setState(state + 1);
    }
  }

  return (
    <div>
      <div className="bg-red" style={style}>Hello</div>
      <div style={{backgroundColor: "blue"}}>World</div>

      {/* public内の画像は/で指定、閉じタグが必要 */}
      <img src="/logo192.png"></img>
      <h1>Hello, {name}</h1>

      {/* Reactは useState で管理されている値が変わると、
      自動的にそのコンポーネントを再描画してくれます。
      let などの通常の変数はこれに反応しません。 */}
      <button onClick={() => {name = "masuda"}}>Clickしてください</button>

      <div><a href={url}>Google</a></div>

      {/* React入門2 */}

      {!isLoggedIn && (
        <div style={{margin: "20px"}}>
          <LoggedIn/>
          hello, world
        </div>
      )}
      <LoggedIn is /> {/* 省略するとtrue} */}
      <LoggedIn is={false} />

      {!isLoggedIn ? (
        <>
          <div>falseです</div>
          <div>falsefalse</div>
        </>
      ) : (
        <>
          <Card2></Card2>
        </>
      )} {/* 三項演算子 */}

      <div style={{fontSize: "30px"}} onClick={() => countEvent()}>
        {state==0 ? (
          <p>0です</p>
        ) : state==1? (
          <p>1です</p>
        ) : state==2? (
          <p>2です</p>
        ) : state==3? (
          <p>3です</p>
        ) : (
          <p>0~3以外です</p>
        )}
      </div>

      {/* React入門2ここまで */}

      <div>{obj.name}, {obj.num}</div>

      <div>{add(10, 20)}, {chara.atk}, {g_name}</div>

      <div style={{color: "white"}}>
        <Card title="App.tsxから呼び出し" bgColor="#000" />
      </div>
      <Card2 />
    </div>
  );
}

export default App;