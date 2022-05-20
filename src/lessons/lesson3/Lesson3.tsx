import React , {useState} from 'react';
import API from './API';
import './lesson_3';
import {Simulate} from "react-dom/test-utils";

const Lesson3 = () => {
    const [searchName , setSearchName] = useState('');
    const [searchResult , setSearchResult] = useState('');
    const [searchNameByType , setSearchNameByType] = useState('');
    const [searchResultByType , setSearchResultByType] = useState('');

    // const searchFilm = () => {
    //     API.searchFilmsByTitle(searchName)
    //         .then(({data})=>{
    //             console.log('data',data)
    //             const {Search,Error,Response} = data
    //             Response ==='True' ? setSearchResult(JSON.stringify(Search)) : setSearchResult(Error)
    //         })
    //         .catch(err=>{
    //             console.log(err)
    //         })
    // };
    const searchFilm = async () => {
        try {
            const {data} = await API.searchFilmsByTitle(searchName)
           // const {Search,Error,Response} = data
            data.Response ==='True' ? setSearchResult(JSON.stringify(data.Search)) : setSearchResult(data.Error)
        }
        catch (e) {
            console.log('err',e)
        }
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType , type)
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {searchResult}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {searchResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;


// Promise.resolve(10)
//     .then(console.log)
//     .catch(console.log)
//     .finally(() => {
//         console.log('finally')
//     })