export default function Concept() {
  return (
    <section className="py-24 bg-stone-50 relative">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-3xl md:text-4xl font-medium text-center tracking-[0.25em]">
          作品の詞
        </h2>
        <div className="max-w-3xl mx-auto p-8 md:p-12 bg-white shadow-lg relative">
          {/* 和風の装飾コーナー */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-stone-300" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-stone-300" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-stone-300" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-stone-300" />

          {/* 縦書きテキスト */}
          <div className="writing-vertical min-h-[32rem] sm:min-h-[34rem] md:min-h-[36rem] lg:min-h-[38rem] mx-auto text-base md:text-lg leading-loose tracking-wider border-l border-r border-stone-100">
            <div className="flex flex-col items-start px-16 sm:px-18 md:px-24 space-y-4 sm:space-y-5 md:space-y-6">
              <p className="mt-5">香道の雅なる趣を現代に映し、</p>
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
    </section>
  );
}