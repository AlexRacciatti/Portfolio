import './Home.css';
import img from '../../img/Foto_Alex.png'

import Header from './Header/Header';

function Home(){
    return(
        <div>
            <Header />
            <main>
                <section className='top-main'>
                    <div className='main-image-container'>
                        <img src={img} alt='Alex Racciatti photo' className='main-profile-photo'></img>
                    </div>
                    <div className='main-data-container'>
                        <h1 className='main-heading'>Welcome to Alex Racciatti's Portfolio</h1>
                        <h3 className='main-subtitle'>Here you will find: </h3>
                        <ul className='main-list'>
                            <li className='main-list-items'>more information about me</li>
                            <li>the projects i'm currently working in</li>
                            <li>the skills i have as developer</li>
                            <li>several ways to get in touch with me</li>
                        </ul>
                    </div>
                    
                </section>
            </main>
        </div>
        
    )
};

export default Home