import { useSearchParams } from 'react-router-dom';

const QueryTest = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const parma1 = searchParams.get('parma1');
    const param2 = searchParams.get('param2');

    const onToggleDetail = () => {
        setSearchParams({ parma1: parma1 === 'true' ? false : true, param2 });
    };

    const onIncreaseMode = () => {
        const nextMode = param2 === null ? 1 : parseInt(param2) + 1;
        setSearchParams({ parma1, param2: nextMode });
    };

    return (
        <div>
            <h1>리액트 쿼리스트링 테스트</h1>
            <p>parma1: {parma1}</p>
            <p>param2: {param2}</p>
            <button onClick={onToggleDetail}>Toggle parma1</button>
            <button onClick={onIncreaseMode}>param2 + 1</button>
        </div>
    );
};

export default QueryTest;