import { Header } from "./components/Header";
import { CycleContextProvider } from "./page/Home";
import { Router } from "./Router";

export function App() {
  return (
    <>
      <Header />
      <main className="w-full h-full">
        <div className="px-2 ">
          <div className=" max-w-screen-xl mx-auto mt-20 xl:mt40 h-96 px-4 py-4 justify-center items-center rounded-xl">
            <CycleContextProvider>
              <Router />
            </CycleContextProvider>
          </div>
        </div>
      </main>
    </>
  );
}
