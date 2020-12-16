import Document, { Html, Head, Main, FlareactScript } from "flareact/document";
import { getComent } from "./functions";

class MyDocument extends Document {
  static async getEdgeProps(ctx) {
    console.log("CX", ctx.event.request);
    let comment = await getComent(12);
    let props = await Document.getEdgeProps(ctx);
    if (ctx.event.request.cf.country == "TR") {
      comment = await getComent(12);
    } else {
      comment = await getComent(5);
    }
    props.html += `<h1>
    <pre>
      <code>
        ${JSON.stringify(comment, 0, 5)}
      </code>
    </pre>
    </h1>`;
    console.log("Pro", props);
    return { ...props };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <FlareactScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
