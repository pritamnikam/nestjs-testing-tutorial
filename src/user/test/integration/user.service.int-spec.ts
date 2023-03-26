import { Test } from '@nestjs/testing';

import { AppModule } from "src/app.module";
import { PrismaService } from "src/prisma/prisma.service";
import { UserService } from "src/user/user.service";

describe("UserService Int", () => {
    
    let prisma: PrismaService
    let userService: UserService

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [ AppModule ]
        }).compile();
        
        prisma = moduleRef.get(PrismaService);
        userService = moduleRef.get(UserService);
        await prisma.cleanDatabase();
    });

    describe('createUser()', () => {

        it('Should create new user', async () => {
            let user = await userService.createUser(
                "test@xyz.com",
                "first",
                "last",
            );

            expect(user.email).toBe("test@xyz.com");
            expect(user.firstName).toBe("first");
            expect(user.lastName).toBe("last");
        });

        it ('should throw if user exxists', async () => {
            await userService
                .createUser(
                "test@xyz.com",
                "first",
                "last",
            )
            .then((user) => expect(user).toBeUndefined())
            .catch((error) => expect(error.status).toBe(403));
        })
    });

})