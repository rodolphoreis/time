import { Header } from "./components/Header";
import { Router } from "./Router";


export function App() {
  return (
    <>
    <Header/>
    <main className="w-full h-full">
      
      <div className=" bg-zinc-700 max-w-screen-xl mx-auto mt-40 h-96 px-4 py-4 justify-center items-center rounded-xl">
     <Router/>
      </div>
    </main>
    </>
    
    
  );
}
