import { FC } from "react";

interface FacilityCardProps {
  id: string;
  name: string;
  type: string;
  address: string;
  onClick: (id: string) => void;
}

export const FacilityCard: FC<FacilityCardProps> = ({ id, name, type, address, onClick }) => {
  return (
    <div style={{ borderStyle: "solid" }}>
      <p>{name}</p>
      <p>{type}</p>
      <p>Address: {address}</p>
      <button onClick={() => onClick(id)}>Edit</button>
    </div>
  );
};
