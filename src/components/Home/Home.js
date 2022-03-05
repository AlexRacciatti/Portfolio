/* IMPORTS DE ARCHIVOS PROPIOS */
import './Home.css';
import img from '../../img/Foto_Alex.png'
import { HomeElementContent } from './HomeElement/HomeElementContent';

/* IMPORTS VARIOS */
import { Link } from 'react-router-dom';

/* IMPORTS DE COMPONENTES PROPIOS */
import Header from './Header/Header';
import HomeElement from './HomeElement/HomeElement';

/* IMPORTS DE COMPONENTES DE MUI */
import { Button } from '@mui/material';

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
                        <h1 className='main-heading'>WELCOME TO ALEX RACCIATTI 'S PORTFOLIO</h1>
                        <div className='main-list-container'>
                            <h2 className='main-subtitle'>Here you will find: </h2>
                            <ul className='main-list'>
                                <li className='main-list-items'><span>💼</span>  The projects i'm currently working in</li>
                                <li className='main-list-items'><span>🎯</span>  The skills i have as developer</li>
                                <li className='main-list-items'><span>📱</span>  Several ways to get in touch with me</li>
                                <li className='main-list-items'><span>🙋‍♂️</span>  More information about me</li>
                            </ul>
                        </div>
                        <div>
                        <Link to={'/aboutme'} className='abtme-main-btn'>
                            <Button variant='contained' color='error' size='large'>ABOUT ME PAGE</Button>
                        </Link>
                        </div>
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