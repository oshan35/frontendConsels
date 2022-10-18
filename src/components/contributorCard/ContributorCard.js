import { Card, Avatar } from "antd";
import "./contributorCard.css";
const ContributorCard = ({ name, degree, status, moreDetails, avatar }) => {
  return (
    <div className="cardContributorContainer">
      <Card
        title={
          <div className="avatarContributor">
            <Avatar
              size={80}
              style={{
                border: "solid 1px #8f96a3",
                margin: "auto",
              }}
              src={avatar}
            />
          </div>
        }
        style={{ width: 300, boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}
      >
        <div className="cardDetailsContributor">
          <h3>{name}</h3>
          <p>
            <img
              alt="country"
              src="https://static.univiser.io/common/images/countries/lk.png"
            />{" "}
            Sri Lanka
          </p>
          <b>{degree}</b>
          <p>{status}</p>
          <p>{moreDetails}</p>
        </div>
      </Card>
    </div>
  );
};
export default ContributorCard;
