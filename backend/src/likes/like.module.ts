import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Like } from "./like.entity";
import { LikeService } from "./like.service";
import { LikeController } from "./like.controller";
import { TopicModule } from "src/topics/topic.module";
import { User } from "src/users/user.entity";
import { Topic } from "src/topics/topic.entity";
import { UserModule } from "src/users/user.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([ Like, Topic, User ]),
        TopicModule,
        UserModule
    ],
    providers: [ LikeService],
    controllers: [ LikeController ]
})
export class LikeModule{}