import "./App.css";
import FilterOptions from "./app/components/FilterOptions";
import JobsList from "./app/components/JobsList";

function App() {
  return (
    <div className="app">
      <FilterOptions />
      <JobsList />
    </div>
  );
}

export default App;
