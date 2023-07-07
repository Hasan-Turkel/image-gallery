

const Image = ({ photographer, src}) => {
  return (
    <div>
        <img src={src} alt="{photographer}" />
        <p>{ photographer}</p>
    </div>
  )
}

export default Image