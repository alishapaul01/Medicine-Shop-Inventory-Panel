import { Fragment} from "react";
import MedicineForm from "./MedicineForm";
import MedicineList from "./MedicineList";

const Medicines = () => {
    return (
        <Fragment>
            <MedicineForm />
            <MedicineList />
           
        </Fragment>
    )
}

export default Medicines;