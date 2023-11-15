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
            <TopicCardHeader 
            createdAt={topic.createdAt}
            owner={topic.owner}
            />
            <TopicCardBody />
            <TopicCardActions />
        </div>
    )
}

export default TopicCard;