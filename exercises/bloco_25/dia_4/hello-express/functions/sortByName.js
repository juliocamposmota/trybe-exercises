const sortByName = (array) => {
  return array.sort((a , b) => (
    (a.name > b.name) 
    ? 1 
    : (b.name > a.name) 
    ? -1 
    : 0
    )
  );
};

module.exports = sortByName;
