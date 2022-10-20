import { AutoComplete } from "./components/AutoComplete";

function App() {
  return (
    <div className="App">
      <h1 style={{ marginLeft: "50%" }}>React Autocomplete</h1>
      <h2 style={{ marginLeft: "50%" }}>write to search</h2>

      <AutoComplete
        suggestions={[
          "Oranges",
          "Apples",
          "Banana",
          "Kiwi",
          "Mango",
          "Strawberries",
          "Lemon",
        ]}
      />
    </div>
  );
}

export default App;
