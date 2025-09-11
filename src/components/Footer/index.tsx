import { logo, SocialLinks, Tools, footerSection, services } from "./data";
import { Link } from "react-router-dom";
import { Button } from "@/lib";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <img src={logo} alt="Muneeb Analytics" />
          <p>Welcome to Muneeb Analyitc</p>
          <div>
            {SocialLinks.map((social) => (
              <div key={social.label}>
                <Button asChild variant="secondary" className="rounded-full">
                  <Link to={social.link}>{social.icon}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div>
          {footerSection.map((section) => (
            <div key={section.title}>
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((links) => (
                  <li key={links.label}>
                    <Link to={links.link}>{links.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h3>Services</h3>

          <ul>
            {services.map((service) => (
              <li key={service.label}>
                <Link to={service.link}>{service.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Tools</h3>
          <ul>
            {Tools.map(tool=>(
              <li key={tool.label}>
                {tool.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
