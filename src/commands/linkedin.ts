import command from "../../config.json" assert { type: "json" };

export const createLinkedin = () => {
  const link = document.createElement("a");
  link.href = `https://www.linkedin.com/in/${command.social.linkedin}`;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
