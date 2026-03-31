#A
n = int(input())
print(sum(range(1, n + 1)))

#B
n = int(input())
fact = 1
for i in range(1, n + 1):
    fact *= i
print(fact)

#C
n = int(input())
print(sum(i ** 2 for i in range(1, n + 1)))

#D
n = int(input())
for i in range(1, 11):
    print(n, "*", i, "=", n * i)

#E
n = int(input())
is_prime = all(n % i != 0 for i in range(2, int(n ** 0.5) + 1)) and n > 1
print("YES" if is_prime else "NO")