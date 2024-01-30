import axios from "axios";


export const provinceList = async () => {
    const provinceData = await axios.get(`http://localhost:5000/province`);
    return provinceData.data.data;
}

export const cityList = async (parameters) => {
    const cityData = await axios.get(`http://localhost:5000/city/${parameters}`);
    //const cityData = await axios.get("http://localhost:5000/city/"+ parameters);
    return cityData.data.data;
}

export const storeList = async (parameterscontent) => {
    const storeData = await axios.get(`http://localhost:5000/getbycity/${parameterscontent}`);
    return storeData.data.data;
}

// export const storeList = async (parameterscontent, category) => {
//     const storeData = await axios.get(`http://localhost:5000/getbycity/${parameterscontent}/${category}`);
//     return storeData.data.data;
// }