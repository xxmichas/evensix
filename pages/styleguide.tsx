import { NextPage, GetStaticProps } from "next";

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
      <button className="btn">Button</button>
      <button className="btn --sm">Button Small</button>
      <button className="btn">Button Solid</button>
      <button className="btn --outline">Button Outline</button>
      <button className="btn --circle">
        <span className="title">Button</span>
        <span className="desc">From £XX,XXX</span>
      </button>
      <nav>
        <ul>
          <li>Nav item 1</li>
          <li>Nav item 2</li>
          <li>Nav item 3</li>
        </ul>
      </nav>
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
