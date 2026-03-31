#A
def sum_two_numbers(a, b):
    return a + b

a, b = map(int, input().split())
print(sum_two_numbers(a, b))


#B
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True
#C
def xor(x: int, y: int) -> int:
    return (x + y) % 2

x, y = map(int, input().split())
print(xor(x, y))



#D
def power(a, b):
    return a ** b

a, b = map(int, input().split())
print(power(a, b))

