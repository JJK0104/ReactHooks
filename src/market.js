import React, { useMemo, useState } from "react";
import Ingredient from "./Ingredient";

// const hardCalculate = (number) => {
//   console.log("어려운 계산!");
//   for (let i = 0; i < 999999999; i++) {}
//   return number + 10000;
// };

// const easyCalculate = (number) => {
//   console.log("짱쉬운 계산!");
//   return number + 1;
// };

function Market() {
  const [ingredient, setIngredient] = useState([{ id: 0, name: "", quan: "" }]);

  const handleIngredient = (e, id) => {
    const { name, value } = e.target;
    ingredient.forEach((arr) => {
      arr.id === id && setIngredient((prev) => console.log(1));
    });
  };
  //   const [hardNumber, setHardNumber] = useState(1);
  //   const [easyNumber, setEasyNumber] = useState(1);

  //   const hardSum = useMemo(() => {
  //     return hardCalculate(hardNumber);
  //   }, [hardNumber]);

  //   const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <Ingredient
        // handleIngredient={handleIngredient}
        // ingredient={ingredient}
        // setIngredient={setIngredient}
      />
      {/* <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span> */}

    </div>
  );
}

export default Market;
