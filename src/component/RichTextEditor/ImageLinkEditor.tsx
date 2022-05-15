import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

interface Props {
  url: string;
  onClose?: (apply: boolean, url?: string) => void;
}

export default function ImageLinkEditor({ url: initUril, onClose }: Props) {
  const [url, setUrl] = useState(initUril);
  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };
  const handleCancel = () => {
    onClose?.(false);
  };
  const handleOK = () => {
    onClose?.(true, url);
  };
  return (
    <Dialog open onClose={handleCancel} fullWidth maxWidth="md">
      <DialogTitle>Image Link Editor</DialogTitle>
      <DialogContent>
        <DialogContentText>Blah blah blah!</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Image Url"
          type="url"
          fullWidth
          variant="standard"
          value={url}
          onChange={handleUrlChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleOK}>OK</Button>
      </DialogActions>
    </Dialog>
  );
}
