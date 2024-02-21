import axios from 'axios';

const searchImages = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID QyjlswaIT7HlA6aaAmLn7Df5Dofws6TrlryuNakkORI'
        },
        params: {
            query: term,
        }
        });
    console.log(response);
    return response.data.results;
};

export default searchImages;