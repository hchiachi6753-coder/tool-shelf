'use client';

import { useState } from 'react';

// 工具資料
const tools = [
  {
    id: 'prompt-studio',
    name: 'Prompt Studio',
    nameZh: '提示詞產生器',
    description: '選風格組合 AI 繪圖提示詞，70+ 種風格，一鍵複製給 Gemini/ChatGPT',
    icon: '✨',
    category: 'AI',
    url: 'https://prompt-studio-kappa.vercel.app',
    author: 'JJ',
    date: '2026-02-14',
  },
  {
    id: 'infographic-studio',
    name: 'Infographic Studio',
    nameZh: '資訊圖表產生器',
    description: '16 種圖表 × 16 種風格，快速生成資訊圖表提示詞',
    icon: '📊',
    category: 'AI',
    url: 'https://infographic-studio.vercel.app',
    author: 'JJ',
    date: '2026-02-14',
  },
  {
    id: 'play-english',
    name: 'Play English',
    nameZh: '英文單字遊戲',
    description: '30 題填空遊戲，測驗英文程度，適合 4-12 歲小朋友',
    icon: '🎮',
    category: '遊戲',
    url: 'https://vocab-game-indol.vercel.app',
    author: 'JJ',
    date: '2026-02-09',
  },
];

// 分類
const categories = ['全部', 'AI', '遊戲', '實用工具', '其他'];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');

  // 篩選工具
  const filteredTools = tools.filter(tool => {
    const matchSearch = 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.nameZh.includes(searchTerm) ||
      tool.description.includes(searchTerm);
    const matchCategory = selectedCategory === '全部' || tool.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* 頂部導航 */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            <span className="text-3xl mr-2">🛒</span>
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Tool Shelf
            </span>
          </h1>
          <p className="text-gray-500 text-sm hidden sm:block">小工具都在這</p>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* 搜尋和篩選 */}
        <div className="mb-8 space-y-4">
          {/* 搜尋框 */}
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 搜尋工具..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-4 text-lg rounded-2xl border-2 border-orange-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none bg-white shadow-sm"
            />
          </div>

          {/* 分類標籤 */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-orange-100 border border-orange-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 工具數量 */}
        <p className="text-gray-500 mb-4">
          共 {filteredTools.length} 個工具
        </p>

        {/* 工具卡片網格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map(tool => (
            <div
              key={tool.id}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-orange-100 group"
            >
              {/* 圖示和分類 */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                  {tool.category}
                </span>
              </div>

              {/* 名稱 */}
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                {tool.name}
              </h2>
              <p className="text-sm text-gray-500 mb-3">
                {tool.nameZh}
              </p>

              {/* 描述 */}
              <p className="text-gray-600 mb-4 line-clamp-2">
                {tool.description}
              </p>

              {/* 底部資訊 */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-400">
                  <span>by {tool.author}</span>
                  <span className="mx-2">·</span>
                  <span>{tool.date}</span>
                </div>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-orange-400 to-amber-400 text-white rounded-xl font-medium hover:from-orange-500 hover:to-amber-500 transition-all shadow-md hover:shadow-lg"
                >
                  使用 →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 空狀態 */}
        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <p className="text-6xl mb-4">🔍</p>
            <p className="text-gray-500 text-lg">找不到符合的工具</p>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-16 py-8 border-t border-orange-100">
          <p className="text-gray-400">
            Made with 🧡 by JJ & J1 🦞
          </p>
          <p className="text-sm text-gray-300 mt-2">
            小工具收藏架 · 隨時更新
          </p>
        </footer>
      </div>
    </main>
  );
}
