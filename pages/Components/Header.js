import Head from 'next/head';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../../styles/Header.module.css';

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <div className={`bg-light ${styles.headerBeforeXLScrn} fixed-top`}>
        <div className="container-xl pb-2 pt-3">
          <div className="row">
            <div className="col-2 mt-1">
              <img src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg" alt="ImgNotFound" width='120px' height='20px' />
            </div>
            <div className="col-6 text-center mt-2">
              <ul className={styles.ulStyle}>
                <li className={`mx-xxl-4 mx-3 ${styles.liStyle}`}>Explore</li>
                <li className={`mx-xxl-4 mx-3 ${styles.liStyle}`}>Web3</li>
                <li className={`mx-xxl-4 mx-3 ${styles.liStyle}`}>Learn</li>
                <li className={`mx-xxl-4 mx-3 ${styles.liStyle}`}>Individuals</li>
                <li className={`mx-xxl-4 mx-3 ${styles.liStyle}`}>Businesses</li>
                <li className={`mx-xxl-4 mx-3 ${styles.liStyle}`}>Developers</li>
                <li className={`mx-xxl-4 mx-3 ${styles.liStyle}`}>Company</li>
              </ul>
            </div>
            <div className="col-4" style={{ textAlign: 'right' }}>
              <div className={`${styles.brAfterXLScrn}`}>
                <ul className={styles.ulStyle}>
                  <li className={`mx-xxl-4 mx-xl-3 mx-2 ${styles.liStyle}`}>Signin</li>
                  <li className={`mx-xxl-4 mx-xl-3 mx-2 ${styles.liStyle}`}>
                    <button type="button" className="btn btn-primary">Get Started</button>
                  </li>
                </ul>
              </div>
              <div className={`${styles.brBeforeXLScrn}`}>
                <ul className={styles.ulStyle} style={{ marginTop: '-12px' }}>
                  <li className={`mx-xxl-4 mx-xl-3 mx-2 ${styles.liStyle}`}>Sign in</li>
                  <li className={`mx-xxl-4 mx-xl-3 mx-2 ${styles.liStyle}`}>
                    <button type="button" className="btn btn-primary">Get <br /> Started</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-light ${styles.headerAfterXLScrn} fixed-top`}>
        <div className="row pb-2 pt-3 px-2">
          <div className="col-2 mt-1">
            <img src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg" alt="ImgNotFound" width='120px' height='20px' />
          </div>
          <div className="col-10 mt-2" style={{ textAlign: 'right' }}>
            <ul style={{ fontWeight: "500", lineHeight: "16px", color: "rgb(5, 15, 25)", marginTop: '-12px' }}>
              <li className={`mx-xxl-4 mx-xl-3 mx-2 ${styles.liStyle}`}>
                <button type="button" className="btn btn-primary">Get Started</button>
              </li>
              <li className={`mx-xxl-4 mx-xl-3 mx-2 ${styles.liStyle}`}>
                <i className="fa fa-bars" style={{ fontSize: '24px', cursor: 'pointer' }} onClick={handleShow}></i>
              </li>
            </ul>
          </div>
        </div>

        <Offcanvas show={show} onHide={handleClose} placement='top' backdrop="static" style={{ height: '100vh' }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className={styles.dropdownStyle}>
                Explore
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ width: '100%', borderRadius: '0px' }}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <li style={{ display: 'inline', listStyleType: 'none', width: '100%', background: 'transparent', color: 'black', textAlign: 'left', border: 'none', fontWeight: "500", lineHeight: "16px", color: "rgb(5, 15, 25)", padding: '15px', fontSize: '17px' }}>Web3</li>
              <Dropdown.Toggle id="dropdown-basic" className={styles.dropdownStyle}>
                Learn
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ width: '100%', borderRadius: '0px' }}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className={styles.dropdownStyle}>
                Individuals
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ width: '100%', borderRadius: '0px' }}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className={styles.dropdownStyle}>
                Businesses
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ width: '100%', borderRadius: '0px' }}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className={styles.dropdownStyle}>
                Developers
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ width: '100%', borderRadius: '0px' }}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className={styles.dropdownStyle}>
                Company
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ width: '100%', borderRadius: '0px' }}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <button type="button" className="btn btn-primary" style={{ marginLeft: '15px', width: '30%', padding: '12px', borderRadius: '3px' }}><b>Get Started</b></button>
            <br /><br />
            <button type="button" className="btn btn-outline-primary" style={{ marginLeft: '15px', width: '30%', padding: '12px', borderRadius: '3px' }}><b>Sign In</b></button>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Header;