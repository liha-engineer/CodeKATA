using System;
namespace baekjoon {
    public class Program {
        public static void Main(string[] args) {
        string input = Console.ReadLine();
        int a = Int32.Parse(input.Split(" ")[0]);
        int b = Int32.Parse(input.Split(" ")[1]);
        int answer = a-b;
        Console.WriteLine(answer);
        }
    }
}