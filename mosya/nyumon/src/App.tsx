import './static/App.css'

const style = {
  // color: "blue",
  // fontSize: "20px",
};

const obj = {name: "moyasi", num: 3}

function App() {
  let name = "kishida";
  const url = "https://www.google.com";

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

      <div>{obj.name}, {obj.num}</div>
    </div>
  );
}

export default App;