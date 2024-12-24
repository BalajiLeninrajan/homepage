import command from "../../config.json" assert { type: "json" };

export const createEmail = () => {
  const link = document.createElement("a");
  link.href = `mailto:${command.social.email}`;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
