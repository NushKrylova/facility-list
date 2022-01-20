import React, { FC, useEffect, useState } from "react";
import { Facility, Type } from "../types";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
interface UpdateFacilityProps {
  selectedFacility: Facility;
  handleCancel: () => void;
  handleSave: (updatedFacility: Facility) => void;
}
export const UpdateFacility: FC<UpdateFacilityProps> = ({ selectedFacility, handleCancel, handleSave }) => {
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<Type>(Type.indoor);
  const [address, setAddress] = useState("");

  useEffect(() => {
    setName(selectedFacility.name);
    setType(selectedFacility.type);
    setAddress(selectedFacility.address);
  }, [selectedFacility.name, selectedFacility.type, selectedFacility.address]);

  return (
    <Dialog open onClose={handleCancel}>
      <DialogTitle>Edit Information</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Facility name"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormControl>
          <FormLabel id="facility-type">Gender</FormLabel>
          <RadioGroup row aria-labelledby="facility-type" name="facility-type">
            <FormControlLabel
              value="indoor"
              control={<Radio checked={type === Type.indoor} onChange={(e) => setType(e.target.value as Type)} />}
              label="Indoor"
            />
            <FormControlLabel
              value="range"
              control={<Radio checked={type === Type.range} onChange={(e) => setType(e.target.value as Type)} />}
              label="Range"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          autoFocus
          margin="dense"
          id="address"
          label="address"
          type="text"
          fullWidth
          variant="standard"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={() => handleSave({ ...selectedFacility, name, type, address })}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
