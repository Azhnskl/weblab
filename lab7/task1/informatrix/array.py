#A
n = int(input())
arr = list(map(int, input().split()))
print(min(arr))

#B
n = int(input())
arr = list(map(int, input().split()))
print(max(arr))

#C
n = int(input())
arr = list(map(int, input().split()))
print(sum(arr) / n)

#D
n = int(input())
arr = list(map(int, input().split()))
print(sum(1 for x in arr if x % 2 == 0))

#E
n = int(input())
arr = list(map(int, input().split()))
print(*arr[::-1])

#F
n = int(input())
arr = list(map(int, input().split()))
arr.remove(max(arr))
print(max(arr))

#G
n = int(input())
arr = list(map(int, input().split()))
print(*sorted(set(arr)))
