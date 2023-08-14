import TopicCard from "./components/TopicCard"
import TopicCardSkeleton from "./components/TopicCard"
import { Divider } from "@mui/material"

function App() {

  return (
    <div id="App">
      <TopicCard/>
      <Divider/>
      <TopicCard/>
      <TopicCard/>
      <Divider/>
      <TopicCard/>
      <TopicCard/>
      <Divider/>
      <TopicCard/>
      <TopicCardSkeleton/>
    </div>
  )
}

export default App