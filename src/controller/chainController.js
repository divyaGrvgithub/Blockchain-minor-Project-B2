const axios = require('axios');
const chainModel = require("./model/chainModel")

const getBlockChain = async function (req, res) {
    try {
        let option = {
            method: "get",
            url: "https://api.coincap.io/v2/assets",
            headers: {
                Authorization: "Bearer 01213021-558e-4a5d-a90f-9483f204067b"
            }
        }

        let data = await axios(option);
        let coinData = data.data;
        let checkCoinData = await coinModel.find();

        if (checkCoinData.length == 0) {

            for (let i = 0; i < coinData.data.length; i++) {
                let newObj = {
                    symbol: coinData.data[i].symbol,
                    name: coinData.data[i].name,
                    marketCapUsd: coinData.data[i].marketCapUsd,
                    priceUsd: coinData.data[i].priceUsd
                }
                await chainModel.create(newObj);
            }
            return res.status(201).send({ status: true, message: "CoinCap has created." });

        } else {

            let getCoinsData = await chainModel.find().select({ _id: 0, __v: 0 });
            for (let i = 0; i < getCoinsData.length; i++) {
                getCoinsData[i]._doc.changePercent24Hr = coinData.data[i].changePercent24Hr;
            }

            for (let i = 0; i < getCoinsData.length; i++) {
                getCoinsData.sort((a, b) => (b.changePercent24Hr) - (a.changePercent24Hr));
            }
            return res.status(200).send({ "data": getCoinsData });

        }
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message });
    }
}

module.exports.getBlockChain = getBlockChain;
