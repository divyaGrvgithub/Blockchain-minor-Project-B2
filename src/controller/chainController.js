const axios = require('axios');
const chainModel = require("./model/chainModel")

const getBlockChain = async (req, res) => {
    try {
        let option = {
            method: "get",
            url: "https://docs.coincap.io/v2/assets",
            headers: {
                Authorization: "Bearer  5a3c9f61-7b40-4b2c-812c-e3dd9828c119",
            }
        };
        let result = await axios(option);
        console.log(result);
        let data = result.data.data;
        const sortvalue = data.sort((a, b) => { return a.changePercent24Hr - b.changePercent24Hr })
        await chainModel.deleteMany()
        const savedData = await chainModel.insertMany(sortvalue)
        res.status(201).send({ status: true, message: sortvalue });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}

module.exports.getBlockChain = getBlockChain;