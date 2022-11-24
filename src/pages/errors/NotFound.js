const NotFound = () => {
    return (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <p style={{
                    fontSize:'70px',
                    width: '126px',
                    position:'fixed',
                    top:'40%',
                    fontWeight:'600',
                    left:'calc( 50% - 63px )',
                    letterSpacing:'5px'
                }}
                >404</p>
                <p  style={{
                    fontSize:'24px',
                    width: '114px',
                    position:'fixed',
                    top:'53%',
                    left:'calc( 50% - 57px )'
                }}
                >not found</p>
            </div>
    );
};

export default NotFound;