const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  verified: { type: Boolean, default: false },
  investmentPlan: { type: String, default: "bronze" },
  fullname: { type: String },
  username: { type: String },
  password: { type: String },
  mobile: { type: String },
  btc: { type: String },
  wallet: { type: String },
  email: { type: String },
  country: { type: String },
  nkName: { type: String },
  nkMobile: { type: String },
  account: {
    balance: { type: Number, default: 0 },
    withdrawal: { type: Number, default: 0 },
    deposit: { type: Number, default: 0 },
    earnings: { type: Number, default: 0 },
  },
  transactions: {
    deposit: [
      {
        referrenceCode: { type: String },
        transactionType: { type: String, default: "deposit" },
        amount: { type: Number },
        modeOfPayment: { type: String },
        status: { type: String, default: "pending" },
        dateOfTrans: { type: String, default: new Date().toLocaleDateString() },
      },
    ],
    withdrawal: [
      {
        referrenceCode: { type: String },
        transactionType: { type: String, default: "withdrawal" },
        amount: { type: Number },
        modeOfPayment: { type: String },
        status: { type: String, default: "pending" },
        dateOfTrans: { type: String, default: new Date().toLocaleDateString() },
      },
    ],
    earnings: [{ type: String, default: "No transactions yet" }],
    allTransactions: [
      {
        referrenceCode: { type: String },
        transactionType: { type: String },
        amount: { type: Number },
        modeOfPayment: { type: String },
        status: { type: String, default: "pending" },
        dateOfTrans: { type: String, default: new Date().toLocaleDateString() },
      },
    ],
  },
  referredBy: { type: String },
  referral: [{ client: { type: String } }],
});

module.exports = mongoose.model("User", userSchema);
