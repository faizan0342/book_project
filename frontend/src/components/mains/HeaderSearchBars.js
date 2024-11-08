import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function HeaderSearchBars() {
  return (
    <div>
      <div className='header_search_icons_1'>
        <div className='order_img'>
          <div className='order_name'>
            <h4>Order</h4>
          </div>
          <div>
            <img src="./img1-Photoroom.png"></img>
          </div>
        </div>
        <div>|</div>
        <div className='Demands_img'>
          <div className='order_Demands'>
            <h4> Demands </h4>
          </div>
          <div> <img src="./img2-Photoroom.png"></img>
          </div>
        </div>
      </div>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#"><img src="/logo.png"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={() => console.log("working this button")} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '510px' }}
              navbarScroll
            >

              {/* change */}
              <div>

                <div className='tabBarNav'>
                  <div className='tabBarNavStyle'>
                    {/* All Books */}
                    <h7 className="allBooksHover">All Books</h7>
                    <div className="AllBooksNavList">
                      <div className="AllBooksNavListHeading">
                        <div>New Releases</div>
                        <div>New at Readings</div>
                        <div>New in Our Publications</div>
                        <div>Coming Soon (Pre-Order)</div>
                        <div>International Bestsellers</div>
                        <div>Bestsellers in Our Publications</div>
                      </div>
                      <div className="AllBooksNavListHeadingCategory">
                        <div>
                          <div className="AllBooksNavListHeadingCategoryOne">
                            <div style={{ color: "#007bff" }}>Popular Categories</div>
                            <div>Bio & Autobiography</div>
                            <div>Business</div>
                            <div>Classics</div>
                            <div>Collector's Editions</div>
                            <div>Fiction</div>
                            <div>Graphic Novels & Manga</div>
                            <div>History</div>
                            <div>Literature</div>
                            <div>Philosophy</div>
                            <div>Politics</div>
                            <div>Religion</div>
                            <div>Science</div>
                            <div>Self Help</div>
                          </div>
                        </div>
                        <div className="allCategories">
                          <div className="allCategoriesChild" style={{ color: "#007bff", fontWeight: "500" }}>
                            All Categories
                            <div className="allCategoriesChildOne">
                              <div>
                                <div style={{ fontSize: "0.7rem", marginTop: "0.5rem" }}>Adult Colouring Books</div>
                                <div style={{ fontSize: "0.7rem" }}>Agriculture</div>
                                <div style={{ fontSize: "0.7rem" }}>Anthropology</div>
                                <div style={{ fontSize: "0.7rem" }}>Antiques & Collectibles</div>
                                <div style={{ fontSize: "0.7rem" }}>Archaeology</div>
                                <div style={{ fontSize: "0.7rem" }}>Architecture</div>
                                <div style={{ fontSize: "0.7rem" }}>Art</div>
                                <div style={{ fontSize: "0.7rem" }}>Audio Books</div>
                                <div style={{ fontSize: "0.7rem" }}>Automobiles</div>
                                <div style={{ fontSize: "0.7rem" }}>Aviation</div>
                                <div style={{ fontSize: "0.7rem" }}>Bio & Autobiography</div>
                                <div style={{ fontSize: "0.7rem" }}>Body, Mind & Spirit</div>
                                <div style={{ fontSize: "0.7rem" }}>Business</div>
                                <div style={{ fontSize: "0.7rem" }}>Children</div>
                              </div>
                              <div>
                                <div style={{ fontSize: "0.7rem", marginTop: "0.5rem" }}>Adult Colouring Books</div>
                                <div style={{ fontSize: "0.7rem" }}>Agriculture</div>
                                <div style={{ fontSize: "0.7rem" }}>Anthropology</div>
                                <div style={{ fontSize: "0.7rem" }}>Antiques & Collectibles</div>
                                <div style={{ fontSize: "0.7rem" }}>Archaeology</div>
                                <div style={{ fontSize: "0.7rem" }}>Architecture</div>
                                <div style={{ fontSize: "0.7rem" }}>Art</div>
                                <div style={{ fontSize: "0.7rem" }}>Audio Books</div>
                                <div style={{ fontSize: "0.7rem" }}>Automobiles</div>
                                <div style={{ fontSize: "0.7rem" }}>Aviation</div>
                                <div style={{ fontSize: "0.7rem" }}>Bio & Autobiography</div>
                                <div style={{ fontSize: "0.7rem" }}>Body, Mind & Spirit</div>
                                <div style={{ fontSize: "0.7rem" }}>Business</div>
                                <div style={{ fontSize: "0.7rem" }}>Children</div>
                              </div>
                              <div>
                                <div style={{ fontSize: "0.7rem", marginTop: "0.5rem" }}>Adult Colouring Books</div>
                                <div style={{ fontSize: "0.7rem" }}>Agriculture</div>
                                <div style={{ fontSize: "0.7rem" }}>Anthropology</div>
                                <div style={{ fontSize: "0.7rem" }}>Antiques & Collectibles</div>
                                <div style={{ fontSize: "0.7rem" }}>Archaeology</div>
                                <div style={{ fontSize: "0.7rem" }}>Architecture</div>
                                <div style={{ fontSize: "0.7rem" }}>Art</div>
                                <div style={{ fontSize: "0.7rem" }}>Audio Books</div>
                                <div style={{ fontSize: "0.7rem" }}>Automobiles</div>
                                <div style={{ fontSize: "0.7rem" }}>Aviation</div>
                                <div style={{ fontSize: "0.7rem" }}>Bio & Autobiography</div>
                                <div style={{ fontSize: "0.7rem" }}>Body, Mind & Spirit</div>
                                <div style={{ fontSize: "0.7rem" }}>Business</div>
                                <div style={{ fontSize: "0.7rem" }}>Children</div>
                              </div>
                              <div>      <div style={{ fontSize: "0.7rem", marginTop: "0.5rem" }}>Adult Colouring Books</div>
                                <div style={{ fontSize: "0.7rem" }}>Agriculture</div>
                                <div style={{ fontSize: "0.7rem" }}>Anthropology</div>
                                <div style={{ fontSize: "0.7rem" }}>Antiques & Collectibles</div>
                                <div style={{ fontSize: "0.7rem" }}>Archaeology</div>
                                <div style={{ fontSize: "0.7rem" }}>Architecture</div>
                                <div style={{ fontSize: "0.7rem" }}>Art</div>
                                <div style={{ fontSize: "0.7rem" }}>Audio Books</div>
                                <div style={{ fontSize: "0.7rem" }}>Automobiles</div>
                                <div style={{ fontSize: "0.7rem" }}>Aviation</div>
                                <div style={{ fontSize: "0.7rem" }}>Bio & Autobiography</div>
                                <div style={{ fontSize: "0.7rem" }}>Body, Mind & Spirit</div>
                                <div style={{ fontSize: "0.7rem" }}>Business</div>
                                <div style={{ fontSize: "0.7rem" }}>Children</div></div>
                              <div>
                                <div style={{ fontSize: "0.7rem", marginTop: "0.5rem" }}>Adult Colouring Books</div>
                                <div style={{ fontSize: "0.7rem" }}>Agriculture</div>
                                <div style={{ fontSize: "0.7rem" }}>Anthropology</div>
                                <div style={{ fontSize: "0.7rem" }}>Antiques & Collectibles</div>
                                <div style={{ fontSize: "0.7rem" }}>Archaeology</div>
                                <div style={{ fontSize: "0.7rem" }}>Architecture</div>
                                <div style={{ fontSize: "0.7rem" }}>Art</div>
                                <div style={{ fontSize: "0.7rem" }}>Audio Books</div>
                                <div style={{ fontSize: "0.7rem" }}>Automobiles</div>
                                <div style={{ fontSize: "0.7rem" }}>Aviation</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='tabBarNavStyle fiction'>Fiction</div>
                  <div className='tabBarNavStyle'>Non-Fiction</div>
                  <div className='tabBarNavStyle'>Young Adults</div>
                  <div className='tabBarNavStyle'>Children</div>
                  <div className='tabBarNavStyle'>Urdu Books</div>
                  <div className='tabBarNavStyle'>Our Publications</div>
                  <div className='tabBarNavStyle'>High Discounts</div>
                  <div className='tabBarNavStyle'>||</div>
                  <div className='tabBarNavStyle'>Stationery & Gifts</div>
                  <div className='tabBarNavStyle'>Toys & Games</div>
                  <div className='tabBarNavStyle'>||</div>
                  <div className='tabBarNavStyle'>Send Gift Card</div>

                </div>

              </div>
              {/* change */}
              {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Keyword | Title | Author | ISBN | Publisher"
                  className="me-3 custom-search-bar"
                  aria-label="Search"
                />

                <button className='search_btn'><FontAwesomeIcon icon={faSearch} /></button>
              </Form>
              <div className='header_search_btn'>
                <button className='AdvancedSearch'>Advanced Search</button>
                <button className='RequestBook'>Request a Book</button>
                {/* <Button variant="outline-success header_search_btn-1">Search</Button> 
          
          <Button variant="outline-success header_search_btn-2">Search</Button> */}
              </div>
            </Nav>
            <div className='header_search_icons'>
              <div className='order_img'>
                <div className='order_name'>
                  <h4>Order</h4>
                </div>
                <div>
                  <img src="./img1-Photoroom.png"></img>
                </div>
              </div>
              <div>|</div>
              <div className='Demands_img'>
                <div className='order_Demands'>
                  <h4> Demands </h4>
                </div>
                <div> <img src="./img2-Photoroom.png"></img>
                </div>
              </div>
            </div>
            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderSearchBars;