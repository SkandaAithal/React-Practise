export default function Card({ id, cname, image }) {
  return (
    <div>
      <h1>{id}</h1>
      <img
        height={"200px"}
        width={"150px"}
        style={{ objectFit: "cover" }}
        src={image}
        alt=""
      />
      <h1>{cname}</h1>
    </div>
  );
}
