import process from 'node:process';

const parseArgs = () => {
  const argv = process.argv;
  const filteredData = argv.slice(2);
  const str = filteredData.reduce((acc, item, index, arr) => {
    acc = index % 2 === 0 ? `${acc}${item} is ` : `${acc}${item}${index === arr.length - 1 ? '' : ', ' }`; 
    return acc;
  }, "");

  console.log(str);
};

parseArgs();
