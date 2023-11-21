import { Module } from "module";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/users/user.module";
import { ProfileController } from "./profile.controller";
import { ProfileService } from "./profile.service";

@Module({
    import: [ ],
    providers: [ProfileService],
    controllers: [ ProfileController]
})
export class ProfileModule {}