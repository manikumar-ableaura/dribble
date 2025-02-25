import React, { useEffect, useState, useRef } from 'react';
// import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './content.css';
import picture from '../assets/pic2.jpg';
import villa11 from '../assets/last.jpg';
import Form from './Form/Form';
import wavy from '../assets/wave.png'
import logo from '../assets/popuplogo.jpg'



function Content() {

  const items = ["Home", "About", "Services", "Contact", "Portfolio", "Gallery"];

  const [form, Setform] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');

  const [isSearch, setIsSearch] = useState(false);
  
  const popupRef = useRef(null);

  const navigate = useNavigate();

  

  const pagetodiscuss = () => {
    navigate('/discuss');
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log("User Searched for : ", e.target.value);

  }
  const handlenavigation = () => {
    navigate('/shopping');
  };

  const handleAboutNavigation = () => {
    navigate('/quotes');
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closePopup = () => {
    setIsSearch(false);
    setSearchQuery('');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };

    if (isSearch) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearch]);


  return (
    <>
      <div className='Hero'>
        <img
          className="content-image"
          src={wavy}
          alt="Preview of ARCHIVTS homepage"
        />
        <input
          type='text'
          placeholder='search...'
          className='search'
          onChange={handleSearch}
          onClick={() => setIsSearch(true)}
          value={searchQuery}
        />

        {isSearch && (
          <div className='search-popup show' ref={popupRef}>
            <img
              className="pop-logo"
              src={logo}
              alt="Loading..."
            />
            <div className="search-container">
              <input
                type='text'
                placeholder='Search here '
                className='search-input'
                value={searchQuery}
                onChange={handleSearch}
                autoFocus
              />
              <button className="close-btn" onClick={closePopup}>&times;</button>
            </div>
          </div>
        )}
      </div>



      <div className='container'>

        <h1> Hey Pookies!</h1>

        <p className="content">
          In this shot, we're providing a sneak peek of the ARCHIVTS homepage. Our focus for this homepage is to ensure that when users first visit the website.
          Stay tuned for more previews in the next shots! Available on Gumroad. Grab it now!
        </p>

        <button className="gumroad-button" onClick={handlenavigation}>Food Menu</button>


        <div className="secondblock">
          <h2>TRANSFORMING IDEAS <br />ARCHITECTURE</h2>
          <div className="text-container">
            <p>
              We specialize in turning creative concepts<br />
              into immersive experiences, blending innovation with precision for a digital
            </p>
          </div>
        </div>
        <div className='Arrowclass' onClick={scrollToBottom} >
          <div className="arrow-circle"></div>
        </div>
        <div className='thirdblock'>

          <div>
            <div className='About'>
              <button className='Sayings' onClick={handleAboutNavigation}> About us </button>
            </div>
            <h2>Agency in the field of<br></br> architecture</h2>
            <p>Experience Archtectural ingeniuty: As a leading agecny in the field of architecture,
              We bring visionary concepts to life through cutting-edge design and technical mastery</p>
            <div className='see'>
              <button> See More </button>
            </div>
          </div>


          <div className='picture'>
            <img
              className="pics"
              src={picture}
              alt="temporary" />
          </div>

        </div>

        <div className='fourthblock'>

          <div><div className='service'>
            <button>Services</button>
            <h2>We provide various best ideas to<br></br> transform your ideas</h2>
          </div>
          </div>

          <div className='villa'>
            <img
              className="home"
              src='https://images.pexels.com/photos/30492749/pexels-photo-30492749/free-photo-of-cozy-winter-store-display-with-sled-and-wine-bottles.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt="temporary" />

            <h4>Design Interior</h4>

            <p>The art and science of enchancing the interior of a building to achieve a healthier & more aesthctical pleasing environment for the people using the space.
              An Interior design is someone plans, reaseach, coordinates, and manages such enhancement projects...</p>

          </div>
        </div>
        <br></br><br></br><br></br>
        <div className='fifthblock'>

          <div><div className='service1'></div></div>

          <div className='villa1'>
            <img
              className="home"
              src='https://images.pexels.com/photos/30560880/pexels-photo-30560880/free-photo-of-ornate-interior-of-historic-mosque-with-elaborate-ceiling.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt="temporary" />

            <h4>Architecture</h4>

            <p>Architecture is the process and product of planning, designing, and construction of buildings or other structures</p>
          </div>
        </div>

        <br></br>
        <div className="section">

        </div>

        <div className="divider"></div>

        <div className="section">

        </div>

        <div className='fifthblock'>

          <div><div className='service2'></div></div>

          <div className='villa2'>
            <img
              className="dome"
              src='https://media.istockphoto.com/id/1254796539/photo/green-living-room-with-green-sofa-coffee-tables-and-plants.jpg?s=2048x2048&w=is&k=20&c=FCq1HLZx-dn2eP-SM4rjA5ra_xGnEOF80xfqv6sJwnU='
              alt="temporary" />

            <h4>Property Interior</h4>

            <p>The Interior of a room in the form of a physical Arrangement, such as furniture, To meet the facility needs of the room</p>
          </div>
        </div>



        <div className='sixthblock'>

          <div className='new'>
            <button>Our Project</button>
            <h3 className='project-heading'>
              Explore our projects, where each <br /> project reflects innovation
            </h3>


          </div>
          <div>
            <div className="no1">
              <img
                className="img1"
                src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Loading"
              />

              <div className="contents">
                <img
                  className="img2"
                  src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Loading"
                />
                <h3>PREMIUM KITCHEN</h3>
                <p>Indonesia / Design interior</p>
              </div>
            </div>

            <div className='no2'>
              <div className='merge'>
                <h3>LANEWAY HOUSE</h3>
                <p> Canada / Architecture</p>
              </div>
              <div className='merge-in'>
                <img
                  className='img3'
                  src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt='Loading'
                />

                <h3>BLOCK RESIDENCE</h3>
                <p>United Stated / Architecture</p>
              </div>
            </div>

            <div className='no3'>
              <div className='merge1'>
                <img
                  className='img4'
                  src='https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=600'
                  alt='Loading...' />
                <h3>LUXARY HOUSE NEW</h3>
                <p> United Stated / Design Interior</p>
              </div>
              <div className='merge2'>
                <img className='img5'
                  src='https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600'
                  alt='Loading...' />
                <h4>Are these all projects? NO, Click to see other projects</h4>
                <div className='see'>
                  <button> See More </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='summaprocess'>
          <button className='pro'>Process</button>
          <div className='bun'>
            <h3>Discuss what you want to<br></br> make happen if you have<br></br> in idea</h3>
            <p>Bring your vision to Life: Share your ideas, and <br></br> a Digital Masterpiece Tailored to you unique vision</p>
          </div>
        </div>

        <div className='bolt'>

          <div className='villa8'>
            <img
              className="lative"
              src='https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt="tentative" />
          </div>

          <div className='villa9'>
            <img
              className="plative"
              src='https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt="loading" />
          </div>

          <div className='villa10'>
            <img
              className="clative"
              src='https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt="loading" />
          </div>

        </div>

        <div className='ninthblock'>

          <div className='child1'><button>Testimonials</button>
            <h2>Discover what<br></br> clients are saying <br></br>about us</h2></div>
          <div>
            <p>Working with archivts was a<br></br>transformative experience.
              Their<br></br> innovative approach to website <br></br>architecture not only met our<br></br> needs but elevated our brands to<br></br> new heights</p>
          </div>
          <div>
            <p> Archivts with Working was a<br></br>experience transformation .
              Their<br></br> innovative approach to website <br></br>architecture not only met our<br></br> needs but elevated our brands to<br></br> new heights</p>
          </div>
        </div>


        <div className='last'><h1>Looking For Someone Who Can <br></br> Transforming Ideas?</h1>
          <button className='discuss' onClick={pagetodiscuss}>Let's Discuss</button>
        </div>


        <div className='villa11'>
          <img
            className="captive"
            src={villa11}
            alt="loading" />
        </div>

        <div className='graph'>
          <h2>Thanks for checking it out!</h2>
          <p>Interested in partnering with us? </p>
        </div>

        <div className='dummy'>
          <button>Send Inquiry</button>
        </div>

        <div className='dummy2'>
          <p>Or drop us a line:</p>
          <h3>hellodama@odama.io</h3>
        </div>

        <div className="dummy3">
          <p>Find more of our work on:</p>
          <h4>
            <span className="underline">&nbsp;Website</span> |
            <span className="underline">&nbsp;Instagram</span> |
            <span className="underline">&nbsp;Behance</span> |
            <span className="underline">&nbsp;Food Menu</span>
          </h4>
          <div className='Arrows' onClick={scrollToTop} >
            <div className="arrowscircle"></div>
          </div>
        </div>


        <div className="divider9"></div>
        <div className="divider10"></div>
        <div className='form-dadpop'>
          <button className='form-pop' onClick={() => Setform(true)}> Click here :-) </button>
        </div>

        {form && (
          <div className='popup'>
            <Form onClose={() => Setform(false)} />
          </div>
        )}
      </div>
    </>
  )
}

export default Content;

