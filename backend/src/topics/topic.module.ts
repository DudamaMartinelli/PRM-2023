import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "module";
import { TopicService } from "./topic.service";
import { TopicController } from "./topic.controller";
import { Topic } from "./topic.entity";
import { UserModule } from "src/users/user.module";

@Module({
    imports: [ TypeOrmModule.forFeature([Topic]), UserModule],
    providers: [ TopicService],
    controllers: [TopicController]
})
export class TopicModule {}