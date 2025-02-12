import Person from "./components/Person"
import Product from "./components/Product";
function App() {
  return (
    <div>
      <Person name="Ashish" age={20}></Person>
      <Product name="Earbuds" price={2000}></Product>
    </div>
  )
}
export default App