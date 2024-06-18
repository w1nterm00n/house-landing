function TextSlide({header, text}) {

    return (
      <>
        <span className="slideHeading">{header}</span>
        <span className="slideDescription">
            {text}
        </span>
    </>
    )
  }
  
  export default TextSlide