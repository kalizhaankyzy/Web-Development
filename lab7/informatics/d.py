# A
# n = int(input())
# arr = [int(i) for i in input().split()]
# i=0
# for i in range(len(arr)):
#     if(i%2==0):print(arr[i], end=' ')

# B
# n = int(input())
# arr = [int(i) for i in input().split()]
# i=0
# for i in arr:
#     if(i%2==0):
#         print(i, end=' ')

# C
# n = int(input())
# arr = list(map(int,input().strip().split()))[:n]
# cnt=0
# for i in arr:
#     if(i>0):
#         cnt+=1
# print(cnt)

# D
# n = int(input())
# arr = list(map(int,input().strip().split()))[:n]
# cnt=0
# for i in range(1,len(arr)):
#     if(arr[i]>arr[i-1]):cnt+=1
# print(cnt)

# E
# n = int(input())
# arr = list(map(int,input().strip().split()))[:n]
# res=False
# for i in range(1,len(arr)):
#     if((arr[i]>0 and arr[i-1]>0) or (arr[i]<0 and arr[i-1]<0)):res=True
# if(res):print("YES")
# else:print("NO")

# F
# n = int(input())
# arr = list(map(int,input().strip().split()))[:n]
# res=0
# for i in range(1,len(arr)-1):
#     if(arr[i]>arr[i-1] and arr[i]>arr[i+1]):
#         res+=1
# print(res)

# G
# n = int(input())
# arr = list(map(int,input().strip().split()))[:n]
# res=0
# for i in range(1,len(arr)+1):
#     print(arr[len(arr)-i], end=' ')
