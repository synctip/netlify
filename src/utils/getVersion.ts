
const getAppVersion = () => {
    return fetch(`https://api.github.com/repos/dudubarwine/tipsync/releases/latest`)
        .then(response => response.json())
        .then(data => {
            return data.name as string;
        })
        .catch(error => {
            throw new Error(`Failed to get app version: ${error}`);
        })
};

export default getAppVersion;