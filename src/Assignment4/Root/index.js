import Header from "../Header";
import CardComponent from "../CardComponent";
import NitishPic from "../../logo/Nitish.jpg";

const RootElement = () => {
  const teamInformation = [
    {
      name: "Nitish Nivedan Barik",
      company: "Accenture",
      designaton: "Team Lead",
      location: "Odisha",
      id: "1",
      imageSource: NitishPic,
    },
    {
      name: "Iswarya",
      company: "Accenture",
      designaton: "Software Engineer",
      location: "bangalore",
      id: "2",
      imageSource: NitishPic,
    },
    {
      name: "Smriti",
      company: "Cognizant",
      designaton: "Software Engineer",
      location: "mumbai",
      id: "3",
      imageSource: NitishPic,
    },
    {
      name: "Shaksham",
      company: "Cognizant",
      designaton: "Software Engineer",
      location: "mumbai",
      id: "4",
      imageSource: NitishPic,
    },
    {
      name: "Shaksham",
      company: "Cognizant",
      designaton: "Software Engineer",
      location: "mumbai",
      id: "5",
      imageSource: NitishPic,
    },
    {
      name: "Shekhawat",
      company: "Cognizant",
      designaton: "Software Engineer",
      location: "mumbai",
      id: "6",
      imageSource: NitishPic,
    },
    {
      name: "Simran",
      company: "Cognizant",
      designaton: "Software Engineer",
      location: "mumbai",
      id: "7",
      imageSource: NitishPic,
    },
    {
      name: "Sireesha",
      company: "Cognizant",
      designaton: "Software Engineer",
      location: "mumbai",
      id: "8",
      imageSource: NitishPic,
    },
    {
      name: "Vamshi",
      company: "Cognizant",
      designaton: "Software Engineer",
      location: "mumbai",
      id: "9",
      imageSource: NitishPic,
    },
    {
      name: "Kalyan",
      company: "Cognizant",
      designaton: "Software Engineer",
      location: "mumbai",
      id: "9",
      imageSource: NitishPic,
    },
  ];
  return (
    <>
      <Header />
      {teamInformation &&
        teamInformation.length > 0 &&
        teamInformation.map((temmatesDetails) => (
          <CardComponent
            key={temmatesDetails.id}
            temmatesDetails={temmatesDetails}
          />
        ))}
    </>
  );
};

export default RootElement;
