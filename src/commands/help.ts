const helpObj = {
  commands: [
    ["'help'", "Display this help menu."],
    ["'about'", "Learn about me."],
    ["'experiences'", "Serious professional stuff."],
    ["'projects'", "Unprofessional serious stuff."],
    ["'resume'", "Download my resume."],
    ["'email'", "Send me an Email."],
    ["'linkedin'", "Connect on LinkedIn."],
    ["'github'", "Visit my GitHub."],
    ["'banner'", "Display the banner."],
    ["'clear'", "Clear the terminal."],
  ],
};

const createHelp = (): string[] => {
  const help: string[] = [];
  help.push("<br>");

  helpObj.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += SPACE.repeat(2);
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    string += SPACE.repeat(17 - ele[0].length);
    string += ele[1];
    help.push(string);
  });

  help.push("<br>");
  help.push("Press <span class='keys'>[Tab]</span> for auto completion.");
  help.push("Press <span class='keys'>[Esc]</span> to clear the input line.");
  help.push(
    "Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands.",
  );
  help.push("<br>");
  return help;
};

export const HELP = createHelp();
