import { useState } from "react";

const useCards = () => {
  let [visible, setVisible] = useState(true);
  return { visible, setVisible };
};

export default useCards;
