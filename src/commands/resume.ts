export const createResume = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
