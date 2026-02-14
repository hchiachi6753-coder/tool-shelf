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
    gradient: 'from-pink-500 via-purple-500 to-indigo-500',
    bgGlow: 'bg-pink-500/20',
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
    gradient: 'from-cyan-500 via-blue-500 to-purple-500',
    bgGlow: 'bg-cyan-500/20',
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
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    bgGlow: 'bg-green-500/20',
    category: '遊戲',
    url: 'https://vocab-game-indol.vercel.app',
    author: 'JJ',
    date: '2026-02-09',
  },
];

// 分類
const categories = [
  { id: 'all', name: '全部', icon: '🏠' },
  { id: 'AI', name: 'AI', icon: '🤖' },
  { id: '遊戲', name: '遊戲', icon: '🎮' },
  { id: '實用工具', name: '實用', icon: '🔧' },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // 篩選工具
  const filteredTools = tools.filter(tool => {
    const matchSearch = 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.nameZh.includes(searchTerm) ||
      tool.description.includes(searchTerm);
    const matchCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <main className="min-h-screen bg-[#0f0f1a] text-white overflow-hidden">
      {/* 背景裝飾 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
      </div>

      {/* 主內容 */}
      <div className="relative z-10">
        {/* 頂部區域 */}
        <header className="pt-16 pb-12 px-4 text-center">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 shadow-2xl shadow-pink-500/30 mb-6 animate-bounce">
            <span className="text-4xl">🛒</span>
          </div>
          
          {/* 標題 */}
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Tool Shelf
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            ✨ 小工具收藏架 · 點一下就能用 ✨
          </p>

          {/* 搜尋框 */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-50" />
            <input
              type="text"
              placeholder="🔍 搜尋工具..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="relative w-full px-6 py-4 text-lg rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        </header>

        {/* 分類標籤 */}
        <div className="flex justify-center gap-3 mb-12 px-4 flex-wrap">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/30 scale-105'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* 工具數量 */}
        <p className="text-center text-gray-500 mb-8">
          共 <span className="text-pink-400 font-bold">{filteredTools.length}</span> 個工具
        </p>

        {/* 工具卡片網格 */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => (
              <div
                key={tool.id}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* 卡片光暈 */}
                <div className={`absolute -inset-1 ${tool.bgGlow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* 卡片本體 */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                  {/* 頂部漸層條 */}
                  <div className={`absolute top-0 left-6 right-6 h-1 bg-gradient-to-r ${tool.gradient} rounded-full`} />

                  {/* 圖示 */}
                  <div className="flex items-start justify-between mb-6 pt-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{tool.icon}</span>
                    </div>
                    <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                      {tool.category}
                    </span>
                  </div>

                  {/* 名稱 */}
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {tool.name}
                  </h2>
                  <p className="text-sm text-gray-400 mb-4">
                    {tool.nameZh}
                  </p>

                  {/* 描述 */}
                  <p className="text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* 底部 */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="text-sm text-gray-500">
                      <span>by {tool.author}</span>
                    </div>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-5 py-2.5 bg-gradient-to-r ${tool.gradient} text-white rounded-xl font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105`}
                    >
                      使用 →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 空狀態 */}
        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <p className="text-6xl mb-4">🔍</p>
            <p className="text-gray-400 text-lg">找不到符合的工具</p>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center py-12 border-t border-white/10">
          <p className="text-gray-500">
            Made with 💖 by <span className="text-pink-400">JJ</span> & <span className="text-orange-400">J1 🦞</span>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Tool Shelf · 小工具收藏架
          </p>
        </footer>
      </div>
    </main>
  );
}
