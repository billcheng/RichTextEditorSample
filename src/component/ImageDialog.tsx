import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface Props {
  open: boolean;
  url: string;
  alt?: string;
  onClose?: () => void;
}

export default function ImageDialog({ open, url, alt, onClose }: Props) {
  return (
    <Dialog maxWidth="md" open={open} onClose={onClose}>
      <DialogTitle>Image</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <img src={url} alt={alt} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
