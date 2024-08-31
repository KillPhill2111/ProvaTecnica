// See https://aka.ms/new-console-template for more information
Console.WriteLine("bem vindo, entre com o numero para saber a sequencia fibonacci: ");
int numeroSeq=int.Parse(Console.ReadLine());

Console.WriteLine($"A sequência de Fibonacci até o {numeroSeq}º termo é:");

for (int i = 0; i < numeroSeq; i++)
{
    Console.WriteLine(Fibonacci(i));
}

static int Fibonacci(int n)
{
    if (n <= 1)
    {
        return n;
    }
    
    int a = 0, b = 1, c = 0;
    for (int i = 2; i <= n; i++)
    {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

