import './App.css'
import { users } from '../users';
import { UserCard } from './components/UserCard';
import FormIntro from './components/ReactForms/FormIntro';
import TextArea from './components/ReactForms/TextArea';
import Select from './components/ReactForms/Select';
import MultipleFormInputs from './components/ReactForms/MultipleFormInputs';
import CheckBox from './components/ReactForms/CheckBox';
import Suspense from './components/SuspenseExample';
import SuspenseExample from './components/SuspenseExample';
import LazyLoadingEx from './components/LazyLoading/LazyLoadingEx';

function App() {


  console.log(users[1]);

  

  return (
    <>
<div>
{/* <UserCard/> */}
    {/* <Intro/>
    <ComposingComponents name="rachel"/>
        <ComposingComponents name="joey"/>
        <PropsIntro name="Anuja"/>
 <p>Conditinal Rendering in react</p>
   <Conditinal result={true}/>
<Loading/>
<Login/>
<PropsIntro fname="Rachel" lname="Frances"/>
        <List/> */}
        {/* <FormIntro/>
        <TextArea/>
        <Select/> */}
  {/* <SuspenseExample/> */}
  <LazyLoadingEx/>

</div>
    </>
  )
}

export default App
