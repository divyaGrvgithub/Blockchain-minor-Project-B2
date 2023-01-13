const mongoose = require("mongoose")
const schema = new mongoose.Schema(
    {
        symbol: {
          type: String,
          unique: true
        },
        name: {
          type: String,
          unique: true
        },
        marketCapUsd: {
          type: String,
          unique: true
        },
        priceUsd: {
          type: String,
          unique: true
        },
      },
      { timestamps: true }
    );  
    module.exports = new mongoose.model("BlockChain", chainModel);