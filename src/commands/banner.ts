import command from "../../config.json" assert { type: "json" };

const createBanner = (): string[] => {
  const banner: string[] = [];
  banner.push("<br>");
  command.ascii.forEach((ele) => {
    let bannerString = "";
    //this is for the ascii art
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    }

    let eleToPush = `<pre>${bannerString}</pre>`;
    banner.push(eleToPush);
  });
  banner.push("<br>");
  banner.push(
    "Welcome to balajileninrajan.github.io v1.0.0" +
      " | " +
      '<a target="_blank" href="https://se-webring.xyz/">SE Webring</a>',
  );
  banner.push(
    "Type <span class='command'>'help'</span> for a list of all available commands.",
  );
  banner.push("<br>");
  return banner;
};

export const BANNER = createBanner();
