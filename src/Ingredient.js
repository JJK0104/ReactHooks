import { useRef,useState } from 'react';

function Ingredient() {
    const [ingredient, setIngredient] = useState([{ id: 0, name: "", quan: "" }]);

  const handleIngredient = (e, id) => {
    console.log(e.target.name)
    console.log(id)
    console.log(e)
    const { name, value } = e.target;
    // ingredient.forEach((arr) => {
    //   arr.id === id && setIngredient((prev) => console.log(1));
    // });
  };


  const pushId = useRef(ingredient.length);

  const handleAddComponent = () => {
    const addComponent = { id: pushId.current, name: '', quan : ''};
    setIngredient(ingredient.concat(addComponent));
    pushId.current += 1;
  };

  const handleRemoveComponent = id => {
    let removeComponent = ingredient.filter(ingredient => ingredient.id !== id);
    setIngredient(removeComponent);
  };

  

  return (
    <div>
      <div>
        {ingredient.map(ingredient => (
          <div key={ingredient.id}>
            <input
              onChange={(e)=>handleIngredient(e,ingredient.id)}
              name="name"
              type='text'
              value={ingredient.name}
              placeholder="예) 당근"
            />
            <input
              onChange={(e)=>handleIngredient(e,ingredient.id)}
              name="quan"
              type='text'
              value={ingredient.quan}
              placeholder="예) 1개"
            />


            <button
              onClick={() => {
                handleRemoveComponent(ingredient.id);
              }}
            >
              x
            </button>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleAddComponent}>+ 추가</button>
      </div>
    </div>
  );
}

export default Ingredient;
