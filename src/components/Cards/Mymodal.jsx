import React from 'react';
import { Button, Modal } from 'rsuite';

function Mymodal({ handleClose, open, modalName }) {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    // <Button onClick={handleOpen}> Open</Button>
    return (
        <Modal open={open} onClose={handleClose}>
            <Modal.Header className={`${modalName} ? 'd-block': 'd-none'`}>
                <Modal.Title>{modalName || null}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>Modal Body</div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} appearance="primary" color="yellow">
                    Ok
                </Button>
                <Button onClick={handleClose} appearance="subtle">
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Mymodal;
