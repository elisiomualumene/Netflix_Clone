const API_KEY = '1a5284edbc534e76c96d6d8fcc68acf7';
const API_BASE = 'https://api.themoviedb.org/3';


/*
-originais
-recomendados (trending)
-em alta (top rated)
- açao
-marvel
-comedia
-terror
-romance
-documentario
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {
    getHomeList:  async () => {
        return[
            {
                slug: 'originais',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?api_key=${API_KEY}&language=pt-BR&with_networks=213`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Voce',
                items: await basicFetch(`/trending/all/day?api_key=${API_KEY}&language=pt-BR`)
            },
    
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=1`)
            },
            {
                slug: 'action',
                title: 'Açao',
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=action`)
            },
            {
                slug: 'marvel',
                title: 'Marvel',
                items: await basicFetch(`/discover/tv?api_key=${API_KEY}&language=pt-BR&with_networks=marvel`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=comedy`)
            },
            {
                slug: 'horror',
                title: 'Terror',
               items: await basicFetch(`/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=horror`)
            },
            {
                slug: 'Romance',
                title: 'Romance',
               items: await basicFetch(`/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=romance`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
               items: await basicFetch(`/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=documentary`)
            },
        ];
    }  
    

}