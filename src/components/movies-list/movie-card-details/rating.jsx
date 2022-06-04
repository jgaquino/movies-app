import RatingMui from "@mui/material/Rating";
import { AiOutlineStar } from "react-icons/ai";

const Rating = ({ value, onChange }) => {
  return (
    <RatingMui
      emptyIcon={<AiOutlineStar style={{ color: "white" }} />}
      value={value}
      onChange={onChange}
    />
  );
};
export default Rating;
