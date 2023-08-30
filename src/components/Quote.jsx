//rafce me genera la structura basica


const Quote = ({ phrase }) => {

    console.log(phrase)
  return (
    <p className="container__phrase">{phrase.phrase}</p>
  )
}

export default Quote
