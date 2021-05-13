const divisionArray = [2, 3, 5, 10];

const division = (number, array) => array.map((element) => number / element);

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const randomNumbers = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );

    const squared = randomNumbers.map((number) => Math.pow(number, 2));
    const sum = squared.reduce((acc, curr) => acc + curr);

    if (sum >= 8000) {
      return reject(sum);
    }

    resolve(sum);
  })
  .then((sum) => console.log(division(sum, divisionArray)))
  .catch((sum) => console.log(`Promise rejeitada. Soma: ${sum}`));
}

fetchPromise();
