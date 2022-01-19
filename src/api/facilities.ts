import { Facility } from "../types";

export const getFacilities = (): Promise<Facility[]> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let value: string = "";
      if (localStorage.getItem("facilities")) {
        value = localStorage.getItem("facilities") || "[]";
      }
      resolve(JSON.parse(value));
    }, 1000);
  });

export const editFacility = (updatedFacility: Facility): Promise<void> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const facilities: Facility[] = JSON.parse(localStorage.getItem("facilities") || "[]");
      const facilityIndex = facilities.findIndex((facility) => facility.id === updatedFacility.id);

      if (facilityIndex >= 0) {
        const facilitiesCopy = [...facilities];
        facilitiesCopy[facilityIndex] = updatedFacility;
        localStorage.setItem("facilities", JSON.stringify(facilitiesCopy));
        resolve();
        return;
      }
      reject(new Error(`Facility with id ${updatedFacility.id} not found`));
    }, 1000);
  });
