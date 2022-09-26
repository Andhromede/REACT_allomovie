// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
        <>
            <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    
                    {/* Burger button */}
                    {/* <button className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" 
                            type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
                        </svg>
                    </button> */}

                    <div className="collapse navbar-collapse flex items-center" id="navbarSupportedContent1">
                        <a className="text-xl text-white pr-2 font-semibold" href={"/home"}>Allo-Movie</a>
                        
                        {/* Left links */}
                        <ul className="navbar-nav flex pl-0 list-style-none mr-auto">
                            <li className="nav-item p-2">
                                <a className="nav-link text-white" href={"/home"}>Home</a>
                            </li>

                            <li className="nav-item p-2">
                                <a className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0" href={"/home"}>Mes favoris</a>
                            </li>

                            {/* <li className="nav-item p-2">
                                <a className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0" href="#">Projects</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <Navbar bg="dark" variant="dark">
             <Container>
                 <Navbar.Brand href={"home"}>Allo-Movie</Navbar.Brand>
                 <Nav classNameName="me-auto">
                     <Nav.Link href={"home"}>Home</Nav.Link>
                     <Nav.Link href={""}>Mes favoris</Nav.Link>
                 </Nav>
             </Container>
         </Navbar> */}

        </>

         
    );
}

export default NavBar;