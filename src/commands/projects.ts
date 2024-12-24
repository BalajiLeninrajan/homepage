import command from "../../config.json" assert { type: "json" };

const createProject = (): string[] => {
  let string = "";
  const projects: string[] = [];
  const files = `${command.projects.length} File(s)`;
  const SPACE = "&nbsp;";

  projects.push("<br>");

  command.projects.forEach((ele) => {
    let link = `<a href="${ele.link}" target="_blank">${ele.title}</a>`;
    string += SPACE.repeat(2);
    string += link;
    string += SPACE.repeat(30 - ele.title.length);
    string += ele.description;
    projects.push(string);
    string = "";
  });

  projects.push("<br>");
  projects.push(files);
  projects.push("<br>");
  return projects;
};

export const PROJECTS = createProject();
