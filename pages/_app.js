export default function App({ Component, pageProps }) {
  console.log("Component", Component);
  console.log("pageProps", pageProps);
  return (
    <div>
      <h1> PAGE - </h1>
      {console.log("Component", Component)}
      {console.log("pageProps", pageProps)}
      <Component {...pageProps} />
    </div>
  );
}
