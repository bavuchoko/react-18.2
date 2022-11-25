import { useParams } from 'react-router-dom';

const ContentView = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>게시글 {id}</h2>
            awdawd
        </div>
    );
};

export default ContentView;