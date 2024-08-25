import React from 'react';

const PointTable = () => {
  const tableData = [
    { sport: '100M (BOYS)', CSE: '', ECE: '', EE: '', ME: '1', CE: '', MME: '3', 'PIE+ECM': '', PG: '5' },
    { sport: '100M (GIRLS)', CSE: '3', ECE: '', EE: '', ME: '1', CE: '5', MME: '', 'PIE+ECM': '', PG: '' },
    { sport: '200M (BOYS)', CSE: '', ECE: '4', EE: '', ME: '', CE: '', MME: '5', 'PIE+ECM': '', PG: '' },
    { sport: '200M (GIRLS)', CSE: '1', ECE: '', EE: '', ME: '3', CE: '5', MME: '', 'PIE+ECM': '', PG: '' },
  ];

  return (
    <div className="mt-36 mb-4 container mx-auto px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-500">
          <thead>
            <tr className="bg-[#562e00] text-[#F5DEB3]">
              <th className="border border-gray-500 px-4 py-2">Sport</th>
              <th className="border border-gray-500 px-4 py-2">CSE</th>
              <th className="border border-gray-500 px-4 py-2">ECE</th>
              <th className="border border-gray-500 px-4 py-2">EE</th>
              <th className="border border-gray-500 px-4 py-2">ME</th>
              <th className="border border-gray-500 px-4 py-2">CE</th>
              <th className="border border-gray-500 px-4 py-2">MME</th>
              <th className="border border-gray-500 px-4 py-2">PIE+ECM</th>
              <th className="border border-gray-500 px-4 py-2">PG</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="bg-gray-100 even:bg-gray-200">
                <td className="border border-gray-500 px-4 py-2">{row.sport}</td>
                <td className="border border-gray-500 px-4 py-2 text-center">{row.CSE}</td>
                <td className="border border-gray-500 px-4 py-2 text-center">{row.ECE}</td>
                <td className="border border-gray-500 px-4 py-2 text-center">{row.EE}</td>
                <td className="border border-gray-500 px-4 py-2 text-center">{row.ME}</td>
                <td className="border border-gray-500 px-4 py-2 text-center">{row.CE}</td>
                <td className="border border-gray-500 px-4 py-2 text-center">{row.MME}</td>
                <td className="border border-gray-500 px-4 py-2 text-center">{row['PIE+ECM']}</td>
                <td className="border border-gray-500 px-4 py-2 text-center">{row.PG}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PointTable;
