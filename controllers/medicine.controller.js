
import Medicine from "../models/Medicine.js";

const getAllMedicine = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.status(200).json(medicines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const saveMedicine = async (req, res) => {
  console.log(req.body);
  try {
    const {
      userId,
      medicineName,
      selectedMedicine,
      amount,
      frequency,
      doses,
      reminder,
    } = req.body;

    if (
      !userId ||
      !medicineName ||
      !selectedMedicine ||
      !amount ||
      !frequency ||
      !doses ||
      !reminder
    ) {
      return res.status(400).json({ message: "Data not provided" });
    }

    // Ensure that the amount is a positive number
    if (amount <= 0) {
      return res.status(400).json({ message: "Amount must be greater than zero" });
    }

    // Create new medicine
    const medicine = await Medicine.create({
      userId,
      medicineName,
      selectedMedicine,
      amount,
      frequency,
      doses,
      reminder,
    });

    res.json({ msg: "Medicine data saved successfully", medicine });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

const medicineController = { getAllMedicine, saveMedicine };

export default medicineController;
