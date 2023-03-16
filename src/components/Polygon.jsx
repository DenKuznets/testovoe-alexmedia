

export default function Polygon(props) {
  return (
    <img
      style={{ position: "absolute", zIndex: "-1"}}
      className={`polygon${props.number}`}
      src={`./images/Polygon${props.number}.svg`}
      alt="colored shape"
    />
  );
}


