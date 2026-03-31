#A
n = int(input())
count = 0
while n > 0:
    count += 1
    n //= 10
print(count)

#B
n = input()
print(n[::-1])

#C
n = int(input())
s = 0
while n > 0:
    s += n % 10
    n //= 10
print(s)

#D
n = int(input())
max_num = 0
while n > 0:
    max_num = max(max_num, n % 10)
    n //= 10
print(max_num)

#E
a, b = int(input()), int(input())
while b:
    a, b = b, a % b
print(a)