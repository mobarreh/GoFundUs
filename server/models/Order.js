const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    charities: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Charity'
        }
    ]
    });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
