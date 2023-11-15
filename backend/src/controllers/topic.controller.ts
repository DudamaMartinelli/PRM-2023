import {Controller, Get, Param, ParseIntPipe, Post, Body, Delete, HttpCode, Query, HttpException, HttpStatus } from "@nestjs/common"; 
import {Topic} from "src/entities/topic.entity";
import { TopicService } from "src/services/topic.service";
import { UserService } from "src/services/user.service";

@Controller('topics')
export class TopicController {
    constructor(
        private readonly service: TopicService,
        private readonly userService: UserService
        ){}

    @Get()
    async findAll(@Query() query): Promise<Topic []>{

        if (query?.username) {
            //Busco os topicos dos usuarios
            const found =  await this.userService.findByUsername(query.username);

            if (!found){
                throw new HttpException('Usuário não encontrado', HttpStatus.BAD_REQUEST)
            }
            return this.service.findByUser(found);
        }else {
            return this.service.findAll();
        }

        
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): Promise<Topic> {
        return this.service.findById(id)
    }

    @Post()
    create(@Body() topic: Topic): Promise<Topic>{
        return this.service.create(topic)
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
         return this.service.delete(id);
    }
}