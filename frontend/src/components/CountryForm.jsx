import React, { useEffect, useState } from "react";

function CountryForm({ addCountry, updateCountry, editingCountry }) {
  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [population, setPopulation] = useState("");
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    if (editingCountry) {
      setName(editingCountry.name);
      setCapital(editingCountry.capital);
      setPopulation(editingCountry.population);
      setCurrency(editingCountry.currency || "");
    }
  }, [editingCountry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const country = {
      id: editingCountry ? editingCountry.id : Date.now(),
      name,
      capital,
      population,
      currency,
    };

    editingCountry ? updateCountry(country) : addCountry(country);
    setName("");
    setCapital("");
    setPopulation("");
    setCurrency("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input
        type="text"
        placeholder="Country Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-3 py-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Capital"
        value={capital}
        onChange={(e) => setCapital(e.target.value)}
        className="border px-3 py-2 w-full"
        required
      />
      <input
        type="number"
        placeholder="Population"
        value={population}
        onChange={(e) => setPopulation(e.target.value)}
        className="border px-3 py-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="border px-3 py-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        {editingCountry ? "Update Country" : "Add Country"}
      </button>
    </form>
  );
}

export default CountryForm;
