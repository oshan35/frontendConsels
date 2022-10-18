import Footer from "../footer/Footer";
import NavigationBar from "../../components/navbar/navbar";
import "./contributors.css";
import ContributorCard from "../../components/contributorCard/ContributorCard";
import AllContributors from "../../data/contributors.data";

// contributors page
const Contributors = () => {
  return (
    <>
      <NavigationBar />
      <div className="bodyAllContributorsWrapper">
        {/* mapping allContributors.data.js file */}
        {AllContributors.map((data) => (
          <ContributorCard
            name={data.name}
            degree={data.degree}
            status={data.status}
            moreDetails={data.moreDetails}
            avatar={data.avatar}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Contributors;
