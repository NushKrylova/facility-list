import React, { FC, useEffect, useState } from "react";
import { Facility, Type } from "../types";

interface ModalProps {
  text: string;
  selectedFacility: Facility;
  handleCancel: () => void;
  handleSave: (updatedFacility: Facility) => void;
}
export const Modal: FC<ModalProps> = ({ text, selectedFacility, handleCancel, handleSave }) => {
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<Type>(Type.indoor);
  const [address, setAddress] = useState("");

  useEffect(() => {
    setName(selectedFacility.name);
    setType(selectedFacility.type);
    setAddress(selectedFacility.address);
  }, [selectedFacility.name, selectedFacility.type, selectedFacility.address]);

  return (
    <div style={{ borderStyle: "solid" }}>
      <p>{text}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <input
        type="radio"
        id="range"
        name="type"
        value="range"
        checked={type === Type.range}
        onChange={(e) => setType(e.target.value as Type)}
      />
      <label htmlFor="range">Range</label>

      <input
        type="radio"
        id={"indoor"}
        name="type"
        value="indoor"
        checked={type === Type.indoor}
        onChange={(e) => setType(e.target.value as Type)}
      />
      <label htmlFor="indoor">Indoor</label>

      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={() => handleSave({ ...selectedFacility, name, type, address })}>Save</button>
    </div>
  );
};
