import React, { useState } from "react";
import CountryForm from "./components/CountryForm";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [editingCountry, setEditingCountry] = useState(null);

  const addCountry = (country) => {
    setCountries([...countries, { ...country, id: Date.now() }]);
  };

  const updateCountry = (updatedCountry) => {
    setCountries(
      countries.map((c) => (c.id === updatedCountry.id ? updatedCountry : c))
    );
    setEditingCountry(null);
  };

  const deleteCountry = (id) => {
    setCountries(countries.filter((c) => c.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">World Countries</h1>
      <CountryForm
        addCountry={addCountry}
        updateCountry={updateCountry}
        editingCountry={editingCountry}
      />
      <CountryList
        countries={countries}
        onEdit={setEditingCountry}
        onDelete={deleteCountry}
      />
    </div>
  );
}

export default App;
