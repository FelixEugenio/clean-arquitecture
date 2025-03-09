//Descreve o pattern command

export interface UseCase<InputDto, OutputDto> {
    execute(input: InputDto): Promise<OutputDto>;
}