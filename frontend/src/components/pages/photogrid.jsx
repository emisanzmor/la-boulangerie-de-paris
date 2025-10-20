import conchaChoc from "../../assets/images/concha_choc.png";
import cuerno from "../../assets/images/cuerno.png";
import donaAzucar from "../../assets/images/dona_azucar.png";
import donaChoc from "../../assets/images/dona_choc.png";
import conchaVain from "../../assets/images/concha_vain.png";
import ojoDeBuey from "../../assets/images/ojodebuey.png";

function PhotoGrid() {
  const images = [
    conchaChoc,
    cuerno,
    donaAzucar,
    donaChoc,
    conchaVain,
    ojoDeBuey,
  ];

  return (
    <main className="w-full pb-106">
      <div className="grid grid-cols-3 gap-0 max-w-9xl mx-auto">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="group relative col-span-1 p-2 flex items-center justify-center border-[0.5px] border-black/50 "
          >
            <div className="w-full aspect-square overflow-hidden flex flex-col justify-center items-center">
              <img
                src={images[i]}
                alt={`imagen_${i}`}
                className="w-1/2 h-1/2 transition duration-300 ease-in-out group-hover:blur-md"
              />
              <span className="mt-12 text-black text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                Viennoiserie {i + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default PhotoGrid;
