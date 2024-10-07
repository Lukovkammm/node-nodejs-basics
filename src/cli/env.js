import process from 'node:process';

const parseEnv = () => {
    const variables = process.env;
    const trasfromedItems = Object.entries(variables)
        .filter(([key]) => key.startsWith("RSS_"))
        .map(([key, value]) => `${key}=${value}`)
        .join("; ");
    console.log(trasfromedItems);
};

parseEnv();