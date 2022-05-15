import { ReactNode, useState } from "react";
import ImageDialog from "./ImageDialog";
import classes from "./ImageLink.module.css";

interface Props {
  url?: string;
  children?: ReactNode;
}

export default function ImageLink({ url, children }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpenImage = () => {
    setOpen(true);
  };
  const handleCloseImage = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={classes.clickable} onClick={handleOpenImage}>
        {children}
      </div>
      <ImageDialog url={url ?? ""} open={open} onClose={handleCloseImage} />
    </>
  );
}
