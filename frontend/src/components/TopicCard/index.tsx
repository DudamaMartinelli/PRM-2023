import TopicCardActions from "../TopicCardActions";
import TopicCardBody from "../TopicCardBody";
import TopicCardHeader from "../TopicCardHeader";

type TopicCardProps = {
    topic: any
}

function TopicCard({
    topic
}: TopicCardProps) {
    return (
        <div id="topic-card">
            <TopicCardHeader></TopicCardHeader>
            <TopicCardBody></TopicCardBody>
            <TopicCardActions></TopicCardActions>
        </div>
    )    
}

export default TopicCard;