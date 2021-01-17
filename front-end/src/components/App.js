import React from "react";
import Button from "./myButton";
import ToDoList from "./ToDoList";

function App() {
  const confirm = true;

  return (
    <main>
      <header>
        <h1>LET'S GET LOTS DONE TODAY!</h1>
      </header>
      <section>
        <article>
          <label>
            Habit Tracker
          </label>
          <ToDoList/> 
        </article>
        <article>
          <label>
            To-Do Today
          </label>
          <ToDoList/>
        </article>
      </section>
    <footer>
      <Button confirm= { confirm } />
    </footer>
  </main>
  )
}

// ReactDOM.render(<App />, document.querySelector("#app"));


// import "./styles/App.css";
// import { Header } from "./Header";
// import { Weather } from "./Weather";
// import { CalendarApp } from "./Calendar-import";

// import { Gallery } from "./Gallery";
// import collections from "./collections.json";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <CalendarApp />
//       <Weather />
//       <Gallery items={collections} />
//     </div>
//   );
// }

export default App;
