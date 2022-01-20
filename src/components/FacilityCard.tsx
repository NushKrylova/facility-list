import { FC } from "react";

interface FacilityCardProps {
  id: string;
  name: string;
  type: string;
  address: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const FacilityCard: FC<FacilityCardProps> = ({ id, name, type, address, onEdit, onDelete }) => {
  return (
    <div style={{ borderStyle: "solid" }}>
      <p>{name}</p>
      <p>{type}</p>
      <p>Address: {address}</p>
      <button onClick={() => onEdit(id)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
