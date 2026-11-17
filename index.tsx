import group2 from "./group-2.png";
import group22 from "./group-2-2.png";
import group17 from "./group-17.png";
import image from "./image.png";
import image14 from "./image.svg";
import image1 from "./image-1.png";
import image2 from "./image-2.png";
import image22 from "./image-2-2.png";
import image3 from "./image-3.png";
import image32 from "./image-3-2.png";
import image4 from "./image-4.png";
import image42 from "./image-4-2.png";
import image43 from "./image-4-3.png";
import image5 from "./image-5.png";
import image6 from "./image-6.png";
import image7 from "./image-7.png";
import image8 from "./image-8.png";
import image9 from "./image-9.png";
import image10 from "./image-10.png";
import image11 from "./image-11.png";
import image12 from "./image-12.png";
import image13 from "./image-13.png";
import imagePhotoroom51 from "./image-photoroom-5-1.png";
import line2 from "./line-2.svg";
import line22 from "./line-2-2.svg";
import line23 from "./line-2-3.svg";
import line24 from "./line-2-4.svg";
import maskGroup from "./mask-group.png";
import maskGroup2 from "./mask-group-2.png";
import maskGroup3 from "./mask-group-3.png";
import maskGroup4 from "./mask-group-4.png";
import maskGroup5 from "./mask-group-5.png";
import maskGroup6 from "./mask-group-6.png";
import maskGroup7 from "./mask-group-7.png";
import union from "./union.svg";
import vector from "./vector.svg";
import vector1 from "./vector-1.svg";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vectorStroke2 from "./vector-stroke-2.svg";
import vectorStroke3 from "./vector-stroke-3.svg";
import vectorStroke4 from "./vector-stroke-4.svg";
import vectorStroke5 from "./vector-stroke-5.svg";
import vectorStroke6 from "./vector-stroke-6.svg";
import warstwa1 from "./warstwa-1.svg";

type GalleryImage = {
  src: string;
  alt: string;
  className?: string;
};

const squareImages: GalleryImage[] = [
  { src: image8, alt: "Projekt graficzny" },
  {
    src: imagePhotoroom51,
    alt: "Projekt graficzny",
    className: "mt-[19px] w-60 h-[227px] ml-[121px] aspect-[1.06] object-cover",
  },
  {
    src: image9,
    alt: "Projekt graficzny",
    className: "w-[239px] h-[239px] ml-24 aspect-[1] object-cover",
  },
];

const secondGalleryImages: GalleryImage[] = [
  { src: image22, alt: "Projekt graficzny" },
  { src: image3, alt: "Projekt graficzny" },
  { src: image4, alt: "Projekt graficzny" },
];

const finalGalleryImages: GalleryImage[] = [
  { src: image10, alt: "Projekt graficzny" },
  { src: image11, alt: "Projekt graficzny" },
  { src: image12, alt: "Projekt graficzny" },
  { src: image13, alt: "Projekt graficzny" },
];

const Divider = ({
  image: dividerImage,
  className,
}: {
  image: string;
  className: string;
}) => (
  <div className={`flex justify-center bg-cover bg-[50%_50%] ${className}`}>
    <img className="w-[929px] h-px object-cover" alt="" src={dividerImage} />
  </div>
);

const Artwork = ({
  src,
  alt = "Projekt graficzny",
  className,
}: GalleryImage) => (
  <img
    className={className ?? "w-[239px] h-[239px] aspect-[1] object-cover"}
    alt={alt}
    src={src}
    loading="lazy"
  />
);

