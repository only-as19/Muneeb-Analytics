import { Link } from "react-router-dom";
import { logo, navLinks } from "./data";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/lib";
import { ListItem, Button, Sheet } from "@/components";
import { TextAlignEnd, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full shadow-2xl font-roboto">
      <div className="px-6 py-5 flex items-center gap-2 justify-between">
        <img src={logo} alt="Muneeb Analytics" className=" max-w-26" />

        <NavigationMenu
          viewport={false}
          className="hidden md:block relative z-50"
        >
          <NavigationMenuList>
            {navLinks.map((Item) => (
              <NavigationMenuItem key={Item.label}>
                {Item.children ? (
                  <>
                    <NavigationMenuTrigger>{Item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid grid-cols-2 md:w-md lg:w-3xl lg:grid-cols-2">
                        {Item.children.map((child) => (
                          <li key={child.label}>
                            <ListItem
                              href={child.link}
                              title={child.label}
                              description={child.description}
                            />
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      to={Item.link}
                      className={navigationMenuTriggerStyle()}
                    >
                      {Item.label}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div>
          <Sheet
            triggerIcon={<TextAlignEnd />}
            triggerClasses="max-w-24"
            sheetHeader={{
              headerTitle: "Muneeb Analytic",
              headerImage: logo,
              showHeaderTitle: false,
              headerDescription: "Welcome To Muneeb Analytic",
            }}
            sheetFooter={{
              buttonLabel: "Contact Us",
            }}
          >
            <div className="flex flex-col gap-y-2 p-2">
              {navLinks.map((item) =>
                item.children?.length ? (
                  <Collapsible key={item.label} className="w-full">
                    <CollapsibleTrigger asChild>
                      <Button
                        customClasses="group text-normal font-semibold hover:bg-transparent"
                        icon={
                          <span>
                            <ChevronDown className="transition-transform group-data-[state=open]:rotate-180" />
                          </span>
                        }
                        label={item.label}
                        variant="ghost"
                      />
                    </CollapsibleTrigger>

                    <CollapsibleContent className="mt-1 space-y-1 border-l pl-6">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.link}
                          className="block py-1 text-sm hover:underline"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Link
                    key={item.label}
                    to={item.link}
                    className="px-4 py-2 font-semibold text-base"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </Sheet>
          <div className="hidden md:block">
            <Button label="Contact Us" variant="default" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
