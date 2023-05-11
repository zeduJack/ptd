
import UAParser from "ua-parser-js";

function Page(props) {
  return (<div>Next stars: {JSON.stringify(props)}</div>);
}

Page.getInitialProps = async (ctx) => {
  console.log('ctx', ctx);
  // Mögliche Alternative: https://www.npmjs.com/package/next-useragent
  let uaParser: UAParser = null;
  if (ctx.req) { // if you are on the server and you get a 'req' property from your context
    uaParser = new UAParser(ctx.req.headers["user-agent"]);
  } else { // if you are on the client you can access the navigator from the window object
    uaParser = new UAParser(navigator.userAgent);
  }

  const deviceType = uaParser.getDevice().type || "desktop";
  return { deviceType }
}

export default Page