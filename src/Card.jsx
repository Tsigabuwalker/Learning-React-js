import image from './assets/profile.png'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={image} alt="Profile Picture" />
            <h2 className="card-title">Walker_Sn</h2>
            <p className="card-text">Mern-Stack Developer</p>

        </div>
    )

}
export default Card;
