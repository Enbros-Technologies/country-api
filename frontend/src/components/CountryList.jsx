import React from "react";

function CountryList({ countries, onEdit, onDelete }) {
  if (countries.length === 0)
    return <p className="text-2xl">No countries added yet.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Country</th>
            <th className="py-2 px-4 border-b">Capital</th>
            <th className="py-2 px-4 border-b">Population</th>
            <th className="py-2 px-4 border-b">Currency</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{country.name}</td>
              <td className="py-2 px-4 border-b">{country.capital}</td>
              <td className="py-2 px-4 border-b">{country.population}</td>
              <td className="py-2 px-4 border-b">{country.currency}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => onEdit(country)}
                  className="text-yellow-600 mr-4 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(country.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CountryList;
