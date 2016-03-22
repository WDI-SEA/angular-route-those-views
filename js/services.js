angular.module("Services", [])

.factory("Players", [function() {
  return {
    players: [
    {
      name: "Melo Trimble",
      position: "Point Guard",
      height: "6ft 3in",
      weight: 185,
      year: "Sophomore",
      number: 2,
      img: "images/melo.jpg"
    },
    {
      name: "Rasheed Sulaimon",
      position: "Guard",
      height: "6ft 4in",
      weight: 190,
      year: "Senior",
      number: 0
    },
    {
      name: "Jake Layman",
      position: "Forward",
      height: "6ft 9in",
      weight: 220,
      year: "Senior",
      number: 10
    },
    {
      name: "Robert Carter",
      position: "Forward",
      height: "6ft 9in",
      weight: 235,
      year: "Junior",
      number: 4
    },
    {
      name: "Diamond Stone",
      position: "Center",
      height: "6ft 11in",
      weight: 255,
      year: "Freshman",
      number: 33
    }
  ]}
}])