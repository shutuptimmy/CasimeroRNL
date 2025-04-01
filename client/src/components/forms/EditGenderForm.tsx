import { Link } from "react-router-dom";

function EditGenderForm() {
    return (
        <>
            <div className="form-group">
                <div className="mb-3">
                    <label htmlFor="gender">Gender</label>
                    <input type="text" className="form-control" id="gender" name="gender" />
                </div>

                <div className="d-flex justify-content-end">
                    <Link to={"/"} className="btn btn-secondary me-1">
                        BACK
                    </Link>

                    <button type="submit" className="btn btn-primary">
                        SAVE
                    </button>
                </div>

            </div>
        </>
    );
}

export default EditGenderForm;