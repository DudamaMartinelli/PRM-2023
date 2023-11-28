import { Typography } from "@mui/material";
import { ITopic } from "../../@types";

type TopicCardBodyProps = {
    content: string,
    topicResposted?: ITopic
}
function TopicCardBody({
    content,
    topicResposted
}: TopicCardBodyProps) {
    return (
        <div id="topic-card-body" style={{marginLeft: '3rem'}}>
            {topicResposted ? (
                <Typography sx={{borderLeft: '3px solid #71767b', color: '#71767b', padding: '1rem'}}>
                    {`Postado por @${topicResposted.owner?.username}: ${content}`}
                </Typography>
            ): (
                <Typography variant="body1">
                    {content}
                </Typography>
            )}
        </div>
    )
}

export default TopicCardBody;