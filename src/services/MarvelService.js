class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=2a56ad855c0da865d7186fe8b478fa3d'

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error("error")
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }

    getCharacter = (id) => {
        return this.getResource(`$${this._apiBase}{id}?${this._apiKey}`);
    }
}

export default MarvelService