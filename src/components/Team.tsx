export default function Team() {
  const members = [
    { name: '岡空来', role: '意匠術師' },
    { name: '金澤政宜', role: '造形術師' },
    { name: '中田裕紀', role: '発想術師' },
    { name: '南田桂吾', role: '無形術師' },
  ]

  // Fisher-Yatesアルゴリズムを使用してメンバーの配列をシャッフル
  const shuffledMembers = [...members].sort(() => Math.random() - 0.5)

  return (
    <section className="py-24 bg-stone-50 relative">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-3xl md:text-4xl font-medium text-center tracking-[0.25em]">
          制作者
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {shuffledMembers.map((member, index) => (
              <div key={member.name} className="bg-white p-8 md:p-10 shadow-md relative">
                {/* 和風の装飾コーナー */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-stone-300" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-stone-300" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-stone-300" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-stone-300" />

                {/* 縦書きコンテンツ */}
                <div className="writing-vertical min-h-[14rem] flex flex-col items-center justify-center w-full">
                  <div className="flex flex-col items-center space-y-8">
                    <h3 className="text-xl font-medium tracking-[0.2em]">{member.name}</h3>
                    <p className="text-stone-600 tracking-[0.2em] text-base">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

