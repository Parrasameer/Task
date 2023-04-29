const baseUrl = "https://disease.sh/v3/covid-19";

export const fetchWorldData = async () => {
    const response = await fetch(`${baseUrl}/all`);
    return response.json();
};

export const fetchCountriesData = async () => {
    const response = await fetch(`${baseUrl}/countries`);
    return response.json();
};

export const fetchGraphData = async () => {
    const response = await fetch(`${baseUrl}/historical/all?lastdays=all`);
    return response.json();
};
