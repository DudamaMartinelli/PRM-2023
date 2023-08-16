import HeaderProfile from "../../components/HeaderProfile"
import { Box } from "@mui/material";
import TopicList from "../../components/TopcList";

function TopcPage() {

    const profile = {
        fullname: 'Maria Eduarda Martinelli',
        username: 'dudamartinelli',
        description: 'dev',
        creatdAt: '2022-08-13'
    }

    const topics = [
        {
            ower: { fullname: 'Clara'},
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea porro tenetur et? Veritatis placeat esse quod quia temporibus, iste saepe quis assumenda qui, corporis, libero nihil obcaecati dolor nam excepturi?',
            comments: 1,
            resposts: 1,
            likes: 30,
            createAt: '2023-08-01 19:23:00'  
        },
        {
            ower: { fullname: 'Robson'},
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea porro tenetur et? Veritatis placeat esse quod quia temporibus, iste saepe quis assumenda qui, corporis, libero nihil obcaecati dolor nam excepturi?',
            comments: 1,
            resposts: 1,
            likes: 30,
            createAt: '2023-08-01 19:23:00'  
        },
        {
            ower: { fullname: 'Linda'},
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea porro tenetur et? Veritatis placeat esse quod quia temporibus, iste saepe quis assumenda qui, corporis, libero nihil obcaecati dolor nam excepturi?',
            comments: 1,
            resposts: 1,
            likes: 30,
            createAt: '2023-08-01 19:23:00'  
        },
        {
            ower: { fullname: 'Pedro da Silva'},
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea porro tenetur et? Veritatis placeat esse quod quia temporibus, iste saepe quis assumenda qui, corporis, libero nihil obcaecati dolor nam excepturi?',
            comments: 1,
            resposts: 1,
            likes: 30,
            createAt: '2023-08-01 19:23:00'  
        }
    ]

    return (
        <Box id="topic-page" display="flex" flexDirection="column" alignItems="center" gap={3}>
            <HeaderProfile user={profile}/>
            <TopicList items={topics}/>
        </Box>
    )    
}

export default TopcPage;