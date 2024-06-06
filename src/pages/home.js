import Header from '../components/Header'
import Formation from '../components/Formation'
import CircularProgressBar from '../components/CircularProgressBar'
import Tech_Skills from '../components/Tech_Skills'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
        <Header />
        <Formation />
        <Tech_Skills />
        <div class="container_langue">
        <div class="title"><h1>​🌍​ Languages</h1></div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgressBar percentage={95} text="Arabic" />
            <CircularProgressBar percentage={80} text="Français" />
            <CircularProgressBar percentage={60} text="English" />
        </div>
        </div>
        <Footer />
        </>
    );
}
export default Home;
