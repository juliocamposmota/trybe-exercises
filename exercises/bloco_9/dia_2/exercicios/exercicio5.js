const divisionArray = [2, 3, 5, 10];

const division = (number, array) => array.map((element) => number / element);

const fetchPromise = () => {
  new Promise((resolve, reject) => {
    const randomNumbers = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );

    const sum = randomNumbers.map((number) => Math.pow(number, 2)).reduce((acc, curr) => acc + curr);

    (sum >= 8000) ? reject(sum) : resolve(sum);
  })
  .then((sum) => division(sum, divisionArray))
  .then((array) => array.reduce((acc, curr) => acc + curr))
  .then((arraySum) => console.log(`O ki dele é de apenas ${Math.floor(arraySum)}! HAHAHA Não passa de um inseto!`))
  .catch((sum) => console.log(`Soma: ${Math.floor(sum)}!! Como isso é possível? Essa promise deve estar quebrada, é mais de OITO MIL!`));
}

fetchPromise();
