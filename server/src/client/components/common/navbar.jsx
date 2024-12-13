import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useCookies } from "react-cookie"
import { MdAddCircle, MdArrowDropDown, MdMenu } from 'react-icons/md';
// import { AREA_COOKIE_KEY } from "../../utils/constants"
import AddProperty from '../sell/add-property';
import AreaList from './area-list-popup';
import Button from './button';
import { navLinks } from '../component-data';
import Container from '../base/container';
import Logo from './logo';
import * as styles from './navbar.module.scss';
import NavigationSheet from './navigation-sheet';
import Modal from './react-modal';
import Sheet from './sheet';
import { AreaContext } from '../../App';

export default function Navbar({ className = '', ...props }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [cookie, setCookie] = useCookies([AREA_COOKIE_KEY])
  const [areaUnit, setAreaUnit] = useContext(AreaContext);

  const menuState = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const triggerMenu = () => {
    setIsMenuOpen(true);
  };

  // const [selectedArea, selectArea] = useState(
  //   cookie.area_unit && cookie.area_unit.short ? cookie.area_unit : { short: "Marla", value: "Marla" }
  // )

  const [selectedArea, selectArea] = useState({
    short: 'Marla',
    value: 'Marla',
  });

  // Popup open State
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const [displayModel, setModalState] = useState(false);

  // Add Property Modal For Mobile
  const mobileAddPropertyModal = () => {
    setShowModal(true);
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`${className} ${styles.navbar}`.trim()}
      style={{ ...props.style }}
    >
      <Container className={`${props.containerClass} flex flex-ycenter`}>
        {props.backButton && props.backButton}
        <Link to="/" prefetch={false}>
          <p>
            <Logo
              variant={props.bannerless ? 'colored' : 'white'}
              className="logo"
            />
          </p>
        </Link>
        <nav className={styles.mainNav}>
          {navLinks.map(({
            text, link, external, ...rest
          }, i) => (
            <div>
              {external ? (
                <a href={link}>{text}</a>
              ) : (
                <Link to={link} key={i} {...rest} prefetch={false}>
                  <p>
                    {text}
                  </p>
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div
          className={`${styles.areaAddProperty} flex flex-ycenter u-spbwx8`.trim()}
        >
          {/* <div className={`flex flex-ycenter u-spbwx4 ${styles.areaUnit}`.trim()}>
            <span>Area Unit:</span>
            <button className="flex flex-ycenter" onClick={() => setModalState(true)}>
              <span>{selectedArea.short}</span>
              <MdArrowDropDown />
            </button>
          </div> */}
          <Button
            variant={props.addPropertyBtnClass}
            // className={styles.addProperty}
            size="sm"
            onClick={() => setShowModal(true)}
          >
            <MdAddCircle size="1.5em" />
            {' '}
            Add Property
          </Button>
        </div>
        <button className={styles.navigationIcon} onClick={triggerMenu}>
          <MdMenu />
        </button>
        {isMenuOpen && (
          <Sheet
            position="right"
            activeState={isMenuOpen}
            setSheetState={menuState}
          >
            <NavigationSheet
              data={navLinks}
              onClickAddPropertyModal={mobileAddPropertyModal}
            />
          </Sheet>
        )}

        <Modal showModal={showModal} onClickClose={closeModal}>
          <AddProperty onClickClose={closeModal} />
        </Modal>
        <Modal
          showModal={displayModel}
          onClickClose={() => setModalState(false)}
        >
          <AreaList
            selectedArea={selectedArea}
            selectArea={(area) => {
              selectArea(area);
              setAreaUnit(area);
            }}
            setModalState={setModalState}
          />
        </Modal>
      </Container>
    </div>
  );
}
