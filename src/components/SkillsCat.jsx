import { ReactTyped } from "react-typed";
import Title from "../ui/Title";

const SkillsCat = () => {
  const greetings = [
    "नमस्ते",
    "Hello",
    "Hola",
    "Hallo",
    "مرحبا",
    "안녕하세요",
    "Olá",
    "Bonjour",
  ];

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {/* Greetings Section */}
      <div
        className="flex items-center justify-center rounded-3xl bg-gray-950 px-4 py-6"
        style={{
          cursor: "url('/assets/hello.svg') 10 10, pointer",
        }}
      >
        <p className="text-3xl font-semibold tracking-widest text-gray-100 md:text-4xl">
          <ReactTyped
            strings={greetings}
            typeSpeed={70}
            backSpeed={50}
            loop
            showCursor={false}
          />
        </p>
      </div>

      {/* Soft Skills Section */}
      <div className="rounded-2xl border border-gray-600 p-5">
        <Title title={"Soft Skills"} />
        <div className="flex flex-wrap gap-3 pt-3">
          <p className="rounded-2xl bg-blue-700 px-3 py-1 text-lg text-gray-100">
            #Creativity
          </p>
          <p className="rounded-2xl border border-gray-600 px-3 py-1 text-lg text-gray-600">
            #Teamwork
          </p>
          <p className="rounded-2xl border border-gray-600 px-3 py-1 text-lg text-gray-600">
            #Time_Managment
          </p>
          <p className="rounded-2xl border border-gray-600 px-3 py-1 text-lg text-gray-600">
            #Flexibility
          </p>
          <p className="rounded-2xl bg-blue-700 px-3 py-1 text-lg text-gray-100">
            #Communication
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsCat;

{
  /* Experince */
}
{
  /* <div>
        <Title title={"Experince"} />
        <div className="grid gap-8 rounded-3xl bg-gray-950 px-4 py-3 text-gray-100 md:gap-6">
          <div className="flex items-center justify-between">
            <p className="rounded-2xl bg-gray-100 px-2 py-1 text-gray-950">
              June - Oct 2024
            </p>
            <FaCircleCheck size={30} fill="gray" />
          </div>
          <div>
            <p className="mb-[-0.5em] font-extralight text-gray-300">
              Worley Coop
            </p>
            <p className="text-4xl">Software Developer</p>
          </div>
        </div>
      </div> */
}
