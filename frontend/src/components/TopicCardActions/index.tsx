import { ChatBubble, Repeat, FavoriteBorder } from "@mui/icons-material";
import { Button } from "@mui/material";
import './style.css';

function TopicCardActions() {
    return (
        <div id="topic-card-actions">
            <Button variant="text" size="small" startIcon= {<ChatBubble/>}>1</Button>
            <Button variant="text" size="small" startIcon= {<Repeat/>}>2</Button>
            <Button variant="text" size="small" startIcon= {<FavoriteBorder/>}>3</Button>
        </div>        
    )    
}

export default TopicCardActions;