
import React from 'react'
import './App.css'
import Button from './components/Counter'
import { ColorBox } from './components/Task2'
import { ButtonClick } from './components/Task5'
import { TextChange } from './components/Task1'
import { CreateList } from './components/Task3'
import { Hover } from './components/Task6'
import { Form } from './components/Tak7'
import Counter from './components/Counter'
import AlertBox from './components/AlertBox'
import { ValidateEmail } from './components/Task8'
import { Countdown } from './components/Task9'
import { ToggleTheme } from './components/BTask1'
import { CharCounter } from './components/BTask2'
import { Notification } from './components/BTask3'
import { Count } from './components/Btask4'





function App() {
  return(
   <div>
    <p>Task1: Change text and color</p>
<TextChange/>  
<p>Alert Box</p>
<AlertBox/>
    <p> task2: color box with content change </p>
      <ColorBox/>
      <Counter/>
        <p>Task 3: creatte list</p>
        <CreateList/>
        <p>Task4: Remove List</p>
        

      <p> task5 :Button click change text  </p>
  <ButtonClick/>
  <p>Task 6: Box hover</p>
 <Hover/> 

<p>Task7: Form validation</p>
<Form/>
<p>Task8: email validation</p>
<ValidateEmail/>
<p>Task9:</p>
<Countdown/>
<p>Bonus Questions</p>
<p>Task1: Toogle Theme</p>
<div>
  <ToggleTheme/>
</div>
<p>Character Counter</p>
<div>
  <CharCounter/>
</div>
<p>Show notification</p>
<Notification/>
<p>Counter</p>
<Count/>
</div>
)
}


export default App
