import { ChatBubble, ChatBubbleOutline, FavoriteBorder, Repeat } from "@mui/icons-material";
import { Button, Box, Tooltip, Avatar, Typography } from "@mui/material";

import './style.css';
import { IUser } from "../../@types";

type TopicCardActionsProps = {
    commented: boolean,
    totalComments: number,
    clickComment: () => void,

    reposters: IUser[],
    clickRespost: () => void,

    /* 
    liketers: IUser[],
    clickLike: () => void,
    */
}
function TopicCardActions({
    commented,
    totalComments,
    clickComment,

    reposters,
    clickRespost,

    /*
    liketers,
    clickLike,
    */
}: TopicCardActionsProps) {
    return (
        <div id="topic-card-actions">
            <Button variant="text" size="small" 
                startIcon={ commented ? <ChatBubble /> : <ChatBubbleOutline />}
                onClick={clickComment}>
                {totalComments}
            </Button>


            <Tooltip title={
                reposters.length > 0 ? (
                    <Box display="flex" flexDirection="column" gap={1}
                    style={{padding: '0.5rem'}}>

                    {reposters.map((user,index) => (
                      <Box display="flex" flexDirection="column" gap={1} style={{padding: '0.5rem'}}>
                        <Avatar alt={user.fullname} sx={{ width: 24, height: 24 }}/>
                        <Typography>
                            {user.fullname}
                        </Typography>
                      </Box>                        
                    ))}
                    </Box>
                ) : (
                    <span>Repostar</span>
                )
            }>
                <Button variant="text" size="small" startIcon={<Repeat />}
                    onClick={clickRespost}>
                    {reposters.length}
                </Button>
            </Tooltip>
            

            <Button variant="text" size="small" startIcon={<FavoriteBorder />}>
                33
            </Button>
        </div>
    )
}
// colocar no lugar do 33 {liketers.length}


export default TopicCardActions;