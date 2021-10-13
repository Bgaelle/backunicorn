import * as React from 'react';
import useState from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./Header.css";
import "./Uploads.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div>
        <button className="upload_button" onClick={handleOpen}>Upload</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
          <div className="testbox">
      <form action="/">
        <div className="banner">
          <h1>Upload your Tinyhouse</h1>
        </div>
        
        <div className="item">
          <p>Titre<span className="required">*</span></p>
          {/* <div className="item"> */}
            <input type="text" name="titre" required/>
          {/* </div> */}
        </div>
        <div className="item">
          <div className="item">
            <p>Commentaire<span class="required">*</span></p>
            <textarea type="text" name="comment" required></textarea>
          </div>
        </div>
        <div class="item">
          <div class="item">
            <p>Catégorie<span class="required">*</span></p>
            <select required>
              <option value="1">Clés en main</option>
              <option value="2">Hors d'eau hors d'air</option>
              <option value="3">Auto-construite</option>
            </select>
          </div>
        </div>

        <div class="item">
          <p>Choisir votre photo</p>
          <input type="text" name="providing"/>
          <input type="file" name="file" accept="file/*"/>
        </div>

        <div className="btn-block">
          <button className="btn-upload" type="submit" href="/">Upload</button>
        </div>
      </form>
    </div>
          </Box>
        </Modal>
      </div>
    );
}
}