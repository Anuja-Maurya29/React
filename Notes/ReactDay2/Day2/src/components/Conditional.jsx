import React, { useState } from 'react'

const Conditional = () => {
    
const [login,setLogin] = useState("false")
  return (
    <>
    {
        (login)?<h1>Welcome</h1>:<h1>login first</h1>
    }
    <button onClick={()=>setLogin(true)}>login</button>
    <button onClick={()=>setLogin(false)}>logout</button>
    </>
  )
}  
 

export default Conditional

/*## 📝 2. Conditional Rendering
React supports conditional rendering using:
- **Ternary operators**  
- **Logical && operators**  
- **Early returns / Render functions**

```jsx
{show ? <div>Hello</div> : <div>Nothing</div>}
{isLoggedIn && <Profile />}
const renderContent = () => {
  if (loading) return <Spinner />;
  if (error) return <Error />;
  return <Data />;
};
return <>{renderContent()}</>;
```*/