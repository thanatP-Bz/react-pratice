import React from 'react'

const showImage = () => {
    const [index, setIndex] = useState(0);
  const { name } = Data[index];

  const prevButton = () => {
  setIndex(index => {
      const newIndex = index - 1
      return newIndex;
  })

  const nextButton = () => {
    setIndex(index => {
        const newIndex = index + 1
        return newIndex;
    })
  

  return (
    <>
      <div className="image">
        <img src="" alt="" />
      </div>
      <h3>{name}</h3>
      <button>prev</button>
      <button>random</button>
      <button>next</button>
    </>
  );
}

export default showImage
