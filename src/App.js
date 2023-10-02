import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';





function App() {
  return (
    <div className="flex flex-col justify-center mx-40 my-10 bg-gray-200 rounded-md py-8 px-8 w-3/4 shadow-xl">  
    <h1 className="text-center text-4xl text-zinc-500 font-bold  ">Todo list</h1>  
    <Todos/>  
      
    </div>
  );
}

export default App;
