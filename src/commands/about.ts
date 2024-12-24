import command from "../../config.json" assert { type: "json" };

const createAbout = (): string[] => {
  const about: string[] = [];

  const SPACE = "&nbsp;";

  const EMAIL = "Email";
  const GITHUB = "Github";
  const LINKEDIN = "Linkedin";
  const RESUME = "Resume";

  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
  const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
  const resume = `<i class='fa-solid fa-file'></i> ${RESUME}`;
  const image = `<img src='https://raw.githubusercontent.com/BalajiLeninrajan/homepage/cf668bf57f3a50c6bf3b9e9fb899652bea6af6bc/res/logo.png' width="100px">`;
  let string = "";

  about.push("<br>");
  about.push(image);
  about.push("Hello World! I'm Balaji");
  about.push(
    'Software Engineering Student @ <a href="www.uwaterloo.ca">University of Waterloo</a>',
  );
  about.push(
    'Incoming Software Engineering Intern @ <a href="www.shopify.com">Shopify</a>',
  );
  about.push("<br>");
  string += SPACE.repeat(2);
  string += email;
  string += SPACE.repeat(17 - EMAIL.length);
  string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`;
  about.push(string);

  string = "";
  string += SPACE.repeat(2);
  string += github;
  string += SPACE.repeat(17 - GITHUB.length);
  string += `<a target='_blank' href='https://github.com/${command.social.github}'>github/${command.social.github}</a>`;
  about.push(string);

  string = "";
  string += SPACE.repeat(2);
  string += linkedin;
  string += SPACE.repeat(17 - LINKEDIN.length);
  string += `<a target='_blank' href='https://www.linkedin.com/in/${command.social.linkedin}'>linkedin/${command.social.linkedin}</a>`;
  about.push(string);

  string = "";
  string += SPACE.repeat(2);
  string += resume;
  string += SPACE.repeat(17 - RESUME.length);
  string += `<a target='_blank' href='https://raw.githubusercontent.com/BalajiLeninrajan/homepage/cf668bf57f3a50c6bf3b9e9fb899652bea6af6bc/res/resume.pdf'>download</a>`;
  about.push(string);

  about.push("<br>");
  return about;
};

export const ABOUT = createAbout();
