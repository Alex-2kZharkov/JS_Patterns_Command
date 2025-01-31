import { SendCommand } from './command.interface';
import { SendApi } from '../receivers-workers';

export class SendFormCommand implements SendCommand {
    constructor(private api: SendApi) {}

    execute(): void {
        this.api.send();
    }
}
