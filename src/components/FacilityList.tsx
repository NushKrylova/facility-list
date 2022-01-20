import { FC, useEffect, useState } from "react";
import { deleteFacility, editFacility, getFacilities } from "../api/facilities";
import { Facility } from "../types";
import { DeleteFacility } from "./DeleteFacility";
import { FacilityCard } from "./FacilityCard";
import { UpdateFacility } from "./UpdateFacility";

export const FacilityList: FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [updateFacilityIsOpen, setUpdatedFacilityIsOpen] = useState<boolean>(false);
  const [deleteFacilityIsOpen, setDeleteFacilityIsOpen] = useState<boolean>(false);

  useEffect(() => {
    getFacilities().then((result) => setFacilities(result));
  }, []);

  function handleOnEdit(id: string) {
    const facility = facilities.find((facility) => facility.id === id);
    if (facility) {
      setSelectedFacility(facility);
      setUpdatedFacilityIsOpen(true);
    }
  }

  function handleOnDelete(id: string) {
    const facility = facilities.find((facility) => facility.id === id);
    if (facility) {
      setSelectedFacility(facility);
      setDeleteFacilityIsOpen(true);
    }
  }

  async function handleSave(updatedFacility: Facility) {
    await editFacility(updatedFacility);
    if (selectedFacility) {
      const facilityIndex = facilities.indexOf(selectedFacility);
      if (facilityIndex >= 0) {
        const facilitiesCopy = [...facilities];
        facilitiesCopy[facilityIndex] = updatedFacility;
        setFacilities(facilitiesCopy);
      }
    }
    setUpdatedFacilityIsOpen(false);
  }

  async function handleDelete(id: string) {
    await deleteFacility(id);
    if (selectedFacility) {
      const facilityIndex = facilities.indexOf(selectedFacility);
      if (facilityIndex >= 0) {
        const facilitiesCopy = [...facilities];
        facilitiesCopy.splice(facilityIndex, 1);
        setFacilities(facilitiesCopy);
      }
    }
    setDeleteFacilityIsOpen(false);
  }

  return (
    <>
      <p>FacilityList</p>

      {facilities.length === 0 ? (
        <p>Loading...</p>
      ) : (
        facilities.map((facility) => (
          <FacilityCard
            key={facility.id}
            id={facility.id}
            name={facility.name}
            type={facility.type}
            address={facility.address}
            onEdit={handleOnEdit}
            onDelete={handleOnDelete}
          />
        ))
      )}

      {updateFacilityIsOpen && selectedFacility ? (
        <UpdateFacility
          selectedFacility={selectedFacility}
          handleCancel={() => setUpdatedFacilityIsOpen(false)}
          handleSave={handleSave}
        />
      ) : null}

      {deleteFacilityIsOpen && selectedFacility ? (
        <DeleteFacility
          selectedFacilityId={selectedFacility.id}
          selectedFacilityName={selectedFacility.name}
          handleCancel={() => setDeleteFacilityIsOpen(false)}
          handleDelete={handleDelete}
        />
      ) : null}
    </>
  );
};
