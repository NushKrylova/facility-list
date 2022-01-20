import React, { FC } from "react";

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
    <div style={{ borderStyle: "solid" }}>
      <p>Delete facility</p>
      <p>Are you sure you want to delete {selectedFacilityName}? You won't be able to recover this data.</p>
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={() => handleDelete(selectedFacilityId)}>Save</button>
    </div>
  );
};
