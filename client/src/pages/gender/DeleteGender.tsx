import DeleteGenderForm from "../../components/forms/DeleteGenderForm.tsx";
import MainLayout from "../layout/MainLayout";

const DeleteGender = () => {
    const content = (
        <>
            <div className="row">
                <div className="col-md-3">
                    <DeleteGenderForm />
                </div>
            </div>
        </>
    );

    return <MainLayout content={content} />;
};

export default DeleteGender;