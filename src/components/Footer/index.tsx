import { logo, SocialLinks, Tools, footerSection, services } from "./data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-sidebar font-roboto border-border border-t p-6 md:p-10">
      <div className="max-w-6xl md:m-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div className="md:flex justify-between flex-col">
          <img src={logo} alt="Muneeb Analytics" 
          className="w-full max-w-24"
          />
          <p className="md:mb-auto">Welcome to Muneeb Analyitc</p>
          <div className="mt-4">
            <ul className="flex gap-x-4 items center text-cyan-600">
              {SocialLinks.map((social) => (
                <li key={social.label}>
                  <Link to={social.link}>{social.icon}</Link>
                </li>
            ))}
            </ul>
          </div>
        </div>
        <div>
          {footerSection.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-2">{section.title}</h3>
              <ul className="text-zinc-200 space-y-2 ">
                {section.links.map((links) => (
                  <li key={links.label} className="hover:text-cyan-500">
                    <Link to={links.link}>{links.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="space-y-1 text-zinc-200">
            {services.map((service) => (
              <li key={service.label} className="hover:text-cyan-500">
                <Link to={service.link}>{service.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Tools</h3>
          <ul className="space-y-1 ttext-zinc-200">
            {Tools.map(tool=>(
              <li key={tool.label} className="hover:text-cyan-500">
                {tool.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-xs text-sidebar mt-10 text-center">
        &copy; {new Date().getFullYear()} Muneeb Analytics. All right reserved.
      </div>
    </footer>
  );
};

export default Footer;
