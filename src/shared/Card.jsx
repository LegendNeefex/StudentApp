function Card({children, reverse}) {
    return ( 
        <div className={`myCard ${reverse? 'changemode': null}`}>
            {children}
        </div>
    );
}

export default Card