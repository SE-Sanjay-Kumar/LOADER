import React, { useState } from 'react';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
const FileUpload = props => {
    const hiddenFileInput = React.useRef(null);
    const [fileName, setFileName] = useState(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        setFileName(fileUploaded.name);
        // props.handleFile(fileUploaded);
    };
    return (
        <div>
            <UploadFileOutlinedIcon style={{ color: 'white', width: '40px' }}
                onClick={handleClick}
            />
            <div>
            <input type="file"
                required
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
            <span>{fileName}</span>
            </div>
        </div>
    );
};
export default FileUpload;