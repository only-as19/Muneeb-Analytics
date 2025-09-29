import { features } from "../../data";
const ServiceFeature: React.FC = () => {
  return (
    <section>
      <div>
        {features.map((feature, index) => (
          <div key={index}>
            <div>
              <div>{feature.icon}</div>
              <div>
                <h1>{feature.metrices}</h1>
                <span>{feature.metricesLabel}</span>
              </div>
            </div>
            <div>
              <h1>{feature.title}</h1>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeature;
