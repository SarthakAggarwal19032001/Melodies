import axois from 'axios';

export async function getSongs(termName){
    const URL=`https://itunes.apple.com/search?term=${termName}&limit=5&country=in`;
    const response= await axois.get(URL);
    // console.log(response.data['results']);
    return response.data['results'];
}