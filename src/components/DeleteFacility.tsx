import React, { FC } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
interface DeleteFacilityProps {
  selectedFacilityName: string;
  selectedFacilityId: string;
  handleCancel: () => void;
  handleDelete: (selectedFacilityId: string) => void;
}
export const DeleteFacility: FC<DeleteFacilityProps> = ({
  selectedFacilityName,
  selectedFacilityId,
  handleCancel,
  handleDelete,
}) => {
  return (
    <Dialog
      open
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Delete facility</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete {selectedFacilityName}? You won't be able to recover this data.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={() => handleDelete(selectedFacilityId)} autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
