import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Topic } from "src/entities/topic.entity";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class TopicService {
    
    constructor(
        @InjectRepository(Topic)
        private readonly repository: Repository<Topic>){}

    findAll(): Promise<Topic[]> {
        return this.repository.find();
    }
    findById(id: number): Promise<Topic> {
        return this.repository.findOneBy({id: id})
    }
    findByUser(user: User): Promise<Topic[]> {
        return this.repository.find({
            where: {
                owner: {
                    id: user.id
                }
            }
        });
    }    

    create(topic: Topic): Promise<Topic> {
        return this.repository.save(topic);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}