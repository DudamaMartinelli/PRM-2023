import {ReactNode, createContext, useState} from "react";
import { ITopic } from "../@types"


type TopicContextProps = {
    topics: ITopic[],
    setTopics: (topics: ITopic[]) => void;
}
export const TopicContext = createContext<TopicContextProps>({} as TopicContextProps);

type TopicContextProveiderProps = {
    children: ReactNode
}
export function TopicContextProveider(props: TopicContextProveiderProps){

    const [topics, setTopics] = useState<ITopic[]>([])

    return(
        <TopicContext.Provider value={{topics, setTopics }}>{props.children}</TopicContext.Provider>
    )
}