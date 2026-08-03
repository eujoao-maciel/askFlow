const API_URL = process.env.EXPO_PUBLIC_API_URL;

type askQuestionType = {
  question: string;
  professionalType?: string;
  responseStyle?: string;
};

export const askQuestion = async ({
  question,
  professionalType,
  responseStyle,
}: askQuestionType) => {
  const response = await fetch(`${API_URL}/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, professionalType, responseStyle }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.message ?? `Erro na API: ${response.status}`);
  }

  return response.json() as Promise<{ answer: string }>;
};
