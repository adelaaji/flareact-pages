import Axios from "axios";
import Document, { Html, Head, Main, FlareactScript } from "flareact/document";

class MyDocument extends Document {
  static async getEdgeProps(ctx) {
    console.log("CX", ctx.event.request);
    let userIp = ctx.event.request.headers.get("CF-Connecting-IP");
    const device = ctx.event.request.headers.get("CF-Device-Type");
    //http://www.geoplugin.net/json.gp?ip=
    let userData = "";
    if (userIp != undefined) {
      //    let result = await Axios.get(`http://www.geoplugin.net/json.gp?ip=${userIp}`);
      userData = `<h1>Your IP is ${userData} </h1>`;
    }
    let props = await Document.getEdgeProps(ctx);
    if (ctx.event.request.cf.country == "TR") {
      props.html = `Welcome from turkey <br /> ${device} ${userData}`;
    } else {
      props.html += `<h1>Welcome to other word</h1> ${userData}`;
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
          {console.log("the props : ", this.props)}
          <FlareactScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
