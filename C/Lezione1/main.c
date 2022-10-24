#include <stdio.h>

void quadrati_perfetti(int num);
int quadrato(int n);

int main(int argc, char **argv)
{
	
	int num = 0;
	
	printf("Inserire un numero: ");
	scanf("%d", &num);
	
	quadrati_perfetti(num);
	
	return 0;
}

void quadrati_perfetti(int num) {
	int i = 1;
	while(i <= num) {
		printf("%d^(%d) = %d\n", i, i, quadrato(i));
		i++;
	}
}

int quadrato(int n) {
	return n * n;
}
