import { useState } from "react";
import { metaComps } from "./mockData";
import type { TeamComp } from "./mockData";

interface SearchResult extends TeamComp {
  name: string;
}

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSuggest = () => {
    if (!input.trim()) {
      setResults([]);
      return;
    }

    const matches = Object.entries(metaComps)
      .filter(([name, comp]) => 
        name.toLowerCase().includes(input.toLowerCase()) ||
        comp.carry.some(carry => carry.toLowerCase().includes(input.toLowerCase())) ||
        comp.core_units.some(unit => unit.toLowerCase().includes(input.toLowerCase())) ||
        comp.augments.some(aug => aug.toLowerCase().includes(input.toLowerCase()))
      )
      .map(([name, comp]) => ({ name, ...comp }));

    setResults(matches);
  };

  const handleShowAll = () => {
    const allComps = Object.entries(metaComps)
      .map(([name, comp]) => ({ name, ...comp }));
    setResults(allComps);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSuggest();
    }
  };

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'Dễ': return 'text-green-600 bg-green-100';
      case 'Trung bình': return 'text-yellow-600 bg-yellow-100';
      case 'Khó': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🔮 TFT Meta Advisor
          </h1>
          <p className="text-gray-600">Gợi ý đội hình TFT meta cho mùa hiện tại</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="Nhập tên tướng, tộc hệ, hoặc lõi..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 border-2 border-gray-300 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
            <button
              onClick={handleSuggest}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              🔍 Tìm Kiếm
            </button>
            <button
              onClick={handleShowAll}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              📋 Tất Cả
            </button>
          </div>
          
          {results.length === 0 && input && (
            <p className="text-gray-500 text-center py-4">
              Không tìm thấy đội hình phù hợp. Thử tìm kiếm với từ khóa khác!
            </p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {results.map((result, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-bold">{result.name}</h2>
                  <div className="flex gap-2">
                    {result.difficulty && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(result.difficulty)}`}>
                        {result.difficulty}
                      </span>
                    )}
                    {result.cost && (
                      <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium">
                        {result.cost}💰
                      </span>
                    )}
                  </div>
                </div>
                {result.description && (
                  <p className="text-blue-100 text-sm mt-2">{result.description}</p>
                )}
              </div>
              
              <div className="p-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">🎯 Carry Chính:</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.carry.map((carry, i) => (
                      <span key={i} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        {carry}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">👥 Đội Hình Chính:</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.core_units.map((unit, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {unit}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">⚡ Lõi Tăng Cường:</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.augments.map((aug, i) => (
                      <span key={i} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {aug}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">🛡️ Trang Bị:</h3>
                  <div className="space-y-2">
                    {Object.entries(result.items).map(([champion, items]) => (
                      <div key={champion} className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-medium text-gray-700">{champion}:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {items.map((item, i) => (
                            <span key={i} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {results.length === 0 && !input && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎮</div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Chào mừng đến với TFT Meta Advisor!</h2>
            <p className="text-gray-600 mb-6">Tìm kiếm đội hình meta hoặc xem tất cả đội hình có sẵn</p>
            <button
              onClick={handleShowAll}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              Xem Tất Cả Đội Hình Meta
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
