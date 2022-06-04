import React, { SyntheticEvent } from "react";
import RatingMui from "@mui/material/Rating";
import { AiOutlineStar } from "react-icons/ai";

type IProps = {
  value: number | null;
  onChange: (
    e: SyntheticEvent<Element, Event>,
    newRating: number | null
  ) => void;
  readOnly?: boolean;
};

const Rating: React.FC<IProps> = ({ value, onChange, readOnly }) => {
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
