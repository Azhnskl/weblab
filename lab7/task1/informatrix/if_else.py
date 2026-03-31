#1
a=int(input())
b=int(input())
if a>b:
    print(a)
else:
    print(b)

#2
year = int(input())
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("YES")
else:
    print("NO")

#3

n = int(input())
if n > 0:
    print("1")
elif n < 0:
    print("-1")
else:
    print("0")

#4

system = int(input())
student_answer = int(input())
if (system == 1 and student_answer == 1) or (system != 1 and student_answer != 1):
    print("YES")
else:
    print("NO")


#5

a=int(input())
b=int(input())
if a>b:
    print(a)
else:
    print(b)