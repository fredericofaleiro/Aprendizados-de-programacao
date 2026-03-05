#include <stdio.h>

int main()
{

    // imprime cabeçalho do nosso jogo
    printf("*************************************** \n");
    printf("*Ola, bem-vindo ao jogo de adivinhacao* \n");
    printf("*************************************** \n");

    int numerosecreto = 42;
    int chute;
    int tentativa = 1;

    while (1)
    {
        printf("tentativa %d\n", tentativa);

        printf("qual e o seu chute? \n");
        scanf("%d", &chute);
        printf("seu chute foi : %d\n", chute);

        if (chute < 0)
        {
            printf("chutes negativos nao sao validos\n");
            continue;
        }

        int acertou = (chute == numerosecreto);
        int menor = (chute < numerosecreto);

        if (acertou)
        {
            printf("acertou\n");
            break;
        }

        else if (menor)
        {
            printf("tente um numero maior\n");
        }
        else
        {
            printf("tente um numero menor\n");
        }
        tentativa++;
    }

    printf("fim de jogo\n");
    printf("voce acertou em %d tentativas", tentativa);
}