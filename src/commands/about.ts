import command from "../../config.json" assert { type: "json" };

const createAbout = (): string[] => {
  const about: string[] = [];

  const SPACE = "&nbsp;";

  const EMAIL = "'email'";
  const GITHUB = "'github'";
  const LINKEDIN = "'linkedin'";
  const RESUME = "'resume'";

  const email = `<i class='fa-solid fa-envelope'></i> <span class="command">${EMAIL}<span class="command">`;
  const github = `<i class='fa-brands fa-github'></i> <span class="command">${GITHUB}<span class="command">`;
  const linkedin = `<i class='fa-brands fa-linkedin'></i> <span class="command">${LINKEDIN}<span class="command">`;
  const resume = `<i class='fa-solid fa-file'></i> <span class="command">${RESUME}<span class="command">`;
  const image = `<img src='https://raw.githubusercontent.com/BalajiLeninrajan/homepage/cf668bf57f3a50c6bf3b9e9fb899652bea6af6bc/res/logo.png' width="100px">`;
  let string = "";

  about.push("<br>");
  about.push(image);
  about.push("Hello World! I'm Balaji");
  about.push(
    'Software Engineering Student @ <a href="www.uwaterloo.ca">University of Waterloo</a>',
  );
  about.push(
    'Ex Production Engineering Intern @ <a href="www.shopify.com">Shopify</a>',
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
  string += `<a target='_blank' href='https://github.com/${command.social.github}'>${command.social.github}</a>`;
  about.push(string);

  string = "";
  string += SPACE.repeat(2);
  string += linkedin;
  string += SPACE.repeat(17 - LINKEDIN.length);
  string += `<a target='_blank' href='https://www.linkedin.com/in/${command.social.linkedin}'>${command.social.linkedin}</a>`;
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
