import './Home.css';
import img from '../../img/Foto_Alex.png'
import { HomeElementContent } from './HomeElement/HomeElementContent';

import Header from './Header/Header';
import HomeElement from './HomeElement/HomeElement';

function Home(children){
    return(
        <div>
            <Header />
            <main>
                <section className='top-main'>
                    <div className='main-image-container'>
                        <img src={img} alt='Alex Racciatti' className='main-profile-photo'></img>
                    </div>
                    <div className='main-data-container'>
                        <h1 className='main-heading'>Welcome to Alex Racciatti's Portfolio</h1>
                        <h3 className='main-subtitle'>Here you will find: </h3>
                        <ul className='main-list'>
                            <li className='main-list-items'>more information about me</li>
                            <li className='main-list-items'>the projects i'm currently working in</li>
                            <li className='main-list-items'>the skills i have as developer</li>
                            <li className='main-list-items'>several ways to get in touch with me</li>
                        </ul>
                    </div>
                </section>
                <section className='bottom-main'>
                    {HomeElementContent.map((element, index)=>{
                        return(
                            <HomeElement key={index} title={element.title} content1={element.content1} content2={element.content2} btnContent={element.btnContent} link={element.link}/>
                        )
                    })}
                </section>
            </main>
        </div>
        
    )
};

export default Home