import headshot from '../assets/headshot.jpg' 
import '../App.css'

export default function Info(){
    return(
        <section className="header">
        <img className="info--headshot" src={headshot}></img>
        <h1 className="info--name">Max Rivera</h1>
        <h2 className="info--job">Software Developer</h2>
        <h3 className="info--website">Max-Rivera.com</h3>
        <div className="info--buttons">
        <button className="info--email"><i class="fa-solid fa-envelope"></i> Email</button>
        <button className="info--linkedIn"><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
        </div>
        </section>
    )
}