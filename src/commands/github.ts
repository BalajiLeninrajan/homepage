import command from "../../config.json" assert { type: "json" };

export const createGithub = () => {
  const link = document.createElement("a");
  link.href = `https://github.com/${command.social.github}`;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
