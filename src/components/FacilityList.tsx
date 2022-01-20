import { FC, useEffect, useState } from "react";
import { editFacility, getFacilities } from "../api/facilities";
import { Facility } from "../types";
import { FacilityCard } from "./FacilityCard";
import { UpdateFacility } from "./UpdateFacility";

export const FacilityList: FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    getFacilities().then((result) => setFacilities(result));
  }, []);

  function handleClick(id: string) {
    const facility = facilities.find((facility) => facility.id === id);
    if (facility) {
      setSelectedFacility(facility);
      setModalIsOpen(true);
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
    setModalIsOpen(false);
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
            onClick={handleClick}
          />
        ))
      )}

      {modalIsOpen && selectedFacility ? (
        <UpdateFacility
          selectedFacility={selectedFacility}
          handleCancel={() => setModalIsOpen(false)}
          handleSave={handleSave}
        />
      ) : null}
    </>
  );
};
