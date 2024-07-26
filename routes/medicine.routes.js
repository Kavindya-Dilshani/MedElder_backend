import medicineController from '../controllers/medicine.controller.js';

export default function authMedicine(app) {
   
    app.get(
        `/api/medicine`,
        medicineController.getAllMedicine
    );

    
    app.post(
        `/api/medicine`,
        medicineController.saveMedicine
    );


  
}

