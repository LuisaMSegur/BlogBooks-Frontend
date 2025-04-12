export default function Header({ title, subtitle, bgImage, textColor }) {
  return (
    <header className={`relative h-screen text-center bg-cover bg-no-repeat bg-center flex flex-col justify-start items-center ${textColor}`}>
      <div 
        className="absolute inset-0"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", opacity: "40%" }}
      />
      <div className="relative z-10">
        <h1 className="text-4xl pt-[100px] md:text-8xl md:pt-[150px] pb-[80px]">{title}</h1>
        <h2 className="text-sm w-[300px] md:text-xl md:w-[650px]">{subtitle}</h2>
      </div>
    </header>
  );
}