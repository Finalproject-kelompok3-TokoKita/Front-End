import axios from "axios";


export const provinceList = async () => {
    const provinceData = await axios.get(`http://localhost:5000/province`);
    return provinceData;
}

export const cityList = async (parameters) => {
    const cityData = await axios.get(`http://localhost:5000/city/${parameters}`);
    return cityData.data;
}

export const storeList = async (parameterscontent) => {
    const storeData = await axios.get(`http://localhost:5000/store/${parameterscontent}`);
    return storeData.data;
}