
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
    <header className="w-full bg-amber-100">
      <div className="px-5">
        <img src={logo} alt="Muneeb Analytics"
        className="w-20"
        />

        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map(Item=> (
              <NavigationMenuItem key={Item.label}>
                {Item.children ? (
                 <>
                   <NavigationMenuTrigger>
                    {Item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul>
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
          <Button label="Contact Us" variant="default"/>
        </div>
      </div>
    </header>
  )
}

export default Navbar