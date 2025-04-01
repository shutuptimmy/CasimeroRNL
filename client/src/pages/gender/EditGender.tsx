import EditGenderForm from "../../components/forms/EditGenderForm.tsx";
import MainLayout from "../layout/MainLayout";

const EditGender = () => {
    const content = (
        <>
            <div className="row">
                <div className="col-md-3">
                    <EditGenderForm />
                </div>
            </div>
        </>
    );

    return <MainLayout content={content} />;
};

export default EditGender;