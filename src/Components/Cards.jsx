// import data from "../data/data";
import Card from "../Components/Card";

export default function Cards() {
  let data = [
    {
      id: 1,
      cname: "Sheela",
      image:
        "https://cdn.pixabay.com/photo/2019/04/13/16/45/thinking-4125016_1280.jpg",
    },
    {
      id: 2,
      cname: "Yuktha",
      image:
        "https://cdn.pixabay.com/photo/2019/04/13/16/45/thinking-4125016_1280.jpg",
    },
    {
      id: 3,
      cname: "Madhav",
      image:
        "https://cdn.pixabay.com/photo/2019/04/13/16/45/thinking-4125016_1280.jpg",
    },
    {
      id: 4,
      cname: "Don Alpacino",
      image:
        "https://cdn.pixabay.com/photo/2018/05/02/05/59/people-3367796_1280.jpg",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
      {data.map(({ id, cname, image }) => {
        console.log(cname);
        return <Card key={id} id={id} cname={cname} image={image} />;
      })}
    </div>
  );
}
