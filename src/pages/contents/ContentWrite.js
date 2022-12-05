import { useParams } from 'react-router-dom';
import ToastEditor from "../../component/editor/ToastEditor";
import Header from "../../component/layout/Header";

const ContentWrite = () => {
    const { id } = useParams();
    return (

        // <div className="custom-editor-container">
        <div >
            <ToastEditor/>
        </div>

    );
};

export default ContentWrite;