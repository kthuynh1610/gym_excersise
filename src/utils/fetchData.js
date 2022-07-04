export const exerciseOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'a6be17d245mshe73c0db851f209fp11134ejsn6b8108b81c6a',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
}



export const fetchData = async (url, options) =>{
    const respone = await fetch(url, options);
    const data = await respone.json();

    return data;
}