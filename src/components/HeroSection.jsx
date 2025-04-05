const HeroSection = ({ title, text, img }) => {
  return (
    <div
      className='hero-section'
      style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(${img})` }}
    >
      <h1 className='f-pizza'>{title}</h1>
      <p>{text}</p>
      <hr />
    </div>
  )
}

export default HeroSection
