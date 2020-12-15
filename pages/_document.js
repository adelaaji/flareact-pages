import Document, { Html, Head, Main, FlareactScript } from "flareact/document";

class MyDocument extends Document {
  static async getEdgeProps(ctx) {
    console.log("CX", ctx.event.request);

    let props = await Document.getEdgeProps(ctx);
    if (ctx.event.request.cf.country == "TR") {
      props.html = `Welcome from turkey ${ctx.event.request.cf.city}`;
    } else {
      props.html += `<h1>${ctx.event.request.cf.city}</h1>`;
    }

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
