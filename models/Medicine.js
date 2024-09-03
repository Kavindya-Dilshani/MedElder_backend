import mongoose from "mongoose";

const MedicineSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  medicineName: {
    type: String,
    required: true,
  },
  selectedMedicine: {
    type: String,
    enum: ["Capsule", "Tablets", "Injection", "Syrup"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  frequency: {
    type: String,
    required: true,
  },
  doses: [
    {
      time: {
        type: String,
        required: true,
      },
      mealTiming: {
        type: Boolean,
        default: false, 
      },
    },
  ],
  reminder: {
    type: String,
    required: true,
  },
});

const Medicine = mongoose.model("Medicine", MedicineSchema);

export default Medicine;
