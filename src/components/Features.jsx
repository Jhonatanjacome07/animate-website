import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font"> {title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-autp px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Tu Próximo Viaje Comienza Aquí
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Sumérgete en un universo de posibilidades sobre ruedas. Nuestra gama de vehículos está pensada para cada aventura y estilo de vida. Descubre el coche que no solo te transporta, sino que te define.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden roundend-md md:h-[65vh] text-blue-50 opacity-90">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                <b>La Vanguardia Automotriz</b>
              </>
            }
            description="Nuestra flota es la unión perfecta entre tecnología de punta y un diseño que emociona. Cada vehículo está creado para ofrecer una experiencia superior en cada trayecto."
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 text-blue-50 opacity-90">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  <b>Tesla Model Y RWD </b>
                </>
              }
              description="El Tesla Model Y 2025, configurado con tracción trasera (RWD), esta diseñado para ser el vehículo más seguro de su clase."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 text-blue-50 opacity-90">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  <b>Audi Q4 e-tron</b>
                </>
              }
              description="El Audi Q4 e-tron 2025 se presenta como un SUV eléctrico premium que combina un diseño sofisticado, tecnología de punta y la versatilidad ideal para el día a día."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-17 md:col-span-1 md:me-0 text-blue-50 opacity-90 ">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  <b>BMW iX1</b>
                </>
              }
              description="El BMW iX1 2024 se posiciona como un SUV compacto totalmente eléctrico que encarna la esencia deportiva y el lujo característicos de BMW, adaptados a la era de la movilidad sostenible."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2 ">
  <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
    <h1 className="bento-title special-font max-w-64 text-black">
      Age<b>n</b>da tu Prue<b>b</b>a de Ma<b>n</b>ejo
    </h1>
    <TiLocationArrow className="m-5 scale-[5] self-end" />
  </div>
</BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
