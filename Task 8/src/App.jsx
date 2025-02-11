import Person from "./components/Person";
import Product from "./components/Product";
function App() {
  return (
    <div>
      <Person name="Alice" age={25}></Person>
      <Product name="Wireless Mouse" price={500}></Product>
    </div>
  )
}
export default App