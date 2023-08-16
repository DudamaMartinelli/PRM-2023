import TopicCard from "../TopicCard"
import TopicCardSkeleton from "../TopicCard"
import { Divider } from "@mui/material"
import { Box } from "@mui/material";

type TopcListProps = {
    items: any
}

function TopicList({
    items
}: TopcListProps) {
    return (
        <Box id="topic-list"  display="flex" flexDirection="column" alignItems="center" gap={3} maxWidth="64rem">
            {items.map((item: any) => (
                <Box display="flex" flexDirection="column" gap={3}>
                   <TopicCard topic={item}/>
                   <Divider /> 
                </Box>
                
            ))}            
        </Box>
    )
}

export default TopicList;