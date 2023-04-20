// import axios from "axios";
const API = "https://owen.ru/upl_files/modules/price_getter/get.php?codes=59473;82343;109856;108722;31330;30725";
export const getData = async () => {
    let response = await fetch(API);
    if (response.ok) {
        let json = await response.json();
        return json;
    }   else {
        console.log("Ошибка HTTP: " + response.status);
        return [];
    }
};






// export const getData = async () => {
//     try {
//         const {data} = await axios.get(API);
//         return data;
//     } catch (error) {
//         console.log("error!", error);
//         return[];
//     }
// };

// try {
//     const data = await axios.get(API)
//     console.log("data",data);
// } catch(error) {
//     return[]
// }