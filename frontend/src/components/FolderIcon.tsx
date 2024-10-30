import React from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";

interface FolderIconProps {
  isOpen: boolean;
}

function FolderIcon({ isOpen }: FolderIconProps): JSX.Element {
  return isOpen ? (
    <FaFolderOpen color="4465DB" className="icon" />
  ) : (
    <FaFolder color="4465DB" className="icon" />
  );
}

export default FolderIcon;
