#include <stdio.h>

int main() {
    char *myArray[] = {"apple", "orange", "plup", "pear"};

    FILE *file = fopen("myStringArray.txt", "w");

    if (file == NULL) {
        fprintf(stderr, "Ошибка открытия файла.\n");
        return 1;
    }

    for (int i = 0; i < 4; ++i) {
        fprintf(file, "%s\n", myArray[i]);
    }

    fclose(file);

    printf("Массив успешно сохранен в файл 'myStringArray.txt'.\n");

    return 0;
}