import Document, { Html, Head, Main, FlareactScript } from "flareact/document";

class MyDocument extends Document {
  static async getEdgeProps(ctx) {
    console.log("CX", ctx);
    const props = await Document.getEdgeProps(ctx);
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
