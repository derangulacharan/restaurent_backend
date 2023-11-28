const mongoose = require("mongoose");

const bcrypt = require('bcrypt');

// ... (other imports and schema definition)


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
      },      
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mailingAddress: {
        type: String,
        default: "None entered"
    },
    billingAddress: {
        type: String,
        default: "None entered"
    },
    preferDiner: {
        type: Number,
        default: 2
    },
    earnedPoints: {
        type: Number,
        default: 0
    },
    preferPayment: {
        type: String,
        enum: ['CREDIT', 'CASH', 'CHECK'],
        default: 'CREDIT',
      },
      
    creditCard: {
        cardNumber: {
            type: String,
            default: "0000 0000 0000 0000"
        },
        expDate: {
            type: String,
            default: "0000"
        },
        cvv: {
            type: String,
            default: "000"
        }                 
    }

});

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
  
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
      next();
    } catch (error) {
      return next(error);
    }
  });
  

module.exports = mongoose.model('User', userSchema);

