import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DialogForm({open, onClose}) {

   const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

  return (
    <Dialog
        open={open}
        onClose={onClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
    >
    <DialogTitle>
        Subject
    </DialogTitle>
    <DialogContent dividers={true}>
        Messgage....
    </DialogContent>
    <DialogActions>
        <Button onClick={onClose} color="primary">
            Close
        </Button>
    </DialogActions>
    </Dialog>
  );
}
