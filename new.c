#include <stdio.h>

int main() {
    int myArray[4] = {1,2,3,4};

    printf("Элементы массива:\n");

    for (int i = 0; i < 4; ++i) {
        printf("%d\n", myArray[i]);
    }

    return 0;
}