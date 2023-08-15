import { Avatar, Box, Typography } from "@mui/material";
import { CalendarMonthOutlined } from "@mui/icons-material";

import banner from '../../assets/img/profile_banner.png';
import avatar from '../../assets/img/profile_avatar.jpg';
import './style.css';


function HeaderProfile() {
    return (
        <Box id="header-profile"> 

        <Box className="header-profile-backgrond">
            <img src={banner}/>
        </Box>

        <Box className="header-profile-detail">
            <Avatar alt="Fulano de Tal" style={{width: 128, height:128 }} src={avatar} className="header-profile-detail-avatar"/>
            <Box className="header-profile-detail-text">
                <Typography variant="h5">
                    Fulano de tal
                </Typography>

                <Typography variant="subtitle1"component="h6">
                    @fulanodetal
                </Typography>

                <Typography variant="subtitle1" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia nesciunt aperiam omnis officiis expedita, accusantium repellendus modi perferendis, sunt minus dolorem tenetur neque nemo temporibus! Recusandae eius soluta sunt!
                </Typography>

                <Typography variant="caption">
                    <CalendarMonthOutlined/>
                    Entrou em agosto de 2023
                </Typography>

            </Box>
        </Box>

        </Box>
    )
}

export default HeaderProfile;