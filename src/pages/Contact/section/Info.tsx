import { contactOptions } from "./data";
const Info: React.FC = () => {
  return (
    <section className="p-5 min-h-screen md:min-h-96 flex flex-col items-center justify-center text-primary">
      <div className="w-full max-w-6xl mx-auto">
        <p className="text-center mb-4">
          <span className="border-2 border-black/40 py-0.5 px-2 text-xs font-semibold  rounded-2xl">
            Reach out to us
          </span>
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Love to hear from you
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit..
        </p>
        <div className="grid md:grid-cols-3 md:gap-x-4 gap-y-8">
          {contactOptions.map((option) => (
            <div key={option.id} className="flex flex-col gap-y-2 md:p-5">
              <div className="bg-primary h-10 w-10 flex justify-center items-center rounded-full text-white">
                {option.icon}
              </div>
              <div>
                <h3 className="font-semibold">{option.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {option.description}
                </p>
              </div>
              <a className="hover:underline" href={option.link}>{option.link}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
