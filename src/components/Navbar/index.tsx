import { Link } from "react-router-dom"
import { logo, navLinks } from "./data"
import {NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,} from "@/lib"
import { ListItem,Button } from "@/components"


const Navbar = () => {
  return (
    <header className="w-full shadow">
      <div className="px-6 py-5 flex items-center gap-2 justify-between">
        <img src={logo} alt="Muneeb Analytics"
        className=" max-w-26"
        />

        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {navLinks.map(Item=> (
              <NavigationMenuItem key={Item.label}>
                {Item.children ? (
                 <>
                   <NavigationMenuTrigger>
                    {Item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid grid-cols-2 md:w-md lg:w-3xl lg:grid-cols-2">
                      {Item.children.map(child=>(
                        <li key={child.label}>
                          <ListItem href={child.link} title={child.label} description={child.description}/>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                 </>
                  
                ):(
                  <NavigationMenuLink asChild>
                    <Link to={Item.link}
                    className={navigationMenuTriggerStyle()}
                    >{Item.label}</Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div>
          <Button label="Projects" variant="default"/>
        </div>
      </div>
    </header>
  )
}

export default Navbar