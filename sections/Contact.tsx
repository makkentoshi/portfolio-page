import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {
  return (
    <div className="py-16 pt-12">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left md:gap-16">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage})`,
            }}
          ></div>
          <div className="flex flex-col gap-8 md:flex-row items-center">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let's connect and
                direct through your requests. I can help you achieve your goals.
              </p>
            </div>
            <div className="">

            <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max">
              <span className="font-semibold">Contact Me</span>
              <ArrowUpRightIcon className="size-4"></ArrowUpRightIcon>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
