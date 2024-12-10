export default function Concept() {
    return (
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-stone-50 relative">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="mb-8 sm:mb-12 md:mb-16 text-2xl sm:text-3xl md:text-4xl font-medium text-center tracking-[0.25em]">
            作品の詞
          </h2>

          {/* カードコンテナ */}
          <div className="relative max-w-[85vw] sm:max-w-[80vw] md:max-w-[75vw] lg:max-w-4xl xl:max-w-5xl mx-auto">
            {/* 背景の影 */}
            <div className="absolute inset-1 sm:inset-2 bg-stone-200/50 rounded-sm"></div>

            {/* メインカード */}
            <div className="relative bg-white shadow-md mx-2 sm:mx-4 md:mx-6 lg:mx-8">
              {/* 装飾コーナー */}
              <div className="absolute top-0 left-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-t-2 border-l-2 border-stone-300" />
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-t-2 border-r-2 border-stone-300" />
              <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-b-2 border-l-2 border-stone-300" />
              <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-b-2 border-r-2 border-stone-300" />

              {/* コンテンツエリア - 中央寄せを強化 */}
              <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex justify-center">
                <div className="writing-vertical text-sm sm:text-base md:text-lg tracking-wider">
                  {/* テキストコンテナ - 余白調整 */}
                  <div className="flex flex-col items-start space-y-4 sm:space-y-5 md:space-y-6">
                    <p className="mt-4"></p>
                    <p>香道の雅なる趣を現代に映し、</p>
                    <p>穏やかなる熱により幽玄の香りを引き出す、</p>
                    <p>新たなる花道なり。</p>
                    <p>香木は、控えめなる温もりに応え、</p>
                    <p>その気品ある香りを静かに立ち昇らせ、</p>
                    <p>心に深き余韻を残す。</p>
                    <p>この技を身近なる香辛のものに活かし、</p>
                    <p>繊細なる温めの技により、</p>
                    <p>日常にて見過ごしがちな芳香の秘めたる</p>
                    <p>美しさを呼び覚まさんとす。</p>
                    <p>強からず弱からず、仄かに漂うその様は、</p>
                    <p>まるで香りの虫眼鏡のごとく、</p>
                    <p>香の機微を映し出し、</p>
                    <p>心静かなるひとときをもたらす。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }