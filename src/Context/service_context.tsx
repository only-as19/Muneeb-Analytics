import { createContext, type ReactNode } from "react";
import { Services } from "@/pages/Landing/data/data";
import type { Service } from "@/pages/Landing/data/data";
interface ServiceData {
  Services: typeof Services;
  getServicetBySlug: (slug: string) => Service | undefined;
}

const ServiceContext = createContext<ServiceData | undefined>(undefined);

function SeriveProvider({ children }: { children: ReactNode }) {
  const getServicetBySlug = (slug: string) => {
    return Services.find((service) => service.link === slug);
  };

  return (
    <ServiceContext.Provider value={{ Services, getServicetBySlug }}>
      {children}
    </ServiceContext.Provider>
  );
}

export { ServiceContext, SeriveProvider };
