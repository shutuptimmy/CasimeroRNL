import { useState } from "react";
import DeleteGenderForm from "../../components/forms/DeleteGenderForm.tsx";
import MainLayout from "../layout/MainLayout";
import AlertMessage from "../../components/AlertMessage.tsx";

const DeleteGender = () => {
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleShowAlertMessage = (
        message: string,
        isSuccess: boolean,
        isVisible: boolean
    ) => {
        setMessage(message);
        setIsSuccess(isSuccess);
        setIsVisible(isVisible);
    };

    const handleCloseAlertMessage = () => {
        setMessage("");
        setIsSuccess(false);
        setIsVisible(false);
    };


    const content = (
        <>
            <AlertMessage message={message} isSuccess={isSuccess} isVisible={isVisible} onClose={handleCloseAlertMessage} />
            <div className="row">
                <div className="col-md-3">
                    <DeleteGenderForm onDeleteGender={(message) => handleShowAlertMessage(message, true, true)} />
                </div>
            </div>
        </>
    );

    return <MainLayout content={content} />;
};

export default DeleteGender;