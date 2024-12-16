import { select } from "@inquirer/prompts";
import { directorController } from "./controllers/directors";

const main = async () => {
  while (true) {
    const option = await select({
      message: "Select a Module",
      choices: [
        { name: "Director Module", value: 1 },
        { name: "Exit", value: 100 },
      ],
    });

    if (option === 1) {
      await directorController();
    }

    if (option === 100) {
      break;
    }
  }
};

main();
