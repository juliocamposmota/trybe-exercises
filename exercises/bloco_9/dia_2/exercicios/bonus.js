const divisionArray = [2, 3, 5, 10];

const generateAndSumRandomNumbers = () => {
  const randomNumbers = Array.from(
    { length: 10 },
    () =>  Math.floor(Math.random() * 50) + 1
  );

  const sum = randomNumbers.map((number) => Math.pow(number, 2)).reduce((acc, curr) => acc + curr);

  if (sum >= 8000) {
    throw new Error();
  }

  return sum;
}

const fetchPromise = async () => {
  try {
    const sum = await generateAndSumRandomNumbers();
    console.log(`O ki dele é de apenas ${Math.floor(sum)}! HAHAHA Não passa de um inseto!`);
  } catch (error) {
    console.log(`Como isso é possível? Este aparelho deve estar quebrado, o ki dele é mais de OITO MIL!`);
  }
}

fetchPromise();
