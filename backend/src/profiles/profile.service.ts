import { Injectable } from "@nestjs/common";

@Injectable()
export class ProfileService {
    
    profile(){
        return {            
                fullname: 'Maria Eduarda Martinelli',
                username: 'dudamartinelli',
                description: 'dev',
                creatdAt: '2022-08-13'
            
        }
    }
}