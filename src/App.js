import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <button onMouseOver={myFunction}>Click me</button>
    </div>
  );
}
function myFunction() {
  console.log("Hello");
}
