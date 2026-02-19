import './App.css'
import Conditional from './components/Conditional'
import List from './components/List'

function App() {

  const numbers = [10,20,30,40,50]
  return (
    <>
<List nums ={numbers}/>
c<Conditional/>
    </>
  )
}

export default App


/*## 📝 1. Lists and Keys
- In React, rendering lists using .map() is common.
- **Keys** help React identify which items have changed, are added, or are removed.
- Keys must be **unique among siblings**, and they should be **stable** (not generated randomly on each render).

```jsx
const numbers = [1, 2, 3, 4];
const listItems = numbers.map(num => (
  <li key={num}>{num}</li>
));
```

> ❌ Avoid using index as key if list order can change.  
> ✅ Use a unique ID from the data if <available className=""></available> */