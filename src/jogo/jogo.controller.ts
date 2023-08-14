import { Controller, Get } from '@nestjs/common';
import { JogoService } from './jogo.service'

@Controller('jogo')
export class JogoController {
    constructor(private readonly jogoService: JogoService) {}
    @Get('versoes')
    getVersoes(): object[] {
        return this.jogoService.getVersoes();
    }
    @Get('resumo')
    getResumo(): object[] {
        return this.jogoService.getResumo();
    }
}   
