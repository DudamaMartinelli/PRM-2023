import TopicCardActions from "../TopicCardActions";
import TopicCardBody from "../TopicCardBody";
import TopicCardHeader from "../TopicCardHeader";

function TopicCard() {
    return (
        <div id="topic-card">
            <TopicCardHeader></TopicCardHeader>
            <TopicCardBody></TopicCardBody>
            <TopicCardActions></TopicCardActions>
        </div>
    )    
}

export default TopicCard;