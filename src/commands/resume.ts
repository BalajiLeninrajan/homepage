export const createResume = () => {
  const link = document.createElement("a");
  link.href = "./res/resume.pdf";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
