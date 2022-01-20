import { FC, useEffect, useState } from "react";
import { deleteFacility, editFacility, getFacilities } from "../api/facilities";
import { Facility } from "../types";
import { DeleteFacility } from "./DeleteFacility";
import { FacilityCard } from "./FacilityCard";
import { UpdateFacility } from "./UpdateFacility";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

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
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" color="text.secondary" gutterBottom>
        FacilityList
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 4 }}>
        {facilities.length === 0 ? (
          <p>Loading...</p>
        ) : (
          facilities.map((facility) => (
            <Grid item key={facility.id}>
              <FacilityCard
                id={facility.id}
                name={facility.name}
                type={facility.type}
                address={facility.address}
                onEdit={handleOnEdit}
                onDelete={handleOnDelete}
              />
            </Grid>
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
      </Grid>
    </Box>
  );
};
