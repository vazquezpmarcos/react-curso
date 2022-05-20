
import Component1 from "./components/Component1"
import Component2 from "./components/Component2"

const user1 = {
  nombre:"Laura",
  edad: 23
}

const user2 = {
  nombre: "Kevin",
  edad: 32
}

function App() {
  return (
    <div>
      <Component1 user1={user1}/>
      <Component2 user2={user2}/>
    </div>
  );
}

export default App;
