import TopicCard from "../TopicCard"
import { Divider } from "@mui/material"
import { Box } from "@mui/material";

type TopcListProps = {
    items: any
}

function TopicList({
    items
}: TopcListProps) {
    return (
        <Box id="topic-list"  display="flex" flexDirection="column" gap={3} maxWidth="64rem">
            {items.map((item: any, index:number) => (
                <Box display="flex" flexDirection="column" gap={3} key={index}>
                   <TopicCard topic={item}/>
                   <Divider /> 
                </Box>
                
            ))}            
        </Box>
    )
}

export default TopicList;