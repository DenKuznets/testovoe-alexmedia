

export default function Polygon(props) {
  return (
    <img
      style={{ position: "absolute" }}
      className={`polygon${props.number}`}
      src={`./images/Polygon${props.number}.svg`}
      alt="colored shape"
    />
  );
}


