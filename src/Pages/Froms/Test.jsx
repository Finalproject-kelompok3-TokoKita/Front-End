const Test = () => {

    // useEffect(() => {
    //   axios
    //     .get("http://localhost:5000/store")
    //     .then((res) => {
    //       if (res.data.message === "Succesfully") {
    //         setProduct(res.data.data);
    //       }
    //     })
    //     .then((err) => console.log(err));
    // }, []);

    // useEffect(() => {
    //   axios
    //     .get("http://localhost:5000/cities")
    //     .then((res) => {
    //       if (res.data.message === "Succesfully") {
    //         setCity(res.data.data);
    //       }
    //     })
    //     .then((err) => console.log(err));
    // }, []);

    // useEffect(() => {
    //   axios
    //     .get("http://localhost:5000/province")
    //     .then((res) => {
    //       if (res.data.message === "Succesfully") {
    //         setProvince(res.data.data);
    //       }
    //     })
    //     //.then(res => console.log(res))
    //     .then((err) => console.log(err));
    // }, []);

    const sellerRegister = (event) => {
        event.preventDefault();
        //console.log(file)
        const formData = new FormData()
        formData.append("name", name)
        formData.append("phone", phone)
        formData.append("domain", domain)
        formData.append("address", address)
        formData.append("photo", photo)
        formData.append("categoryId", categoryId)
        formData.append("cityId", cityId)
        formData.append("provinceId", provinceId)

        // for (const value of formData.values()) {
        //     console.log(value);
        // }
        axios.post('http://localhost:5000/store', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            // .then(res => {
            //     if (res.data.message === "Created") {
            //         redirect('/dashboard')
            //{ name: name, phone: phone, domain: domain, address: address, categoryId: categoryId, cityId: cityId, provinceId: provinceId }
            //     }
            // })
            .then(res => console.log(res))
            .then(err => console.log(err))
    }
    return (
        <>
        </>
    )
}

//export default Test