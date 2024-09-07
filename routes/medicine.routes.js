import medicineController from "../controllers/medicine.controller.js";

export default function medicineRoutes(app) {
  app.get(`/api/medicine`, medicineController.getAllMedicine);

  app.post(`/api/medicine`, medicineController.saveMedicine);

  app.delete(`/api/medicine/:medicineId`, medicineController.deleteMedicine);
}