export const Frame = (): JSX.Element => {
  return (
    <main
      className="bg-white overflow-y-scroll overflow-x-hidden w-full min-w-[1236px] h-[698px] relative"
      aria-label="Portfolio Amadeusza Chomko"
    >
      <div
        className="absolute top-[-7px] left-0 w-[1236px] h-[4503px] bg-[#1e1e1e]"
        aria-hidden="true"
      />
      <img
        className="absolute top-[3687px] left-[380px] w-[715px] h-[567px]"
        alt=""
        src={union}
        aria-hidden="true"
      />
      <div
        className="absolute top-[3698px] left-[calc(50.00%_-_618px)] w-[1236px] h-[798px] bg-[linear-gradient(0deg,rgba(217,217,217,1)_58%,rgba(255,255,255,0)_100%)]"
        aria-hidden="true"
      />
      <p className="absolute top-[310px] left-[691px] [font-family:'Inter-ExtraLight',Helvetica] font-extralight text-[#424242] text-[32px] tracking-[0] leading-[normal]">
        GRAFIK KOMPUTEROWY
      </p>
      <div className="absolute top-[calc(50.00%_+_14px)] left-[calc(50.00%_-_446px)] w-[881px] h-[130px]">
        <h1 className="absolute top-[calc(50.00%_-_65px)] left-[calc(50.00%_-_440px)] [font-family:'Cal_Sans-Regular',Helvetica] font-normal text-neutral-800 text-[100px] tracking-[0] leading-[normal]">
          Amadeusz Chomko
        </h1>
        <img
          className="absolute top-[calc(50.00%_-_65px)] left-[calc(50.00%_-_440px)] w-[879px] h-[130px]"
          alt=""
          src={maskGroup4}
          aria-hidden="true"
        />
      </div>
      <div
        className="absolute top-[536px] left-[266px] w-[307px] h-[324px] bg-[#424242] rounded-[153.5px/162px] blur-[209px]"
        aria-hidden="true"
      />
      <p className="absolute top-[calc(50.00%_+_531px)] left-[calc(50.00%_-_187px)] [font-family:'Inter-Regular',Helvetica] font-normal text-[#989898] text-[32px] text-center tracking-[0] leading-[normal]">
        Mam na imię Amadeusz i
        <br />
        grafiką zajmuję się od
      </p>
      <Divider
        image={line24}
        className="absolute top-[363px] left-[calc(50.00%_-_464px)] w-[929px] h-px bg-[url(/line-1-4.svg)]"
      />
      <Divider
        image={line23}
        className="absolute top-[363px] left-[calc(50.00%_-_464px)] w-[929px] h-px bg-[url(/line-1-3.svg)]"
      />
      <div
        className="absolute top-[671px] left-[1064px] w-[581px] h-[612px] bg-[#424242] rounded-[290.5px/306px] blur-[75px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[3805px] left-[102px] w-[493px] h-[519px] bg-[#424242] rounded-[246.5px/259.5px] blur-[75px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[2751px] left-[-43px] w-[581px] h-[612px] bg-[#424242] rounded-[290.5px/306px] blur-[75px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[2963px] left-[481px] w-[391px] h-[412px] bg-[#424242] rounded-[195.5px/206px] blur-[23.55px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[1616px] left-[290px] w-[581px] h-[612px] bg-[#424242] rounded-[290.5px/306px] blur-[75px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[808px] left-[1194px] w-[321px] h-[338px] bg-[#424242] rounded-[160.5px/169px]"
        aria-hidden="true"
      />
      <h2 className="absolute top-[calc(50.00%_+_409px)] left-[calc(50.00%_-_136px)] [font-family:'Cal_Sans-Regular',Helvetica] font-normal text-[#424242] text-8xl text-center tracking-[0] leading-[normal]">
        Cześć
      </h2>
      <img
        className="absolute top-[614px] left-[calc(50.00%_-_12px)] w-6 h-6"
        alt=""
        src={group22}
        aria-hidden="true"
      />
      <h2 className="absolute top-[calc(50.00%_+_609px)] left-[calc(50.00%_-_99px)] [font-family:'Cal_Sans-Regular',Helvetica] font-normal text-[#898989] text-8xl text-center tracking-[0] leading-[normal]">
        7 lat
      </h2>
      <img
        className="absolute top-[calc(50.00%_+_609px)] left-[calc(50.00%_-_99px)] w-44 h-[125px]"
        alt=""
        src={maskGroup6}
        aria-hidden="true"
      />
      <img
        className="absolute top-[calc(50.00%_+_409px)] left-[calc(50.00%_-_136px)] w-[251px] h-[125px]"
        alt=""
        src={maskGroup7}
        aria-hidden="true"
      />
      <div
        className="absolute top-[849px] left-[-290px] w-[698px] h-[735px] bg-[#2c2c2c] rounded-[349px/367.5px] blur-[50px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[2393px] left-[889px] w-[594px] h-[625px] bg-[#2c2c2c] rounded-[297px/312.5px] blur-[50px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[3090px] left-[706px] w-[848px] h-[893px] bg-[#ffffff45] rounded-[424px/446.5px] blur-[111.95px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[2741px] left-[-70px] w-[848px] h-[893px] bg-[#ffffff45] rounded-[424px/446.5px] blur-[111.95px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[2758px] left-[514px] w-[848px] h-[893px] bg-[#ffffff45] rounded-[424px/446.5px] blur-[111.95px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[3966px] left-[293px] w-[900px] h-[322px] bg-[#ffffff9c] rounded-[450px/161px] blur-[78.7px]"
        aria-hidden="true"
      />
      <h2 className="absolute top-[1437px] left-[calc(50.00%_-_435px)] [font-family:'Inter-Thin',Helvetica] font-thin text-[#666666] text-8xl text-center tracking-[0] leading-[normal]">
        KILKA MOICH PRAC
      </h2>
      <Divider
        image={line2}
        className="absolute top-[1283px] left-[calc(50.00%_-_464px)] w-[929px] h-px bg-[url(/line-1.svg)]"
      />
      <section aria-label="Pierwsza galeria prac">
        <Artwork
          src={image7}
          className="absolute top-[1922px] left-[162px] w-[239px] h-[239px] aspect-[1] object-cover"
        />
        <Artwork
          src={image5}
          className="absolute top-[1922px] left-[858px] w-[239px] h-[239px] aspect-[1] object-cover"
        />
        <div className="absolute top-[1921px] left-[513px] w-[237px] h-[236px] bg-[#69685e] blur-[15px]" />
        <div className="absolute top-[1921px] left-[513px] w-[237px] h-[236px] bg-[#69685d]" />
        <div className="absolute top-[1922px] left-[151px] w-[935px] h-[246px] flex">
          {squareImages.map((item) => (
            <Artwork key={item.src} {...item} />
          ))}
        </div>
      </section>
      <section aria-label="Druga galeria prac">
        <Artwork
          src={image1}
          className="absolute top-[2253px] left-[162px] w-[239px] h-[239px] aspect-[1] object-cover"
        />
        <Artwork
          src={image}
          className="absolute top-[2253px] left-[510px] w-[239px] h-[239px] aspect-[1] object-cover"
        />
        <Artwork
          src={image2}
          className="absolute top-[2253px] left-[858px] w-[239px] h-[239px] aspect-[1] object-cover"
        />
        <Artwork
          src={image6}
          className="absolute top-[2253px] left-[858px] w-[239px] h-[239px] aspect-[1] object-cover"
        />
        <div className="absolute top-[2253px] left-[151px] w-[935px] h-[239px] flex gap-[109px]">
          {secondGalleryImages.map((item) => (
            <Artwork key={item.src} {...item} />
          ))}
        </div>
      </section>
      <section aria-label="Trzecia galeria prac">
        <Artwork
          src={image32}
          className="absolute top-[2583px] left-[calc(50.00%_-_418px)] w-[837px] h-[559px] aspect-[1.5] object-cover"
        />
        <Artwork
          src={image42}
          className="absolute top-[2583px] left-[calc(50.00%_-_418px)] w-[837px] h-[559px] aspect-[1.5] object-cover"
        />
      </section>
      <div className="absolute w-[71.28%] h-[21.49%] top-[239.97%] left-[14.40%]">
        <div className="absolute w-[25.31%] h-[41.33%] top-[31.33%] left-0 overflow-hidden">
          <img
            className="absolute w-[80.83%] h-[81.67%] top-[18.33%] left-[19.17%]"
            alt=""
            src={vector}
          />
          <img
            className="absolute w-[52.44%] h-[81.67%] top-[18.33%] left-[47.56%]"
            alt=""
            src={image14}
          />
          <img
            className="absolute w-[28.45%] h-[97.91%] top-[2.09%] left-[71.55%]"
            alt=""
            src={vector2}
          />
          <img
            className="absolute w-[4.47%] h-[16.80%] top-[83.20%] left-[95.53%]"
            alt=""
            src={vector3}
          />
          <img
            className="absolute w-full h-full top-0 left-0"
            alt=""
            src={vector4}
          />
          <img
            className="absolute w-[223px] h-[62px] top-0 left-0"
            alt=""
            src={maskGroup}
          />
        </div>
        <div className="absolute h-[82px] top-[39px] left-[683px] flex items-start min-w-[198px] bg-[url(/group-9.png)] bg-[100%_100%]">
          <img className="w-[198px] h-[82px]" alt="" src={maskGroup3} />
        </div>
        <div className="absolute top-0 left-[345px] w-[229px] h-[150px] flex bg-[url(/image-5-2.png)] bg-cover bg-[50%_50%]">
          <img className="w-[229px] h-[150px]" alt="" src={maskGroup2} />
        </div>
      </div>
      <div className="absolute w-[935px] h-[239px] top-[3243px] left-[171px]">
        <div className="absolute top-0 left-[654px] w-[239px] h-[239px] flex bg-[url(/image-3-3.png)] bg-cover bg-[50%_50%]">
          <img
            className="w-[239px] h-[239px] aspect-[1] object-cover"
            alt=""
            src={image43}
          />
        </div>
        <div className="absolute top-0 left-0 w-[935px] h-[239px]">
          {finalGalleryImages.map((item, index) => (
            <Artwork
              key={`${item.src}-${index}`}
              src={item.src}
              alt={item.alt}
              className={`absolute top-0 w-[239px] h-[239px] aspect-[1] object-cover ${
                index < 2 ? "left-0" : "left-[348px]"
              }`}
            />
          ))}
        </div>
      </div>
      <Divider
        image={line22}
        className="absolute top-[3689px] left-[calc(50.00%_-_464px)] w-[929px] h-px bg-[url(/line-1-2.svg)]"
      />
      <div className="absolute top-[3833px] left-[calc(50.00%_-_225px)] w-[453px] h-[166px]">
        <h2 className="absolute top-0 left-[calc(50.00%_-_226px)] [font-family:'Cal_Sans-Regular',Helvetica] font-normal text-[#2b2b2b] text-9xl text-center tracking-[0] leading-[normal]">
          Kontakt
        </h2>
        <img
          className="absolute top-0 left-[calc(50.00%_-_226px)] w-[451px] h-[166px]"
          alt=""
          src={maskGroup5}
          aria-hidden="true"
        />
      </div>
      <div className="absolute top-[4052px] left-[339px] w-[574px] h-[51px]">
        <div className="absolute w-[8.16%] h-[91.67%] top-[4.17%] left-0 bg-[url(/vector-stroke.svg)] bg-[100%_100%]">
          <img
            className="absolute w-[72.53%] h-[72.93%] top-[27.07%] left-[27.47%]"
            alt=""
            src={vectorStroke2}
          />
          <img
            className="absolute w-[29.55%] h-[79.55%] top-[20.45%] left-[70.45%]"
            alt=""
            src={vectorStroke3}
          />
        </div>
        <a
          className="absolute top-2.5 left-[81px] [font-family:'Inter-Light',Helvetica] font-light text-[#2b2b2b] text-2xl text-center tracking-[0] leading-[normal]"
          href="https://www.instagram.com/media.vantage/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.instagram.com/media.vantage/
        </a>
      </div>
      <img
        className="absolute top-[4137px] left-[416px] w-[418px] h-[51px]"
        alt=""
        src={group17}
      />
      <div className="absolute top-[4311px] left-[482px] w-[289px] h-[51px] flex gap-[25.9px]">
        <div className="w-[51.1px] flex">
          <div className="mt-0 w-[51.1px] h-[51.1px] flex">
            <img className="flex-1 w-[46.6px]" alt="" src={vectorStroke4} />
          </div>
        </div>
        <a
          className="mt-2.5 w-[210px] h-[29px] [font-family:'Inter-Light',Helvetica] font-light text-[#2b2b2b] text-2xl text-center tracking-[0] leading-[normal]"
          href="tel:+48690248212"
        >
          (+48) 690 248 212
        </a>
      </div>
      <div className="absolute w-[369px] h-[51px] top-[4224px] left-[440px] flex">
        <div className="w-[371.1px] flex gap-[23px]">
          <div className="w-[51.1px] flex">
            <div className="mt-0 w-[51.1px] flex">
              <div className="w-[51.1px] h-[51.1px] relative">
                <img
                  className="absolute w-[91.67%] h-full top-0 left-[8.33%]"
                  alt=""
                  src={vectorStroke5}
                />
                <img
                  className="absolute w-[66.67%] h-[75.00%] top-[25.00%] left-[33.33%]"
                  alt=""
                  src={vectorStroke6}
                />
              </div>
            </div>
          </div>
          <p className="mt-[11px] w-[295px] h-[29px] [font-family:'Inter-Light',Helvetica] font-light text-[#2b2b2b] text-2xl tracking-[0] leading-[normal]">
            05-300 Mińsk Mazowiecki
          </p>
        </div>
      </div>
      <div
        className="absolute top-[2556px] left-[-71px] w-64 h-[344px] bg-neutral-100 rounded-[128px/172px] blur-[84.75px]"
        aria-hidden="true"
      />
      <img
        className="absolute top-[1096px] left-[calc(50.00%_-_12px)] w-6 h-6"
        alt=""
        src={group2}
        aria-hidden="true"
      />
      <div
        className="absolute top-[4125px] left-[1085px] w-[67px] h-[370px] bg-[#d9d9d9] rounded-[100px_100px_0px_0px] shadow-[10px_10px_30px_#ffffff,-10px_-10px_30px_#b6b6b6ec]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[4262px] left-[151px] w-[67px] h-[370px] bg-[#d9d9d9] rounded-[100px_100px_0px_0px] rotate-[90.00deg] shadow-[10px_10px_30px_#ffffff,-10px_-10px_30px_#b6b6b6ec]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[4174px] left-[1014px] w-[51px] h-[321px] bg-[#d9d9d9] rounded-[100px_100px_0px_0px] shadow-[10px_10px_30px_#ffffff,-10px_-10px_30px_#b6b6b6ec]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[4220px] left-[968px] w-[27px] h-[275px] bg-[#d9d9d9] rounded-[100px_100px_0px_0px] shadow-[10px_10px_30px_#ffffff,-10px_-10px_30px_#b6b6b6ec]"
        aria-hidden="true"
      />
      <img
        className="fixed top-[37px] left-0 w-56 h-[210px]"
        alt=""
        src={vector1}
        aria-hidden="true"
      />
      <img
        className="fixed top-[17px] left-[19px] w-[65px] h-[27px]"
        alt="Vantage Media"
        src={warstwa1}
      />
      <div
        className="fixed top-[640px] left-px w-[1236px] h-[275px] bg-[linear-gradient(0deg,rgba(30,30,30,1)_28%,rgba(30,30,30,0)_100%)]"
        aria-hidden="true"
      />
    </main>
  );
};
