#include <stdio.h>

int main(int argc, char **argv)
{
	
	int numIter = 0;
	
	printf("Inserire il numero di iterazioni: ");
	scanf("%d", &numIter);
	
	if (numIter > 0) {
		int contaPositivi = 0;
		int contaNull = 0;
		int contaPari = 0;
		int contaDispari = 0;
		
		
		int n;
		printf("Inserire un numero, -1 per terminare: ");
		scanf("%d", &n);
		int i = 1;
		
		while (i <= numIter && n != -1) {			
			printf("\n%d\n", n);
			
			if (n > 0)
				contaPositivi++;
			else if (n == 0)
				contaNull++;
			
			if ((n%2) == 0)
				contaPari++;
			else
				contaDispari++;
			
			i++;
			
			printf("Inserire un numero, -1 per terminare: ");
			scanf("%d", &n);
		}
		
		printf("Conta positivi: %d\n", contaPositivi);
		printf("Conta nulli: %d\n", contaNull);
		printf("Conta pari: %d\n", contaPari);
		printf("Conta dispari: %d\n", contaDispari);
	}
	
	
	return 0;
}

