import { NextPage, GetStaticProps } from "next";
import Badge from "../components/Badge/Badge";
import Button from "../components/Button/Button";

const Styleguide: NextPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <label>Label</label>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptatibus laudantium
        ducimus numquam odit corporis repellendus nemo possimus facilis quis repudiandae quasi
        adipisci commodi quas autem in modi amet voluptas, accusamus excepturi reprehenderit quam,
        nostrum dolore obcaecati? Facilis nisi deleniti nemo minus veritatis excepturi neque quia
        fuga rem suscipit? Quaerat?
      </p>
      <Button text="Button" link="/" type="basic" />
      <Button text="Button Solid" link="/" type="solid" />
      <Button text="Button Outline" link="/" type="outline" />
      <Badge text="Badge" description="From £XX,XXX" />
    </div>
  );
};

export default Styleguide;

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.NODE_ENV === "production") {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  return { props: {} };
};
