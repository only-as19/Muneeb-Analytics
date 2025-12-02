import React from "react";
import { NavigationMenuLink } from "@/lib";
import { Link } from "react-router-dom";

interface IListItem {
  description?: string;
  title?: string;
  href: string;
  customClass?: string;
}

const ListItem: React.FC<IListItem> = ({
  customClass = "",
  description,
  title,
  href
}) => {
  return (
    <NavigationMenuLink asChild>
      <Link to={href} className={`${customClass}`}>
        <h1 className="capitalize font-medium">{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </Link>
    </NavigationMenuLink>
  );
};

export default ListItem
