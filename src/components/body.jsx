import PropTypes from 'prop-types';
function Banner({firstName, lastName, age}) {

    const studentNames = [
        "Ayoade Yusuf",
        "Ifeoluwa Olamide",
        "Kunle Owolabi",
        "Nelson Okpithe",
        "David Odezi",
        "Aminat Ayoade",
        "Zion Alele",
        "Gbenga Taiwo",
    ]

    return ( 
        <div className="formss">
            {studentNames.map((item, index)=>
                <li key={index}>{item}</li>
            )}

            <div className="forms">
            <h1>Your firstName - {firstName}</h1>
            <h1>Your lastName - {lastName}</h1> 
            <h1>Your age - {age}</h1>
            </div>
        </div>
     );
}


Banner.defaultProps = {
    lastName:'Olamide',
}

Banner.propTypes = {
    age: PropTypes.number
}

export default Banner;