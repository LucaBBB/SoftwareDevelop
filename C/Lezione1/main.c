#include <stdio.h>
#include <math.h>
#include <assert.h>

void esercizioUno();
void esercizioDue();


int main(int argc, char **argv)
{
	//esercizioUno();
	esercizioDue();
}

void esercizioUno() {
	int num;
	int i=0;
	int esponente = 2;
		
	printf("Inserire il numero: ");
	scanf("%d", &num);
	printf("\n\n");
	
	assert(num >= 0);	
	while(i <= num) {
		printf("(%d)^%d = %lf\n", i, esponente, pow(i, esponente));
		i++;
	}
}

void esercizioDue() {
	int nNumeri;
	int val;
	int i=1;
	
	int nPos = 0;
	int nNeg = 0;
	int nNull = 0;
	int nPari = 0;
	int nDispari = 0;
	
	printf("Inserire la quantita di numeri N: ");
	scanf("%d", &nNumeri);
	assert(nNumeri > 0);
	
	printf("Inserire il valore:");
	scanf("%d", &val);
	
	while (i < nNumeri && val != -1) {
		printf("Inserire il valore:");
		scanf("%d", &val);
		
		if ((val%2)==0) nPos++;
		else if ((val%2)!=0) nNeg++;
		else nNull++;
		
		i++;
	}
	
	printf("Numero positivi: %d", nPos);
	printf("Numero negativi: %d", nNeg);
	printf("Numero nulli: %d", nNull);
}
