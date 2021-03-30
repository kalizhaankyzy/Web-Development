# A
# a=int(input())
# b=int(input())
# for i in range(a,b+1):
#     if(i%2==0):print(i, end=' ')

# B
# a, b, c, d=int(input()), int(input()), int(input()), int(input())
# for i in range(a,b+1):
#     if(i%d==c):print(i, end=' ')

# C
# import math
# a,b=int(input()), int(input())
# for i in range(a,b+1):
#     if(math.sqrt(i) == int(math.sqrt(i))):
#         print(i, end=' ')

# D
# a,b=int(input()), int(input())
# cnt=0
# while(a>0):
#     if(a%10==b):cnt+=1
#     a//=10
# print(cnt)

# E
# a=int(input())
# cnt=0
# while(a>0):
#     cnt+=a%10
#     a//=10
# print(cnt)

# F
# a=int(input())
# cnt=0
# while(a>0):
#     b=a%10
#     a//=10
#     cnt = cnt*10 +b
# print(cnt)

# G
# a=int(input())
# for i in range(2,a+1):
#     if(a%i==0):
#         print(i)
#         break

# H
# a=int(input())
# for i in range(1,a+1):
#     if(a%i==0):
#         print(i, end=' ')

# I
# a=int(input())
# cnt=0
# for i in range(1,a+1):
#     if(a%i==0):
#        cnt+=1
# print(cnt)

# J
# cnt=0
# for i in range(100):
#     cnt+=int(input())
# print(cnt)

# K
# a=int(input())
# cnt=0
# for i in range(a):
#     cnt+=int(input())
# print(cnt)

# L
# a=int(input())
# cnt=0
# i=0
# while(a!=0):
#     cnt += (a%10)*(2**i)
#     a//=10
#     i+=1
# print(cnt)

# M
# a=int(input())
# cnt=0
# for i in range(a):
#     if(int(input())==0):
#         cnt+=1
# print(cnt)