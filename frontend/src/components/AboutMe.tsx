import profileImg from "../assets/profileImg.png";

type AboutMeProps = {
  name?: string;
  description?: string;
};

export default function AboutMe({ name, description }: AboutMeProps) {
  return (
    <div className="flex flex-col items-center w-full h-full pt-14 pb-14 p-5 bg-gray-900">
      <div>
        <img
          src={profileImg}
          alt="ProfileImg"
          className="m-16 h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 xl:h-64 xl:w-64 rounded-full border-2 border-blue-500 shadow-[0_0_15px_5px_rgba(96,165,250,0.9),0_15px_20px_rgba(96,165,250,0.8)] hover:shadow-[0_0_30px_15px_rgba(96,165,250,1),0_20px_35px_rgba(96,165,250,0.9)] transition-all duration-300"
        />
      </div>
      <div>
        <h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] hover:drop-shadow-[0_0_21px_rgba(96,165,250,0.85)] transition-all duration-300">
          {name}
        </h1>
      </div>
      <div className="mt-6">
        <p className="text-lg md:text-xl text-center text-gray-300 font-light italic max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}
