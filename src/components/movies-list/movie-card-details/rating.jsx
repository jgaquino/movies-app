import RatingMui from "@mui/material/Rating";
import { AiOutlineStar } from "react-icons/ai";

const Rating = ({ value, onChange, readOnly }) => {
  return (
    <RatingMui
      emptyIcon={<AiOutlineStar style={{ color: "white" }} />}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
};
export default Rating;
