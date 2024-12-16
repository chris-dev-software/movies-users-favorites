import { input, number } from "@inquirer/prompts";

export const inputText = async (
  message: string,
  options: { required?: boolean } = {}
) => {
  const { required = true } = options;

  const response = await input({
    message,
    required,
  });
  return response;
};

export const inputNumber = async (
  message: string,
  options: { required?: boolean } = {}
) => {
  const { required = true } = options;

  const response = await number({
    message,
    required,
  });

  return Number(response);
};
