import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import { useSelector } from "react-redux";
import { selectDirectionSections } from "../../redux/directory/directory.selector";
import { DirectoryMenuContainer } from "./directory.styles";

const Directory = () => {
  const sections = useSelector(selectDirectionSections);
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
