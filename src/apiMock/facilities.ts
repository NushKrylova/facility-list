import { Facility, Type } from "../types";

export let facilitiesDataMock: Facility[] = [
  {
    id: "1",
    createdAt: "Sun, 19 Jan 2020 20:30:20 GMT",
    name: "Simgolf",
    type: Type.indoor,
    address: "Hvidkildevej 64 2400 København Denmark",
  },
  {
    id: "2",
    createdAt: "Wed, 26 Jan 2019 11:37:25 GMT",
    name: "Golf I Lunden",
    type: Type.range,
    address: "Traverbanevej 10, 2920",
  },
];

export function setMockData() {
  if (!localStorage.getItem("facilities")) {
    localStorage.setItem("facilities", JSON.stringify(facilitiesDataMock));
  }
}
