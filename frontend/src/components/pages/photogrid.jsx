function PhotoGrid() {
  return (
    <main className="w-full pb-106">
      <div className="grid grid-cols-3 gap-0 max-w-9xl mx-auto">
        {[...Array(9)].map((_, i) => (
          <div className="col-span-1 p-2 flex items-center justify-center border-[0.5px] border-black/50">
            <div className="w-full aspect-square overflow-hidden flex justify-center items-center">
              <img
                src="/pngwing.com.png"
                alt="concha_png"
                className="w-1/2 h-1/2"
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default PhotoGrid;
