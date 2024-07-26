import mongoose from "mongoose";

const MedicineSchema = new mongoose.Schema({
    userId:{
        type: String,
        unique:true,
        required: true
    },
    medicineName: {
        type: String,
        required: true
    },
    selectedMedicine: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    frequency:{
        type: String,
        required: true
    },
    times: {
        type: String,
        required: true
    },
    selectedTab:{
        type: Boolean,
        required: true
    },
    reminder:{
        type: String,
        required: true
    }
});

const Medicine = mongoose.model('Medicine', MedicineSchema);

export default Medicine;




