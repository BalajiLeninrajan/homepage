import command from "../config.json" assert { type: "json" };
import { HELP } from "./commands/help";
import { BANNER } from "./commands/banner";
import { ABOUT } from "./commands/about";
import { DEFAULT } from "./commands/default";
import { PROJECTS } from "./commands/projects";
import { EXPERIENCES } from "./commands/experience";
import { createResume } from "./commands/resume";
import { createEmail } from "./commands/email";
import { createGithub } from "./commands/github";
import { createLinkedin } from "./commands/linkedin";

//mutWriteLines gets deleted and reassigned
let mutWriteLines = document.getElementById("write-lines");
let historyIdx = 0;
let tempInput = "";
let userInput: string;

//WRITELINESCOPY is used to during the "clear" command
const WRITELINESCOPY = mutWriteLines;
const TERMINAL = document.getElementById("terminal");
const USERINPUT = document.getElementById("user-input") as HTMLInputElement;
const PRE_HOST = document.querySelectorAll("#pre-host");
const PRE_USER = document.querySelectorAll("#pre-user");
const PROMPT = document.getElementById("prompt");
const COMMANDS = [
  "help",
  "about",
  "projects",
  "banner",
  "clear",
  "experiences",
  "resume",
  "email",
  "linkedin",
  "github",
];
const HISTORY: string[] = [];

const scrollToBottom = () => {
  const MAIN = document.getElementById("main");
  if (!MAIN) return;

  MAIN.scrollTop = MAIN.scrollHeight;
};

function userInputHandler(e: KeyboardEvent) {
  const key = e.key;

  switch (key) {
    case "Enter":
      e.preventDefault();
      enterKey();
      scrollToBottom();
      break;
    case "Escape":
      USERINPUT.value = "";
      break;
    case "ArrowUp":
      arrowKeys(key);
      e.preventDefault();
      break;
    case "ArrowDown":
      arrowKeys(key);
      break;
    case "Tab":
      tabKey();
      e.preventDefault();
      break;
  }
}

function enterKey() {
  if (!mutWriteLines || !PROMPT) return;
  const resetInput = "";
  let newUserInput;
  userInput = USERINPUT.value;

  newUserInput = `<span class='output'>${userInput}</span>`;

  HISTORY.push(userInput);
  historyIdx = HISTORY.length;

  //if clear then early return
  if (userInput === "clear") {
    commandHandler(userInput.toLowerCase().trim());
    USERINPUT.value = resetInput;
    userInput = resetInput;
    return;
  }

  const div = document.createElement("div");
  div.innerHTML = `<span id="prompt">${PROMPT.innerHTML}</span> ${newUserInput}`;

  if (mutWriteLines.parentNode) {
    mutWriteLines.parentNode.insertBefore(div, mutWriteLines);
  }

  /*
  if input is empty or a collection of spaces,
  just insert a prompt before #write-lines
  */
  if (userInput.trim().length !== 0) {
    commandHandler(userInput.toLowerCase().trim());
  }

  USERINPUT.value = resetInput;
  userInput = resetInput;
}

function tabKey() {
  let currInput = USERINPUT.value;

  for (const ele of COMMANDS) {
    if (ele.startsWith(currInput)) {
      USERINPUT.value = ele;
      return;
    }
  }
}

function arrowKeys(e: string) {
  switch (e) {
    case "ArrowDown":
      if (historyIdx !== HISTORY.length) {
        historyIdx += 1;
        USERINPUT.value = HISTORY[historyIdx];
        if (historyIdx === HISTORY.length) USERINPUT.value = tempInput;
      }
      break;
    case "ArrowUp":
      if (historyIdx === HISTORY.length) tempInput = USERINPUT.value;
      if (historyIdx !== 0) {
        historyIdx -= 1;
        USERINPUT.value = HISTORY[historyIdx];
      }
      break;
  }
}

function commandHandler(input: string) {
  switch (input) {
    case "clear":
      setTimeout(() => {
        if (!TERMINAL || !WRITELINESCOPY) return;
        TERMINAL.innerHTML = "";
        TERMINAL.appendChild(WRITELINESCOPY);
        mutWriteLines = WRITELINESCOPY;
      });
      break;
    case "banner":
      writeLines(BANNER);
      break;
    case "help":
      writeLines(HELP);
      break;
    case "about":
      writeLines(ABOUT);
      break;
    case "projects":
      writeLines(PROJECTS);
      break;
    case "experiences":
      writeLines(EXPERIENCES);
      break;
    case "resume":
      createResume();
      writeLines(["<br>", "&nbsp;&nbsp;Downloading Resume ...", "<br>"]);
      break;
    case "email":
      createEmail();
      writeLines(["<br>", "&nbsp;&nbsp;Sending Email ...", "<br>"]);
      break;
    case "linkedin":
      createLinkedin();
      writeLines(["<br>", "&nbsp;&nbsp;Redirecting to Linkedin ...", "<br>"]);
      break;
    case "github":
      createGithub();
      writeLines(["<br>", "&nbsp;&nbsp;Opening GitHub ...", "<br>"]);
      break;
    default:
      writeLines(DEFAULT);
      break;
  }
}

function writeLines(message: string[]) {
  message.forEach((item, idx) => {
    displayText(item, idx);
  });
}

function displayText(item: string, idx: number) {
  setTimeout(() => {
    if (!mutWriteLines) return;
    const p = document.createElement("p");
    p.innerHTML = item;
    mutWriteLines.parentNode!.insertBefore(p, mutWriteLines);
    scrollToBottom();
  }, 40 * idx);
}

const initEventListeners = () => {
  PRE_HOST.forEach((el) => {
    el.textContent = command.hostname;
  });

  PRE_USER.forEach((el) => {
    el.textContent = command.username;
  });

  window.addEventListener("load", () => {
    // Simulate running the banner command on load
    const div = document.createElement("div");
    div.innerHTML = `<span id="prompt">${PROMPT?.innerHTML}</span> <span class='output'>banner</span>`;
    if (mutWriteLines?.parentNode) {
      mutWriteLines.parentNode.insertBefore(div, mutWriteLines);
    }
    writeLines(BANNER);
  });

  USERINPUT.addEventListener("keypress", userInputHandler);
  USERINPUT.addEventListener("keydown", userInputHandler);

  window.addEventListener("click", () => {
    USERINPUT.focus();
  });
};

initEventListeners();
