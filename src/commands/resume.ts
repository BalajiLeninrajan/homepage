export const createResume = () => {
  const link = document.createElement("a");
  link.href =
    "https://raw.githubusercontent.com/BalajiLeninrajan/homepage/cf668bf57f3a50c6bf3b9e9fb899652bea6af6bc/res/resume.pdf";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
