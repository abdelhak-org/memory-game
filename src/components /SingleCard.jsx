import "./SingleCard.css"

const SingleCard = ({card , handleChoice , flipped , disabled }) => {

  const clickHandle = ()=>{
      if(!disabled){
      handleChoice(card)
      }
   
  }

  return (
    <div className="card" >
    <div className={flipped? "flipped" : "" }>
    <img className="front" src={card.src} alt="card front" />
    <img
      onClick={clickHandle}
      className="back"
      src="/img/cover.png" 
      alt="card back" />
    </div>
  </div>
  )
}


export default SingleCard
