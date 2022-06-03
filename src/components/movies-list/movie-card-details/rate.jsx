import Rating from "@mui/material/Rating";
import { AiOutlineStar } from "react-icons/ai";

const Star = () => {
  return (
    <Rating
      defaultValue={3}
      emptyIcon={<AiOutlineStar style={{ color: "white" }} />}
    />
  );
};
export default Star;
