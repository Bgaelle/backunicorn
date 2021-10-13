import "./Header.css";
import React from "react";
import logo from "./logo-baluchon.png";
import SocialFollow from "./SocialFollow";
import { Link } from "react-router-dom";
import Uploads from "./Uploads.js";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


// Composant Uploads
// function Uploads () {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false); 

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description">
//         <Box >
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }


class Header extends React.Component {
  render() {
    return (
    <>
    <div className="App">
      <div className="top-header hidden-xs" id="top">
        <ul className="menu">
          <a id="menu-item-header" className="decoration"
          href="http://www.tinyhouse-baluchon.fr/presse/" target="_blank">Presse</a>
          <a id="menu-item-header" className="decoration"
          href= "http://www.tinyhouse-baluchon.fr/partenaires/" target="_blank">Partenaires</a>
          <a id="menu-item-header" className="decoration"
          href="http://www.tinyhouse-baluchon.fr/faq/" target="_blank">Questions fréquentes</a>
          <a id="menu-item-header" className="decoration"
          href="http://www.tinyhouse-baluchon.fr/tarifs/" target="_blank">Tarifs</a>
          <a id="menu-item-header" className="decoration"
          href="http://www.tinyhouse-baluchon.fr/contact/" target="_blank">Contact</a>
          <li><SocialFollow /></li>
          <li><Uploads/></li>
        </ul>
       </div>
      

       <header className="header">
        <div className="container">
          <ul className="menu2">
          <a id="menu2-item" className="deco-menu2"
          href="http://www.tinyhouse-baluchon.fr/actualites/" target="_blank">Actualités</a>
          <a id="menu2-item" className="deco-menu2"
          href="http://www.tinyhouse-baluchon.fr/nos-tiny-houses/" target="_blank">Nos réalisations</a>
          <a id="menu2-item" className="deco-menu2"
          href="http://www.tinyhouse-baluchon.fr/l-auto-construction/" target="_blank">Auto-constructions</a>
          <a><Link to="/" id="menu2-item"><img src={logo} alt="logo"></img></Link></a>
          <a id="menu2-item" className="deco-menu2"
          href="http://www.tinyhouse-baluchon.fr/evenements/" target="_blank">Évènements</a>
          <a id="menu2-item" className="deco-menu2"
          href="http://www.tinyhouse-baluchon.fr/les-remorques/" target="_blank">Remorques</a>
          <a id="menu2-item" className="deco-menu2"
          href="http://www.tinyhouse-baluchon.fr/qui-sommes-nous/" target="_blank">Qui sommes nous</a>
          </ul>
        </div>
      </header>
    </div>
    </>
    );
  }
}

export default Header;

