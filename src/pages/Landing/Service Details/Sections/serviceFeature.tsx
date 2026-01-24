import type { Feature } from "../../data/features";

interface featureType{
    features: Feature[]
}

const ServiceFeature: React.FC<featureType> = ({features}) => {
  return (
    <section className="p-5 min-h-96 bg-bg-secondary text-primary flex flex-col justify-center items-center">
      <div className="max-w-6xl mx-auto grid gap-y-4 md:grid-cols-3 md:gap-x-6 md:gap-y-6">
        {features.map((feature, index) => (
          <div key={index}
          className="bg-white shadow-primary shadow-2xl px-6 py-8 rounded-md flex flex-col gap-y-4"
          >
            <div className="flex justify-between items-center">
              <div className={`h-14 w-14 text-white flex justify-center items-center rounded-full`}
              style={{backgroundColor: feature.color}}
              >{feature.icon}</div>
              <div className="text-right">
                <h1 className="text-2xl font-bold"
                style={{color:feature.color}}
                >{feature.metrices}</h1>
                <span className="text-sm text-muted-foreground">{feature.metricesLabel}</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">{feature.title}</h1>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeature;
