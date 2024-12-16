import { select } from "@inquirer/prompts";
import { createDirector, getDirectors } from "../services/directors";
import { formatDirectors } from "../utils/format";
import { inputNumber, inputText } from "../utils/inputs";

export const directorController = async () => {
  while (true) {
    const option = await select({
      message: "Select an option: ",
      choices: [
        { name: "List of directors", value: 1 },
        { name: "Create a director", value: 2 },
        { name: "Delete a director", value: 3 },
        { name: "Back to main menu", value: 100 },
      ],
    });

    if (option === 1) {
      const directors = await getDirectors();
      const formattedDirectors = formatDirectors(directors);
      console.table(formattedDirectors);
    }

    if (option === 2) {
      const name = await inputText("Enter name: ");
      const lastname = await inputText("Enter lastname: ", { required: false });
      const age = await inputNumber("Enter age: ");
      await createDirector({ name, lastname, age });
    }

    if (option === 3) {
      const id = await inputNumber("Entre the director id: ");
    }

    if (option === 100) {
      break;
    }
  }
};
