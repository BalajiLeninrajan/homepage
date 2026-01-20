import command from "../../config.json" assert { type: "json" };

const createBanner = (): string[] => {
  const banner: string[] = [];
  banner.push("<br>");
  const asciiLines: string[] = [];
  command.ascii.forEach((ele) => {
    let bannerString = "";
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    }
    asciiLines.push(`<pre>${bannerString}</pre>`);
  });

  banner.push(`<div class="banner-scroll">${asciiLines.join("")}</div>`);

  banner.push("<br>");
  banner.push(
    "Welcome to balajileninrajan.dev v1.0.0" +
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
