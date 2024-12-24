import command from "../../config.json" assert { type: "json" };

const createExperience = (): string[] => {
  let string = "";
  const experiences: string[] = [];
  const files = `${command.experience.length} File(s)`;
  const SPACE = "&nbsp;";

  experiences.push("<br>");

  command.experience.forEach((ele) => {
    let link = `<a href="${ele.link}" target="_blank">${ele.company}</a>`;
    let date = `<span class="command">${ele.date}</span>`;
    string += SPACE.repeat(2);
    string += link;
    string += SPACE.repeat(40 - ele.company.length);
    string += ele.title;
    experiences.push(string);
    string = SPACE.repeat(2);
    string += date;
    experiences.push(string);
    string = "";
  });

  experiences.push("<br>");
  experiences.push(files);
  experiences.push("<br>");
  return experiences;
};

export const EXPERIENCES = createExperience();
