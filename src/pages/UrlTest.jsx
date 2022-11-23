import { useParams } from 'react-router-dom';

const data = {
    1: {
        field1: '데이터1 - 필드1',
        field2: '데이터1 - 필드2',
    },
    2: {
        field1: '데이터2 - 필드1',
        field2: '데이터2 - 필드2',
    },
};

const UrlTest = () => {
    const params = useParams();
    const jsonStr = data[params.param];

    return (
        <div>
            <h1>라우터 Url 파라미터 테스트</h1>
            {jsonStr ? (
                <div>
                    <h2>{jsonStr.field1}</h2>
                    <p>{jsonStr.field2}</p>
                </div>
            ) : (
                <p>존재하지 않는 idx 입니다 (1~2).</p>
            )}
        </div>
    );
};

export default UrlTest;