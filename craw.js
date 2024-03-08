import {dataRaw} from './data.js'
const kanji = [...new Set(dataRaw.match(new RegExp('(?<=Learn JLPT N. Kanji: ).', 'gi')))]
const romanji = [...new Set(dataRaw.match(new RegExp('(?<=Learn JLPT N. Kanji: . .).+?(?=\\))', 'gi')))]
const meaning = [...new Set(dataRaw.match(new RegExp('(?<=Learn JLPT N. Kanji: . \\(.+?\\) ).+?(?=")', 'gi')))].map(e=>e.replace(/Meaning: /gi, ''))
let data=Array(100).fill("0").map((_, i)=>{
    return {
        kanji:kanji[i],
        romanji:romanji[i],
        meaning:meaning[i]
    }
})

// {
//     kanji:"",
//     romanji:"",
//     meaning:""
// }

console.log("export const data=["+JSON.stringify(data)+"]")
