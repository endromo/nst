import { Controller, Get, HttpCode, Res } from '@nestjs/common';

@Controller("hero")
export class HeroController {
    @Get()
    @HttpCode(200)
    index(@Res({ passthrough: true }) resp) {
        return resp.json({
            message: "Hero Index",
            error: "",
            statusCode: 200
        });
    }

    @Get("create")
    create(): string {
        return "Hero create";
    }
};
