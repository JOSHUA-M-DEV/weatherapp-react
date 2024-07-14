import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
import './Layout.css';
import image1 from './image.png';
import image2 from '../components/image.png';
import { useTheme } from '../components/Themeprovider';
import { height } from '@mui/system';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Layout = () => {
  const {theme,toggle}=useTheme();
  const [background, setBackground] = React.useState(image1);
  const toggleBackground = () => {
    setBackground(current => (current === image1 ? image2 : image1));
  };
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    height:'1600px',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className='div' style={theme === 'Light' ? backgroundStyle : {}}>
    <ul>
    <Link to='/Form' class="l">
    <li><b>HOME</b></li>
    </Link> 
    
    <Link to='/abc' class="l" >
    <li><b>WELCOME</b></li>
    </Link>
    <Link to='/home' class="l">
    <li><b>MAIN</b></li>
    </Link>
    <Link to='/weather' class="l">
    <li><b>INDIA</b></li>
    </Link>
    <Link to='/world' class="l">
    <li><b>World</b></li>
    </Link>
    <Link to='/world1' class="l">
    <li><b>FeedBack</b></li>
    </Link>
    
    <li onClick={toggleBackground}><DarkModeIcon/></li>
    </ul>
    <Outlet/>
    </div>
  )
}

export default Layout