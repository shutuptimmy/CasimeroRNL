import { useState } from "react";
import AddGenderForm from "../../components/forms/AddGenderForm";
import AlertMessage from "../../components/AlertMessage";
import GendersTable from "../../components/tables/GendersTable";
import MainLayout from "../layout/MainLayout";

const Genders = () => {
    const [refreshGenders, setRefreshGenders] = useState(false);

    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleShowAlertMessage = (message: string, isSuccess: boolean, isVisible: boolean) => {
        setMessage(message);
        setIsSuccess(isSuccess);
        setIsVisible(isVisible);
    };

    const handleCloseAlertMessage = () => {
        setMessage('');
        setIsSuccess(false);
        setIsVisible(false);
    }

    const content = (
        <>
            <AlertMessage message={message} isVisible={isVisible} isSuccess={isSuccess} onClose={handleCloseAlertMessage} />
            <div className="row">
                <div className="col-md-4">
                    <AddGenderForm onGenderAdded={(message) => {
                        handleShowAlertMessage(message, true, true);
                        setRefreshGenders(!refreshGenders);
                    }} />
                </div>
                <div className="col-md-8">
                    <GendersTable refreshGenders={refreshGenders} />
                </div>
            </div>
        </>
    );

    return <MainLayout content={content} />;
};

export default Genders