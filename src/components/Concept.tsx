export default function Concept() {
    return (
      <section id="concept" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-stone-50 relative">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="mb-8 sm:mb-12 md:mb-16 text-2xl sm:text-3xl md:text-4xl font-medium text-center tracking-[0.25em]">
            作品の詞
          </h2>

          {/* カードコンテナ */}
          <div className="relative max-w-[92vw] sm:max-w-[80vw] md:max-w-[75vw] lg:max-w-4xl xl:max-w-5xl mx-auto">
            {/* メインカード */}
            <div className="relative bg-white shadow-md">
              {/* 装飾コーナー */}
              <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-stone-300" />
              <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t-2 border-r-2 border-stone-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-b-2 border-l-2 border-stone-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-stone-300" />

              {/* コンテンツエリア */}
              <div className="p-8 sm:p-10 md:p-12 lg:p-16 flex justify-center">
                {/* スマホでは横書き、タブレット以上で縦書き */}
                <div className="md:writing-vertical text-sm sm:text-base md:text-lg tracking-wider">
                  <div className="flex flex-col items-start space-y-3 sm:space-y-4 md:space-y-6">
                    {/* スマホでは1行あたりの文字数を調整 */}
                    <div className="md:hidden space-y-3 leading-relaxed max-w-[80vw] sm:max-w-[70vw]">
                      <p>香道の雅なる趣を現代に映し、穏やかなる熱により幽玄の香りを引き出す、新たなる花道なり。</p>
                      <p>香木は、控えめなる温もりに応え、その気品ある香りを静かに立ち昇らせ、心に深き余韻を残す。</p>
                      <p>この技を身近なる香辛のものに活かし、繊細なる温めの技により、日常にて見過ごしがちな芳香の秘めたる美しさを呼び覚まさんとす。</p>
                      <p>強からず弱からず、仄かに漂うその様は、まるで香りの虫眼鏡のごとく、香の機微を映し出し、心静かなるひとときをもたらす。</p>
                    </div>
                    {/* タブレット以上では縦書き */}
                    <div className="hidden md:block md:h-[600px] lg:h-[650px] xl:h-[700px] md:px-8 lg:px-12">
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
        </div>
      </section>
    );
  }